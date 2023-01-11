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
exports.UpdatedProviderAccount = exports.UpdatedProviderAccountStatusEnum = exports.UpdatedProviderAccountOauthMigrationStatusEnum = exports.UpdatedProviderAccountAggregationSourceEnum = void 0;
var utils_1 = require("../../../internal/utils");
var accountdataset_1 = require("./accountdataset");
var loginform_1 = require("./loginform");
var UpdatedProviderAccountAggregationSourceEnum;
(function (UpdatedProviderAccountAggregationSourceEnum) {
    UpdatedProviderAccountAggregationSourceEnum["System"] = "SYSTEM";
    UpdatedProviderAccountAggregationSourceEnum["User"] = "USER";
})(UpdatedProviderAccountAggregationSourceEnum = exports.UpdatedProviderAccountAggregationSourceEnum || (exports.UpdatedProviderAccountAggregationSourceEnum = {}));
var UpdatedProviderAccountOauthMigrationStatusEnum;
(function (UpdatedProviderAccountOauthMigrationStatusEnum) {
    UpdatedProviderAccountOauthMigrationStatusEnum["InProgress"] = "IN_PROGRESS";
    UpdatedProviderAccountOauthMigrationStatusEnum["ToBeMigrated"] = "TO_BE_MIGRATED";
    UpdatedProviderAccountOauthMigrationStatusEnum["Completed"] = "COMPLETED";
})(UpdatedProviderAccountOauthMigrationStatusEnum = exports.UpdatedProviderAccountOauthMigrationStatusEnum || (exports.UpdatedProviderAccountOauthMigrationStatusEnum = {}));
var UpdatedProviderAccountStatusEnum;
(function (UpdatedProviderAccountStatusEnum) {
    UpdatedProviderAccountStatusEnum["LoginInProgress"] = "LOGIN_IN_PROGRESS";
    UpdatedProviderAccountStatusEnum["UserInputRequired"] = "USER_INPUT_REQUIRED";
    UpdatedProviderAccountStatusEnum["InProgress"] = "IN_PROGRESS";
    UpdatedProviderAccountStatusEnum["PartialSuccess"] = "PARTIAL_SUCCESS";
    UpdatedProviderAccountStatusEnum["Success"] = "SUCCESS";
    UpdatedProviderAccountStatusEnum["Failed"] = "FAILED";
    UpdatedProviderAccountStatusEnum["MigrationInProgress"] = "MIGRATION_IN_PROGRESS";
})(UpdatedProviderAccountStatusEnum = exports.UpdatedProviderAccountStatusEnum || (exports.UpdatedProviderAccountStatusEnum = {}));
var UpdatedProviderAccount = /** @class */ (function (_super) {
    __extends(UpdatedProviderAccount, _super);
    function UpdatedProviderAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aggregationSource" }),
        __metadata("design:type", String)
    ], UpdatedProviderAccount.prototype, "aggregationSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], UpdatedProviderAccount.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataset", elemType: accountdataset_1.AccountDataset }),
        __metadata("design:type", Array)
    ], UpdatedProviderAccount.prototype, "dataset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UpdatedProviderAccount.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isManual" }),
        __metadata("design:type", Boolean)
    ], UpdatedProviderAccount.prototype, "isManual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", String)
    ], UpdatedProviderAccount.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loginForm", elemType: loginform_1.LoginForm }),
        __metadata("design:type", Array)
    ], UpdatedProviderAccount.prototype, "loginForm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauthMigrationStatus" }),
        __metadata("design:type", String)
    ], UpdatedProviderAccount.prototype, "oauthMigrationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerId" }),
        __metadata("design:type", Number)
    ], UpdatedProviderAccount.prototype, "providerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpdatedProviderAccount.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdatedProviderAccount.prototype, "status", void 0);
    return UpdatedProviderAccount;
}(utils_1.SpeakeasyBase));
exports.UpdatedProviderAccount = UpdatedProviderAccount;
