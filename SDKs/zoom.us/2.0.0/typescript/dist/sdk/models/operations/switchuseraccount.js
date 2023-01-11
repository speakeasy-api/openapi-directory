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
exports.SwitchUserAccountResponse = exports.SwitchUserAccountRequest = exports.SwitchUserAccountSecurity = exports.SwitchUserAccountRequests = exports.SwitchUserAccountMultipartFormData = exports.SwitchUserAccountApplicationJson = exports.SwitchUserAccountPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SwitchUserAccountPathParams = /** @class */ (function (_super) {
    __extends(SwitchUserAccountPathParams, _super);
    function SwitchUserAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], SwitchUserAccountPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], SwitchUserAccountPathParams.prototype, "userId", void 0);
    return SwitchUserAccountPathParams;
}(utils_1.SpeakeasyBase));
exports.SwitchUserAccountPathParams = SwitchUserAccountPathParams;
var SwitchUserAccountApplicationJson = /** @class */ (function (_super) {
    __extends(SwitchUserAccountApplicationJson, _super);
    function SwitchUserAccountApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], SwitchUserAccountApplicationJson.prototype, "accountId", void 0);
    return SwitchUserAccountApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SwitchUserAccountApplicationJson = SwitchUserAccountApplicationJson;
var SwitchUserAccountMultipartFormData = /** @class */ (function (_super) {
    __extends(SwitchUserAccountMultipartFormData, _super);
    function SwitchUserAccountMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=account_id" }),
        __metadata("design:type", String)
    ], SwitchUserAccountMultipartFormData.prototype, "accountId", void 0);
    return SwitchUserAccountMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.SwitchUserAccountMultipartFormData = SwitchUserAccountMultipartFormData;
var SwitchUserAccountRequests = /** @class */ (function (_super) {
    __extends(SwitchUserAccountRequests, _super);
    function SwitchUserAccountRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SwitchUserAccountApplicationJson)
    ], SwitchUserAccountRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SwitchUserAccountMultipartFormData)
    ], SwitchUserAccountRequests.prototype, "object1", void 0);
    return SwitchUserAccountRequests;
}(utils_1.SpeakeasyBase));
exports.SwitchUserAccountRequests = SwitchUserAccountRequests;
var SwitchUserAccountSecurity = /** @class */ (function (_super) {
    __extends(SwitchUserAccountSecurity, _super);
    function SwitchUserAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], SwitchUserAccountSecurity.prototype, "oAuth", void 0);
    return SwitchUserAccountSecurity;
}(utils_1.SpeakeasyBase));
exports.SwitchUserAccountSecurity = SwitchUserAccountSecurity;
var SwitchUserAccountRequest = /** @class */ (function (_super) {
    __extends(SwitchUserAccountRequest, _super);
    function SwitchUserAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SwitchUserAccountPathParams)
    ], SwitchUserAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SwitchUserAccountRequests)
    ], SwitchUserAccountRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SwitchUserAccountSecurity)
    ], SwitchUserAccountRequest.prototype, "security", void 0);
    return SwitchUserAccountRequest;
}(utils_1.SpeakeasyBase));
exports.SwitchUserAccountRequest = SwitchUserAccountRequest;
var SwitchUserAccountResponse = /** @class */ (function (_super) {
    __extends(SwitchUserAccountResponse, _super);
    function SwitchUserAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SwitchUserAccountResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SwitchUserAccountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SwitchUserAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SwitchUserAccountResponse.prototype, "switchUserAccount204ApplicationJSONAny", void 0);
    return SwitchUserAccountResponse;
}(utils_1.SpeakeasyBase));
exports.SwitchUserAccountResponse = SwitchUserAccountResponse;
