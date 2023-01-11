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
exports.AddAnumberToBlockedListResponse = exports.AddAnumberToBlockedListRequest = exports.AddAnumberToBlockedList201ApplicationJson = exports.AddAnumberToBlockedListSecurity = exports.AddAnumberToBlockedListRequests = exports.AddAnumberToBlockedListMultipartFormData = exports.AddAnumberToBlockedListMultipartFormDataStatusEnum = exports.AddAnumberToBlockedListMultipartFormDataMatchTypeEnum = exports.AddAnumberToBlockedListMultipartFormDataBlockTypeEnum = exports.AddAnumberToBlockedListApplicationJson = exports.AddAnumberToBlockedListApplicationJsonStatusEnum = exports.AddAnumberToBlockedListApplicationJsonMatchTypeEnum = exports.AddAnumberToBlockedListApplicationJsonBlockTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddAnumberToBlockedListApplicationJsonBlockTypeEnum;
(function (AddAnumberToBlockedListApplicationJsonBlockTypeEnum) {
    AddAnumberToBlockedListApplicationJsonBlockTypeEnum["Inbound"] = "inbound";
    AddAnumberToBlockedListApplicationJsonBlockTypeEnum["Outbound"] = "outbound";
})(AddAnumberToBlockedListApplicationJsonBlockTypeEnum = exports.AddAnumberToBlockedListApplicationJsonBlockTypeEnum || (exports.AddAnumberToBlockedListApplicationJsonBlockTypeEnum = {}));
var AddAnumberToBlockedListApplicationJsonMatchTypeEnum;
(function (AddAnumberToBlockedListApplicationJsonMatchTypeEnum) {
    AddAnumberToBlockedListApplicationJsonMatchTypeEnum["PhoneNumber"] = "phoneNumber";
    AddAnumberToBlockedListApplicationJsonMatchTypeEnum["Prefix"] = "prefix";
})(AddAnumberToBlockedListApplicationJsonMatchTypeEnum = exports.AddAnumberToBlockedListApplicationJsonMatchTypeEnum || (exports.AddAnumberToBlockedListApplicationJsonMatchTypeEnum = {}));
var AddAnumberToBlockedListApplicationJsonStatusEnum;
(function (AddAnumberToBlockedListApplicationJsonStatusEnum) {
    AddAnumberToBlockedListApplicationJsonStatusEnum["Active"] = "active";
    AddAnumberToBlockedListApplicationJsonStatusEnum["Inactive"] = "inactive";
})(AddAnumberToBlockedListApplicationJsonStatusEnum = exports.AddAnumberToBlockedListApplicationJsonStatusEnum || (exports.AddAnumberToBlockedListApplicationJsonStatusEnum = {}));
var AddAnumberToBlockedListApplicationJson = /** @class */ (function (_super) {
    __extends(AddAnumberToBlockedListApplicationJson, _super);
    function AddAnumberToBlockedListApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block_type" }),
        __metadata("design:type", String)
    ], AddAnumberToBlockedListApplicationJson.prototype, "blockType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], AddAnumberToBlockedListApplicationJson.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=match_type" }),
        __metadata("design:type", String)
    ], AddAnumberToBlockedListApplicationJson.prototype, "matchType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], AddAnumberToBlockedListApplicationJson.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AddAnumberToBlockedListApplicationJson.prototype, "status", void 0);
    return AddAnumberToBlockedListApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddAnumberToBlockedListApplicationJson = AddAnumberToBlockedListApplicationJson;
