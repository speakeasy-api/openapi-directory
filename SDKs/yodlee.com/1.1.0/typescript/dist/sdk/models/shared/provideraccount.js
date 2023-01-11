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
exports.ProviderAccount = exports.ProviderAccountStatusEnum = exports.ProviderAccountOauthMigrationStatusEnum = exports.ProviderAccountAggregationSourceEnum = void 0;
var utils_1 = require("../../../internal/utils");
var accountdataset_1 = require("./accountdataset");
var provideraccountpreferences_1 = require("./provideraccountpreferences");
var ProviderAccountAggregationSourceEnum;
(function (ProviderAccountAggregationSourceEnum) {
    ProviderAccountAggregationSourceEnum["System"] = "SYSTEM";
    ProviderAccountAggregationSourceEnum["User"] = "USER";
})(ProviderAccountAggregationSourceEnum = exports.ProviderAccountAggregationSourceEnum || (exports.ProviderAccountAggregationSourceEnum = {}));
var ProviderAccountOauthMigrationStatusEnum;
(function (ProviderAccountOauthMigrationStatusEnum) {
    ProviderAccountOauthMigrationStatusEnum["InProgress"] = "IN_PROGRESS";
    ProviderAccountOauthMigrationStatusEnum["ToBeMigrated"] = "TO_BE_MIGRATED";
    ProviderAccountOauthMigrationStatusEnum["Completed"] = "COMPLETED";
})(ProviderAccountOauthMigrationStatusEnum = exports.ProviderAccountOauthMigrationStatusEnum || (exports.ProviderAccountOauthMigrationStatusEnum = {}));
var ProviderAccountStatusEnum;
(function (ProviderAccountStatusEnum) {
    ProviderAccountStatusEnum["LoginInProgress"] = "LOGIN_IN_PROGRESS";
    ProviderAccountStatusEnum["UserInputRequired"] = "USER_INPUT_REQUIRED";
    ProviderAccountStatusEnum["InProgress"] = "IN_PROGRESS";
    ProviderAccountStatusEnum["PartialSuccess"] = "PARTIAL_SUCCESS";
    ProviderAccountStatusEnum["Success"] = "SUCCESS";
    ProviderAccountStatusEnum["Failed"] = "FAILED";
    ProviderAccountStatusEnum["MigrationInProgress"] = "MIGRATION_IN_PROGRESS";
})(ProviderAccountStatusEnum = exports.ProviderAccountStatusEnum || (exports.ProviderAccountStatusEnum = {}));
var ProviderAccount = /** @class */ (function (_super) {
    __extends(ProviderAccount, _super);
    function ProviderAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aggregationSource" }),
        __metadata("design:type", String)
    ], ProviderAccount.prototype, "aggregationSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentId" }),
        __metadata("design:type", Number)
    ], ProviderAccount.prototype, "consentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], ProviderAccount.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataset", elemType: accountdataset_1.AccountDataset }),
        __metadata("design:type", Array)
    ], ProviderAccount.prototype, "dataset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ProviderAccount.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isManual" }),
        __metadata("design:type", Boolean)
    ], ProviderAccount.prototype, "isManual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", String)
    ], ProviderAccount.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauthMigrationStatus" }),
        __metadata("design:type", String)
    ], ProviderAccount.prototype, "oauthMigrationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferences" }),
        __metadata("design:type", provideraccountpreferences_1.ProviderAccountPreferences)
    ], ProviderAccount.prototype, "preferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerId" }),
        __metadata("design:type", Number)
    ], ProviderAccount.prototype, "providerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], ProviderAccount.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ProviderAccount.prototype, "status", void 0);
    return ProviderAccount;
}(utils_1.SpeakeasyBase));
exports.ProviderAccount = ProviderAccount;
