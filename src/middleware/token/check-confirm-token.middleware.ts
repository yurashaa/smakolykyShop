import {IRequestExtended} from '../../models';
import {NextFunction, Response} from 'express';
import {checkTokenMiddleware} from './check-token.middleware';
import {ActionEnum} from '../../constants';

export const checkConfirmTokenMiddleware = (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  return checkTokenMiddleware(req, res, next, ActionEnum.USER_REGISTER);
};
