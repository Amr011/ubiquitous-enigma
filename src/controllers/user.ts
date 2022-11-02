import { NextFunction, Request, Response } from 'express'

// Controller Layer
export default class userController {
   // get many users data controller function
   public getManyUser = async function (
      req: Request,
      res: Response,
      _next: NextFunction
   ) {
      return res.status(200).json({
         success: true,
         message: 'Getting Many Users Data ...',
      })
   }
}
