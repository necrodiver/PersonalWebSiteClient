import { WorkState } from './Enums';
export class Picture_Model {
    PictureId: string;
    PictureName: string;
    PictureSortId: number;
    PictureUrl: string;
    PictureExplain: string;
    ReleaseTime: string;
    IsExpose: number;
    PictureState: WorkState
}
export class PictureCondition_Model {
    NickName: string;
    PictureSortId?: number;
    PictureName: string;
    FirstTime: string;
    LastTime: string;
    PageIndex?: number;
}