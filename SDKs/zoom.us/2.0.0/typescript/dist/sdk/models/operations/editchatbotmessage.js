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
exports.EditChatbotMessageResponse = exports.EditChatbotMessageRequest = exports.EditChatbotMessage200ApplicationJson = exports.EditChatbotMessageSecurity = exports.EditChatbotMessageRequests = exports.EditChatbotMessageMultipartFormData = exports.EditChatbotMessageApplicationJson = exports.EditChatbotMessagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EditChatbotMessagePathParams = /** @class */ (function (_super) {
    __extends(EditChatbotMessagePathParams, _super);
    function EditChatbotMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=message_id" }),
        __metadata("design:type", String)
    ], EditChatbotMessagePathParams.prototype, "messageId", void 0);
    return EditChatbotMessagePathParams;
}(utils_1.SpeakeasyBase));
exports.EditChatbotMessagePathParams = EditChatbotMessagePathParams;
var EditChatbotMessageApplicationJson = /** @class */ (function (_super) {
    __extends(EditChatbotMessageApplicationJson, _super);
    function EditChatbotMessageApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], EditChatbotMessageApplicationJson.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", Object)
    ], EditChatbotMessageApplicationJson.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_markdown_support" }),
        __metadata("design:type", Boolean)
    ], EditChatbotMessageApplicationJson.prototype, "isMarkdownSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=robot_jid" }),
        __metadata("design:type", String)
    ], EditChatbotMessageApplicationJson.prototype, "robotJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_jid" }),
        __metadata("design:type", String)
    ], EditChatbotMessageApplicationJson.prototype, "userJid", void 0);
    return EditChatbotMessageApplicationJson;
}(utils_1.SpeakeasyBase));
exports.EditChatbotMessageApplicationJson = EditChatbotMessageApplicationJson;
var EditChatbotMessageMultipartFormData = /** @class */ (function (_super) {
    __extends(EditChatbotMessageMultipartFormData, _super);
    function EditChatbotMessageMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=account_id" }),
        __metadata("design:type", String)
    ], EditChatbotMessageMultipartFormData.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=content;json=true" }),
        __metadata("design:type", Object)
    ], EditChatbotMessageMultipartFormData.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=is_markdown_support" }),
        __metadata("design:type", Boolean)
    ], EditChatbotMessageMultipartFormData.prototype, "isMarkdownSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=robot_jid" }),
        __metadata("design:type", String)
    ], EditChatbotMessageMultipartFormData.prototype, "robotJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=user_jid" }),
        __metadata("design:type", String)
    ], EditChatbotMessageMultipartFormData.prototype, "userJid", void 0);
    return EditChatbotMessageMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.EditChatbotMessageMultipartFormData = EditChatbotMessageMultipartFormData;
var EditChatbotMessageRequests = /** @class */ (function (_super) {
    __extends(EditChatbotMessageRequests, _super);
    function EditChatbotMessageRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EditChatbotMessageApplicationJson)
    ], EditChatbotMessageRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", EditChatbotMessageMultipartFormData)
    ], EditChatbotMessageRequests.prototype, "object1", void 0);
    return EditChatbotMessageRequests;
}(utils_1.SpeakeasyBase));
exports.EditChatbotMessageRequests = EditChatbotMessageRequests;
var EditChatbotMessageSecurity = /** @class */ (function (_super) {
    __extends(EditChatbotMessageSecurity, _super);
    function EditChatbotMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeClientCredentials)
    ], EditChatbotMessageSecurity.prototype, "clientCredentials", void 0);
    return EditChatbotMessageSecurity;
}(utils_1.SpeakeasyBase));
exports.EditChatbotMessageSecurity = EditChatbotMessageSecurity;
var EditChatbotMessage200ApplicationJson = /** @class */ (function (_super) {
    __extends(EditChatbotMessage200ApplicationJson, _super);
    function EditChatbotMessage200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_id" }),
        __metadata("design:type", String)
    ], EditChatbotMessage200ApplicationJson.prototype, "messageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=robot_jid" }),
        __metadata("design:type", String)
    ], EditChatbotMessage200ApplicationJson.prototype, "robotJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sent_time" }),
        __metadata("design:type", Date)
    ], EditChatbotMessage200ApplicationJson.prototype, "sentTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to_jid" }),
        __metadata("design:type", String)
    ], EditChatbotMessage200ApplicationJson.prototype, "toJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_jid" }),
        __metadata("design:type", String)
    ], EditChatbotMessage200ApplicationJson.prototype, "userJid", void 0);
    return EditChatbotMessage200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.EditChatbotMessage200ApplicationJson = EditChatbotMessage200ApplicationJson;
var EditChatbotMessageRequest = /** @class */ (function (_super) {
    __extends(EditChatbotMessageRequest, _super);
    function EditChatbotMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EditChatbotMessagePathParams)
    ], EditChatbotMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EditChatbotMessageRequests)
    ], EditChatbotMessageRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EditChatbotMessageSecurity)
    ], EditChatbotMessageRequest.prototype, "security", void 0);
    return EditChatbotMessageRequest;
}(utils_1.SpeakeasyBase));
exports.EditChatbotMessageRequest = EditChatbotMessageRequest;
var EditChatbotMessageResponse = /** @class */ (function (_super) {
    __extends(EditChatbotMessageResponse, _super);
    function EditChatbotMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], EditChatbotMessageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EditChatbotMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EditChatbotMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EditChatbotMessage200ApplicationJson)
    ], EditChatbotMessageResponse.prototype, "editChatbotMessage200ApplicationJSONObject", void 0);
    return EditChatbotMessageResponse;
}(utils_1.SpeakeasyBase));
exports.EditChatbotMessageResponse = EditChatbotMessageResponse;
