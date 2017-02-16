export class UserComment_Model {
    CommentId: string;
    ReText: string;
    WorkId: string;
    UserId: string;
    CommentParentId: string;
    CommentTime: string;
    State: number;
    ChildUserComment: UserComment_Model;
}
export class UserCommentCondition_Model {
    WorkId: string;
    PageIndex: number;
}