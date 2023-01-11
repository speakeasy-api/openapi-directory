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
exports.UpdatePhoneNumberDetailsResponse = exports.UpdatePhoneNumberDetailsRequest = exports.UpdatePhoneNumberDetailsSecurity = exports.UpdatePhoneNumberDetailsRequests = exports.UpdatePhoneNumberDetailsMultipartFormData = exports.UpdatePhoneNumberDetailsApplicationJson = exports.UpdatePhoneNumberDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdatePhoneNumberDetailsPathParams = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberDetailsPathParams, _super);
    function UpdatePhoneNumberDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=numberId" }),
        __metadata("design:type", String)
    ], UpdatePhoneNumberDetailsPathParams.prototype, "numberId", void 0);
    return UpdatePhoneNumberDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneNumberDetailsPathParams = UpdatePhoneNumberDetailsPathParams;
var UpdatePhoneNumberDetailsApplicationJson = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberDetailsApplicationJson, _super);
    function UpdatePhoneNumberDetailsApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=capability" }),
        __metadata("design:type", Array)
    ], UpdatePhoneNumberDetailsApplicationJson.prototype, "capability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], UpdatePhoneNumberDetailsApplicationJson.prototype, "displayName", void 0);
    return UpdatePhoneNumberDetailsApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneNumberDetailsApplicationJson = UpdatePhoneNumberDetailsApplicationJson;
var UpdatePhoneNumberDetailsMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberDetailsMultipartFormData, _super);
    function UpdatePhoneNumberDetailsMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=capability;json=true" }),
        __metadata("design:type", Array)
    ], UpdatePhoneNumberDetailsMultipartFormData.prototype, "capability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=display_name" }),
        __metadata("design:type", String)
    ], UpdatePhoneNumberDetailsMultipartFormData.prototype, "displayName", void 0);
    return UpdatePhoneNumberDetailsMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneNumberDetailsMultipartFormData = UpdatePhoneNumberDetailsMultipartFormData;
var UpdatePhoneNumberDetailsRequests = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberDetailsRequests, _super);
    function UpdatePhoneNumberDetailsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePhoneNumberDetailsApplicationJson)
    ], UpdatePhoneNumberDetailsRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdatePhoneNumberDetailsMultipartFormData)
    ], UpdatePhoneNumberDetailsRequests.prototype, "object1", void 0);
    return UpdatePhoneNumberDetailsRequests;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneNumberDetailsRequests = UpdatePhoneNumberDetailsRequests;
var UpdatePhoneNumberDetailsSecurity = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberDetailsSecurity, _super);
    function UpdatePhoneNumberDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdatePhoneNumberDetailsSecurity.prototype, "oAuth", void 0);
    return UpdatePhoneNumberDetailsSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneNumberDetailsSecurity = UpdatePhoneNumberDetailsSecurity;
var UpdatePhoneNumberDetailsRequest = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberDetailsRequest, _super);
    function UpdatePhoneNumberDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePhoneNumberDetailsPathParams)
    ], UpdatePhoneNumberDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePhoneNumberDetailsRequests)
    ], UpdatePhoneNumberDetailsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePhoneNumberDetailsSecurity)
    ], UpdatePhoneNumberDetailsRequest.prototype, "security", void 0);
    return UpdatePhoneNumberDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneNumberDetailsRequest = UpdatePhoneNumberDetailsRequest;
var UpdatePhoneNumberDetailsResponse = /** @class */ (function (_super) {
    __extends(UpdatePhoneNumberDetailsResponse, _super);
    function UpdatePhoneNumberDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdatePhoneNumberDetailsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdatePhoneNumberDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdatePhoneNumberDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePhoneNumberDetailsResponse.prototype, "updatePhoneNumberDetails204ApplicationJSONAny", void 0);
    return UpdatePhoneNumberDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneNumberDetailsResponse = UpdatePhoneNumberDetailsResponse;
