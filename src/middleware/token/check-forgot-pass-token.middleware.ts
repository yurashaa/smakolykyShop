import {NextFunction, Response} from 'express';
import {IRequestExtended} from '../../models';
import {checkTokenMiddleware} from './check-token.middleware';
import {ActionEnum} from '../../constants';

export const checkForgotPassTokenMiddleware = (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  return checkTokenMiddleware(req, res, next, ActionEnum.FORGOT_PASSWORD);
};
