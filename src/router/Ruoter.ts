import { Router } from 'express'; // importing express
import type { Request, Response, NextFunction } from 'express'; // import express types to use it in middleWare
import Arouters from './../router/uilities/sharp'; // import the sharp file

const routers:Router= Router();

// creating a middleWare for filter
const apiMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
): Response<unknown, Record<string, unknown>> | void => {
  // if there missing at any query
  if (!req.query.name || !req.query.height || !req.query.width) {
    res.status(400);
    return res.send(
      'missing query width and height, query is name and width and height   '
    );
  }
  //if the input for the h & w is not a number
  if (isNaN(Number(req.query.height)) || isNaN(Number(req.query.width))) {
    res.status(400);
    return res.send('the width and height must be a numbers');
  }
  next();
};

routers.get('/', apiMiddleWare, Arouters); // call the middleWare local

export default routers;
