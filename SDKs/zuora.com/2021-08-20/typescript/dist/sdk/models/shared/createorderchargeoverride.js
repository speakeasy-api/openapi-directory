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
exports.CreateOrderChargeOverride = exports.CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum = exports.CreateOrderChargeOverrideRevRecTriggerConditionEnum = exports.CreateOrderChargeOverridePricing = exports.CreateOrderChargeOverrideBilling = exports.CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum = exports.CreateOrderChargeOverrideBillingBillingTimingEnum = exports.CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum = exports.CreateOrderChargeOverrideBillingBillingPeriodEnum = exports.CreateOrderChargeOverrideBillingBillCycleTypeEnum = void 0;
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
var createordertriggerparams_1 = require("./createordertriggerparams");
var CreateOrderChargeOverrideBillingBillCycleTypeEnum;
(function (CreateOrderChargeOverrideBillingBillCycleTypeEnum) {
    CreateOrderChargeOverrideBillingBillCycleTypeEnum["DefaultFromCustomer"] = "DefaultFromCustomer";
    CreateOrderChargeOverrideBillingBillCycleTypeEnum["SpecificDayofMonth"] = "SpecificDayofMonth";
    CreateOrderChargeOverrideBillingBillCycleTypeEnum["SubscriptionStartDay"] = "SubscriptionStartDay";
    CreateOrderChargeOverrideBillingBillCycleTypeEnum["ChargeTriggerDay"] = "ChargeTriggerDay";
    CreateOrderChargeOverrideBillingBillCycleTypeEnum["SpecificDayofWeek"] = "SpecificDayofWeek";
})(CreateOrderChargeOverrideBillingBillCycleTypeEnum = exports.CreateOrderChargeOverrideBillingBillCycleTypeEnum || (exports.CreateOrderChargeOverrideBillingBillCycleTypeEnum = {}));
var CreateOrderChargeOverrideBillingBillingPeriodEnum;
(function (CreateOrderChargeOverrideBillingBillingPeriodEnum) {
    CreateOrderChargeOverrideBillingBillingPeriodEnum["Month"] = "Month";
    CreateOrderChargeOverrideBillingBillingPeriodEnum["Quarter"] = "Quarter";
    CreateOrderChargeOverrideBillingBillingPeriodEnum["SemiAnnual"] = "Semi_Annual";
    CreateOrderChargeOverrideBillingBillingPeriodEnum["Annual"] = "Annual";
    CreateOrderChargeOverrideBillingBillingPeriodEnum["EighteenMonths"] = "Eighteen_Months";
    CreateOrderChargeOverrideBillingBillingPeriodEnum["TwoYears"] = "Two_Years";
    CreateOrderChargeOverrideBillingBillingPeriodEnum["ThreeYears"] = "Three_Years";
    CreateOrderChargeOverrideBillingBillingPeriodEnum["FiveYears"] = "Five_Years";
    CreateOrderChargeOverrideBillingBillingPeriodEnum["SpecificMonths"] = "Specific_Months";
    CreateOrderChargeOverrideBillingBillingPeriodEnum["SubscriptionTerm"] = "Subscription_Term";
    CreateOrderChargeOverrideBillingBillingPeriodEnum["Week"] = "Week";
    CreateOrderChargeOverrideBillingBillingPeriodEnum["SpecificWeeks"] = "Specific_Weeks";
})(CreateOrderChargeOverrideBillingBillingPeriodEnum = exports.CreateOrderChargeOverrideBillingBillingPeriodEnum || (exports.CreateOrderChargeOverrideBillingBillingPeriodEnum = {}));
var CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum;
(function (CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum) {
    CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToCharge"] = "AlignToCharge";
    CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToSubscriptionStart"] = "AlignToSubscriptionStart";
    CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum["AlignToTermStart"] = "AlignToTermStart";
})(CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum = exports.CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum || (exports.CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum = {}));
var CreateOrderChargeOverrideBillingBillingTimingEnum;
(function (CreateOrderChargeOverrideBillingBillingTimingEnum) {
    CreateOrderChargeOverrideBillingBillingTimingEnum["InAdvance"] = "IN_ADVANCE";
    CreateOrderChargeOverrideBillingBillingTimingEnum["InArrears"] = "IN_ARREARS";
})(CreateOrderChargeOverrideBillingBillingTimingEnum = exports.CreateOrderChargeOverrideBillingBillingTimingEnum || (exports.CreateOrderChargeOverrideBillingBillingTimingEnum = {}));
var CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum;
(function (CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum) {
    CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Sunday"] = "Sunday";
    CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Monday"] = "Monday";
    CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Tuesday"] = "Tuesday";
    CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Wednesday"] = "Wednesday";
    CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Thursday"] = "Thursday";
    CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Friday"] = "Friday";
    CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum["Saturday"] = "Saturday";
})(CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum = exports.CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum || (exports.CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum = {}));
// CreateOrderChargeOverrideBilling
/**
 * Billing information about the charge.
 *
**/
var CreateOrderChargeOverrideBilling = /** @class */ (function (_super) {
    __extends(CreateOrderChargeOverrideBilling, _super);
    function CreateOrderChargeOverrideBilling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billCycleDay" }),
        __metadata("design:type", Number)
    ], CreateOrderChargeOverrideBilling.prototype, "billCycleDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billCycleType" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverrideBilling.prototype, "billCycleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriod" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverrideBilling.prototype, "billingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriodAlignment" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverrideBilling.prototype, "billingPeriodAlignment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingTiming" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverrideBilling.prototype, "billingTiming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=specificBillingPeriod" }),
        __metadata("design:type", Number)
    ], CreateOrderChargeOverrideBilling.prototype, "specificBillingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weeklyBillCycleDay" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverrideBilling.prototype, "weeklyBillCycleDay", void 0);
    return CreateOrderChargeOverrideBilling;
}(utils_1.SpeakeasyBase));
exports.CreateOrderChargeOverrideBilling = CreateOrderChargeOverrideBilling;
// CreateOrderChargeOverridePricing
/**
 * Pricing information about the charge.
 *
**/
var CreateOrderChargeOverridePricing = /** @class */ (function (_super) {
    __extends(CreateOrderChargeOverridePricing, _super);
    function CreateOrderChargeOverridePricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeModelData" }),
        __metadata("design:type", chargemodeldataoverride_1.ChargeModelDataOverride)
    ], CreateOrderChargeOverridePricing.prototype, "chargeModelData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discount" }),
        __metadata("design:type", discountpricingoverride_1.DiscountPricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "discount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeFlatFee" }),
        __metadata("design:type", onetimeflatfeepricingoverride_1.OneTimeFlatFeePricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "oneTimeFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimePerUnit" }),
        __metadata("design:type", onetimeperunitpricingoverride_1.OneTimePerUnitPricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "oneTimePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeTiered" }),
        __metadata("design:type", onetimetieredpricingoverride_1.OneTimeTieredPricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "oneTimeTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oneTimeVolume" }),
        __metadata("design:type", onetimevolumepricingoverride_1.OneTimeVolumePricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "oneTimeVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringFlatFee" }),
        __metadata("design:type", recurringflatfeepricingoverride_1.RecurringFlatFeePricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "recurringFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringPerUnit" }),
        __metadata("design:type", recurringperunitpricingoverride_1.RecurringPerUnitPricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "recurringPerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringTiered" }),
        __metadata("design:type", recurringtieredpricingoverride_1.RecurringTieredPricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "recurringTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringVolume" }),
        __metadata("design:type", recurringvolumepricingoverride_1.RecurringVolumePricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "recurringVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageFlatFee" }),
        __metadata("design:type", usageflatfeepricingoverride_1.UsageFlatFeePricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "usageFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageOverage" }),
        __metadata("design:type", usageoveragepricingoverride_1.UsageOveragePricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "usageOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usagePerUnit" }),
        __metadata("design:type", usageperunitpricingoverride_1.UsagePerUnitPricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "usagePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageTiered" }),
        __metadata("design:type", usagetieredpricingoverride_1.UsageTieredPricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "usageTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageTieredWithOverage" }),
        __metadata("design:type", usagetieredwithoveragepricingoverride_1.UsageTieredWithOveragePricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "usageTieredWithOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageVolume" }),
        __metadata("design:type", usagevolumepricingoverride_1.UsageVolumePricingOverride)
    ], CreateOrderChargeOverridePricing.prototype, "usageVolume", void 0);
    return CreateOrderChargeOverridePricing;
}(utils_1.SpeakeasyBase));
exports.CreateOrderChargeOverridePricing = CreateOrderChargeOverridePricing;
var CreateOrderChargeOverrideRevRecTriggerConditionEnum;
(function (CreateOrderChargeOverrideRevRecTriggerConditionEnum) {
    CreateOrderChargeOverrideRevRecTriggerConditionEnum["ContractEffectiveDate"] = "Contract Effective Date";
    CreateOrderChargeOverrideRevRecTriggerConditionEnum["ServiceActivationDate"] = "Service Activation Date";
    CreateOrderChargeOverrideRevRecTriggerConditionEnum["CustomerAcceptanceDate"] = "Customer Acceptance Date";
})(CreateOrderChargeOverrideRevRecTriggerConditionEnum = exports.CreateOrderChargeOverrideRevRecTriggerConditionEnum || (exports.CreateOrderChargeOverrideRevRecTriggerConditionEnum = {}));
var CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum;
(function (CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum) {
    CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum["RecognizeUponInvoicing"] = "Recognize upon invoicing";
    CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum["RecognizeDailyOverTime"] = "Recognize daily over time";
})(CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum = exports.CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum || (exports.CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum = {}));
// CreateOrderChargeOverride
/**
 * Charge associated with a rate plan.
 *
**/
var CreateOrderChargeOverride = /** @class */ (function (_super) {
    __extends(CreateOrderChargeOverride, _super);
    function CreateOrderChargeOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing" }),
        __metadata("design:type", CreateOrderChargeOverrideBilling)
    ], CreateOrderChargeOverride.prototype, "billing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverride.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], CreateOrderChargeOverride.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverride.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", endconditions_1.EndConditions)
    ], CreateOrderChargeOverride.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pricing" }),
        __metadata("design:type", CreateOrderChargeOverridePricing)
    ], CreateOrderChargeOverride.prototype, "pricing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanChargeId" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverride.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revRecCode" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverride.prototype, "revRecCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revRecTriggerCondition" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverride.prototype, "revRecTriggerCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revenueRecognitionRuleName" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverride.prototype, "revenueRecognitionRuleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", createordertriggerparams_1.CreateOrderTriggerParams)
    ], CreateOrderChargeOverride.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uniqueToken" }),
        __metadata("design:type", String)
    ], CreateOrderChargeOverride.prototype, "uniqueToken", void 0);
    return CreateOrderChargeOverride;
}(utils_1.SpeakeasyBase));
exports.CreateOrderChargeOverride = CreateOrderChargeOverride;
