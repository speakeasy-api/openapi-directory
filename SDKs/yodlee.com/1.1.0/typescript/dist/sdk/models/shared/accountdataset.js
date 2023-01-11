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
exports.AccountDataset = exports.AccountDatasetUpdateEligibilityEnum = exports.AccountDatasetNameEnum = exports.AccountDatasetAdditionalStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var AccountDatasetAdditionalStatusEnum;
(function (AccountDatasetAdditionalStatusEnum) {
    AccountDatasetAdditionalStatusEnum["LoginInProgress"] = "LOGIN_IN_PROGRESS";
    AccountDatasetAdditionalStatusEnum["DataRetrievalInProgress"] = "DATA_RETRIEVAL_IN_PROGRESS";
    AccountDatasetAdditionalStatusEnum["AcctSummaryReceived"] = "ACCT_SUMMARY_RECEIVED";
    AccountDatasetAdditionalStatusEnum["AvailableDataRetrieved"] = "AVAILABLE_DATA_RETRIEVED";
    AccountDatasetAdditionalStatusEnum["PartialDataRetrieved"] = "PARTIAL_DATA_RETRIEVED";
    AccountDatasetAdditionalStatusEnum["DataRetrievalFailed"] = "DATA_RETRIEVAL_FAILED";
    AccountDatasetAdditionalStatusEnum["DataNotAvailable"] = "DATA_NOT_AVAILABLE";
    AccountDatasetAdditionalStatusEnum["AccountLocked"] = "ACCOUNT_LOCKED";
    AccountDatasetAdditionalStatusEnum["AddlAuthenticationRequired"] = "ADDL_AUTHENTICATION_REQUIRED";
    AccountDatasetAdditionalStatusEnum["BetaSiteDevInProgress"] = "BETA_SITE_DEV_IN_PROGRESS";
    AccountDatasetAdditionalStatusEnum["CredentialsUpdateNeeded"] = "CREDENTIALS_UPDATE_NEEDED";
    AccountDatasetAdditionalStatusEnum["IncorrectCredentials"] = "INCORRECT_CREDENTIALS";
    AccountDatasetAdditionalStatusEnum["PropertyValueNotAvailable"] = "PROPERTY_VALUE_NOT_AVAILABLE";
    AccountDatasetAdditionalStatusEnum["InvalidAddlInfoProvided"] = "INVALID_ADDL_INFO_PROVIDED";
    AccountDatasetAdditionalStatusEnum["RequestTimeOut"] = "REQUEST_TIME_OUT";
    AccountDatasetAdditionalStatusEnum["SiteBlockingError"] = "SITE_BLOCKING_ERROR";
    AccountDatasetAdditionalStatusEnum["UnexpectedSiteError"] = "UNEXPECTED_SITE_ERROR";
    AccountDatasetAdditionalStatusEnum["SiteNotSupported"] = "SITE_NOT_SUPPORTED";
    AccountDatasetAdditionalStatusEnum["SiteUnavailable"] = "SITE_UNAVAILABLE";
    AccountDatasetAdditionalStatusEnum["TechError"] = "TECH_ERROR";
    AccountDatasetAdditionalStatusEnum["UserActionNeededAtSite"] = "USER_ACTION_NEEDED_AT_SITE";
    AccountDatasetAdditionalStatusEnum["SiteSessionInvalidated"] = "SITE_SESSION_INVALIDATED";
    AccountDatasetAdditionalStatusEnum["NewAuthenticationRequired"] = "NEW_AUTHENTICATION_REQUIRED";
    AccountDatasetAdditionalStatusEnum["DatasetNotSupported"] = "DATASET_NOT_SUPPORTED";
    AccountDatasetAdditionalStatusEnum["EnrollmentRequiredForDataset"] = "ENROLLMENT_REQUIRED_FOR_DATASET";
    AccountDatasetAdditionalStatusEnum["ConsentRequired"] = "CONSENT_REQUIRED";
    AccountDatasetAdditionalStatusEnum["ConsentExpired"] = "CONSENT_EXPIRED";
    AccountDatasetAdditionalStatusEnum["ConsentRevoked"] = "CONSENT_REVOKED";
    AccountDatasetAdditionalStatusEnum["IncorrectOauthToken"] = "INCORRECT_OAUTH_TOKEN";
    AccountDatasetAdditionalStatusEnum["MigrationInProgress"] = "MIGRATION_IN_PROGRESS";
})(AccountDatasetAdditionalStatusEnum = exports.AccountDatasetAdditionalStatusEnum || (exports.AccountDatasetAdditionalStatusEnum = {}));
var AccountDatasetNameEnum;
(function (AccountDatasetNameEnum) {
    AccountDatasetNameEnum["BasicAggData"] = "BASIC_AGG_DATA";
    AccountDatasetNameEnum["AdvanceAggData"] = "ADVANCE_AGG_DATA";
    AccountDatasetNameEnum["AcctProfile"] = "ACCT_PROFILE";
    AccountDatasetNameEnum["Document"] = "DOCUMENT";
})(AccountDatasetNameEnum = exports.AccountDatasetNameEnum || (exports.AccountDatasetNameEnum = {}));
var AccountDatasetUpdateEligibilityEnum;
(function (AccountDatasetUpdateEligibilityEnum) {
    AccountDatasetUpdateEligibilityEnum["AllowUpdate"] = "ALLOW_UPDATE";
    AccountDatasetUpdateEligibilityEnum["AllowUpdateWithCredentials"] = "ALLOW_UPDATE_WITH_CREDENTIALS";
    AccountDatasetUpdateEligibilityEnum["DisallowUpdate"] = "DISALLOW_UPDATE";
})(AccountDatasetUpdateEligibilityEnum = exports.AccountDatasetUpdateEligibilityEnum || (exports.AccountDatasetUpdateEligibilityEnum = {}));
var AccountDataset = /** @class */ (function (_super) {
    __extends(AccountDataset, _super);
    function AccountDataset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalStatus" }),
        __metadata("design:type", String)
    ], AccountDataset.prototype, "additionalStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdateAttempt" }),
        __metadata("design:type", String)
    ], AccountDataset.prototype, "lastUpdateAttempt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", String)
    ], AccountDataset.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountDataset.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextUpdateScheduled" }),
        __metadata("design:type", String)
    ], AccountDataset.prototype, "nextUpdateScheduled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateEligibility" }),
        __metadata("design:type", String)
    ], AccountDataset.prototype, "updateEligibility", void 0);
    return AccountDataset;
}(utils_1.SpeakeasyBase));
exports.AccountDataset = AccountDataset;
