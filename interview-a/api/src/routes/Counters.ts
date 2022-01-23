import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import CounterDao from '@daos/Counter/CounterDao.mock';
import { paramMissingError } from '@shared/constants';

const counterDao = new CounterDao();
const { NOT_FOUND, BAD_REQUEST, OK } = StatusCodes;

/**
 * Get all counters.
 *
 * @param req The Express Request.
 * @param res The Express Response.
 * @returns
 *   On success returns the survey as JSON `{"survey": {...}}`.
 *   If the counter ID isn't found, returns a 404 with an empty body.
 */

export async function getCounters(req: Request, res: Response) {
    const counters = await counterDao.getAll();
    if (counters) {
        return res.status(OK)
                  .json({counters});
    } else {
        return res.status(NOT_FOUND).end();
    }
}


/**
 * Update one counter by id and answer.
 *
 * @param req The Express Request.
 * @param res The Express Response.
 * @returns
 *   On success increments the counter list as JSON 
 `{ "id": "1", "content": [{ "response": "3" }]}`.
 *   If the counter ID or response aren't found, returns a 404 with an empty body.
 */


export async function updateCounter(req: Request, res: Response) {
    const reqBody = req.body;
    if (!reqBody) {
        return res.status(BAD_REQUEST)
                  .json({error: paramMissingError});
    }
    await counterDao.update(reqBody);
    return res.status(OK).end();

}
