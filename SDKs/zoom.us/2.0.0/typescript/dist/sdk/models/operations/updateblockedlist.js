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
exports.UpdateBlockedListResponse = exports.UpdateBlockedListRequest = exports.UpdateBlockedListSecurity = exports.UpdateBlockedListRequests = exports.UpdateBlockedListMultipartFormData = exports.UpdateBlockedListMultipartFormDataStatusEnum = exports.UpdateBlockedListMultipartFormDataMatchTypeEnum = exports.UpdateBlockedListMultipartFormDataBlockTypeEnum = exports.UpdateBlockedListApplicationJson = exports.UpdateBlockedListApplicationJsonStatusEnum = exports.UpdateBlockedListApplicationJsonMatchTypeEnum = exports.UpdateBlockedListApplicationJsonBlockTypeEnum = exports.UpdateBlockedListPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateBlockedListPathParams = /** @class */ (function (_super) {
    __extends(UpdateBlockedListPathParams, _super);
    function UpdateBlockedListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=blockedListId" }),
        __metadata("design:type", String)
    ], UpdateBlockedListPathParams.prototype, "blockedListId", void 0);
    return UpdateBlockedListPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateBlockedListPathParams = UpdateBlockedListPathParams;
var UpdateBlockedListApplicationJsonBlockTypeEnum;
(function (UpdateBlockedListApplicationJsonBlockTypeEnum) {
    UpdateBlockedListApplicationJsonBlockTypeEnum["Inbound"] = "inbound";
    UpdateBlockedListApplicationJsonBlockTypeEnum["Outbound"] = "outbound";
})(UpdateBlockedListApplicationJsonBlockTypeEnum = exports.UpdateBlockedListApplicationJsonBlockTypeEnum || (exports.UpdateBlockedListApplicationJsonBlockTypeEnum = {}));
var UpdateBlockedListApplicationJsonMatchTypeEnum;
(function (UpdateBlockedListApplicationJsonMatchTypeEnum) {
    UpdateBlockedListApplicationJsonMatchTypeEnum["PhoneNumber"] = "phoneNumber";
    UpdateBlockedListApplicationJsonMatchTypeEnum["Prefix"] = "prefix";
})(UpdateBlockedListApplicationJsonMatchTypeEnum = exports.UpdateBlockedListApplicationJsonMatchTypeEnum || (exports.UpdateBlockedListApplicationJsonMatchTypeEnum = {}));
var UpdateBlockedListApplicationJsonStatusEnum;
(function (UpdateBlockedListApplicationJsonStatusEnum) {
    UpdateBlockedListApplicationJsonStatusEnum["Active"] = "active";
    UpdateBlockedListApplicationJsonStatusEnum["Inactive"] = "inactive";
})(UpdateBlockedListApplicationJsonStatusEnum = exports.UpdateBlockedListApplicationJsonStatusEnum || (exports.UpdateBlockedListApplicationJsonStatusEnum = {}));
var UpdateBlockedListApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateBlockedListApplicationJson, _super);
    function UpdateBlockedListApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block_type" }),
        __metadata("design:type", String)
    ], UpdateBlockedListApplicationJson.prototype, "blockType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateBlockedListApplicationJson.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=match_type" }),
        __metadata("design:type", String)
    ], UpdateBlockedListApplicationJson.prototype, "matchType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], UpdateBlockedListApplicationJson.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateBlockedListApplicationJson.prototype, "status", void 0);
    return UpdateBlockedListApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateBlockedListApplicationJson = UpdateBlockedListApplicationJson;
var UpdateBlockedListMultipartFormDataBlockTypeEnum;
(function (UpdateBlockedListMultipartFormDataBlockTypeEnum) {
    UpdateBlockedListMultipartFormDataBlockTypeEnum["Inbound"] = "inbound";
    UpdateBlockedListMultipartFormDataBlockTypeEnum["Outbound"] = "outbound";
})(UpdateBlockedListMultipartFormDataBlockTypeEnum = exports.UpdateBlockedListMultipartFormDataBlockTypeEnum || (exports.UpdateBlockedListMultipartFormDataBlockTypeEnum = {}));
var UpdateBlockedListMultipartFormDataMatchTypeEnum;
(function (UpdateBlockedListMultipartFormDataMatchTypeEnum) {
    UpdateBlockedListMultipartFormDataMatchTypeEnum["PhoneNumber"] = "phoneNumber";
    UpdateBlockedListMultipartFormDataMatchTypeEnum["Prefix"] = "prefix";
})(UpdateBlockedListMultipartFormDataMatchTypeEnum = exports.UpdateBlockedListMultipartFormDataMatchTypeEnum || (exports.UpdateBlockedListMultipartFormDataMatchTypeEnum = {}));
var UpdateBlockedListMultipartFormDataStatusEnum;
(function (UpdateBlockedListMultipartFormDataStatusEnum) {
    UpdateBlockedListMultipartFormDataStatusEnum["Active"] = "active";
    UpdateBlockedListMultipartFormDataStatusEnum["Inactive"] = "inactive";
})(UpdateBlockedListMultipartFormDataStatusEnum = exports.UpdateBlockedListMultipartFormDataStatusEnum || (exports.UpdateBlockedListMultipartFormDataStatusEnum = {}));
var UpdateBlockedListMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateBlockedListMultipartFormData, _super);
    function UpdateBlockedListMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=block_type" }),
        __metadata("design:type", String)
    ], UpdateBlockedListMultipartFormData.prototype, "blockType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=comment" }),
        __metadata("design:type", String)
    ], UpdateBlockedListMultipartFormData.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=match_type" }),
        __metadata("design:type", String)
    ], UpdateBlockedListMultipartFormData.prototype, "matchType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_number" }),
        __metadata("design:type", String)
    ], UpdateBlockedListMultipartFormData.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=status" }),
        __metadata("design:type", String)
    ], UpdateBlockedListMultipartFormData.prototype, "status", void 0);
    return UpdateBlockedListMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateBlockedListMultipartFormData = UpdateBlockedListMultipartFormData;
var UpdateBlockedListRequests = /** @class */ (function (_super) {
    __extends(UpdateBlockedListRequests, _super);
    function UpdateBlockedListRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateBlockedListApplicationJson)
    ], UpdateBlockedListRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateBlockedListMultipartFormData)
    ], UpdateBlockedListRequests.prototype, "object1", void 0);
    return UpdateBlockedListRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateBlockedListRequests = UpdateBlockedListRequests;
var UpdateBlockedListSecurity = /** @class */ (function (_super) {
    __extends(UpdateBlockedListSecurity, _super);
    function UpdateBlockedListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateBlockedListSecurity.prototype, "oAuth", void 0);
    return UpdateBlockedListSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateBlockedListSecurity = UpdateBlockedListSecurity;
var UpdateBlockedListRequest = /** @class */ (function (_super) {
    __extends(UpdateBlockedListRequest, _super);
    function UpdateBlockedListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBlockedListPathParams)
    ], UpdateBlockedListRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBlockedListRequests)
    ], UpdateBlockedListRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBlockedListSecurity)
    ], UpdateBlockedListRequest.prototype, "security", void 0);
    return UpdateBlockedListRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateBlockedListRequest = UpdateBlockedListRequest;
var UpdateBlockedListResponse = /** @class */ (function (_super) {
    __extends(UpdateBlockedListResponse, _super);
    function UpdateBlockedListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateBlockedListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateBlockedListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateBlockedListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBlockedListResponse.prototype, "updateBlockedList204ApplicationJSONAny", void 0);
    return UpdateBlockedListResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateBlockedListResponse = UpdateBlockedListResponse;
