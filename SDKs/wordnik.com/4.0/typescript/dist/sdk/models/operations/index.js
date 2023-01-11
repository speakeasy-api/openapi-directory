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
__exportStar(require("./addwordstowordlist"), exports);
__exportStar(require("./authenticate"), exports);
__exportStar(require("./authenticatepost"), exports);
__exportStar(require("./createwordlist"), exports);
__exportStar(require("./deletewordlist"), exports);
__exportStar(require("./deletewordsfromwordlist"), exports);
__exportStar(require("./getapitokenstatus"), exports);
__exportStar(require("./getaudio"), exports);
__exportStar(require("./getdefinitions"), exports);
__exportStar(require("./getetymologies"), exports);
__exportStar(require("./getexamples"), exports);
__exportStar(require("./gethyphenation"), exports);
__exportStar(require("./getloggedinuser"), exports);
__exportStar(require("./getphrases"), exports);
__exportStar(require("./getrandomword"), exports);
__exportStar(require("./getrandomwords"), exports);
__exportStar(require("./getrelatedwords"), exports);
__exportStar(require("./getscrabblescore"), exports);
__exportStar(require("./gettextpronunciations"), exports);
__exportStar(require("./gettopexample"), exports);
__exportStar(require("./getwordfrequency"), exports);
__exportStar(require("./getwordlistbypermalink"), exports);
__exportStar(require("./getwordlistsforloggedinuser"), exports);
__exportStar(require("./getwordlistwords"), exports);
__exportStar(require("./getwordoftheday"), exports);
__exportStar(require("./reversedictionary"), exports);
__exportStar(require("./searchwords"), exports);
__exportStar(require("./updatewordlist"), exports);
