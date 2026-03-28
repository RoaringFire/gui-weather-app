import axios from 'axios';

//Get API key from json file
const data = require('./key.json');
const apiKey = data.tfl_key;

//A tfl line (Underground, Overground, Elizabeth line)
class Line {
    constructor(name, priority, enable){
        this.name = name;
        this.status = "Good Service";
        this.priority = priority;
        this.enable = enable;
    }

    //Getters
    getName(){
        return this.name;
    }
    getStatus(){
        return this.status;
    }
    getPriority(){
        return this.priority;
    }
    getEnable(){
        return this.enable;
    }

    //Setters
    setStatus(status){
        this.status = status;
    }
    setPriority(priority){
        this.priority = priority;
    }

}

//Array of lines
const lines = [
    new Line("bakerloo", 0.0, true), //Underground
    new Line("central", 0.0, true),
    new Line("circle", 0.0, true),
    new Line("district", 0.0, true),
    new Line("hammersmith-city", 0.0, true),
    new Line("metropolitan", 0.0, true),
    new Line("northern", 0.0, true),
    new Line("piccadilly", 0.0, true),
    new Line("victoria", 0.0, true),
    new Line("waterloo-city", 0.0, true),
    new Line("elizabeth", 0.0, true), //Elizabeth line
    new Line("liberty", 0.0, true), //Overground
    new Line("lioness", 0.0, true),
    new Line("mildmay", 0.0, true),
    new Line("suffragette", 0.0, true),
    new Line("weaver", 0.0, true),
    new Line("windrush", 0.0, true)
];

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
            if(line.getEnable()){
                //Calls the getLineStatus function to get the status of the line
                line.setStatus(await this.getLineStatus(line.getName()));

                //Changes the line's priority depending on its status
                if(line.getStatus() == "Planned Closure"){
                    line.setPriority(1.0);
                }
                else if(line.getStatus() == "Minor Delays"){
                    line.setPriority(2.0);
                }
                else if(line.getStatus() == "Severe Delays"){
                    line.setPriority(3.0);
                }
                else{
                    line.setPriority(0.0);
                }

                //Puts line in array
                this.output.push(line);
            }
        }

        //Sort the output array by priority
        this.output.sort((a, b) => {
            if (a.getPriority() > b.getPriority()) return -1;
            if (a.getPriority() < b.getPriority()) return 1;
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