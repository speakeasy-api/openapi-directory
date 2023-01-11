"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEmailHistoryVoType = void 0;
var utils_1 = require("../../../internal/utils");
var GetEmailHistoryVoType = /** @class */ (function (_super) {
    __extends(GetEmailHistoryVoType, _super);
    function GetEmailHistoryVoType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bcc" }),
        __metadata("design:type", String)
    ], GetEmailHistoryVoType.prototype, "bcc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cc" }),
        __metadata("design:type", String)
    ], GetEmailHistoryVoType.prototype, "cc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], GetEmailHistoryVoType.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventCategory" }),
        __metadata("design:type", String)
    ], GetEmailHistoryVoType.prototype, "eventCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromEmail" }),
        __metadata("design:type", String)
    ], GetEmailHistoryVoType.prototype, "fromEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notification" }),
        __metadata("design:type", String)
    ], GetEmailHistoryVoType.prototype, "notification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replyTo" }),
        __metadata("design:type", String)
    ], GetEmailHistoryVoType.prototype, "replyTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetEmailHistoryVoType.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sendTime" }),
        __metadata("design:type", String)
    ], GetEmailHistoryVoType.prototype, "sendTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], GetEmailHistoryVoType.prototype, "subject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toEmail" }),
        __metadata("design:type", String)
    ], GetEmailHistoryVoType.prototype, "toEmail", void 0);
    return GetEmailHistoryVoType;
}(utils_1.SpeakeasyBase));
exports.GetEmailHistoryVoType = GetEmailHistoryVoType;
