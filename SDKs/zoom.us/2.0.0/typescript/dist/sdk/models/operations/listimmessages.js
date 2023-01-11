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
exports.ListimmessagesResponse = exports.ListimmessagesRequest = exports.Listimmessages200ApplicationJson = exports.Listimmessages200ApplicationJsonMessages = exports.ListimmessagesSecurity = exports.ListimmessagesQueryParams = exports.ListimmessagesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListimmessagesPathParams = /** @class */ (function (_super) {
    __extends(ListimmessagesPathParams, _super);
    function ListimmessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], ListimmessagesPathParams.prototype, "userId", void 0);
    return ListimmessagesPathParams;
}(utils_1.SpeakeasyBase));
exports.ListimmessagesPathParams = ListimmessagesPathParams;
var ListimmessagesQueryParams = /** @class */ (function (_super) {
    __extends(ListimmessagesQueryParams, _super);
    function ListimmessagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=channel" }),
        __metadata("design:type", String)
    ], ListimmessagesQueryParams.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=chat_user" }),
        __metadata("design:type", String)
    ], ListimmessagesQueryParams.prototype, "chatUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], ListimmessagesQueryParams.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListimmessagesQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListimmessagesQueryParams.prototype, "pageSize", void 0);
    return ListimmessagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListimmessagesQueryParams = ListimmessagesQueryParams;
var ListimmessagesSecurity = /** @class */ (function (_super) {
    __extends(ListimmessagesSecurity, _super);
    function ListimmessagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListimmessagesSecurity.prototype, "oAuth", void 0);
    return ListimmessagesSecurity;
}(utils_1.SpeakeasyBase));
exports.ListimmessagesSecurity = ListimmessagesSecurity;
var Listimmessages200ApplicationJsonMessages = /** @class */ (function (_super) {
    __extends(Listimmessages200ApplicationJsonMessages, _super);
    function Listimmessages200ApplicationJsonMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], Listimmessages200ApplicationJsonMessages.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Listimmessages200ApplicationJsonMessages.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Listimmessages200ApplicationJsonMessages.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sender" }),
        __metadata("design:type", String)
    ], Listimmessages200ApplicationJsonMessages.prototype, "sender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timstamp" }),
        __metadata("design:type", Number)
    ], Listimmessages200ApplicationJsonMessages.prototype, "timstamp", void 0);
    return Listimmessages200ApplicationJsonMessages;
}(utils_1.SpeakeasyBase));
exports.Listimmessages200ApplicationJsonMessages = Listimmessages200ApplicationJsonMessages;
var Listimmessages200ApplicationJson = /** @class */ (function (_super) {
    __extends(Listimmessages200ApplicationJson, _super);
    function Listimmessages200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], Listimmessages200ApplicationJson.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages", elemType: Listimmessages200ApplicationJsonMessages }),
        __metadata("design:type", Array)
    ], Listimmessages200ApplicationJson.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], Listimmessages200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], Listimmessages200ApplicationJson.prototype, "pageSize", void 0);
    return Listimmessages200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Listimmessages200ApplicationJson = Listimmessages200ApplicationJson;
var ListimmessagesRequest = /** @class */ (function (_super) {
    __extends(ListimmessagesRequest, _super);
    function ListimmessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListimmessagesPathParams)
    ], ListimmessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListimmessagesQueryParams)
    ], ListimmessagesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListimmessagesSecurity)
    ], ListimmessagesRequest.prototype, "security", void 0);
    return ListimmessagesRequest;
}(utils_1.SpeakeasyBase));
exports.ListimmessagesRequest = ListimmessagesRequest;
var ListimmessagesResponse = /** @class */ (function (_super) {
    __extends(ListimmessagesResponse, _super);
    function ListimmessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListimmessagesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListimmessagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListimmessagesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Listimmessages200ApplicationJson)
    ], ListimmessagesResponse.prototype, "listimmessages200ApplicationJSONObject", void 0);
    return ListimmessagesResponse;
}(utils_1.SpeakeasyBase));
exports.ListimmessagesResponse = ListimmessagesResponse;
