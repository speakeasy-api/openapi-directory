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
exports.CreatePhoneSiteResponse = exports.CreatePhoneSiteRequest = exports.CreatePhoneSite204ApplicationJson = exports.CreatePhoneSiteSecurity = exports.CreatePhoneSiteRequests = exports.CreatePhoneSiteMultipartFormData = exports.CreatePhoneSiteMultipartFormDataShortExtension = exports.CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress = exports.CreatePhoneSiteApplicationJson = exports.CreatePhoneSiteApplicationJsonShortExtension = exports.CreatePhoneSiteApplicationJsonDefaultEmergencyAddress = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreatePhoneSiteApplicationJsonDefaultEmergencyAddress = /** @class */ (function (_super) {
    __extends(CreatePhoneSiteApplicationJsonDefaultEmergencyAddress, _super);
    function CreatePhoneSiteApplicationJsonDefaultEmergencyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address_line1" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteApplicationJsonDefaultEmergencyAddress.prototype, "addressLine1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address_line2" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteApplicationJsonDefaultEmergencyAddress.prototype, "addressLine2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteApplicationJsonDefaultEmergencyAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteApplicationJsonDefaultEmergencyAddress.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state_code" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteApplicationJsonDefaultEmergencyAddress.prototype, "stateCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteApplicationJsonDefaultEmergencyAddress.prototype, "zip", void 0);
    return CreatePhoneSiteApplicationJsonDefaultEmergencyAddress;
}(utils_1.SpeakeasyBase));
exports.CreatePhoneSiteApplicationJsonDefaultEmergencyAddress = CreatePhoneSiteApplicationJsonDefaultEmergencyAddress;
// CreatePhoneSiteApplicationJsonShortExtension
/**
 * Short extension of the phone site.
**/
var CreatePhoneSiteApplicationJsonShortExtension = /** @class */ (function (_super) {
    __extends(CreatePhoneSiteApplicationJsonShortExtension, _super);
    function CreatePhoneSiteApplicationJsonShortExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], CreatePhoneSiteApplicationJsonShortExtension.prototype, "length", void 0);
    return CreatePhoneSiteApplicationJsonShortExtension;
}(utils_1.SpeakeasyBase));
exports.CreatePhoneSiteApplicationJsonShortExtension = CreatePhoneSiteApplicationJsonShortExtension;
var CreatePhoneSiteApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePhoneSiteApplicationJson, _super);
    function CreatePhoneSiteApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_receptionist_name" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteApplicationJson.prototype, "autoReceptionistName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_emergency_address" }),
        __metadata("design:type", CreatePhoneSiteApplicationJsonDefaultEmergencyAddress)
    ], CreatePhoneSiteApplicationJson.prototype, "defaultEmergencyAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=short_extension" }),
        __metadata("design:type", CreatePhoneSiteApplicationJsonShortExtension)
    ], CreatePhoneSiteApplicationJson.prototype, "shortExtension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_code" }),
        __metadata("design:type", Number)
    ], CreatePhoneSiteApplicationJson.prototype, "siteCode", void 0);
    return CreatePhoneSiteApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreatePhoneSiteApplicationJson = CreatePhoneSiteApplicationJson;
var CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress = /** @class */ (function (_super) {
    __extends(CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress, _super);
    function CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address_line1" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress.prototype, "addressLine1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address_line2" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress.prototype, "addressLine2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state_code" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress.prototype, "stateCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress.prototype, "zip", void 0);
    return CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress;
}(utils_1.SpeakeasyBase));
exports.CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress = CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress;
// CreatePhoneSiteMultipartFormDataShortExtension
/**
 * Short extension of the phone site.
**/
var CreatePhoneSiteMultipartFormDataShortExtension = /** @class */ (function (_super) {
    __extends(CreatePhoneSiteMultipartFormDataShortExtension, _super);
    function CreatePhoneSiteMultipartFormDataShortExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], CreatePhoneSiteMultipartFormDataShortExtension.prototype, "length", void 0);
    return CreatePhoneSiteMultipartFormDataShortExtension;
}(utils_1.SpeakeasyBase));
exports.CreatePhoneSiteMultipartFormDataShortExtension = CreatePhoneSiteMultipartFormDataShortExtension;
var CreatePhoneSiteMultipartFormData = /** @class */ (function (_super) {
    __extends(CreatePhoneSiteMultipartFormData, _super);
    function CreatePhoneSiteMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=auto_receptionist_name" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteMultipartFormData.prototype, "autoReceptionistName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=default_emergency_address;json=true" }),
        __metadata("design:type", CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress)
    ], CreatePhoneSiteMultipartFormData.prototype, "defaultEmergencyAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], CreatePhoneSiteMultipartFormData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=short_extension;json=true" }),
        __metadata("design:type", CreatePhoneSiteMultipartFormDataShortExtension)
    ], CreatePhoneSiteMultipartFormData.prototype, "shortExtension", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=site_code" }),
        __metadata("design:type", Number)
    ], CreatePhoneSiteMultipartFormData.prototype, "siteCode", void 0);
    return CreatePhoneSiteMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.CreatePhoneSiteMultipartFormData = CreatePhoneSiteMultipartFormData;
var CreatePhoneSiteRequests = /** @class */ (function (_super) {
    __extends(CreatePhoneSiteRequests, _super);
    function CreatePhoneSiteRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreatePhoneSiteApplicationJson)
    ], CreatePhoneSiteRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CreatePhoneSiteMultipartFormData)
    ], CreatePhoneSiteRequests.prototype, "object1", void 0);
    return CreatePhoneSiteRequests;
}(utils_1.SpeakeasyBase));
exports.CreatePhoneSiteRequests = CreatePhoneSiteRequests;
var CreatePhoneSiteSecurity = /** @class */ (function (_super) {
    __extends(CreatePhoneSiteSecurity, _super);
    function CreatePhoneSiteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], CreatePhoneSiteSecurity.prototype, "oAuth", void 0);
    return CreatePhoneSiteSecurity;
}(utils_1.SpeakeasyBase));
exports.CreatePhoneSiteSecurity = CreatePhoneSiteSecurity;
var CreatePhoneSite204ApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePhoneSite204ApplicationJson, _super);
    function CreatePhoneSite204ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreatePhoneSite204ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreatePhoneSite204ApplicationJson.prototype, "name", void 0);
    return CreatePhoneSite204ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreatePhoneSite204ApplicationJson = CreatePhoneSite204ApplicationJson;
var CreatePhoneSiteRequest = /** @class */ (function (_super) {
    __extends(CreatePhoneSiteRequest, _super);
    function CreatePhoneSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreatePhoneSiteRequests)
    ], CreatePhoneSiteRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreatePhoneSiteSecurity)
    ], CreatePhoneSiteRequest.prototype, "security", void 0);
    return CreatePhoneSiteRequest;
}(utils_1.SpeakeasyBase));
exports.CreatePhoneSiteRequest = CreatePhoneSiteRequest;
var CreatePhoneSiteResponse = /** @class */ (function (_super) {
    __extends(CreatePhoneSiteResponse, _super);
    function CreatePhoneSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CreatePhoneSiteResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreatePhoneSiteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreatePhoneSiteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreatePhoneSite204ApplicationJson)
    ], CreatePhoneSiteResponse.prototype, "createPhoneSite204ApplicationJSONObject", void 0);
    return CreatePhoneSiteResponse;
}(utils_1.SpeakeasyBase));
exports.CreatePhoneSiteResponse = CreatePhoneSiteResponse;
