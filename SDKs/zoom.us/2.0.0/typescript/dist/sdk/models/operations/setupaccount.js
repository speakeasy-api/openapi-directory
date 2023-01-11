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
exports.SetUpAccountResponse = exports.SetUpAccountRequest = exports.SetUpAccountSecurity = exports.SetUpAccountRequests = exports.SetUpAccountMultipartFormData = exports.SetUpAccountMultipartFormDataEmergencyAddress = exports.SetUpAccountApplicationJson = exports.SetUpAccountApplicationJsonEmergencyAddress = exports.SetUpAccountPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SetUpAccountPathParams = /** @class */ (function (_super) {
    __extends(SetUpAccountPathParams, _super);
    function SetUpAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], SetUpAccountPathParams.prototype, "accountId", void 0);
    return SetUpAccountPathParams;
}(utils_1.SpeakeasyBase));
exports.SetUpAccountPathParams = SetUpAccountPathParams;
// SetUpAccountApplicationJsonEmergencyAddress
/**
 * Specify emergency address for the account.
**/
var SetUpAccountApplicationJsonEmergencyAddress = /** @class */ (function (_super) {
    __extends(SetUpAccountApplicationJsonEmergencyAddress, _super);
    function SetUpAccountApplicationJsonEmergencyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address_line1" }),
        __metadata("design:type", String)
    ], SetUpAccountApplicationJsonEmergencyAddress.prototype, "addressLine1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address_line2" }),
        __metadata("design:type", String)
    ], SetUpAccountApplicationJsonEmergencyAddress.prototype, "addressLine2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], SetUpAccountApplicationJsonEmergencyAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], SetUpAccountApplicationJsonEmergencyAddress.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state_code" }),
        __metadata("design:type", String)
    ], SetUpAccountApplicationJsonEmergencyAddress.prototype, "stateCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], SetUpAccountApplicationJsonEmergencyAddress.prototype, "zip", void 0);
    return SetUpAccountApplicationJsonEmergencyAddress;
}(utils_1.SpeakeasyBase));
exports.SetUpAccountApplicationJsonEmergencyAddress = SetUpAccountApplicationJsonEmergencyAddress;
var SetUpAccountApplicationJson = /** @class */ (function (_super) {
    __extends(SetUpAccountApplicationJson, _super);
    function SetUpAccountApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emergency_address" }),
        __metadata("design:type", SetUpAccountApplicationJsonEmergencyAddress)
    ], SetUpAccountApplicationJson.prototype, "emergencyAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], SetUpAccountApplicationJson.prototype, "extensionNumber", void 0);
    return SetUpAccountApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SetUpAccountApplicationJson = SetUpAccountApplicationJson;
// SetUpAccountMultipartFormDataEmergencyAddress
/**
 * Specify emergency address for the account.
**/
var SetUpAccountMultipartFormDataEmergencyAddress = /** @class */ (function (_super) {
    __extends(SetUpAccountMultipartFormDataEmergencyAddress, _super);
    function SetUpAccountMultipartFormDataEmergencyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address_line1" }),
        __metadata("design:type", String)
    ], SetUpAccountMultipartFormDataEmergencyAddress.prototype, "addressLine1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address_line2" }),
        __metadata("design:type", String)
    ], SetUpAccountMultipartFormDataEmergencyAddress.prototype, "addressLine2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], SetUpAccountMultipartFormDataEmergencyAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], SetUpAccountMultipartFormDataEmergencyAddress.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state_code" }),
        __metadata("design:type", String)
    ], SetUpAccountMultipartFormDataEmergencyAddress.prototype, "stateCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], SetUpAccountMultipartFormDataEmergencyAddress.prototype, "zip", void 0);
    return SetUpAccountMultipartFormDataEmergencyAddress;
}(utils_1.SpeakeasyBase));
exports.SetUpAccountMultipartFormDataEmergencyAddress = SetUpAccountMultipartFormDataEmergencyAddress;
var SetUpAccountMultipartFormData = /** @class */ (function (_super) {
    __extends(SetUpAccountMultipartFormData, _super);
    function SetUpAccountMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=emergency_address;json=true" }),
        __metadata("design:type", SetUpAccountMultipartFormDataEmergencyAddress)
    ], SetUpAccountMultipartFormData.prototype, "emergencyAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=extension_number" }),
        __metadata("design:type", String)
    ], SetUpAccountMultipartFormData.prototype, "extensionNumber", void 0);
    return SetUpAccountMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.SetUpAccountMultipartFormData = SetUpAccountMultipartFormData;
var SetUpAccountRequests = /** @class */ (function (_super) {
    __extends(SetUpAccountRequests, _super);
    function SetUpAccountRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetUpAccountApplicationJson)
    ], SetUpAccountRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SetUpAccountMultipartFormData)
    ], SetUpAccountRequests.prototype, "object1", void 0);
    return SetUpAccountRequests;
}(utils_1.SpeakeasyBase));
exports.SetUpAccountRequests = SetUpAccountRequests;
var SetUpAccountSecurity = /** @class */ (function (_super) {
    __extends(SetUpAccountSecurity, _super);
    function SetUpAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], SetUpAccountSecurity.prototype, "oAuth", void 0);
    return SetUpAccountSecurity;
}(utils_1.SpeakeasyBase));
exports.SetUpAccountSecurity = SetUpAccountSecurity;
var SetUpAccountRequest = /** @class */ (function (_super) {
    __extends(SetUpAccountRequest, _super);
    function SetUpAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetUpAccountPathParams)
    ], SetUpAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetUpAccountRequests)
    ], SetUpAccountRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetUpAccountSecurity)
    ], SetUpAccountRequest.prototype, "security", void 0);
    return SetUpAccountRequest;
}(utils_1.SpeakeasyBase));
exports.SetUpAccountRequest = SetUpAccountRequest;
var SetUpAccountResponse = /** @class */ (function (_super) {
    __extends(SetUpAccountResponse, _super);
    function SetUpAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SetUpAccountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SetUpAccountResponse.prototype, "statusCode", void 0);
    return SetUpAccountResponse;
}(utils_1.SpeakeasyBase));
exports.SetUpAccountResponse = SetUpAccountResponse;
