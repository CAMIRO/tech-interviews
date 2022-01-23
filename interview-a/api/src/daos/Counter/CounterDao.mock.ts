import { ISurveyCounter } from '@entities/SurveyCounter';
import MockDaoMock from '../MockDb/MockDao.mock';
import { getRandomInt } from '@shared/functions';
import { ICounterDao } from './CounterDao';



class CounterDao extends MockDaoMock implements ICounterDao {

    public async getOne(id: number): Promise<ISurveyCounter | null> {
        const db = await super.openDb();
        for (const counter of db.counters) {
            if (counter.id === id) {
                return counter;
            }
        }
        return null;
    }

    public async getAll(): Promise<ISurveyCounter[]> {
        const db = await super.openDb();
        return db.counters;
    }

     public async add(Counter: ISurveyCounter): Promise<void> {
        const db = await super.openDb();
        Counter.id = getRandomInt();
        db.counters.push(Counter);
        await super.saveDb(db);
    }




    public async update(Counter: ISurveyCounter): Promise<void> {
        const db = await super.openDb();
        const idNumber = Number(Counter.id);
        const counterResponse = Counter.content[0].response;
        const questionObj =  db.counters[idNumber - 1]

             if (questionObj) {     
                const answers = db.counters[idNumber - 1].content


                const answer = answers.find(
                    (answer: any) => answer.response === counterResponse as any );

                if(answer){
                    answer.counter = answer.counter + 1;
                    console.log(answer.counter);
                    await super.saveDb(db);
                    return ;

                } else {
                        throw new Error('response not found');
                    } 
             } else {
                 throw new Error('Survey not found');
             }
     
    }

     public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.counters.length; i++) {
            if (db.counters[i].id === id) {
                db.counters.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Survey not found');
    }




    
}

export default CounterDao;