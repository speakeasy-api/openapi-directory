"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
var endconditions_1 = require("./endconditions");
var onetimeflatfeepricingoverride_1 = require("./onetimeflatfeepricingoverride");
var onetimeperunitpricingoverride_1 = require("./onetimeperunitpricingoverride");
var onetimetieredpricingoverride_1 = require("./onetimetieredpricingoverride");
var onetimevolumepricingoverride_1 = require("./onetimevolumepricingoverride");
var previewordertriggerparams_1 = require("./previewordertriggerparams");
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
var class_transformer_1 = require("class-transformer");
/**
 * Specifies how Zuora determines the day that each billing period begins on.
 *
 * @remarks
 *
 *   * `DefaultFromCustomer` - Each billing period begins on the bill cycle day of the account that owns the subscription.
 *   * `SpecificDayofMonth` - Use the `billCycleDay` field to specify the day of the month that each billing period begins on.
 *   * `SubscriptionStartDay` - Each billing period begins on the same day of the month as the start date of the subscription.
 *   * `ChargeTriggerDay` - Each billing period begins on the same day of the month as the date when the charge becomes active.
 *   * `SpecificDayofWeek` - Use the `weeklyBillCycleDay` field to specify the day of the week that each billing period begins on.
 *
 */
var PreviewOrderChargeOverrideBillingBillCycleTypeEnum;
(function (PreviewOrderChargeOverrideBillingBillCycleTypeEnum) {
    PreviewOrderChargeOverrideBillingBillCycleTypeEnum["DefaultFromCustomer"] = "DefaultFromCustomer";
    PreviewOrderChargeOverrideBillingBillCycleTypeEnum["SpecificDayofMonth"] = "SpecificDayofMonth";
    PreviewOrderChargeOverrideBillingBillCycleTypeEnum["SubscriptionStartDay"] = "SubscriptionStartDay";
    PreviewOrderChargeOverrideBillingBillCycleTypeEnum["ChargeTriggerDay"] = "ChargeTriggerDay";
    PreviewOrderChargeOverrideBillingBillCycleTypeEnum["SpecificDayofWeek"] = "SpecificDayofWeek";
})(PreviewOrderChargeOverrideBillingBillCycleTypeEnum = exports.PreviewOrderChargeOverrideBillingBillCycleTypeEnum || (exports.PreviewOrderChargeOverrideBillingBillCycleTypeEnum = {}));
/**
 * Billing frequency of the charge. The value of this field controls the duration of each billing period.
 *
 * @remarks
 *
 * If the value of this field is `Specific_Months` or `Specific_Weeks`, use the `specificBillingPeriod` field to specify the duration of each billing period.
 *
 */
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
/**
 * Specifies how Zuora determines when to start new billing periods. You can use this field to align the billing periods of different charges.
 *
 * @remarks
 *
 * * `AlignToCharge` - Zuora starts a new billing period on the first billing day that falls on or after the date when the charge becomes active.
 * * `AlignToSubscriptionStart` - Zuora starts a new billing period on the first billing day that falls on or after the start date of the subscription.
 * * `AlignToTermStart` - For each term of the subscription, Zuora starts a new billing period on the first billing day that falls on or after the start date of the term.
 *
 * See the `billCycleType` field for information about how Zuora determines the billing day.
 *
 */
var PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum;
(function (PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum) {
    PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToCharge"] = "AlignToCharge";
    PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToSubscriptionStart"] = "AlignToSubscriptionStart";
    PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToTermStart"] = "AlignToTermStart";
})(PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum = exports.PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum || (exports.PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum = {}));
/**
 * Specifies whether to invoice for a billing period on the first day of the billing period (billing in advance) or the first day of the next billing period (billing in arrears).
 *
 * @remarks
 *
 */
var PreviewOrderChargeOverrideBillingBillingTimingEnum;
(function (PreviewOrderChargeOverrideBillingBillingTimingEnum) {
    PreviewOrderChargeOverrideBillingBillingTimingEnum["InAdvance"] = "IN_ADVANCE";
    PreviewOrderChargeOverrideBillingBillingTimingEnum["InArrears"] = "IN_ARREARS";
})(PreviewOrderChargeOverrideBillingBillingTimingEnum = exports.PreviewOrderChargeOverrideBillingBillingTimingEnum || (exports.PreviewOrderChargeOverrideBillingBillingTimingEnum = {}));
/**
 * Day of the week that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofWeek`.
 *
 * @remarks
 *
 */
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
/**
 * Billing information about the charge.
 *
 * @remarks
 *
 */
