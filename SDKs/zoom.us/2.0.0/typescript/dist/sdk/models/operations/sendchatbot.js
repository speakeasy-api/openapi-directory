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
exports.SendchatbotResponse = exports.SendchatbotRequest = exports.SendchatbotSecurity = exports.SendchatbotRequests = exports.SendchatbotMultipartFormData = exports.SendchatbotApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SendchatbotApplicationJson = /** @class */ (function (_super) {
    __extends(SendchatbotApplicationJson, _super);
    function SendchatbotApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], SendchatbotApplicationJson.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", Object)
    ], SendchatbotApplicationJson.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_markdown_support" }),
        __metadata("design:type", Boolean)
    ], SendchatbotApplicationJson.prototype, "isMarkdownSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=robot_jid" }),
        __metadata("design:type", String)
    ], SendchatbotApplicationJson.prototype, "robotJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to_jid" }),
        __metadata("design:type", String)
    ], SendchatbotApplicationJson.prototype, "toJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_jid" }),
        __metadata("design:type", String)
    ], SendchatbotApplicationJson.prototype, "userJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visible_to_user" }),
        __metadata("design:type", String)
    ], SendchatbotApplicationJson.prototype, "visibleToUser", void 0);
    return SendchatbotApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SendchatbotApplicationJson = SendchatbotApplicationJson;
var SendchatbotMultipartFormData = /** @class */ (function (_super) {
    __extends(SendchatbotMultipartFormData, _super);
    function SendchatbotMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=account_id" }),
        __metadata("design:type", String)
    ], SendchatbotMultipartFormData.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=content;json=true" }),
        __metadata("design:type", Object)
    ], SendchatbotMultipartFormData.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=is_markdown_support" }),
        __metadata("design:type", Boolean)
    ], SendchatbotMultipartFormData.prototype, "isMarkdownSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=robot_jid" }),
        __metadata("design:type", String)
    ], SendchatbotMultipartFormData.prototype, "robotJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=to_jid" }),
        __metadata("design:type", String)
    ], SendchatbotMultipartFormData.prototype, "toJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=user_jid" }),
        __metadata("design:type", String)
    ], SendchatbotMultipartFormData.prototype, "userJid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=visible_to_user" }),
        __metadata("design:type", String)
    ], SendchatbotMultipartFormData.prototype, "visibleToUser", void 0);
    return SendchatbotMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.SendchatbotMultipartFormData = SendchatbotMultipartFormData;
var SendchatbotRequests = /** @class */ (function (_super) {
    __extends(SendchatbotRequests, _super);
    function SendchatbotRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SendchatbotApplicationJson)
    ], SendchatbotRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SendchatbotMultipartFormData)
    ], SendchatbotRequests.prototype, "object1", void 0);
    return SendchatbotRequests;
}(utils_1.SpeakeasyBase));
exports.SendchatbotRequests = SendchatbotRequests;
var SendchatbotSecurity = /** @class */ (function (_super) {
    __extends(SendchatbotSecurity, _super);
    function SendchatbotSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeClientCredentials)
    ], SendchatbotSecurity.prototype, "clientCredentials", void 0);
    return SendchatbotSecurity;
}(utils_1.SpeakeasyBase));
exports.SendchatbotSecurity = SendchatbotSecurity;
var SendchatbotRequest = /** @class */ (function (_super) {
    __extends(SendchatbotRequest, _super);
    function SendchatbotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendchatbotRequests)
    ], SendchatbotRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendchatbotSecurity)
    ], SendchatbotRequest.prototype, "security", void 0);
    return SendchatbotRequest;
}(utils_1.SpeakeasyBase));
exports.SendchatbotRequest = SendchatbotRequest;
var SendchatbotResponse = /** @class */ (function (_super) {
    __extends(SendchatbotResponse, _super);
    function SendchatbotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SendchatbotResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SendchatbotResponse.prototype, "statusCode", void 0);
    return SendchatbotResponse;
}(utils_1.SpeakeasyBase));
exports.SendchatbotResponse = SendchatbotResponse;
