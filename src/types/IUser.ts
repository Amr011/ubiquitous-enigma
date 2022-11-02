export interface IUserRegisterRequestBody {
   firstname: string
   lastname: string
   email: string
   password: string
}

export interface IUserLoginRequestBody {
   email: string
   password: string
}
