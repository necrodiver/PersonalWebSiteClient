/*
* 账号状态
*/
export enum State {
    冻结 = -100,
    正常 = 0,
    禁止修改账号 = 1
}
/*
* 用户登录状态
*/
export enum NowStatus {
    未登录 = 0,
    已登录 = 1
}
/*
* 文章/图片 状态
*/
export enum WorkState {
    草稿 = 0,
    已发布 = 1
}
/*
*   管理等级
*/
export enum AdminLevel {
    最高权限 = -100,
    第一权限 = 1
}