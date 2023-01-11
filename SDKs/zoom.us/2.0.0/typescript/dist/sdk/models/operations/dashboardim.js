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
exports.DashboardImResponse = exports.DashboardImRequest = exports.DashboardIm200ApplicationJson = exports.DashboardIm200ApplicationJsonUsers = exports.DashboardImSecurity = exports.DashboardImQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardImQueryParams = /** @class */ (function (_super) {
    __extends(DashboardImQueryParams, _super);
    function DashboardImQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], DashboardImQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardImQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardImQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], DashboardImQueryParams.prototype, "to", void 0);
    return DashboardImQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardImQueryParams = DashboardImQueryParams;
var DashboardImSecurity = /** @class */ (function (_super) {
    __extends(DashboardImSecurity, _super);
    function DashboardImSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardImSecurity.prototype, "oAuth", void 0);
    return DashboardImSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardImSecurity = DashboardImSecurity;
var DashboardIm200ApplicationJsonUsers = /** @class */ (function (_super) {
    __extends(DashboardIm200ApplicationJsonUsers, _super);
    function DashboardIm200ApplicationJsonUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calls_receive" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "callsReceive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calls_send" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "callsSend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], DashboardIm200ApplicationJsonUsers.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emoji_receive" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "emojiReceive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emoji_send" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "emojiSend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files_receive" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "filesReceive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files_send" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "filesSend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_receive" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "groupReceive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_send" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "groupSend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images_receive" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "imagesReceive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images_send" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "imagesSend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_receive" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "totalReceive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_send" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "totalSend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], DashboardIm200ApplicationJsonUsers.prototype, "userId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], DashboardIm200ApplicationJsonUsers.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videos_receive" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "videosReceive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videos_send" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "videosSend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voice_receive" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "voiceReceive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voice_send" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJsonUsers.prototype, "voiceSend", void 0);
    return DashboardIm200ApplicationJsonUsers;
}(utils_1.SpeakeasyBase));
exports.DashboardIm200ApplicationJsonUsers = DashboardIm200ApplicationJsonUsers;
// DashboardIm200ApplicationJson
/**
 * Pagination object.
**/
var DashboardIm200ApplicationJson = /** @class */ (function (_super) {
    __extends(DashboardIm200ApplicationJson, _super);
    function DashboardIm200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], DashboardIm200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DashboardIm200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJson.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], DashboardIm200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardIm200ApplicationJson.prototype, "totalRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: DashboardIm200ApplicationJsonUsers }),
        __metadata("design:type", Array)
    ], DashboardIm200ApplicationJson.prototype, "users", void 0);
    return DashboardIm200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DashboardIm200ApplicationJson = DashboardIm200ApplicationJson;
var DashboardImRequest = /** @class */ (function (_super) {
    __extends(DashboardImRequest, _super);
    function DashboardImRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardImQueryParams)
    ], DashboardImRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardImSecurity)
    ], DashboardImRequest.prototype, "security", void 0);
    return DashboardImRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardImRequest = DashboardImRequest;
var DashboardImResponse = /** @class */ (function (_super) {
    __extends(DashboardImResponse, _super);
    function DashboardImResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardImResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardImResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardImResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardIm200ApplicationJson)
    ], DashboardImResponse.prototype, "dashboardIM200ApplicationJSONObject", void 0);
    return DashboardImResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardImResponse = DashboardImResponse;
