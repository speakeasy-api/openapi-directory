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
exports.UpdateUserProfileResponse = exports.UpdateUserProfileRequest = exports.UpdateUserProfileSecurity = exports.UpdateUserProfileRequests = exports.UpdateUserProfileMultipartFormData = exports.UpdateUserProfileApplicationJson = exports.UpdateUserProfilePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateUserProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateUserProfilePathParams, _super);
    function UpdateUserProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UpdateUserProfilePathParams.prototype, "userId", void 0);
    return UpdateUserProfilePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateUserProfilePathParams = UpdateUserProfilePathParams;
var UpdateUserProfileApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateUserProfileApplicationJson, _super);
    function UpdateUserProfileApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], UpdateUserProfileApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], UpdateUserProfileApplicationJson.prototype, "siteId", void 0);
    return UpdateUserProfileApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateUserProfileApplicationJson = UpdateUserProfileApplicationJson;
var UpdateUserProfileMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateUserProfileMultipartFormData, _super);
    function UpdateUserProfileMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=extension_number" }),
        __metadata("design:type", String)
    ], UpdateUserProfileMultipartFormData.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=site_id" }),
        __metadata("design:type", String)
    ], UpdateUserProfileMultipartFormData.prototype, "siteId", void 0);
    return UpdateUserProfileMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateUserProfileMultipartFormData = UpdateUserProfileMultipartFormData;
var UpdateUserProfileRequests = /** @class */ (function (_super) {
    __extends(UpdateUserProfileRequests, _super);
    function UpdateUserProfileRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateUserProfileApplicationJson)
    ], UpdateUserProfileRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateUserProfileMultipartFormData)
    ], UpdateUserProfileRequests.prototype, "object1", void 0);
    return UpdateUserProfileRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateUserProfileRequests = UpdateUserProfileRequests;
var UpdateUserProfileSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserProfileSecurity, _super);
    function UpdateUserProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateUserProfileSecurity.prototype, "oAuth", void 0);
    return UpdateUserProfileSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateUserProfileSecurity = UpdateUserProfileSecurity;
var UpdateUserProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateUserProfileRequest, _super);
    function UpdateUserProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserProfilePathParams)
    ], UpdateUserProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserProfileRequests)
    ], UpdateUserProfileRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserProfileSecurity)
    ], UpdateUserProfileRequest.prototype, "security", void 0);
    return UpdateUserProfileRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUserProfileRequest = UpdateUserProfileRequest;
var UpdateUserProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateUserProfileResponse, _super);
    function UpdateUserProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateUserProfileResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUserProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateUserProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateUserProfileResponse.prototype, "updateUserProfile204ApplicationJSONAny", void 0);
    return UpdateUserProfileResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateUserProfileResponse = UpdateUserProfileResponse;
