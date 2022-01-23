import { Router } from 'express';
import { getSurvey, getSurveys } from './Surveys';
import { addResponse } from './Responses'
import { getCounters, updateCounter } from './Counters'


// Survey routes
const surveyRouter = Router();
surveyRouter.get('/', getSurveys);
surveyRouter.get('/:id', getSurvey);

// Response routes
const responseRouter = Router();
responseRouter.post('/', addResponse);

// Counters routes
const counterRouter = Router();
counterRouter.get('/', getCounters);
counterRouter.patch('/', updateCounter);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/surveys', surveyRouter);
baseRouter.use('/responses', responseRouter);
baseRouter.use('/counters', counterRouter);
export default baseRouter;
