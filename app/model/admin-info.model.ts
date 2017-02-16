import { AdminLevel } from './Enums';
export class AdminInfo_Model {
    UserName: string;
    AddTime?: string;
    EditTime?: string;
    Level?: AdminLevel;
}
export class AdminLogin {
    UserName: string;
    PassWord: string;
    ValidateCode: string;
}
export class AdminInfoCondition {
    UserName: string;
    AddTime?: string;
    EditTime?: string;
    Level?: AdminLevel;
    PageIndex?: string;
}
export class EditAdmin {
    Name: string;
    Pwd: string;
    Level: AdminLevel;
}