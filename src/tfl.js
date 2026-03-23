import axios from 'axios';

const OUTPUT_SIZE = 5;

const data = require('./key.json');
const apiKey = data.tfl_key;

const UndergroundLines = {
    BAKERLOO: 'bakerloo',
    CENTRAL: 'central',
    CIRCLE: 'circle',
    DISTRICT: 'district',
    HAMMERSMITH_AND_CITY: 'hammersmith-city',
    JUBILEE: 'jubilee',
    METROPOLITAN: 'metropolitan',
    NORTHERN: 'northern',
    PICCADILLY: 'piccadilly',
    VICTORIA: 'victoria',
    WATERLOO_AND_CITY: 'waterloo-city'
};

//Gives a list of important line statuses.
class TflStatus {
    outputName = [];
    outputStatus = [];

    //fills the arrays for line names and line statuses that should be outputted
    async calculateOutput(){
        this.outputName = [];
        this.outputStatus = [];

        for (const element of Object.values(UndergroundLines)){
            this.outputName.push(element);
            this.outputStatus.push(await this.getLineStatus(element));
        }

        //Sort list

        while (this.outputName.length > OUTPUT_SIZE) {
            this.outputName.pop();
        }
        while (this.outputStatus.length > OUTPUT_SIZE) {
            this.outputStatus.pop();
        }
    }

    //Returns the status of a particular line
    async getLineStatus(undergroundLines){
        const response = await axios.get('https://api.tfl.gov.uk/Line/'+ undergroundLines +'/Status' , {
            params: {
                app_key: apiKey
            }
        });

        return response.data[0].lineStatuses[0].statusSeverityDescription;
    }

    //Getters
    async getOutputName(){
        return this.outputName;
    }

    async getOutputStatus(){
        return this.outputStatus;
    }
}

export default TflStatus;