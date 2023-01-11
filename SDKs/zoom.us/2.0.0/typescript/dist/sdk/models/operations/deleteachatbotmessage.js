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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAChatbotMessageResponse = exports.DeleteAChatbotMessageRequest = exports.DeleteAChatbotMessage200ApplicationJson = exports.DeleteAChatbotMessageSecurity = exports.DeleteAChatbotMessageRequests = exports.DeleteAChatbotMessageMultipartFormData = exports.DeleteAChatbotMessageApplicationJson = exports.DeleteAChatbotMessagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteAChatbotMessagePathParams = /** @class */ (function (_super) {
    __extends(DeleteAChatbotMessagePathParams, _super);
    function DeleteAChatbotMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=message_id" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessagePathParams.prototype, "messageId", void 0);
    return DeleteAChatbotMessagePathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteAChatbotMessagePathParams = DeleteAChatbotMessagePathParams;
var DeleteAChatbotMessageApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAChatbotMessageApplicationJson, _super);
    function DeleteAChatbotMessageApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessageApplicationJson.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=robot_jid" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessageApplicationJson.prototype, "robotJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_jid" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessageApplicationJson.prototype, "userJid", void 0);
    return DeleteAChatbotMessageApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteAChatbotMessageApplicationJson = DeleteAChatbotMessageApplicationJson;
var DeleteAChatbotMessageMultipartFormData = /** @class */ (function (_super) {
    __extends(DeleteAChatbotMessageMultipartFormData, _super);
    function DeleteAChatbotMessageMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=account_id" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessageMultipartFormData.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=robot_jid" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessageMultipartFormData.prototype, "robotJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=user_jid" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessageMultipartFormData.prototype, "userJid", void 0);
    return DeleteAChatbotMessageMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.DeleteAChatbotMessageMultipartFormData = DeleteAChatbotMessageMultipartFormData;
var DeleteAChatbotMessageRequests = /** @class */ (function (_super) {
    __extends(DeleteAChatbotMessageRequests, _super);
    function DeleteAChatbotMessageRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeleteAChatbotMessageApplicationJson)
    ], DeleteAChatbotMessageRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", DeleteAChatbotMessageMultipartFormData)
    ], DeleteAChatbotMessageRequests.prototype, "object1", void 0);
    return DeleteAChatbotMessageRequests;
}(utils_1.SpeakeasyBase));
exports.DeleteAChatbotMessageRequests = DeleteAChatbotMessageRequests;
var DeleteAChatbotMessageSecurity = /** @class */ (function (_super) {
    __extends(DeleteAChatbotMessageSecurity, _super);
    function DeleteAChatbotMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeClientCredentials)
    ], DeleteAChatbotMessageSecurity.prototype, "clientCredentials", void 0);
    return DeleteAChatbotMessageSecurity;
}(utils_1.SpeakeasyBase));
exports.DeleteAChatbotMessageSecurity = DeleteAChatbotMessageSecurity;
var DeleteAChatbotMessage200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAChatbotMessage200ApplicationJson, _super);
    function DeleteAChatbotMessage200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_id" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessage200ApplicationJson.prototype, "messageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=robot_jid" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessage200ApplicationJson.prototype, "robotJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sent_time" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessage200ApplicationJson.prototype, "sentTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to_jid" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessage200ApplicationJson.prototype, "toJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_jid" }),
        __metadata("design:type", String)
    ], DeleteAChatbotMessage200ApplicationJson.prototype, "userJid", void 0);
    return DeleteAChatbotMessage200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteAChatbotMessage200ApplicationJson = DeleteAChatbotMessage200ApplicationJson;
var DeleteAChatbotMessageRequest = /** @class */ (function (_super) {
    __extends(DeleteAChatbotMessageRequest, _super);
    function DeleteAChatbotMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteAChatbotMessagePathParams)
    ], DeleteAChatbotMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteAChatbotMessageRequests)
    ], DeleteAChatbotMessageRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteAChatbotMessageSecurity)
    ], DeleteAChatbotMessageRequest.prototype, "security", void 0);
    return DeleteAChatbotMessageRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteAChatbotMessageRequest = DeleteAChatbotMessageRequest;
var DeleteAChatbotMessageResponse = /** @class */ (function (_super) {
    __extends(DeleteAChatbotMessageResponse, _super);
    function DeleteAChatbotMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DeleteAChatbotMessageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteAChatbotMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteAChatbotMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteAChatbotMessage200ApplicationJson)
    ], DeleteAChatbotMessageResponse.prototype, "deleteAChatbotMessage200ApplicationJSONObject", void 0);
    return DeleteAChatbotMessageResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteAChatbotMessageResponse = DeleteAChatbotMessageResponse;
