import axios from 'axios';

const data = require('./key.json');
const apiKey = data.tfl_key;

//A tfl line (Underground, Overground, Bus)
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

//Outputs an array of the lines that should be displayed
class TflStatus {
    output = [];

    constructor(outputSize){
        this.outputSize = outputSize;
    }

    //fills the arrays for line names and line statuses that should be outputted
    async calculateOutput(){
        this.output = [];

        for (const element of lines){
            if(element.getEnable()){
                element.setStatus(await this.getLineStatus(element.getName()));

                if(element.getStatus() == "Planned Closure"){
                    element.setPriority(1.0);
                }
                else if(element.getStatus() == "Minor Delays"){
                    element.setPriority(2.0);
                }
                else if(element.getStatus() == "Severe Delays"){
                    element.setPriority(3.0);
                }

                this.output.push(element);
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

    //Returns the status of a particular line
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