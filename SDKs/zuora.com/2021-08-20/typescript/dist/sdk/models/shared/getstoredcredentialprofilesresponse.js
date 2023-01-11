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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStoredCredentialProfilesResponse = exports.GetStoredCredentialProfilesResponseProfiles = exports.GetStoredCredentialProfilesResponseProfilesTypeEnum = exports.GetStoredCredentialProfilesResponseProfilesStatusEnum = exports.GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum;
(function (GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum) {
    GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum["External"] = "External";
})(GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum = exports.GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum || (exports.GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum = {}));
var GetStoredCredentialProfilesResponseProfilesStatusEnum;
(function (GetStoredCredentialProfilesResponseProfilesStatusEnum) {
    GetStoredCredentialProfilesResponseProfilesStatusEnum["Agreed"] = "Agreed";
    GetStoredCredentialProfilesResponseProfilesStatusEnum["Active"] = "Active";
    GetStoredCredentialProfilesResponseProfilesStatusEnum["Cancelled"] = "Cancelled";
    GetStoredCredentialProfilesResponseProfilesStatusEnum["Expired"] = "Expired";
})(GetStoredCredentialProfilesResponseProfilesStatusEnum = exports.GetStoredCredentialProfilesResponseProfilesStatusEnum || (exports.GetStoredCredentialProfilesResponseProfilesStatusEnum = {}));
var GetStoredCredentialProfilesResponseProfilesTypeEnum;
(function (GetStoredCredentialProfilesResponseProfilesTypeEnum) {
    GetStoredCredentialProfilesResponseProfilesTypeEnum["Recurring"] = "Recurring";
    GetStoredCredentialProfilesResponseProfilesTypeEnum["Unscheduled"] = "Unscheduled";
})(GetStoredCredentialProfilesResponseProfilesTypeEnum = exports.GetStoredCredentialProfilesResponseProfilesTypeEnum || (exports.GetStoredCredentialProfilesResponseProfilesTypeEnum = {}));
// GetStoredCredentialProfilesResponseProfiles
/**
 * Container for stored credential profiles.
 *
**/
var GetStoredCredentialProfilesResponseProfiles = /** @class */ (function (_super) {
    __extends(GetStoredCredentialProfilesResponseProfiles, _super);
    function GetStoredCredentialProfilesResponseProfiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activatedOn" }),
        __metadata("design:type", Date)
    ], GetStoredCredentialProfilesResponseProfiles.prototype, "activatedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agreedOn" }),
        __metadata("design:type", Date)
    ], GetStoredCredentialProfilesResponseProfiles.prototype, "agreedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], GetStoredCredentialProfilesResponseProfiles.prototype, "brand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelledOn" }),
        __metadata("design:type", Date)
    ], GetStoredCredentialProfilesResponseProfiles.prototype, "cancelledOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentAgreementRef" }),
        __metadata("design:type", String)
    ], GetStoredCredentialProfilesResponseProfiles.prototype, "consentAgreementRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentAgreementSrc" }),
        __metadata("design:type", String)
    ], GetStoredCredentialProfilesResponseProfiles.prototype, "consentAgreementSrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiredOn" }),
        __metadata("design:type", Date)
    ], GetStoredCredentialProfilesResponseProfiles.prototype, "expiredOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], GetStoredCredentialProfilesResponseProfiles.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodId" }),
        __metadata("design:type", String)
    ], GetStoredCredentialProfilesResponseProfiles.prototype, "paymentMethodId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetStoredCredentialProfilesResponseProfiles.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetStoredCredentialProfilesResponseProfiles.prototype, "type", void 0);
    return GetStoredCredentialProfilesResponseProfiles;
}(utils_1.SpeakeasyBase));
exports.GetStoredCredentialProfilesResponseProfiles = GetStoredCredentialProfilesResponseProfiles;
var GetStoredCredentialProfilesResponse = /** @class */ (function (_super) {
    __extends(GetStoredCredentialProfilesResponse, _super);
    function GetStoredCredentialProfilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profiles" }),
        __metadata("design:type", GetStoredCredentialProfilesResponseProfiles)
    ], GetStoredCredentialProfilesResponse.prototype, "profiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetStoredCredentialProfilesResponse.prototype, "success", void 0);
    return GetStoredCredentialProfilesResponse;
}(utils_1.SpeakeasyBase));
exports.GetStoredCredentialProfilesResponse = GetStoredCredentialProfilesResponse;
