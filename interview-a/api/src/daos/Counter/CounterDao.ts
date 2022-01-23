import { ISurveyCounter } from '@entities/SurveyCounter';


export interface ICounterDao {
    getOne: (id: number) => Promise<ISurveyCounter | null>;
    getAll: () => Promise<ISurveyCounter[]>;
    add: (SurveyCounter: ISurveyCounter) => Promise<void>;
    update: (SurveyCounter: ISurveyCounter) => Promise<void>;
    delete: (id: number) => Promise<void>;
}
