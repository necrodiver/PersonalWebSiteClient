export class UserLogin {
    UserName: string;
    PassWord: string;
    ValidateCode: string;
}
export class Coord {
    x: number;
    y: number;
}
export class UserInfo_Model {
    UserId: string;
    UserName: string;
    NickName: string;
    Introduce: string;
    PassWord: string;
}
export class RetrievePwdStart {
    Email: string;
    ValidateCode: string;
}
export class ResetPwd {
    Email: string;
    ValidateCode: string;
    Password: string;
}
export class UserInfoCondition{
    UserId:string;
    UserName:string;
    NickName:string;
    CreationTime:string;
    EditTime:string;
    Status:number;
    ArticleId:string;
    PictureId:string;
    PageIndex?:number;
}