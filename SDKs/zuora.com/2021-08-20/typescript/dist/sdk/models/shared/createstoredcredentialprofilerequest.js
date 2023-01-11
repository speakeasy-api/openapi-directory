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
exports.CreateStoredCredentialProfileRequest = exports.CreateStoredCredentialProfileRequestTypeEnum = exports.CreateStoredCredentialProfileRequestStatusEnum = exports.CreateStoredCredentialProfileRequestConsentAgreementSrcEnum = exports.CreateStoredCredentialProfileRequestActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var CreateStoredCredentialProfileRequestActionEnum;
(function (CreateStoredCredentialProfileRequestActionEnum) {
    CreateStoredCredentialProfileRequestActionEnum["Activate"] = "Activate";
    CreateStoredCredentialProfileRequestActionEnum["Persist"] = "Persist";
})(CreateStoredCredentialProfileRequestActionEnum = exports.CreateStoredCredentialProfileRequestActionEnum || (exports.CreateStoredCredentialProfileRequestActionEnum = {}));
var CreateStoredCredentialProfileRequestConsentAgreementSrcEnum;
(function (CreateStoredCredentialProfileRequestConsentAgreementSrcEnum) {
    CreateStoredCredentialProfileRequestConsentAgreementSrcEnum["External"] = "External";
})(CreateStoredCredentialProfileRequestConsentAgreementSrcEnum = exports.CreateStoredCredentialProfileRequestConsentAgreementSrcEnum || (exports.CreateStoredCredentialProfileRequestConsentAgreementSrcEnum = {}));
var CreateStoredCredentialProfileRequestStatusEnum;
(function (CreateStoredCredentialProfileRequestStatusEnum) {
    CreateStoredCredentialProfileRequestStatusEnum["Agreed"] = "Agreed";
    CreateStoredCredentialProfileRequestStatusEnum["Active"] = "Active";
})(CreateStoredCredentialProfileRequestStatusEnum = exports.CreateStoredCredentialProfileRequestStatusEnum || (exports.CreateStoredCredentialProfileRequestStatusEnum = {}));
var CreateStoredCredentialProfileRequestTypeEnum;
(function (CreateStoredCredentialProfileRequestTypeEnum) {
    CreateStoredCredentialProfileRequestTypeEnum["Recurring"] = "Recurring";
    CreateStoredCredentialProfileRequestTypeEnum["Unscheduled"] = "Unscheduled";
})(CreateStoredCredentialProfileRequestTypeEnum = exports.CreateStoredCredentialProfileRequestTypeEnum || (exports.CreateStoredCredentialProfileRequestTypeEnum = {}));
var CreateStoredCredentialProfileRequest = /** @class */ (function (_super) {
    __extends(CreateStoredCredentialProfileRequest, _super);
    function CreateStoredCredentialProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateStoredCredentialProfileRequest.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agreedOn" }),
        __metadata("design:type", Date)
    ], CreateStoredCredentialProfileRequest.prototype, "agreedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authGateway" }),
        __metadata("design:type", String)
    ], CreateStoredCredentialProfileRequest.prototype, "authGateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cardSecurityCode" }),
        __metadata("design:type", String)
    ], CreateStoredCredentialProfileRequest.prototype, "cardSecurityCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentAgreementRef" }),
        __metadata("design:type", String)
    ], CreateStoredCredentialProfileRequest.prototype, "consentAgreementRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentAgreementSrc" }),
        __metadata("design:type", String)
    ], CreateStoredCredentialProfileRequest.prototype, "consentAgreementSrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkTransactionId" }),
        __metadata("design:type", String)
    ], CreateStoredCredentialProfileRequest.prototype, "networkTransactionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CreateStoredCredentialProfileRequest.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateStoredCredentialProfileRequest.prototype, "type", void 0);
    return CreateStoredCredentialProfileRequest;
}(utils_1.SpeakeasyBase));
exports.CreateStoredCredentialProfileRequest = CreateStoredCredentialProfileRequest;
