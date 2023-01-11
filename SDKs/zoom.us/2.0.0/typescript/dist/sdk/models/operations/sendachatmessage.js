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
exports.SendaChatMessageResponse = exports.SendaChatMessageRequest = exports.SendaChatMessage201ApplicationJson = exports.SendaChatMessageSecurity = exports.SendaChatMessageRequests = exports.SendaChatMessageMultipartFormData1 = exports.SendaChatMessageMultipartFormDataAtItems = exports.SendaChatMessageApplicationJson = exports.SendaChatMessageApplicationJsonAtItems = exports.SendaChatMessagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SendaChatMessagePathParams = /** @class */ (function (_super) {
    __extends(SendaChatMessagePathParams, _super);
    function SendaChatMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], SendaChatMessagePathParams.prototype, "userId", void 0);
    return SendaChatMessagePathParams;
}(utils_1.SpeakeasyBase));
exports.SendaChatMessagePathParams = SendaChatMessagePathParams;
var SendaChatMessageApplicationJsonAtItems = /** @class */ (function (_super) {
    __extends(SendaChatMessageApplicationJsonAtItems, _super);
    function SendaChatMessageApplicationJsonAtItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=at_contact" }),
        __metadata("design:type", String)
    ], SendaChatMessageApplicationJsonAtItems.prototype, "atContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=at_type" }),
        __metadata("design:type", Number)
    ], SendaChatMessageApplicationJsonAtItems.prototype, "atType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_position" }),
        __metadata("design:type", Number)
    ], SendaChatMessageApplicationJsonAtItems.prototype, "endPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_position" }),
        __metadata("design:type", Number)
    ], SendaChatMessageApplicationJsonAtItems.prototype, "startPosition", void 0);
    return SendaChatMessageApplicationJsonAtItems;
}(utils_1.SpeakeasyBase));
exports.SendaChatMessageApplicationJsonAtItems = SendaChatMessageApplicationJsonAtItems;
var SendaChatMessageApplicationJson = /** @class */ (function (_super) {
    __extends(SendaChatMessageApplicationJson, _super);
    function SendaChatMessageApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=at_items", elemType: SendaChatMessageApplicationJsonAtItems }),
        __metadata("design:type", Array)
    ], SendaChatMessageApplicationJson.prototype, "atItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SendaChatMessageApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to_channel" }),
        __metadata("design:type", String)
    ], SendaChatMessageApplicationJson.prototype, "toChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to_contact" }),
        __metadata("design:type", String)
    ], SendaChatMessageApplicationJson.prototype, "toContact", void 0);
    return SendaChatMessageApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SendaChatMessageApplicationJson = SendaChatMessageApplicationJson;
var SendaChatMessageMultipartFormDataAtItems = /** @class */ (function (_super) {
    __extends(SendaChatMessageMultipartFormDataAtItems, _super);
    function SendaChatMessageMultipartFormDataAtItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=at_contact" }),
        __metadata("design:type", String)
    ], SendaChatMessageMultipartFormDataAtItems.prototype, "atContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=at_type" }),
        __metadata("design:type", Number)
    ], SendaChatMessageMultipartFormDataAtItems.prototype, "atType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_position" }),
        __metadata("design:type", Number)
    ], SendaChatMessageMultipartFormDataAtItems.prototype, "endPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_position" }),
        __metadata("design:type", Number)
    ], SendaChatMessageMultipartFormDataAtItems.prototype, "startPosition", void 0);
    return SendaChatMessageMultipartFormDataAtItems;
}(utils_1.SpeakeasyBase));
exports.SendaChatMessageMultipartFormDataAtItems = SendaChatMessageMultipartFormDataAtItems;
var SendaChatMessageMultipartFormData1 = /** @class */ (function (_super) {
    __extends(SendaChatMessageMultipartFormData1, _super);
    function SendaChatMessageMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=at_items;json=true", elemType: SendaChatMessageMultipartFormDataAtItems }),
        __metadata("design:type", Array)
    ], SendaChatMessageMultipartFormData1.prototype, "atItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=message" }),
        __metadata("design:type", String)
    ], SendaChatMessageMultipartFormData1.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=to_channel" }),
        __metadata("design:type", String)
    ], SendaChatMessageMultipartFormData1.prototype, "toChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=to_contact" }),
        __metadata("design:type", String)
    ], SendaChatMessageMultipartFormData1.prototype, "toContact", void 0);
    return SendaChatMessageMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.SendaChatMessageMultipartFormData1 = SendaChatMessageMultipartFormData1;
var SendaChatMessageRequests = /** @class */ (function (_super) {
    __extends(SendaChatMessageRequests, _super);
    function SendaChatMessageRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SendaChatMessageApplicationJson)
    ], SendaChatMessageRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SendaChatMessageMultipartFormData1)
    ], SendaChatMessageRequests.prototype, "object1", void 0);
    return SendaChatMessageRequests;
}(utils_1.SpeakeasyBase));
exports.SendaChatMessageRequests = SendaChatMessageRequests;
var SendaChatMessageSecurity = /** @class */ (function (_super) {
    __extends(SendaChatMessageSecurity, _super);
    function SendaChatMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], SendaChatMessageSecurity.prototype, "oAuth", void 0);
    return SendaChatMessageSecurity;
}(utils_1.SpeakeasyBase));
exports.SendaChatMessageSecurity = SendaChatMessageSecurity;
var SendaChatMessage201ApplicationJson = /** @class */ (function (_super) {
    __extends(SendaChatMessage201ApplicationJson, _super);
    function SendaChatMessage201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SendaChatMessage201ApplicationJson.prototype, "id", void 0);
    return SendaChatMessage201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SendaChatMessage201ApplicationJson = SendaChatMessage201ApplicationJson;
var SendaChatMessageRequest = /** @class */ (function (_super) {
    __extends(SendaChatMessageRequest, _super);
    function SendaChatMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendaChatMessagePathParams)
    ], SendaChatMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendaChatMessageRequests)
    ], SendaChatMessageRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendaChatMessageSecurity)
    ], SendaChatMessageRequest.prototype, "security", void 0);
    return SendaChatMessageRequest;
}(utils_1.SpeakeasyBase));
exports.SendaChatMessageRequest = SendaChatMessageRequest;
var SendaChatMessageResponse = /** @class */ (function (_super) {
    __extends(SendaChatMessageResponse, _super);
    function SendaChatMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SendaChatMessageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SendaChatMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SendaChatMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendaChatMessage201ApplicationJson)
    ], SendaChatMessageResponse.prototype, "sendaChatMessage201ApplicationJSONObject", void 0);
    return SendaChatMessageResponse;
}(utils_1.SpeakeasyBase));
exports.SendaChatMessageResponse = SendaChatMessageResponse;
