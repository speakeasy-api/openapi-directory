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
exports.ProviderAccountDetail = exports.ProviderAccountDetailStatusEnum = exports.ProviderAccountDetailOauthMigrationStatusEnum = exports.ProviderAccountDetailAggregationSourceEnum = void 0;
var utils_1 = require("../../../internal/utils");
var accountdataset_1 = require("./accountdataset");
var loginform_1 = require("./loginform");
var provideraccountpreferences_1 = require("./provideraccountpreferences");
var ProviderAccountDetailAggregationSourceEnum;
(function (ProviderAccountDetailAggregationSourceEnum) {
    ProviderAccountDetailAggregationSourceEnum["System"] = "SYSTEM";
    ProviderAccountDetailAggregationSourceEnum["User"] = "USER";
})(ProviderAccountDetailAggregationSourceEnum = exports.ProviderAccountDetailAggregationSourceEnum || (exports.ProviderAccountDetailAggregationSourceEnum = {}));
var ProviderAccountDetailOauthMigrationStatusEnum;
(function (ProviderAccountDetailOauthMigrationStatusEnum) {
    ProviderAccountDetailOauthMigrationStatusEnum["InProgress"] = "IN_PROGRESS";
    ProviderAccountDetailOauthMigrationStatusEnum["ToBeMigrated"] = "TO_BE_MIGRATED";
    ProviderAccountDetailOauthMigrationStatusEnum["Completed"] = "COMPLETED";
})(ProviderAccountDetailOauthMigrationStatusEnum = exports.ProviderAccountDetailOauthMigrationStatusEnum || (exports.ProviderAccountDetailOauthMigrationStatusEnum = {}));
var ProviderAccountDetailStatusEnum;
(function (ProviderAccountDetailStatusEnum) {
    ProviderAccountDetailStatusEnum["LoginInProgress"] = "LOGIN_IN_PROGRESS";
    ProviderAccountDetailStatusEnum["UserInputRequired"] = "USER_INPUT_REQUIRED";
    ProviderAccountDetailStatusEnum["InProgress"] = "IN_PROGRESS";
    ProviderAccountDetailStatusEnum["PartialSuccess"] = "PARTIAL_SUCCESS";
    ProviderAccountDetailStatusEnum["Success"] = "SUCCESS";
    ProviderAccountDetailStatusEnum["Failed"] = "FAILED";
    ProviderAccountDetailStatusEnum["MigrationInProgress"] = "MIGRATION_IN_PROGRESS";
})(ProviderAccountDetailStatusEnum = exports.ProviderAccountDetailStatusEnum || (exports.ProviderAccountDetailStatusEnum = {}));
var ProviderAccountDetail = /** @class */ (function (_super) {
    __extends(ProviderAccountDetail, _super);
    function ProviderAccountDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aggregationSource" }),
        __metadata("design:type", String)
    ], ProviderAccountDetail.prototype, "aggregationSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentId" }),
        __metadata("design:type", Number)
    ], ProviderAccountDetail.prototype, "consentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], ProviderAccountDetail.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataset", elemType: accountdataset_1.AccountDataset }),
        __metadata("design:type", Array)
    ], ProviderAccountDetail.prototype, "dataset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ProviderAccountDetail.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isManual" }),
        __metadata("design:type", Boolean)
    ], ProviderAccountDetail.prototype, "isManual", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", String)
    ], ProviderAccountDetail.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loginForm", elemType: loginform_1.LoginForm }),
        __metadata("design:type", Array)
    ], ProviderAccountDetail.prototype, "loginForm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauthMigrationStatus" }),
        __metadata("design:type", String)
    ], ProviderAccountDetail.prototype, "oauthMigrationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferences" }),
        __metadata("design:type", provideraccountpreferences_1.ProviderAccountPreferences)
    ], ProviderAccountDetail.prototype, "preferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerId" }),
        __metadata("design:type", Number)
    ], ProviderAccountDetail.prototype, "providerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], ProviderAccountDetail.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ProviderAccountDetail.prototype, "status", void 0);
    return ProviderAccountDetail;
}(utils_1.SpeakeasyBase));
exports.ProviderAccountDetail = ProviderAccountDetail;
