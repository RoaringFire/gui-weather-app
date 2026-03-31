import axios from 'axios';

//Get API key from json file
const data = require('./key.json');
const apiKey = data.tfl_key;

//Get lines from json file
const lineFile = require("./lines.json");
const lines = lineFile.lines;

//Class that stores an array of lines that should be outputted
class TflStatus {
    output = [];

    constructor(outputSize){
        this.outputSize = outputSize; //Sets size of the output array
    }

    //Calculate what lines should be in the output array
    async calculateOutput(){
        this.output = [];

        for (const line of lines){
            //Only consider lines which have "enable" set to true
            if(line.enable){
                //Calls the getLineStatus function to get the status of the line
                line.status = await this.getLineStatus(line.name);

                //Changes the line's priority depending on its status
                if(line.status == "Planned Closure"){
                    line.priority = 1.0;
                }
                else if(line.status == "Minor Delays"){
                    line.priority = 2.0;
                }
                else if(line.status == "Severe Delays"){
                    line.priority = 3.0;
                }
                else{
                    line.priority = 0.0;
                }

                //Puts line in array
                this.output.push(line);
            }
        }

        //Sort the output array by priority
        this.output.sort((a, b) => {
            if (a.priority > b.priority) return -1;
            if (a.priority < b.priority) return 1;
            return 0;
        });

        //Reduce output array to determined size
        while (this.output.length > this.outputSize) {
            this.output.pop();
        }
    }

    //Returns the status of a particular line using the tfl api
    async getLineStatus(lineName){
        const response = await axios.get('https://api.tfl.gov.uk/Line/'+ lineName +'/Status' , {
            params: {
                app_key: apiKey
            }
        });

        return response.data[0].lineStatuses[0].statusSeverityDescription;
    }

    //Getters
    getOutput(){
        return this.output;
    }
}

export default TflStatus;