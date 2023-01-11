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
exports.PreviewOrderChargeOverride = exports.PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum = exports.PreviewOrderChargeOverrideRevRecTriggerConditionEnum = exports.PreviewOrderChargeOverridePricing = exports.PreviewOrderChargeOverrideBilling = exports.PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum = exports.PreviewOrderChargeOverrideBillingBillingTimingEnum = exports.PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum = exports.PreviewOrderChargeOverrideBillingBillingPeriodEnum = exports.PreviewOrderChargeOverrideBillingBillCycleTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var chargemodeldataoverride_1 = require("./chargemodeldataoverride");
var discountpricingoverride_1 = require("./discountpricingoverride");
var onetimeflatfeepricingoverride_1 = require("./onetimeflatfeepricingoverride");
var onetimeperunitpricingoverride_1 = require("./onetimeperunitpricingoverride");
var onetimetieredpricingoverride_1 = require("./onetimetieredpricingoverride");
var onetimevolumepricingoverride_1 = require("./onetimevolumepricingoverride");
var recurringflatfeepricingoverride_1 = require("./recurringflatfeepricingoverride");
var recurringperunitpricingoverride_1 = require("./recurringperunitpricingoverride");
var recurringtieredpricingoverride_1 = require("./recurringtieredpricingoverride");
var recurringvolumepricingoverride_1 = require("./recurringvolumepricingoverride");
var usageflatfeepricingoverride_1 = require("./usageflatfeepricingoverride");
var usageoveragepricingoverride_1 = require("./usageoveragepricingoverride");
var usageperunitpricingoverride_1 = require("./usageperunitpricingoverride");
var usagetieredpricingoverride_1 = require("./usagetieredpricingoverride");
var usagetieredwithoveragepricingoverride_1 = require("./usagetieredwithoveragepricingoverride");
var usagevolumepricingoverride_1 = require("./usagevolumepricingoverride");
var endconditions_1 = require("./endconditions");
var previewordertriggerparams_1 = require("./previewordertriggerparams");
var PreviewOrderChargeOverrideBillingBillCycleTypeEnum;
(function (PreviewOrderChargeOverrideBillingBillCycleTypeEnum) {
    PreviewOrderChargeOverrideBillingBillCycleTypeEnum["DefaultFromCustomer"] = "DefaultFromCustomer";
    PreviewOrderChargeOverrideBillingBillCycleTypeEnum["SpecificDayofMonth"] = "SpecificDayofMonth";
    PreviewOrderChargeOverrideBillingBillCycleTypeEnum["SubscriptionStartDay"] = "SubscriptionStartDay";
    PreviewOrderChargeOverrideBillingBillCycleTypeEnum["ChargeTriggerDay"] = "ChargeTriggerDay";
    PreviewOrderChargeOverrideBillingBillCycleTypeEnum["SpecificDayofWeek"] = "SpecificDayofWeek";
})(PreviewOrderChargeOverrideBillingBillCycleTypeEnum = exports.PreviewOrderChargeOverrideBillingBillCycleTypeEnum || (exports.PreviewOrderChargeOverrideBillingBillCycleTypeEnum = {}));
var PreviewOrderChargeOverrideBillingBillingPeriodEnum;
(function (PreviewOrderChargeOverrideBillingBillingPeriodEnum) {
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["Month"] = "Month";
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["Quarter"] = "Quarter";
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["SemiAnnual"] = "Semi_Annual";
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["Annual"] = "Annual";
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["EighteenMonths"] = "Eighteen_Months";
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["TwoYears"] = "Two_Years";
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["ThreeYears"] = "Three_Years";
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["FiveYears"] = "Five_Years";
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["SpecificMonths"] = "Specific_Months";
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["SubscriptionTerm"] = "Subscription_Term";
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["Week"] = "Week";
    PreviewOrderChargeOverrideBillingBillingPeriodEnum["SpecificWeeks"] = "Specific_Weeks";
})(PreviewOrderChargeOverrideBillingBillingPeriodEnum = exports.PreviewOrderChargeOverrideBillingBillingPeriodEnum || (exports.PreviewOrderChargeOverrideBillingBillingPeriodEnum = {}));
var PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum;
(function (PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum) {
    PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToCharge"] = "AlignToCharge";
    PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToSubscriptionStart"] = "AlignToSubscriptionStart";
    PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToTermStart"] = "AlignToTermStart";
})(PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum = exports.PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum || (exports.PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum = {}));
var PreviewOrderChargeOverrideBillingBillingTimingEnum;
(function (PreviewOrderChargeOverrideBillingBillingTimingEnum) {
    PreviewOrderChargeOverrideBillingBillingTimingEnum["InAdvance"] = "IN_ADVANCE";
    PreviewOrderChargeOverrideBillingBillingTimingEnum["InArrears"] = "IN_ARREARS";
})(PreviewOrderChargeOverrideBillingBillingTimingEnum = exports.PreviewOrderChargeOverrideBillingBillingTimingEnum || (exports.PreviewOrderChargeOverrideBillingBillingTimingEnum = {}));
var PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum;
(function (PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum) {
    PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Sunday"] = "Sunday";
    PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Monday"] = "Monday";
    PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Tuesday"] = "Tuesday";
    PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Wednesday"] = "Wednesday";
    PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Thursday"] = "Thursday";
    PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Friday"] = "Friday";
    PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Saturday"] = "Saturday";
})(PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum = exports.PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum || (exports.PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum = {}));
// PreviewOrderChargeOverrideBilling
/**
 * Billing information about the charge.
 *
**/
var PreviewOrderChargeOverrideBilling = /** @class */ (function (_super) {
    __extends(PreviewOrderChargeOverrideBilling, _super);
    function PreviewOrderChargeOverrideBilling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billCycleDay" }),
        __metadata("design:type", Number)
    ], PreviewOrderChargeOverrideBilling.prototype, "billCycleDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billCycleType" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverrideBilling.prototype, "billCycleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriod" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverrideBilling.prototype, "billingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriodAlignment" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverrideBilling.prototype, "billingPeriodAlignment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingTiming" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverrideBilling.prototype, "billingTiming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=specificBillingPeriod" }),
        __metadata("design:type", Number)
    ], PreviewOrderChargeOverrideBilling.prototype, "specificBillingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weeklyBillCycleDay" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverrideBilling.prototype, "weeklyBillCycleDay", void 0);
    return PreviewOrderChargeOverrideBilling;
}(utils_1.SpeakeasyBase));
exports.PreviewOrderChargeOverrideBilling = PreviewOrderChargeOverrideBilling;
// PreviewOrderChargeOverridePricing
/**
 * Pricing information about the charge.
 *
**/
var PreviewOrderChargeOverridePricing = /** @class */ (function (_super) {
    __extends(PreviewOrderChargeOverridePricing, _super);
    function PreviewOrderChargeOverridePricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeModelData" }),
        __metadata("design:type", chargemodeldataoverride_1.ChargeModelDataOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "chargeModelData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discount" }),
        __metadata("design:type", discountpricingoverride_1.DiscountPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "discount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeFlatFee" }),
        __metadata("design:type", onetimeflatfeepricingoverride_1.OneTimeFlatFeePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "oneTimeFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimePerUnit" }),
        __metadata("design:type", onetimeperunitpricingoverride_1.OneTimePerUnitPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "oneTimePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeTiered" }),
        __metadata("design:type", onetimetieredpricingoverride_1.OneTimeTieredPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "oneTimeTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeVolume" }),
        __metadata("design:type", onetimevolumepricingoverride_1.OneTimeVolumePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "oneTimeVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringFlatFee" }),
        __metadata("design:type", recurringflatfeepricingoverride_1.RecurringFlatFeePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "recurringFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringPerUnit" }),
        __metadata("design:type", recurringperunitpricingoverride_1.RecurringPerUnitPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "recurringPerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringTiered" }),
        __metadata("design:type", recurringtieredpricingoverride_1.RecurringTieredPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "recurringTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringVolume" }),
        __metadata("design:type", recurringvolumepricingoverride_1.RecurringVolumePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "recurringVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageFlatFee" }),
        __metadata("design:type", usageflatfeepricingoverride_1.UsageFlatFeePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usageFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageOverage" }),
        __metadata("design:type", usageoveragepricingoverride_1.UsageOveragePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usageOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usagePerUnit" }),
        __metadata("design:type", usageperunitpricingoverride_1.UsagePerUnitPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usagePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageTiered" }),
        __metadata("design:type", usagetieredpricingoverride_1.UsageTieredPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usageTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageTieredWithOverage" }),
        __metadata("design:type", usagetieredwithoveragepricingoverride_1.UsageTieredWithOveragePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usageTieredWithOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageVolume" }),
        __metadata("design:type", usagevolumepricingoverride_1.UsageVolumePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usageVolume", void 0);
    return PreviewOrderChargeOverridePricing;
}(utils_1.SpeakeasyBase));
exports.PreviewOrderChargeOverridePricing = PreviewOrderChargeOverridePricing;
var PreviewOrderChargeOverrideRevRecTriggerConditionEnum;
(function (PreviewOrderChargeOverrideRevRecTriggerConditionEnum) {
    PreviewOrderChargeOverrideRevRecTriggerConditionEnum["ContractEffectiveDate"] = "Contract Effective Date";
    PreviewOrderChargeOverrideRevRecTriggerConditionEnum["ServiceActivationDate"] = "Service Activation Date";
    PreviewOrderChargeOverrideRevRecTriggerConditionEnum["CustomerAcceptanceDate"] = "Customer Acceptance Date";
})(PreviewOrderChargeOverrideRevRecTriggerConditionEnum = exports.PreviewOrderChargeOverrideRevRecTriggerConditionEnum || (exports.PreviewOrderChargeOverrideRevRecTriggerConditionEnum = {}));
var PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum;
(function (PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum) {
    PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum["RecognizeUponInvoicing"] = "Recognize upon invoicing";
    PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum["RecognizeDailyOverTime"] = "Recognize daily over time";
})(PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum = exports.PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum || (exports.PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum = {}));
// PreviewOrderChargeOverride
/**
 * Charge associated with a rate plan.
 *
**/
var PreviewOrderChargeOverride = /** @class */ (function (_super) {
    __extends(PreviewOrderChargeOverride, _super);
    function PreviewOrderChargeOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing" }),
        __metadata("design:type", PreviewOrderChargeOverrideBilling)
    ], PreviewOrderChargeOverride.prototype, "billing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], PreviewOrderChargeOverride.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", endconditions_1.EndConditions)
    ], PreviewOrderChargeOverride.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pricing" }),
        __metadata("design:type", PreviewOrderChargeOverridePricing)
    ], PreviewOrderChargeOverride.prototype, "pricing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanChargeId" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revRecCode" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "revRecCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revRecTriggerCondition" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "revRecTriggerCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revenueRecognitionRuleName" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "revenueRecognitionRuleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", previewordertriggerparams_1.PreviewOrderTriggerParams)
    ], PreviewOrderChargeOverride.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uniqueToken" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "uniqueToken", void 0);
    return PreviewOrderChargeOverride;
}(utils_1.SpeakeasyBase));
exports.PreviewOrderChargeOverride = PreviewOrderChargeOverride;
