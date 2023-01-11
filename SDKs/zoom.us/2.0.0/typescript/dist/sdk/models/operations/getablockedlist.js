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
exports.GetABlockedListResponse = exports.GetABlockedListRequest = exports.GetABlockedList200ApplicationJson = exports.GetABlockedList200ApplicationJsonStatusEnum = exports.GetABlockedList200ApplicationJsonMatchTypeEnum = exports.GetABlockedList200ApplicationJsonBlockTypeEnum = exports.GetABlockedListSecurity = exports.GetABlockedListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetABlockedListPathParams = /** @class */ (function (_super) {
    __extends(GetABlockedListPathParams, _super);
    function GetABlockedListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=blockedListId" }),
        __metadata("design:type", String)
    ], GetABlockedListPathParams.prototype, "blockedListId", void 0);
    return GetABlockedListPathParams;
}(utils_1.SpeakeasyBase));
exports.GetABlockedListPathParams = GetABlockedListPathParams;
var GetABlockedListSecurity = /** @class */ (function (_super) {
    __extends(GetABlockedListSecurity, _super);
    function GetABlockedListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetABlockedListSecurity.prototype, "oAuth", void 0);
    return GetABlockedListSecurity;
}(utils_1.SpeakeasyBase));
exports.GetABlockedListSecurity = GetABlockedListSecurity;
var GetABlockedList200ApplicationJsonBlockTypeEnum;
(function (GetABlockedList200ApplicationJsonBlockTypeEnum) {
    GetABlockedList200ApplicationJsonBlockTypeEnum["Inbound"] = "inbound";
    GetABlockedList200ApplicationJsonBlockTypeEnum["Outbound"] = "outbound";
})(GetABlockedList200ApplicationJsonBlockTypeEnum = exports.GetABlockedList200ApplicationJsonBlockTypeEnum || (exports.GetABlockedList200ApplicationJsonBlockTypeEnum = {}));
var GetABlockedList200ApplicationJsonMatchTypeEnum;
(function (GetABlockedList200ApplicationJsonMatchTypeEnum) {
    GetABlockedList200ApplicationJsonMatchTypeEnum["PhoneNumber"] = "phoneNumber";
    GetABlockedList200ApplicationJsonMatchTypeEnum["Prefix"] = "prefix";
})(GetABlockedList200ApplicationJsonMatchTypeEnum = exports.GetABlockedList200ApplicationJsonMatchTypeEnum || (exports.GetABlockedList200ApplicationJsonMatchTypeEnum = {}));
var GetABlockedList200ApplicationJsonStatusEnum;
(function (GetABlockedList200ApplicationJsonStatusEnum) {
    GetABlockedList200ApplicationJsonStatusEnum["Active"] = "active";
    GetABlockedList200ApplicationJsonStatusEnum["Inactive"] = "inactive";
})(GetABlockedList200ApplicationJsonStatusEnum = exports.GetABlockedList200ApplicationJsonStatusEnum || (exports.GetABlockedList200ApplicationJsonStatusEnum = {}));
var GetABlockedList200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetABlockedList200ApplicationJson, _super);
    function GetABlockedList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block_type" }),
        __metadata("design:type", String)
    ], GetABlockedList200ApplicationJson.prototype, "blockType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], GetABlockedList200ApplicationJson.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetABlockedList200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=match_type" }),
        __metadata("design:type", String)
    ], GetABlockedList200ApplicationJson.prototype, "matchType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], GetABlockedList200ApplicationJson.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetABlockedList200ApplicationJson.prototype, "status", void 0);
    return GetABlockedList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetABlockedList200ApplicationJson = GetABlockedList200ApplicationJson;
var GetABlockedListRequest = /** @class */ (function (_super) {
    __extends(GetABlockedListRequest, _super);
    function GetABlockedListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetABlockedListPathParams)
    ], GetABlockedListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetABlockedListSecurity)
    ], GetABlockedListRequest.prototype, "security", void 0);
    return GetABlockedListRequest;
}(utils_1.SpeakeasyBase));
exports.GetABlockedListRequest = GetABlockedListRequest;
var GetABlockedListResponse = /** @class */ (function (_super) {
    __extends(GetABlockedListResponse, _super);
    function GetABlockedListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetABlockedListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetABlockedListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetABlockedListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetABlockedList200ApplicationJson)
    ], GetABlockedListResponse.prototype, "getABlockedList200ApplicationJSONObject", void 0);
    return GetABlockedListResponse;
}(utils_1.SpeakeasyBase));
exports.GetABlockedListResponse = GetABlockedListResponse;
