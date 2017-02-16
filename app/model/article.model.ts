import { WorkState } from './Enums';
export class Article_Model {
    ArticleId: string;
    ArticleName: string;
    ArticleContent: string;
    ArticleSortId: number;
    ArticleState: WorkState;
    IsExpose: number;
}
export class ArticleCondition_Model {
    NickName: string;
    ArticleSortId?: number;

}