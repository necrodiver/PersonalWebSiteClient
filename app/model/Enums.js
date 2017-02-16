"use strict";
/*
* 账号状态
*/
var State;
(function (State) {
    State[State["\u51BB\u7ED3"] = -100] = "\u51BB\u7ED3";
    State[State["\u6B63\u5E38"] = 0] = "\u6B63\u5E38";
    State[State["\u7981\u6B62\u4FEE\u6539\u8D26\u53F7"] = 1] = "\u7981\u6B62\u4FEE\u6539\u8D26\u53F7";
})(State = exports.State || (exports.State = {}));
/*
* 用户登录状态
*/
var NowStatus;
(function (NowStatus) {
    NowStatus[NowStatus["\u672A\u767B\u5F55"] = 0] = "\u672A\u767B\u5F55";
    NowStatus[NowStatus["\u5DF2\u767B\u5F55"] = 1] = "\u5DF2\u767B\u5F55";
})(NowStatus = exports.NowStatus || (exports.NowStatus = {}));
/*
* 文章/图片 状态
*/
var WorkState;
(function (WorkState) {
    WorkState[WorkState["\u8349\u7A3F"] = 0] = "\u8349\u7A3F";
    WorkState[WorkState["\u5DF2\u53D1\u5E03"] = 1] = "\u5DF2\u53D1\u5E03";
})(WorkState = exports.WorkState || (exports.WorkState = {}));
/*
*   管理等级
*/
var AdminLevel;
(function (AdminLevel) {
    AdminLevel[AdminLevel["\u6700\u9AD8\u6743\u9650"] = -100] = "\u6700\u9AD8\u6743\u9650";
    AdminLevel[AdminLevel["\u7B2C\u4E00\u6743\u9650"] = 1] = "\u7B2C\u4E00\u6743\u9650";
})(AdminLevel = exports.AdminLevel || (exports.AdminLevel = {}));
//# sourceMappingURL=Enums.js.map