import { IdbConfig } from '../types/IdbConfig'

export const dbConfig: IdbConfig = {
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   username: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: process.env.DB_NAME,
}

export const jwtSecret = process.env.ACCESS_TOKEN!

export const userVerifyTokenSecret = process.env.USER_VERIFY_TOKEN_SECRET!

export const __prod__ = process.env.NODE_ENV === 'production'
export const __dev__ = process.env.NODE_ENV === 'development'

export const transporterEmailService = process.env.EMAIL_SERVICE
export const transporterEmailUser = process.env.EMAIL_USERNAME
export const transporterEmailPassword = process.env.EMAIL_PASSWORD
