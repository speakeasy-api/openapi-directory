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
exports.Amendment = exports.AmendmentRatePlanData = void 0;
var utils_1 = require("../../../internal/utils");
var rateplan_1 = require("./rateplan");
var rateplanchargedatainrateplandata_1 = require("./rateplanchargedatainrateplandata");
var subscriptionproductfeaturelist_1 = require("./subscriptionproductfeaturelist");
// AmendmentRatePlanData
/**
 * A container for one `RatePlanData`. This field is only required if the `Type` field is set to `NewProduct`, `RemoveProduct`, or `UpdateProduct`.
 *
**/
var AmendmentRatePlanData = /** @class */ (function (_super) {
    __extends(AmendmentRatePlanData, _super);
    function AmendmentRatePlanData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RatePlan" }),
        __metadata("design:type", rateplan_1.RatePlan)
    ], AmendmentRatePlanData.prototype, "ratePlan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RatePlanChargeData", elemType: rateplanchargedatainrateplandata_1.RatePlanChargeDataInRatePlanData }),
        __metadata("design:type", Array)
    ], AmendmentRatePlanData.prototype, "ratePlanChargeData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscriptionProductFeatureList" }),
        __metadata("design:type", subscriptionproductfeaturelist_1.SubscriptionProductFeatureList)
    ], AmendmentRatePlanData.prototype, "subscriptionProductFeatureList", void 0);
    return AmendmentRatePlanData;
}(utils_1.SpeakeasyBase));
exports.AmendmentRatePlanData = AmendmentRatePlanData;
var Amendment = /** @class */ (function (_super) {
    __extends(Amendment, _super);
    function Amendment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AutoRenew" }),
        __metadata("design:type", Boolean)
    ], Amendment.prototype, "autoRenew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ContractEffectiveDate" }),
        __metadata("design:type", Date)
    ], Amendment.prototype, "contractEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedById" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], Amendment.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CurrentTerm" }),
        __metadata("design:type", Number)
    ], Amendment.prototype, "currentTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CurrentTermPeriodType" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "currentTermPeriodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CustomerAcceptanceDate" }),
        __metadata("design:type", Date)
    ], Amendment.prototype, "customerAcceptanceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DestinationAccountId" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "destinationAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DestinationInvoiceOwnerId" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "destinationInvoiceOwnerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], Amendment.prototype, "effectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RatePlanData" }),
        __metadata("design:type", AmendmentRatePlanData)
    ], Amendment.prototype, "ratePlanData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RenewalSetting" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "renewalSetting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RenewalTerm" }),
        __metadata("design:type", Number)
    ], Amendment.prototype, "renewalTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RenewalTermPeriodType" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "renewalTermPeriodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResumeDate" }),
        __metadata("design:type", Date)
    ], Amendment.prototype, "resumeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServiceActivationDate" }),
        __metadata("design:type", Date)
    ], Amendment.prototype, "serviceActivationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SpecificUpdateDate" }),
        __metadata("design:type", Date)
    ], Amendment.prototype, "specificUpdateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscriptionId" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "subscriptionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SuspendDate" }),
        __metadata("design:type", Date)
    ], Amendment.prototype, "suspendDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TermStartDate" }),
        __metadata("design:type", Date)
    ], Amendment.prototype, "termStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TermType" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "termType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedById" }),
        __metadata("design:type", String)
    ], Amendment.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], Amendment.prototype, "updatedDate", void 0);
    return Amendment;
}(utils_1.SpeakeasyBase));
exports.Amendment = Amendment;
