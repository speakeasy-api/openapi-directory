"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./getfindinteractions"), exports);
__exportStar(require("./getfindpathwaysbyliterature"), exports);
__exportStar(require("./getfindpathwaysbytext"), exports);
__exportStar(require("./getfindpathwaysbyxref"), exports);
__exportStar(require("./getgetcoloredpathway"), exports);
__exportStar(require("./getgetcurationtaghistory"), exports);
__exportStar(require("./getgetcurationtags"), exports);
__exportStar(require("./getgetcurationtagsbyname"), exports);
__exportStar(require("./getgetontologytermsbypathway"), exports);
__exportStar(require("./getgetpathway"), exports);
__exportStar(require("./getgetpathwayas"), exports);
__exportStar(require("./getgetpathwayhistory"), exports);
__exportStar(require("./getgetpathwayinfo"), exports);
__exportStar(require("./getgetpathwaysbyontologyterm"), exports);
__exportStar(require("./getgetpathwaysbyparentontologyterm"), exports);
__exportStar(require("./getgetrecentchanges"), exports);
__exportStar(require("./getgetuserbyorcid"), exports);
__exportStar(require("./getgetxreflist"), exports);
__exportStar(require("./getlistorganisms"), exports);
__exportStar(require("./getlistpathways"), exports);
__exportStar(require("./getlogin"), exports);
__exportStar(require("./getremovecurationtag"), exports);
__exportStar(require("./getremoveontologytag"), exports);
__exportStar(require("./getsavecurationtag"), exports);
__exportStar(require("./getsaveontologytag"), exports);
__exportStar(require("./getupdatepathway"), exports);
__exportStar(require("./postcreatepathway"), exports);
