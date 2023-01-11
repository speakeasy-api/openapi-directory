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
exports.ChargeOverride = exports.ChargeOverrideRevenueRecognitionRuleNameEnum = exports.ChargeOverrideRevRecTriggerConditionEnum = exports.ChargeOverridePricing = exports.ChargeOverrideBilling = exports.ChargeOverrideBillingWeeklyBillCycleDayEnum = exports.ChargeOverrideBillingBillingTimingEnum = exports.ChargeOverrideBillingBillingPeriodAlignmentEnum = exports.ChargeOverrideBillingBillingPeriodEnum = exports.ChargeOverrideBillingBillCycleTypeEnum = void 0;
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
var triggerparams_1 = require("./triggerparams");
var ChargeOverrideBillingBillCycleTypeEnum;
(function (ChargeOverrideBillingBillCycleTypeEnum) {
    ChargeOverrideBillingBillCycleTypeEnum["DefaultFromCustomer"] = "DefaultFromCustomer";
    ChargeOverrideBillingBillCycleTypeEnum["SpecificDayofMonth"] = "SpecificDayofMonth";
    ChargeOverrideBillingBillCycleTypeEnum["SubscriptionStartDay"] = "SubscriptionStartDay";
    ChargeOverrideBillingBillCycleTypeEnum["ChargeTriggerDay"] = "ChargeTriggerDay";
    ChargeOverrideBillingBillCycleTypeEnum["SpecificDayofWeek"] = "SpecificDayofWeek";
})(ChargeOverrideBillingBillCycleTypeEnum = exports.ChargeOverrideBillingBillCycleTypeEnum || (exports.ChargeOverrideBillingBillCycleTypeEnum = {}));
var ChargeOverrideBillingBillingPeriodEnum;
(function (ChargeOverrideBillingBillingPeriodEnum) {
    ChargeOverrideBillingBillingPeriodEnum["Month"] = "Month";
    ChargeOverrideBillingBillingPeriodEnum["Quarter"] = "Quarter";
    ChargeOverrideBillingBillingPeriodEnum["SemiAnnual"] = "Semi_Annual";
    ChargeOverrideBillingBillingPeriodEnum["Annual"] = "Annual";
    ChargeOverrideBillingBillingPeriodEnum["EighteenMonths"] = "Eighteen_Months";
    ChargeOverrideBillingBillingPeriodEnum["TwoYears"] = "Two_Years";
    ChargeOverrideBillingBillingPeriodEnum["ThreeYears"] = "Three_Years";
    ChargeOverrideBillingBillingPeriodEnum["FiveYears"] = "Five_Years";
    ChargeOverrideBillingBillingPeriodEnum["SpecificMonths"] = "Specific_Months";
    ChargeOverrideBillingBillingPeriodEnum["SubscriptionTerm"] = "Subscription_Term";
    ChargeOverrideBillingBillingPeriodEnum["Week"] = "Week";
    ChargeOverrideBillingBillingPeriodEnum["SpecificWeeks"] = "Specific_Weeks";
})(ChargeOverrideBillingBillingPeriodEnum = exports.ChargeOverrideBillingBillingPeriodEnum || (exports.ChargeOverrideBillingBillingPeriodEnum = {}));
var ChargeOverrideBillingBillingPeriodAlignmentEnum;
(function (ChargeOverrideBillingBillingPeriodAlignmentEnum) {
    ChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToCharge"] = "AlignToCharge";
    ChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToSubscriptionStart"] = "AlignToSubscriptionStart";
    ChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToTermStart"] = "AlignToTermStart";
})(ChargeOverrideBillingBillingPeriodAlignmentEnum = exports.ChargeOverrideBillingBillingPeriodAlignmentEnum || (exports.ChargeOverrideBillingBillingPeriodAlignmentEnum = {}));
var ChargeOverrideBillingBillingTimingEnum;
(function (ChargeOverrideBillingBillingTimingEnum) {
    ChargeOverrideBillingBillingTimingEnum["InAdvance"] = "IN_ADVANCE";
    ChargeOverrideBillingBillingTimingEnum["InArrears"] = "IN_ARREARS";
})(ChargeOverrideBillingBillingTimingEnum = exports.ChargeOverrideBillingBillingTimingEnum || (exports.ChargeOverrideBillingBillingTimingEnum = {}));
var ChargeOverrideBillingWeeklyBillCycleDayEnum;
(function (ChargeOverrideBillingWeeklyBillCycleDayEnum) {
    ChargeOverrideBillingWeeklyBillCycleDayEnum["Sunday"] = "Sunday";
    ChargeOverrideBillingWeeklyBillCycleDayEnum["Monday"] = "Monday";
    ChargeOverrideBillingWeeklyBillCycleDayEnum["Tuesday"] = "Tuesday";
    ChargeOverrideBillingWeeklyBillCycleDayEnum["Wednesday"] = "Wednesday";
    ChargeOverrideBillingWeeklyBillCycleDayEnum["Thursday"] = "Thursday";
    ChargeOverrideBillingWeeklyBillCycleDayEnum["Friday"] = "Friday";
    ChargeOverrideBillingWeeklyBillCycleDayEnum["Saturday"] = "Saturday";
})(ChargeOverrideBillingWeeklyBillCycleDayEnum = exports.ChargeOverrideBillingWeeklyBillCycleDayEnum || (exports.ChargeOverrideBillingWeeklyBillCycleDayEnum = {}));
// ChargeOverrideBilling
/**
 * Billing information about the charge.
 *
**/
var ChargeOverrideBilling = /** @class */ (function (_super) {
    __extends(ChargeOverrideBilling, _super);
    function ChargeOverrideBilling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billCycleDay" }),
        __metadata("design:type", Number)
    ], ChargeOverrideBilling.prototype, "billCycleDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billCycleType" }),
        __metadata("design:type", String)
    ], ChargeOverrideBilling.prototype, "billCycleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriod" }),
        __metadata("design:type", String)
    ], ChargeOverrideBilling.prototype, "billingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriodAlignment" }),
        __metadata("design:type", String)
    ], ChargeOverrideBilling.prototype, "billingPeriodAlignment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingTiming" }),
        __metadata("design:type", String)
    ], ChargeOverrideBilling.prototype, "billingTiming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=specificBillingPeriod" }),
        __metadata("design:type", Number)
    ], ChargeOverrideBilling.prototype, "specificBillingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weeklyBillCycleDay" }),
        __metadata("design:type", String)
    ], ChargeOverrideBilling.prototype, "weeklyBillCycleDay", void 0);
    return ChargeOverrideBilling;
}(utils_1.SpeakeasyBase));
exports.ChargeOverrideBilling = ChargeOverrideBilling;
// ChargeOverridePricing
/**
 * Pricing information about the charge.
 *
**/
var ChargeOverridePricing = /** @class */ (function (_super) {
    __extends(ChargeOverridePricing, _super);
    function ChargeOverridePricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeModelData" }),
        __metadata("design:type", chargemodeldataoverride_1.ChargeModelDataOverride)
    ], ChargeOverridePricing.prototype, "chargeModelData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discount" }),
        __metadata("design:type", discountpricingoverride_1.DiscountPricingOverride)
    ], ChargeOverridePricing.prototype, "discount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeFlatFee" }),
        __metadata("design:type", onetimeflatfeepricingoverride_1.OneTimeFlatFeePricingOverride)
    ], ChargeOverridePricing.prototype, "oneTimeFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimePerUnit" }),
        __metadata("design:type", onetimeperunitpricingoverride_1.OneTimePerUnitPricingOverride)
    ], ChargeOverridePricing.prototype, "oneTimePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeTiered" }),
        __metadata("design:type", onetimetieredpricingoverride_1.OneTimeTieredPricingOverride)
    ], ChargeOverridePricing.prototype, "oneTimeTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeVolume" }),
        __metadata("design:type", onetimevolumepricingoverride_1.OneTimeVolumePricingOverride)
    ], ChargeOverridePricing.prototype, "oneTimeVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringFlatFee" }),
        __metadata("design:type", recurringflatfeepricingoverride_1.RecurringFlatFeePricingOverride)
    ], ChargeOverridePricing.prototype, "recurringFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringPerUnit" }),
        __metadata("design:type", recurringperunitpricingoverride_1.RecurringPerUnitPricingOverride)
    ], ChargeOverridePricing.prototype, "recurringPerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringTiered" }),
        __metadata("design:type", recurringtieredpricingoverride_1.RecurringTieredPricingOverride)
    ], ChargeOverridePricing.prototype, "recurringTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringVolume" }),
        __metadata("design:type", recurringvolumepricingoverride_1.RecurringVolumePricingOverride)
    ], ChargeOverridePricing.prototype, "recurringVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageFlatFee" }),
        __metadata("design:type", usageflatfeepricingoverride_1.UsageFlatFeePricingOverride)
    ], ChargeOverridePricing.prototype, "usageFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageOverage" }),
        __metadata("design:type", usageoveragepricingoverride_1.UsageOveragePricingOverride)
    ], ChargeOverridePricing.prototype, "usageOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usagePerUnit" }),
        __metadata("design:type", usageperunitpricingoverride_1.UsagePerUnitPricingOverride)
    ], ChargeOverridePricing.prototype, "usagePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageTiered" }),
        __metadata("design:type", usagetieredpricingoverride_1.UsageTieredPricingOverride)
    ], ChargeOverridePricing.prototype, "usageTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageTieredWithOverage" }),
        __metadata("design:type", usagetieredwithoveragepricingoverride_1.UsageTieredWithOveragePricingOverride)
    ], ChargeOverridePricing.prototype, "usageTieredWithOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageVolume" }),
        __metadata("design:type", usagevolumepricingoverride_1.UsageVolumePricingOverride)
    ], ChargeOverridePricing.prototype, "usageVolume", void 0);
    return ChargeOverridePricing;
}(utils_1.SpeakeasyBase));
exports.ChargeOverridePricing = ChargeOverridePricing;
var ChargeOverrideRevRecTriggerConditionEnum;
(function (ChargeOverrideRevRecTriggerConditionEnum) {
    ChargeOverrideRevRecTriggerConditionEnum["ContractEffectiveDate"] = "Contract Effective Date";
    ChargeOverrideRevRecTriggerConditionEnum["ServiceActivationDate"] = "Service Activation Date";
    ChargeOverrideRevRecTriggerConditionEnum["CustomerAcceptanceDate"] = "Customer Acceptance Date";
})(ChargeOverrideRevRecTriggerConditionEnum = exports.ChargeOverrideRevRecTriggerConditionEnum || (exports.ChargeOverrideRevRecTriggerConditionEnum = {}));
var ChargeOverrideRevenueRecognitionRuleNameEnum;
(function (ChargeOverrideRevenueRecognitionRuleNameEnum) {
    ChargeOverrideRevenueRecognitionRuleNameEnum["RecognizeUponInvoicing"] = "Recognize upon invoicing";
    ChargeOverrideRevenueRecognitionRuleNameEnum["RecognizeDailyOverTime"] = "Recognize daily over time";
})(ChargeOverrideRevenueRecognitionRuleNameEnum = exports.ChargeOverrideRevenueRecognitionRuleNameEnum || (exports.ChargeOverrideRevenueRecognitionRuleNameEnum = {}));
// ChargeOverride
/**
 * Charge associated with a rate plan.
 *
**/
var ChargeOverride = /** @class */ (function (_super) {
    __extends(ChargeOverride, _super);
    function ChargeOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing" }),
        __metadata("design:type", ChargeOverrideBilling)
    ], ChargeOverride.prototype, "billing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], ChargeOverride.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], ChargeOverride.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ChargeOverride.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", endconditions_1.EndConditions)
    ], ChargeOverride.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pricing" }),
        __metadata("design:type", ChargeOverridePricing)
    ], ChargeOverride.prototype, "pricing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanChargeId" }),
        __metadata("design:type", String)
    ], ChargeOverride.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revRecCode" }),
        __metadata("design:type", String)
    ], ChargeOverride.prototype, "revRecCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revRecTriggerCondition" }),
        __metadata("design:type", String)
    ], ChargeOverride.prototype, "revRecTriggerCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revenueRecognitionRuleName" }),
        __metadata("design:type", String)
    ], ChargeOverride.prototype, "revenueRecognitionRuleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", triggerparams_1.TriggerParams)
    ], ChargeOverride.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uniqueToken" }),
        __metadata("design:type", String)
    ], ChargeOverride.prototype, "uniqueToken", void 0);
    return ChargeOverride;
}(utils_1.SpeakeasyBase));
exports.ChargeOverride = ChargeOverride;
