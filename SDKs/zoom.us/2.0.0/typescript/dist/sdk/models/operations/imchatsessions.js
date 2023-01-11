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
exports.ImChatSessionsResponse = exports.ImChatSessionsRequest = exports.ImChatSessions200ApplicationJson = exports.ImChatSessions200ApplicationJsonSessions = exports.ImChatSessions200ApplicationJsonSessionsTypeEnum = exports.ImChatSessionsSecurity = exports.ImChatSessionsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ImChatSessionsQueryParams = /** @class */ (function (_super) {
    __extends(ImChatSessionsQueryParams, _super);
    function ImChatSessionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], ImChatSessionsQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ImChatSessionsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ImChatSessionsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], ImChatSessionsQueryParams.prototype, "to", void 0);
    return ImChatSessionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ImChatSessionsQueryParams = ImChatSessionsQueryParams;
var ImChatSessionsSecurity = /** @class */ (function (_super) {
    __extends(ImChatSessionsSecurity, _super);
    function ImChatSessionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ImChatSessionsSecurity.prototype, "oAuth", void 0);
    return ImChatSessionsSecurity;
}(utils_1.SpeakeasyBase));
exports.ImChatSessionsSecurity = ImChatSessionsSecurity;
var ImChatSessions200ApplicationJsonSessionsTypeEnum;
(function (ImChatSessions200ApplicationJsonSessionsTypeEnum) {
    ImChatSessions200ApplicationJsonSessionsTypeEnum["Group"] = "Group";
    ImChatSessions200ApplicationJsonSessionsTypeEnum["One1"] = "1:1";
})(ImChatSessions200ApplicationJsonSessionsTypeEnum = exports.ImChatSessions200ApplicationJsonSessionsTypeEnum || (exports.ImChatSessions200ApplicationJsonSessionsTypeEnum = {}));
var ImChatSessions200ApplicationJsonSessions = /** @class */ (function (_super) {
    __extends(ImChatSessions200ApplicationJsonSessions, _super);
    function ImChatSessions200ApplicationJsonSessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_message_sent_time" }),
        __metadata("design:type", Date)
    ], ImChatSessions200ApplicationJsonSessions.prototype, "lastMessageSentTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImChatSessions200ApplicationJsonSessions.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=session_id" }),
        __metadata("design:type", String)
    ], ImChatSessions200ApplicationJsonSessions.prototype, "sessionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ImChatSessions200ApplicationJsonSessions.prototype, "type", void 0);
    return ImChatSessions200ApplicationJsonSessions;
}(utils_1.SpeakeasyBase));
exports.ImChatSessions200ApplicationJsonSessions = ImChatSessions200ApplicationJsonSessions;
// ImChatSessions200ApplicationJson
/**
 * Pagination object.
**/
var ImChatSessions200ApplicationJson = /** @class */ (function (_super) {
    __extends(ImChatSessions200ApplicationJson, _super);
    function ImChatSessions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], ImChatSessions200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ImChatSessions200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ImChatSessions200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sessions", elemType: ImChatSessions200ApplicationJsonSessions }),
        __metadata("design:type", Array)
    ], ImChatSessions200ApplicationJson.prototype, "sessions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], ImChatSessions200ApplicationJson.prototype, "to", void 0);
    return ImChatSessions200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImChatSessions200ApplicationJson = ImChatSessions200ApplicationJson;
var ImChatSessionsRequest = /** @class */ (function (_super) {
    __extends(ImChatSessionsRequest, _super);
    function ImChatSessionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImChatSessionsQueryParams)
    ], ImChatSessionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImChatSessionsSecurity)
    ], ImChatSessionsRequest.prototype, "security", void 0);
    return ImChatSessionsRequest;
}(utils_1.SpeakeasyBase));
exports.ImChatSessionsRequest = ImChatSessionsRequest;
var ImChatSessionsResponse = /** @class */ (function (_super) {
    __extends(ImChatSessionsResponse, _super);
    function ImChatSessionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ImChatSessionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImChatSessionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImChatSessionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImChatSessions200ApplicationJson)
    ], ImChatSessionsResponse.prototype, "imChatSessions200ApplicationJSONObject", void 0);
    return ImChatSessionsResponse;
}(utils_1.SpeakeasyBase));
exports.ImChatSessionsResponse = ImChatSessionsResponse;