var AddAnumberToBlockedListMultipartFormDataBlockTypeEnum;
(function (AddAnumberToBlockedListMultipartFormDataBlockTypeEnum) {
    AddAnumberToBlockedListMultipartFormDataBlockTypeEnum["Inbound"] = "inbound";
    AddAnumberToBlockedListMultipartFormDataBlockTypeEnum["Outbound"] = "outbound";
})(AddAnumberToBlockedListMultipartFormDataBlockTypeEnum = exports.AddAnumberToBlockedListMultipartFormDataBlockTypeEnum || (exports.AddAnumberToBlockedListMultipartFormDataBlockTypeEnum = {}));
var AddAnumberToBlockedListMultipartFormDataMatchTypeEnum;
(function (AddAnumberToBlockedListMultipartFormDataMatchTypeEnum) {
    AddAnumberToBlockedListMultipartFormDataMatchTypeEnum["PhoneNumber"] = "phoneNumber";
    AddAnumberToBlockedListMultipartFormDataMatchTypeEnum["Prefix"] = "prefix";
})(AddAnumberToBlockedListMultipartFormDataMatchTypeEnum = exports.AddAnumberToBlockedListMultipartFormDataMatchTypeEnum || (exports.AddAnumberToBlockedListMultipartFormDataMatchTypeEnum = {}));
var AddAnumberToBlockedListMultipartFormDataStatusEnum;
(function (AddAnumberToBlockedListMultipartFormDataStatusEnum) {
    AddAnumberToBlockedListMultipartFormDataStatusEnum["Active"] = "active";
    AddAnumberToBlockedListMultipartFormDataStatusEnum["Inactive"] = "inactive";
})(AddAnumberToBlockedListMultipartFormDataStatusEnum = exports.AddAnumberToBlockedListMultipartFormDataStatusEnum || (exports.AddAnumberToBlockedListMultipartFormDataStatusEnum = {}));
var AddAnumberToBlockedListMultipartFormData = /** @class */ (function (_super) {
    __extends(AddAnumberToBlockedListMultipartFormData, _super);
    function AddAnumberToBlockedListMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=block_type" }),
        __metadata("design:type", String)
    ], AddAnumberToBlockedListMultipartFormData.prototype, "blockType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=comment" }),
        __metadata("design:type", String)
    ], AddAnumberToBlockedListMultipartFormData.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=match_type" }),
        __metadata("design:type", String)
    ], AddAnumberToBlockedListMultipartFormData.prototype, "matchType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_number" }),
        __metadata("design:type", String)
    ], AddAnumberToBlockedListMultipartFormData.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=status" }),
        __metadata("design:type", String)
    ], AddAnumberToBlockedListMultipartFormData.prototype, "status", void 0);
    return AddAnumberToBlockedListMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AddAnumberToBlockedListMultipartFormData = AddAnumberToBlockedListMultipartFormData;
var AddAnumberToBlockedListRequests = /** @class */ (function (_super) {
    __extends(AddAnumberToBlockedListRequests, _super);
    function AddAnumberToBlockedListRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddAnumberToBlockedListApplicationJson)
    ], AddAnumberToBlockedListRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddAnumberToBlockedListMultipartFormData)
    ], AddAnumberToBlockedListRequests.prototype, "object1", void 0);
    return AddAnumberToBlockedListRequests;
}(utils_1.SpeakeasyBase));
exports.AddAnumberToBlockedListRequests = AddAnumberToBlockedListRequests;
var AddAnumberToBlockedListSecurity = /** @class */ (function (_super) {
    __extends(AddAnumberToBlockedListSecurity, _super);
    function AddAnumberToBlockedListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AddAnumberToBlockedListSecurity.prototype, "oAuth", void 0);
    return AddAnumberToBlockedListSecurity;
}(utils_1.SpeakeasyBase));
exports.AddAnumberToBlockedListSecurity = AddAnumberToBlockedListSecurity;
var AddAnumberToBlockedList201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddAnumberToBlockedList201ApplicationJson, _super);
    function AddAnumberToBlockedList201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddAnumberToBlockedList201ApplicationJson.prototype, "id", void 0);
    return AddAnumberToBlockedList201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddAnumberToBlockedList201ApplicationJson = AddAnumberToBlockedList201ApplicationJson;
var AddAnumberToBlockedListRequest = /** @class */ (function (_super) {
    __extends(AddAnumberToBlockedListRequest, _super);
    function AddAnumberToBlockedListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddAnumberToBlockedListRequests)
    ], AddAnumberToBlockedListRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddAnumberToBlockedListSecurity)
    ], AddAnumberToBlockedListRequest.prototype, "security", void 0);
    return AddAnumberToBlockedListRequest;
}(utils_1.SpeakeasyBase));
exports.AddAnumberToBlockedListRequest = AddAnumberToBlockedListRequest;
var AddAnumberToBlockedListResponse = /** @class */ (function (_super) {
    __extends(AddAnumberToBlockedListResponse, _super);
    function AddAnumberToBlockedListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddAnumberToBlockedListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddAnumberToBlockedListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddAnumberToBlockedListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddAnumberToBlockedList201ApplicationJson)
    ], AddAnumberToBlockedListResponse.prototype, "addAnumberToBlockedList201ApplicationJSONObject", void 0);
    return AddAnumberToBlockedListResponse;
}(utils_1.SpeakeasyBase));
exports.AddAnumberToBlockedListResponse = AddAnumberToBlockedListResponse;
