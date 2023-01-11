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
exports.GetChatMessagesResponse = exports.GetChatMessagesRequest = exports.GetChatMessages200ApplicationJson = exports.GetChatMessages200ApplicationJsonMessages = exports.GetChatMessages200ApplicationJsonMessagesStatusEnum = exports.GetChatMessagesSecurity = exports.GetChatMessagesQueryParams = exports.GetChatMessagesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetChatMessagesPathParams = /** @class */ (function (_super) {
    __extends(GetChatMessagesPathParams, _super);
    function GetChatMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GetChatMessagesPathParams.prototype, "userId", void 0);
    return GetChatMessagesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetChatMessagesPathParams = GetChatMessagesPathParams;
var GetChatMessagesQueryParams = /** @class */ (function (_super) {
    __extends(GetChatMessagesQueryParams, _super);
    function GetChatMessagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", Date)
    ], GetChatMessagesQueryParams.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_deleted_and_edited_message" }),
        __metadata("design:type", String)
    ], GetChatMessagesQueryParams.prototype, "includeDeletedAndEditedMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], GetChatMessagesQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetChatMessagesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to_channel" }),
        __metadata("design:type", String)
    ], GetChatMessagesQueryParams.prototype, "toChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to_contact" }),
        __metadata("design:type", String)
    ], GetChatMessagesQueryParams.prototype, "toContact", void 0);
    return GetChatMessagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetChatMessagesQueryParams = GetChatMessagesQueryParams;
var GetChatMessagesSecurity = /** @class */ (function (_super) {
    __extends(GetChatMessagesSecurity, _super);
    function GetChatMessagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetChatMessagesSecurity.prototype, "oAuth", void 0);
    return GetChatMessagesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetChatMessagesSecurity = GetChatMessagesSecurity;
var GetChatMessages200ApplicationJsonMessagesStatusEnum;
(function (GetChatMessages200ApplicationJsonMessagesStatusEnum) {
    GetChatMessages200ApplicationJsonMessagesStatusEnum["Deleted"] = "Deleted";
    GetChatMessages200ApplicationJsonMessagesStatusEnum["Edited"] = "Edited";
    GetChatMessages200ApplicationJsonMessagesStatusEnum["Normal"] = "Normal";
})(GetChatMessages200ApplicationJsonMessagesStatusEnum = exports.GetChatMessages200ApplicationJsonMessagesStatusEnum || (exports.GetChatMessages200ApplicationJsonMessagesStatusEnum = {}));
var GetChatMessages200ApplicationJsonMessages = /** @class */ (function (_super) {
    __extends(GetChatMessages200ApplicationJsonMessages, _super);
    function GetChatMessages200ApplicationJsonMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", String)
    ], GetChatMessages200ApplicationJsonMessages.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetChatMessages200ApplicationJsonMessages.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetChatMessages200ApplicationJsonMessages.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reply_main_message_id" }),
        __metadata("design:type", String)
    ], GetChatMessages200ApplicationJsonMessages.prototype, "replyMainMessageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reply_main_message_timestamp" }),
        __metadata("design:type", Number)
    ], GetChatMessages200ApplicationJsonMessages.prototype, "replyMainMessageTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sender" }),
        __metadata("design:type", String)
    ], GetChatMessages200ApplicationJsonMessages.prototype, "sender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetChatMessages200ApplicationJsonMessages.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", Number)
    ], GetChatMessages200ApplicationJsonMessages.prototype, "timestamp", void 0);
    return GetChatMessages200ApplicationJsonMessages;
}(utils_1.SpeakeasyBase));
exports.GetChatMessages200ApplicationJsonMessages = GetChatMessages200ApplicationJsonMessages;
// GetChatMessages200ApplicationJson
/**
 * Chat message object.
**/
var GetChatMessages200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetChatMessages200ApplicationJson, _super);
    function GetChatMessages200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GetChatMessages200ApplicationJson.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages", elemType: GetChatMessages200ApplicationJsonMessages }),
        __metadata("design:type", Array)
    ], GetChatMessages200ApplicationJson.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], GetChatMessages200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetChatMessages200ApplicationJson.prototype, "pageSize", void 0);
    return GetChatMessages200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetChatMessages200ApplicationJson = GetChatMessages200ApplicationJson;
var GetChatMessagesRequest = /** @class */ (function (_super) {
    __extends(GetChatMessagesRequest, _super);
    function GetChatMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatMessagesPathParams)
    ], GetChatMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatMessagesQueryParams)
    ], GetChatMessagesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatMessagesSecurity)
    ], GetChatMessagesRequest.prototype, "security", void 0);
    return GetChatMessagesRequest;
}(utils_1.SpeakeasyBase));
exports.GetChatMessagesRequest = GetChatMessagesRequest;
var GetChatMessagesResponse = /** @class */ (function (_super) {
    __extends(GetChatMessagesResponse, _super);
    function GetChatMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetChatMessagesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetChatMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetChatMessagesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChatMessages200ApplicationJson)
    ], GetChatMessagesResponse.prototype, "getChatMessages200ApplicationJSONObject", void 0);
    return GetChatMessagesResponse;
}(utils_1.SpeakeasyBase));
exports.GetChatMessagesResponse = GetChatMessagesResponse;
