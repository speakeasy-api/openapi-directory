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
exports.AddCommonAreaPhoneResponse = exports.AddCommonAreaPhoneRequest = exports.AddCommonAreaPhone201ApplicationJson = exports.AddCommonAreaPhoneSecurity = exports.AddCommonAreaPhoneRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddCommonAreaPhoneRequestBody = /** @class */ (function (_super) {
    __extends(AddCommonAreaPhoneRequestBody, _super);
    function AddCommonAreaPhoneRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AddCommonAreaPhoneRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], AddCommonAreaPhoneRequestBody.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], AddCommonAreaPhoneRequestBody.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], AddCommonAreaPhoneRequestBody.prototype, "macAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], AddCommonAreaPhoneRequestBody.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], AddCommonAreaPhoneRequestBody.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_zone" }),
        __metadata("design:type", String)
    ], AddCommonAreaPhoneRequestBody.prototype, "timeZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AddCommonAreaPhoneRequestBody.prototype, "type", void 0);
    return AddCommonAreaPhoneRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddCommonAreaPhoneRequestBody = AddCommonAreaPhoneRequestBody;
var AddCommonAreaPhoneSecurity = /** @class */ (function (_super) {
    __extends(AddCommonAreaPhoneSecurity, _super);
    function AddCommonAreaPhoneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AddCommonAreaPhoneSecurity.prototype, "oAuth", void 0);
    return AddCommonAreaPhoneSecurity;
}(utils_1.SpeakeasyBase));
exports.AddCommonAreaPhoneSecurity = AddCommonAreaPhoneSecurity;
var AddCommonAreaPhone201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddCommonAreaPhone201ApplicationJson, _super);
    function AddCommonAreaPhone201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], AddCommonAreaPhone201ApplicationJson.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddCommonAreaPhone201ApplicationJson.prototype, "id", void 0);
    return AddCommonAreaPhone201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddCommonAreaPhone201ApplicationJson = AddCommonAreaPhone201ApplicationJson;
var AddCommonAreaPhoneRequest = /** @class */ (function (_super) {
    __extends(AddCommonAreaPhoneRequest, _super);
    function AddCommonAreaPhoneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddCommonAreaPhoneRequestBody)
    ], AddCommonAreaPhoneRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddCommonAreaPhoneSecurity)
    ], AddCommonAreaPhoneRequest.prototype, "security", void 0);
    return AddCommonAreaPhoneRequest;
}(utils_1.SpeakeasyBase));
exports.AddCommonAreaPhoneRequest = AddCommonAreaPhoneRequest;
var AddCommonAreaPhoneResponse = /** @class */ (function (_super) {
    __extends(AddCommonAreaPhoneResponse, _super);
    function AddCommonAreaPhoneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddCommonAreaPhoneResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddCommonAreaPhoneResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddCommonAreaPhoneResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddCommonAreaPhone201ApplicationJson)
    ], AddCommonAreaPhoneResponse.prototype, "addCommonAreaPhone201ApplicationJSONObject", void 0);
    return AddCommonAreaPhoneResponse;
}(utils_1.SpeakeasyBase));
exports.AddCommonAreaPhoneResponse = AddCommonAreaPhoneResponse;
