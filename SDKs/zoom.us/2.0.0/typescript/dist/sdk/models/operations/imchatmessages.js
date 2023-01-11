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
exports.ImChatMessagesResponse = exports.ImChatMessagesRequest = exports.ImChatMessages200ApplicationJson = exports.ImChatMessages200ApplicationJsonMessages = exports.ImChatMessagesQueryParams = exports.ImChatMessagesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ImChatMessagesPathParams = /** @class */ (function (_super) {
    __extends(ImChatMessagesPathParams, _super);
    function ImChatMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], ImChatMessagesPathParams.prototype, "sessionId", void 0);
    return ImChatMessagesPathParams;
}(utils_1.SpeakeasyBase));
exports.ImChatMessagesPathParams = ImChatMessagesPathParams;
var ImChatMessagesQueryParams = /** @class */ (function (_super) {
    __extends(ImChatMessagesQueryParams, _super);
    function ImChatMessagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], ImChatMessagesQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ImChatMessagesQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ImChatMessagesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], ImChatMessagesQueryParams.prototype, "to", void 0);
    return ImChatMessagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ImChatMessagesQueryParams = ImChatMessagesQueryParams;
var ImChatMessages200ApplicationJsonMessages = /** @class */ (function (_super) {
    __extends(ImChatMessages200ApplicationJsonMessages, _super);
    function ImChatMessages200ApplicationJsonMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ImChatMessages200ApplicationJsonMessages.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action_time" }),
        __metadata("design:type", Date)
    ], ImChatMessages200ApplicationJsonMessages.prototype, "actionTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], ImChatMessages200ApplicationJsonMessages.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ImChatMessages200ApplicationJsonMessages.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sender" }),
        __metadata("design:type", String)
    ], ImChatMessages200ApplicationJsonMessages.prototype, "sender", void 0);
    return ImChatMessages200ApplicationJsonMessages;
}(utils_1.SpeakeasyBase));
exports.ImChatMessages200ApplicationJsonMessages = ImChatMessages200ApplicationJsonMessages;
// ImChatMessages200ApplicationJson
/**
 * Pagination object.
**/
var ImChatMessages200ApplicationJson = /** @class */ (function (_super) {
    __extends(ImChatMessages200ApplicationJson, _super);
    function ImChatMessages200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], ImChatMessages200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages", elemType: ImChatMessages200ApplicationJsonMessages }),
        __metadata("design:type", Array)
    ], ImChatMessages200ApplicationJson.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ImChatMessages200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ImChatMessages200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=session_id" }),
        __metadata("design:type", String)
    ], ImChatMessages200ApplicationJson.prototype, "sessionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], ImChatMessages200ApplicationJson.prototype, "to", void 0);
    return ImChatMessages200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImChatMessages200ApplicationJson = ImChatMessages200ApplicationJson;
var ImChatMessagesRequest = /** @class */ (function (_super) {
    __extends(ImChatMessagesRequest, _super);
    function ImChatMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImChatMessagesPathParams)
    ], ImChatMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImChatMessagesQueryParams)
    ], ImChatMessagesRequest.prototype, "queryParams", void 0);
    return ImChatMessagesRequest;
}(utils_1.SpeakeasyBase));
exports.ImChatMessagesRequest = ImChatMessagesRequest;
var ImChatMessagesResponse = /** @class */ (function (_super) {
    __extends(ImChatMessagesResponse, _super);
    function ImChatMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ImChatMessagesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImChatMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImChatMessagesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImChatMessages200ApplicationJson)
    ], ImChatMessagesResponse.prototype, "imChatMessages200ApplicationJSONObject", void 0);
    return ImChatMessagesResponse;
}(utils_1.SpeakeasyBase));
exports.ImChatMessagesResponse = ImChatMessagesResponse;
