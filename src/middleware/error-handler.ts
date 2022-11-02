import { Request, Response, NextFunction } from 'express'

function errorHandler(
   err: any,
   req: Request,
   res: Response,
   next: NextFunction
) {
   switch (true) {
      case err:
      default:
         return res.status(500).json({ message: err.message })
   }
}
export default errorHandler