var PreviewOrderChargeOverrideBilling = /** @class */ (function (_super) {
    __extends(PreviewOrderChargeOverrideBilling, _super);
    function PreviewOrderChargeOverrideBilling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "billCycleDay" }),
        __metadata("design:type", Number)
    ], PreviewOrderChargeOverrideBilling.prototype, "billCycleDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "billCycleType" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverrideBilling.prototype, "billCycleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "billingPeriod" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverrideBilling.prototype, "billingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "billingPeriodAlignment" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverrideBilling.prototype, "billingPeriodAlignment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "billingTiming" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverrideBilling.prototype, "billingTiming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "specificBillingPeriod" }),
        __metadata("design:type", Number)
    ], PreviewOrderChargeOverrideBilling.prototype, "specificBillingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "weeklyBillCycleDay" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverrideBilling.prototype, "weeklyBillCycleDay", void 0);
    return PreviewOrderChargeOverrideBilling;
}(utils_1.SpeakeasyBase));
exports.PreviewOrderChargeOverrideBilling = PreviewOrderChargeOverrideBilling;
/**
 * Pricing information about the charge.
 *
 * @remarks
 *
 */
var PreviewOrderChargeOverridePricing = /** @class */ (function (_super) {
    __extends(PreviewOrderChargeOverridePricing, _super);
    function PreviewOrderChargeOverridePricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "chargeModelData" }),
        (0, class_transformer_1.Type)(function () { return chargemodeldataoverride_1.ChargeModelDataOverride; }),
        __metadata("design:type", chargemodeldataoverride_1.ChargeModelDataOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "chargeModelData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "discount" }),
        (0, class_transformer_1.Type)(function () { return discountpricingoverride_1.DiscountPricingOverride; }),
        __metadata("design:type", discountpricingoverride_1.DiscountPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "discount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "oneTimeFlatFee" }),
        (0, class_transformer_1.Type)(function () { return onetimeflatfeepricingoverride_1.OneTimeFlatFeePricingOverride; }),
        __metadata("design:type", onetimeflatfeepricingoverride_1.OneTimeFlatFeePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "oneTimeFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "oneTimePerUnit" }),
        (0, class_transformer_1.Type)(function () { return onetimeperunitpricingoverride_1.OneTimePerUnitPricingOverride; }),
        __metadata("design:type", onetimeperunitpricingoverride_1.OneTimePerUnitPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "oneTimePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "oneTimeTiered" }),
        (0, class_transformer_1.Type)(function () { return onetimetieredpricingoverride_1.OneTimeTieredPricingOverride; }),
        __metadata("design:type", onetimetieredpricingoverride_1.OneTimeTieredPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "oneTimeTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "oneTimeVolume" }),
        (0, class_transformer_1.Type)(function () { return onetimevolumepricingoverride_1.OneTimeVolumePricingOverride; }),
        __metadata("design:type", onetimevolumepricingoverride_1.OneTimeVolumePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "oneTimeVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "recurringFlatFee" }),
        (0, class_transformer_1.Type)(function () { return recurringflatfeepricingoverride_1.RecurringFlatFeePricingOverride; }),
        __metadata("design:type", recurringflatfeepricingoverride_1.RecurringFlatFeePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "recurringFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "recurringPerUnit" }),
        (0, class_transformer_1.Type)(function () { return recurringperunitpricingoverride_1.RecurringPerUnitPricingOverride; }),
        __metadata("design:type", recurringperunitpricingoverride_1.RecurringPerUnitPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "recurringPerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "recurringTiered" }),
        (0, class_transformer_1.Type)(function () { return recurringtieredpricingoverride_1.RecurringTieredPricingOverride; }),
        __metadata("design:type", recurringtieredpricingoverride_1.RecurringTieredPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "recurringTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "recurringVolume" }),
        (0, class_transformer_1.Type)(function () { return recurringvolumepricingoverride_1.RecurringVolumePricingOverride; }),
        __metadata("design:type", recurringvolumepricingoverride_1.RecurringVolumePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "recurringVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usageFlatFee" }),
        (0, class_transformer_1.Type)(function () { return usageflatfeepricingoverride_1.UsageFlatFeePricingOverride; }),
        __metadata("design:type", usageflatfeepricingoverride_1.UsageFlatFeePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usageFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usageOverage" }),
        (0, class_transformer_1.Type)(function () { return usageoveragepricingoverride_1.UsageOveragePricingOverride; }),
        __metadata("design:type", usageoveragepricingoverride_1.UsageOveragePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usageOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usagePerUnit" }),
        (0, class_transformer_1.Type)(function () { return usageperunitpricingoverride_1.UsagePerUnitPricingOverride; }),
        __metadata("design:type", usageperunitpricingoverride_1.UsagePerUnitPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usagePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usageTiered" }),
        (0, class_transformer_1.Type)(function () { return usagetieredpricingoverride_1.UsageTieredPricingOverride; }),
        __metadata("design:type", usagetieredpricingoverride_1.UsageTieredPricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usageTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usageTieredWithOverage" }),
        (0, class_transformer_1.Type)(function () { return usagetieredwithoveragepricingoverride_1.UsageTieredWithOveragePricingOverride; }),
        __metadata("design:type", usagetieredwithoveragepricingoverride_1.UsageTieredWithOveragePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usageTieredWithOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usageVolume" }),
        (0, class_transformer_1.Type)(function () { return usagevolumepricingoverride_1.UsageVolumePricingOverride; }),
        __metadata("design:type", usagevolumepricingoverride_1.UsageVolumePricingOverride)
    ], PreviewOrderChargeOverridePricing.prototype, "usageVolume", void 0);
    return PreviewOrderChargeOverridePricing;
}(utils_1.SpeakeasyBase));
exports.PreviewOrderChargeOverridePricing = PreviewOrderChargeOverridePricing;
/**
 * Specifies the revenue recognition trigger condition.
 *
 * @remarks
 *
 *   * `Contract Effective Date`
 *   * `Service Activation Date`
 *   * `Customer Acceptance Date`
 *
 */
var PreviewOrderChargeOverrideRevRecTriggerConditionEnum;
(function (PreviewOrderChargeOverrideRevRecTriggerConditionEnum) {
    PreviewOrderChargeOverrideRevRecTriggerConditionEnum["ContractEffectiveDate"] = "Contract Effective Date";
    PreviewOrderChargeOverrideRevRecTriggerConditionEnum["ServiceActivationDate"] = "Service Activation Date";
    PreviewOrderChargeOverrideRevRecTriggerConditionEnum["CustomerAcceptanceDate"] = "Customer Acceptance Date";
})(PreviewOrderChargeOverrideRevRecTriggerConditionEnum = exports.PreviewOrderChargeOverrideRevRecTriggerConditionEnum || (exports.PreviewOrderChargeOverrideRevRecTriggerConditionEnum = {}));
/**
 * Specifies the revenue recognition rule.
 *
 * @remarks
 *
 *   * `Recognize upon invoicing`
 *   * `Recognize daily over time`
 *
 */
var PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum;
(function (PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum) {
    PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum["RecognizeUponInvoicing"] = "Recognize upon invoicing";
    PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum["RecognizeDailyOverTime"] = "Recognize daily over time";
})(PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum = exports.PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum || (exports.PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum = {}));
/**
 * Charge associated with a rate plan.
 *
 * @remarks
 *
 */
var PreviewOrderChargeOverride = /** @class */ (function (_super) {
    __extends(PreviewOrderChargeOverride, _super);
    function PreviewOrderChargeOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "billing" }),
        (0, class_transformer_1.Type)(function () { return PreviewOrderChargeOverrideBilling; }),
        __metadata("design:type", PreviewOrderChargeOverrideBilling)
    ], PreviewOrderChargeOverride.prototype, "billing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "chargeNumber" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "customFields" }),
        __metadata("design:type", Object)
    ], PreviewOrderChargeOverride.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "endDate" }),
        (0, class_transformer_1.Type)(function () { return endconditions_1.EndConditions; }),
        __metadata("design:type", endconditions_1.EndConditions)
    ], PreviewOrderChargeOverride.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "pricing" }),
        (0, class_transformer_1.Type)(function () { return PreviewOrderChargeOverridePricing; }),
        __metadata("design:type", PreviewOrderChargeOverridePricing)
    ], PreviewOrderChargeOverride.prototype, "pricing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "productRatePlanChargeId" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "revRecCode" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "revRecCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "revRecTriggerCondition" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "revRecTriggerCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "revenueRecognitionRuleName" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "revenueRecognitionRuleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "startDate" }),
        (0, class_transformer_1.Type)(function () { return previewordertriggerparams_1.PreviewOrderTriggerParams; }),
        __metadata("design:type", previewordertriggerparams_1.PreviewOrderTriggerParams)
    ], PreviewOrderChargeOverride.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "uniqueToken" }),
        __metadata("design:type", String)
    ], PreviewOrderChargeOverride.prototype, "uniqueToken", void 0);
    return PreviewOrderChargeOverride;
}(utils_1.SpeakeasyBase));
exports.PreviewOrderChargeOverride = PreviewOrderChargeOverride;
