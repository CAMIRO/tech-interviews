

interface IContent {
    response: string;
    counter: number;
}
export interface ISurveyCounter {
       id: number;
       question: string;
       content: IContent[];
}

class SurveyCounter implements ISurveyCounter{
    public id: number;
    public question: string;
    public content: IContent[];

    constructor(idOrCounter: number | ISurveyCounter, question?: string, content?: IContent[]){
        if (typeof idOrCounter === 'number') {  
            this.id = idOrCounter || -1;
            this.question = question || "";
            this.content = content || [];
        }else{
            this.id = idOrCounter.id;
            this.question = idOrCounter.question;
            this.content = idOrCounter.content;
        }
            
    }
}


export default SurveyCounter