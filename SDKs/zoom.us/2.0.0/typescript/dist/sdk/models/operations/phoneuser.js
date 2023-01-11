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
exports.PhoneUserResponse = exports.PhoneUserRequest = exports.PhoneUser200ApplicationJson = exports.PhoneUser200ApplicationJsonStatusEnum = exports.PhoneUser200ApplicationJsonPhoneNumbers = exports.PhoneUser200ApplicationJsonCallingPlan = exports.PhoneUserSecurity = exports.PhoneUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PhoneUserPathParams = /** @class */ (function (_super) {
    __extends(PhoneUserPathParams, _super);
    function PhoneUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PhoneUserPathParams.prototype, "userId", void 0);
    return PhoneUserPathParams;
}(utils_1.SpeakeasyBase));
exports.PhoneUserPathParams = PhoneUserPathParams;
var PhoneUserSecurity = /** @class */ (function (_super) {
    __extends(PhoneUserSecurity, _super);
    function PhoneUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], PhoneUserSecurity.prototype, "oAuth", void 0);
    return PhoneUserSecurity;
}(utils_1.SpeakeasyBase));
exports.PhoneUserSecurity = PhoneUserSecurity;
var PhoneUser200ApplicationJsonCallingPlan = /** @class */ (function (_super) {
    __extends(PhoneUser200ApplicationJsonCallingPlan, _super);
    function PhoneUser200ApplicationJsonCallingPlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], PhoneUser200ApplicationJsonCallingPlan.prototype, "type", void 0);
    return PhoneUser200ApplicationJsonCallingPlan;
}(utils_1.SpeakeasyBase));
exports.PhoneUser200ApplicationJsonCallingPlan = PhoneUser200ApplicationJsonCallingPlan;
var PhoneUser200ApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(PhoneUser200ApplicationJsonPhoneNumbers, _super);
    function PhoneUser200ApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PhoneUser200ApplicationJsonPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PhoneUser200ApplicationJsonPhoneNumbers.prototype, "number", void 0);
    return PhoneUser200ApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.PhoneUser200ApplicationJsonPhoneNumbers = PhoneUser200ApplicationJsonPhoneNumbers;
var PhoneUser200ApplicationJsonStatusEnum;
(function (PhoneUser200ApplicationJsonStatusEnum) {
    PhoneUser200ApplicationJsonStatusEnum["Activate"] = "activate";
    PhoneUser200ApplicationJsonStatusEnum["Deactivate"] = "deactivate";
})(PhoneUser200ApplicationJsonStatusEnum = exports.PhoneUser200ApplicationJsonStatusEnum || (exports.PhoneUser200ApplicationJsonStatusEnum = {}));
// PhoneUser200ApplicationJson
/**
 * Zoom User Profile
**/
var PhoneUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(PhoneUser200ApplicationJson, _super);
    function PhoneUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calling_plan", elemType: PhoneUser200ApplicationJsonCallingPlan }),
        __metadata("design:type", Array)
    ], PhoneUser200ApplicationJson.prototype, "callingPlan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PhoneUser200ApplicationJson.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], PhoneUser200ApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PhoneUser200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: PhoneUser200ApplicationJsonPhoneNumbers }),
        __metadata("design:type", Array)
    ], PhoneUser200ApplicationJson.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_user_id" }),
        __metadata("design:type", String)
    ], PhoneUser200ApplicationJson.prototype, "phoneUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PhoneUser200ApplicationJson.prototype, "siteAdmin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], PhoneUser200ApplicationJson.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PhoneUser200ApplicationJson.prototype, "status", void 0);
    return PhoneUser200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PhoneUser200ApplicationJson = PhoneUser200ApplicationJson;
var PhoneUserRequest = /** @class */ (function (_super) {
    __extends(PhoneUserRequest, _super);
    function PhoneUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserPathParams)
    ], PhoneUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUserSecurity)
    ], PhoneUserRequest.prototype, "security", void 0);
    return PhoneUserRequest;
}(utils_1.SpeakeasyBase));
exports.PhoneUserRequest = PhoneUserRequest;
var PhoneUserResponse = /** @class */ (function (_super) {
    __extends(PhoneUserResponse, _super);
    function PhoneUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PhoneUserResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PhoneUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PhoneUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhoneUser200ApplicationJson)
    ], PhoneUserResponse.prototype, "phoneUser200ApplicationJSONObject", void 0);
    return PhoneUserResponse;
}(utils_1.SpeakeasyBase));
exports.PhoneUserResponse = PhoneUserResponse;
