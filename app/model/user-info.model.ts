import { State, NowStatus} from './Enums';
/* 
*用户登录model
*/
export class UserLogin {
    UserName: string;
    PassWord: string;
    ValidateCode: string;
}

export class UserInfo_Model {
    UserId: string;
    UserName: string;
    NickName: string;
    Introduce: string;
    PassWord: string;
    AccountPicture: string;
    AddTime: string;
    EditTime: string;
    NowStatus?: NowStatus;
    State?: State;

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
export class UserInfoCondition {
    UserId: string;
    UserName: string;
    NickName: string;
    CreationTime: string;
    EditTime: string;
    Status: number;
    ArticleId: string;
    PictureId: string;
    PageIndex?: number;
}

export class AdminEditUserInfo {
    UserId: string;
    UserName: string;
    NickName: string;
    AccountPicture: string;
    Password: string;
    Introduce: string;
}

export class Coord {
    x: number;
    y: number;
}