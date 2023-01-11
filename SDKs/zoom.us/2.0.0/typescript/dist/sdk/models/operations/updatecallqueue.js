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
exports.UpdateCallQueueResponse = exports.UpdateCallQueueRequest = exports.UpdateCallQueueSecurity = exports.UpdateCallQueueRequests = exports.UpdateCallQueueMultipartFormData = exports.UpdateCallQueueMultipartFormDataStatusEnum = exports.UpdateCallQueueApplicationJson = exports.UpdateCallQueueApplicationJsonStatusEnum = exports.UpdateCallQueuePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateCallQueuePathParams = /** @class */ (function (_super) {
    __extends(UpdateCallQueuePathParams, _super);
    function UpdateCallQueuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=callQueueId" }),
        __metadata("design:type", String)
    ], UpdateCallQueuePathParams.prototype, "callQueueId", void 0);
    return UpdateCallQueuePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateCallQueuePathParams = UpdateCallQueuePathParams;
var UpdateCallQueueApplicationJsonStatusEnum;
(function (UpdateCallQueueApplicationJsonStatusEnum) {
    UpdateCallQueueApplicationJsonStatusEnum["Active"] = "active";
    UpdateCallQueueApplicationJsonStatusEnum["Inactive"] = "inactive";
})(UpdateCallQueueApplicationJsonStatusEnum = exports.UpdateCallQueueApplicationJsonStatusEnum || (exports.UpdateCallQueueApplicationJsonStatusEnum = {}));
var UpdateCallQueueApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateCallQueueApplicationJson, _super);
    function UpdateCallQueueApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateCallQueueApplicationJson.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], UpdateCallQueueApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateCallQueueApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], UpdateCallQueueApplicationJson.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateCallQueueApplicationJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], UpdateCallQueueApplicationJson.prototype, "timezone", void 0);
    return UpdateCallQueueApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateCallQueueApplicationJson = UpdateCallQueueApplicationJson;
var UpdateCallQueueMultipartFormDataStatusEnum;
(function (UpdateCallQueueMultipartFormDataStatusEnum) {
    UpdateCallQueueMultipartFormDataStatusEnum["Active"] = "active";
    UpdateCallQueueMultipartFormDataStatusEnum["Inactive"] = "inactive";
})(UpdateCallQueueMultipartFormDataStatusEnum = exports.UpdateCallQueueMultipartFormDataStatusEnum || (exports.UpdateCallQueueMultipartFormDataStatusEnum = {}));
var UpdateCallQueueMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateCallQueueMultipartFormData, _super);
    function UpdateCallQueueMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], UpdateCallQueueMultipartFormData.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=extension_number" }),
        __metadata("design:type", Number)
    ], UpdateCallQueueMultipartFormData.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], UpdateCallQueueMultipartFormData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=site_id" }),
        __metadata("design:type", String)
    ], UpdateCallQueueMultipartFormData.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=status" }),
        __metadata("design:type", String)
    ], UpdateCallQueueMultipartFormData.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=timezone" }),
        __metadata("design:type", String)
    ], UpdateCallQueueMultipartFormData.prototype, "timezone", void 0);
    return UpdateCallQueueMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateCallQueueMultipartFormData = UpdateCallQueueMultipartFormData;
var UpdateCallQueueRequests = /** @class */ (function (_super) {
    __extends(UpdateCallQueueRequests, _super);
    function UpdateCallQueueRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateCallQueueApplicationJson)
    ], UpdateCallQueueRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateCallQueueMultipartFormData)
    ], UpdateCallQueueRequests.prototype, "object1", void 0);
    return UpdateCallQueueRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateCallQueueRequests = UpdateCallQueueRequests;
var UpdateCallQueueSecurity = /** @class */ (function (_super) {
    __extends(UpdateCallQueueSecurity, _super);
    function UpdateCallQueueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateCallQueueSecurity.prototype, "oAuth", void 0);
    return UpdateCallQueueSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateCallQueueSecurity = UpdateCallQueueSecurity;
var UpdateCallQueueRequest = /** @class */ (function (_super) {
    __extends(UpdateCallQueueRequest, _super);
    function UpdateCallQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCallQueuePathParams)
    ], UpdateCallQueueRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCallQueueRequests)
    ], UpdateCallQueueRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateCallQueueSecurity)
    ], UpdateCallQueueRequest.prototype, "security", void 0);
    return UpdateCallQueueRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateCallQueueRequest = UpdateCallQueueRequest;
var UpdateCallQueueResponse = /** @class */ (function (_super) {
    __extends(UpdateCallQueueResponse, _super);
    function UpdateCallQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateCallQueueResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateCallQueueResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateCallQueueResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateCallQueueResponse.prototype, "updateCallQueue204ApplicationJSONAny", void 0);
    return UpdateCallQueueResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateCallQueueResponse = UpdateCallQueueResponse;
