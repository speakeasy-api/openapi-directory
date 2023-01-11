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
exports.ChargeOverrideForEvergreen = exports.ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum = exports.ChargeOverrideForEvergreenRevRecTriggerConditionEnum = exports.ChargeOverrideForEvergreenPricing = exports.ChargeOverrideForEvergreenBilling = exports.ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum = exports.ChargeOverrideForEvergreenBillingBillingTimingEnum = exports.ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum = exports.ChargeOverrideForEvergreenBillingBillingPeriodEnum = exports.ChargeOverrideForEvergreenBillingBillCycleTypeEnum = void 0;
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
var ChargeOverrideForEvergreenBillingBillCycleTypeEnum;
(function (ChargeOverrideForEvergreenBillingBillCycleTypeEnum) {
    ChargeOverrideForEvergreenBillingBillCycleTypeEnum["DefaultFromCustomer"] = "DefaultFromCustomer";
    ChargeOverrideForEvergreenBillingBillCycleTypeEnum["SpecificDayofMonth"] = "SpecificDayofMonth";
    ChargeOverrideForEvergreenBillingBillCycleTypeEnum["SubscriptionStartDay"] = "SubscriptionStartDay";
    ChargeOverrideForEvergreenBillingBillCycleTypeEnum["ChargeTriggerDay"] = "ChargeTriggerDay";
    ChargeOverrideForEvergreenBillingBillCycleTypeEnum["SpecificDayofWeek"] = "SpecificDayofWeek";
})(ChargeOverrideForEvergreenBillingBillCycleTypeEnum = exports.ChargeOverrideForEvergreenBillingBillCycleTypeEnum || (exports.ChargeOverrideForEvergreenBillingBillCycleTypeEnum = {}));
var ChargeOverrideForEvergreenBillingBillingPeriodEnum;
(function (ChargeOverrideForEvergreenBillingBillingPeriodEnum) {
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["Month"] = "Month";
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["Quarter"] = "Quarter";
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["SemiAnnual"] = "Semi_Annual";
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["Annual"] = "Annual";
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["EighteenMonths"] = "Eighteen_Months";
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["TwoYears"] = "Two_Years";
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["ThreeYears"] = "Three_Years";
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["FiveYears"] = "Five_Years";
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["SpecificMonths"] = "Specific_Months";
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["SubscriptionTerm"] = "Subscription_Term";
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["Week"] = "Week";
    ChargeOverrideForEvergreenBillingBillingPeriodEnum["SpecificWeeks"] = "Specific_Weeks";
})(ChargeOverrideForEvergreenBillingBillingPeriodEnum = exports.ChargeOverrideForEvergreenBillingBillingPeriodEnum || (exports.ChargeOverrideForEvergreenBillingBillingPeriodEnum = {}));
var ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum;
(function (ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum) {
    ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum["AlignToCharge"] = "AlignToCharge";
    ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum["AlignToSubscriptionStart"] = "AlignToSubscriptionStart";
    ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum["AlignToTermStart"] = "AlignToTermStart";
})(ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum = exports.ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum || (exports.ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum = {}));
var ChargeOverrideForEvergreenBillingBillingTimingEnum;
(function (ChargeOverrideForEvergreenBillingBillingTimingEnum) {
    ChargeOverrideForEvergreenBillingBillingTimingEnum["InAdvance"] = "IN_ADVANCE";
    ChargeOverrideForEvergreenBillingBillingTimingEnum["InArrears"] = "IN_ARREARS";
})(ChargeOverrideForEvergreenBillingBillingTimingEnum = exports.ChargeOverrideForEvergreenBillingBillingTimingEnum || (exports.ChargeOverrideForEvergreenBillingBillingTimingEnum = {}));
var ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum;
(function (ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum) {
    ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum["Sunday"] = "Sunday";
    ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum["Monday"] = "Monday";
    ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum["Tuesday"] = "Tuesday";
    ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum["Wednesday"] = "Wednesday";
    ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum["Thursday"] = "Thursday";
    ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum["Friday"] = "Friday";
    ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum["Saturday"] = "Saturday";
})(ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum = exports.ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum || (exports.ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum = {}));
// ChargeOverrideForEvergreenBilling
/**
 * Billing information about the charge.
 *
**/
var ChargeOverrideForEvergreenBilling = /** @class */ (function (_super) {
    __extends(ChargeOverrideForEvergreenBilling, _super);
    function ChargeOverrideForEvergreenBilling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billCycleDay" }),
        __metadata("design:type", Number)
    ], ChargeOverrideForEvergreenBilling.prototype, "billCycleDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billCycleType" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreenBilling.prototype, "billCycleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriod" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreenBilling.prototype, "billingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriodAlignment" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreenBilling.prototype, "billingPeriodAlignment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingTiming" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreenBilling.prototype, "billingTiming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=specificBillingPeriod" }),
        __metadata("design:type", Number)
    ], ChargeOverrideForEvergreenBilling.prototype, "specificBillingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weeklyBillCycleDay" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreenBilling.prototype, "weeklyBillCycleDay", void 0);
    return ChargeOverrideForEvergreenBilling;
}(utils_1.SpeakeasyBase));
exports.ChargeOverrideForEvergreenBilling = ChargeOverrideForEvergreenBilling;
// ChargeOverrideForEvergreenPricing
/**
 * Pricing information about the charge.
 *
**/
var ChargeOverrideForEvergreenPricing = /** @class */ (function (_super) {
    __extends(ChargeOverrideForEvergreenPricing, _super);
    function ChargeOverrideForEvergreenPricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeModelData" }),
        __metadata("design:type", chargemodeldataoverride_1.ChargeModelDataOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "chargeModelData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discount" }),
        __metadata("design:type", discountpricingoverride_1.DiscountPricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "discount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeFlatFee" }),
        __metadata("design:type", onetimeflatfeepricingoverride_1.OneTimeFlatFeePricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "oneTimeFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimePerUnit" }),
        __metadata("design:type", onetimeperunitpricingoverride_1.OneTimePerUnitPricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "oneTimePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeTiered" }),
        __metadata("design:type", onetimetieredpricingoverride_1.OneTimeTieredPricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "oneTimeTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeVolume" }),
        __metadata("design:type", onetimevolumepricingoverride_1.OneTimeVolumePricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "oneTimeVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringFlatFee" }),
        __metadata("design:type", recurringflatfeepricingoverride_1.RecurringFlatFeePricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "recurringFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringPerUnit" }),
        __metadata("design:type", recurringperunitpricingoverride_1.RecurringPerUnitPricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "recurringPerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringTiered" }),
        __metadata("design:type", recurringtieredpricingoverride_1.RecurringTieredPricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "recurringTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringVolume" }),
        __metadata("design:type", recurringvolumepricingoverride_1.RecurringVolumePricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "recurringVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageFlatFee" }),
        __metadata("design:type", usageflatfeepricingoverride_1.UsageFlatFeePricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "usageFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageOverage" }),
        __metadata("design:type", usageoveragepricingoverride_1.UsageOveragePricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "usageOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usagePerUnit" }),
        __metadata("design:type", usageperunitpricingoverride_1.UsagePerUnitPricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "usagePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageTiered" }),
        __metadata("design:type", usagetieredpricingoverride_1.UsageTieredPricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "usageTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageTieredWithOverage" }),
        __metadata("design:type", usagetieredwithoveragepricingoverride_1.UsageTieredWithOveragePricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "usageTieredWithOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageVolume" }),
        __metadata("design:type", usagevolumepricingoverride_1.UsageVolumePricingOverride)
    ], ChargeOverrideForEvergreenPricing.prototype, "usageVolume", void 0);
    return ChargeOverrideForEvergreenPricing;
}(utils_1.SpeakeasyBase));
exports.ChargeOverrideForEvergreenPricing = ChargeOverrideForEvergreenPricing;
var ChargeOverrideForEvergreenRevRecTriggerConditionEnum;
(function (ChargeOverrideForEvergreenRevRecTriggerConditionEnum) {
    ChargeOverrideForEvergreenRevRecTriggerConditionEnum["ContractEffectiveDate"] = "Contract Effective Date";
    ChargeOverrideForEvergreenRevRecTriggerConditionEnum["ServiceActivationDate"] = "Service Activation Date";
    ChargeOverrideForEvergreenRevRecTriggerConditionEnum["CustomerAcceptanceDate"] = "Customer Acceptance Date";
})(ChargeOverrideForEvergreenRevRecTriggerConditionEnum = exports.ChargeOverrideForEvergreenRevRecTriggerConditionEnum || (exports.ChargeOverrideForEvergreenRevRecTriggerConditionEnum = {}));
var ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum;
(function (ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum) {
    ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum["RecognizeUponInvoicing"] = "Recognize upon invoicing";
    ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum["RecognizeDailyOverTime"] = "Recognize daily over time";
})(ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum = exports.ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum || (exports.ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum = {}));
// ChargeOverrideForEvergreen
/**
 * Charge associated with a rate plan.
 *
**/
var ChargeOverrideForEvergreen = /** @class */ (function (_super) {
    __extends(ChargeOverrideForEvergreen, _super);
    function ChargeOverrideForEvergreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing" }),
        __metadata("design:type", ChargeOverrideForEvergreenBilling)
    ], ChargeOverrideForEvergreen.prototype, "billing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreen.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], ChargeOverrideForEvergreen.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreen.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", endconditions_1.EndConditions)
    ], ChargeOverrideForEvergreen.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pricing" }),
        __metadata("design:type", ChargeOverrideForEvergreenPricing)
    ], ChargeOverrideForEvergreen.prototype, "pricing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanChargeId" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreen.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revRecCode" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreen.prototype, "revRecCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revRecTriggerCondition" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreen.prototype, "revRecTriggerCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revenueRecognitionRuleName" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreen.prototype, "revenueRecognitionRuleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", triggerparams_1.TriggerParams)
    ], ChargeOverrideForEvergreen.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uniqueToken" }),
        __metadata("design:type", String)
    ], ChargeOverrideForEvergreen.prototype, "uniqueToken", void 0);
    return ChargeOverrideForEvergreen;
}(utils_1.SpeakeasyBase));
exports.ChargeOverrideForEvergreen = ChargeOverrideForEvergreen;
