


interface IContent {
    response: string;
    counter: number;
}
interface ICounters {
       id: number;
       question: string;
       content: IContent[];
}

export interface ISurveyCounter {
    counters: ICounters[];
}

class SurveyCounter implements ISurveyCounter{

    public counters: ICounters[];

    constructor(idOrCounter: number | ISurveyCounter, question?: string, content?: IContent[]){
        if (typeof idOrCounter === 'number') {  
   
            this.counters = [];
        }else{
      
            this.counters = idOrCounter.counters;
        }
            
    }
}


export default SurveyCounter