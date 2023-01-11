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
exports.UpdatePhoneSipTrunkResponse = exports.UpdatePhoneSipTrunkRequest = exports.UpdatePhoneSipTrunkSecurity = exports.UpdatePhoneSipTrunkRequests = exports.UpdatePhoneSipTrunkMultipartFormData = exports.UpdatePhoneSipTrunkApplicationJson = exports.UpdatePhoneSipTrunkPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdatePhoneSipTrunkPathParams = /** @class */ (function (_super) {
    __extends(UpdatePhoneSipTrunkPathParams, _super);
    function UpdatePhoneSipTrunkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], UpdatePhoneSipTrunkPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sipTrunkId" }),
        __metadata("design:type", String)
    ], UpdatePhoneSipTrunkPathParams.prototype, "sipTrunkId", void 0);
    return UpdatePhoneSipTrunkPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSipTrunkPathParams = UpdatePhoneSipTrunkPathParams;
var UpdatePhoneSipTrunkApplicationJson = /** @class */ (function (_super) {
    __extends(UpdatePhoneSipTrunkApplicationJson, _super);
    function UpdatePhoneSipTrunkApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_account" }),
        __metadata("design:type", String)
    ], UpdatePhoneSipTrunkApplicationJson.prototype, "carrierAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdatePhoneSipTrunkApplicationJson.prototype, "name", void 0);
    return UpdatePhoneSipTrunkApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSipTrunkApplicationJson = UpdatePhoneSipTrunkApplicationJson;
var UpdatePhoneSipTrunkMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdatePhoneSipTrunkMultipartFormData, _super);
    function UpdatePhoneSipTrunkMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=carrier_account" }),
        __metadata("design:type", String)
    ], UpdatePhoneSipTrunkMultipartFormData.prototype, "carrierAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], UpdatePhoneSipTrunkMultipartFormData.prototype, "name", void 0);
    return UpdatePhoneSipTrunkMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSipTrunkMultipartFormData = UpdatePhoneSipTrunkMultipartFormData;
var UpdatePhoneSipTrunkRequests = /** @class */ (function (_super) {
    __extends(UpdatePhoneSipTrunkRequests, _super);
    function UpdatePhoneSipTrunkRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePhoneSipTrunkApplicationJson)
    ], UpdatePhoneSipTrunkRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdatePhoneSipTrunkMultipartFormData)
    ], UpdatePhoneSipTrunkRequests.prototype, "object1", void 0);
    return UpdatePhoneSipTrunkRequests;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSipTrunkRequests = UpdatePhoneSipTrunkRequests;
var UpdatePhoneSipTrunkSecurity = /** @class */ (function (_super) {
    __extends(UpdatePhoneSipTrunkSecurity, _super);
    function UpdatePhoneSipTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdatePhoneSipTrunkSecurity.prototype, "oAuth", void 0);
    return UpdatePhoneSipTrunkSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSipTrunkSecurity = UpdatePhoneSipTrunkSecurity;
var UpdatePhoneSipTrunkRequest = /** @class */ (function (_super) {
    __extends(UpdatePhoneSipTrunkRequest, _super);
    function UpdatePhoneSipTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePhoneSipTrunkPathParams)
    ], UpdatePhoneSipTrunkRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePhoneSipTrunkRequests)
    ], UpdatePhoneSipTrunkRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePhoneSipTrunkSecurity)
    ], UpdatePhoneSipTrunkRequest.prototype, "security", void 0);
    return UpdatePhoneSipTrunkRequest;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSipTrunkRequest = UpdatePhoneSipTrunkRequest;
var UpdatePhoneSipTrunkResponse = /** @class */ (function (_super) {
    __extends(UpdatePhoneSipTrunkResponse, _super);
    function UpdatePhoneSipTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdatePhoneSipTrunkResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdatePhoneSipTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdatePhoneSipTrunkResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePhoneSipTrunkResponse.prototype, "updatePhoneSIPTrunk204ApplicationJSONAny", void 0);
    return UpdatePhoneSipTrunkResponse;
}(utils_1.SpeakeasyBase));
exports.UpdatePhoneSipTrunkResponse = UpdatePhoneSipTrunkResponse;
