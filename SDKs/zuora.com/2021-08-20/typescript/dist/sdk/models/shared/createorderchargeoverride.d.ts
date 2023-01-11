import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeModelDataOverride } from "./chargemodeldataoverride";
import { DiscountPricingOverride } from "./discountpricingoverride";
import { OneTimeFlatFeePricingOverride } from "./onetimeflatfeepricingoverride";
import { OneTimePerUnitPricingOverride } from "./onetimeperunitpricingoverride";
import { OneTimeTieredPricingOverride } from "./onetimetieredpricingoverride";
import { OneTimeVolumePricingOverride } from "./onetimevolumepricingoverride";
import { RecurringFlatFeePricingOverride } from "./recurringflatfeepricingoverride";
import { RecurringPerUnitPricingOverride } from "./recurringperunitpricingoverride";
import { RecurringTieredPricingOverride } from "./recurringtieredpricingoverride";
import { RecurringVolumePricingOverride } from "./recurringvolumepricingoverride";
import { UsageFlatFeePricingOverride } from "./usageflatfeepricingoverride";
import { UsageOveragePricingOverride } from "./usageoveragepricingoverride";
import { UsagePerUnitPricingOverride } from "./usageperunitpricingoverride";
import { UsageTieredPricingOverride } from "./usagetieredpricingoverride";
import { UsageTieredWithOveragePricingOverride } from "./usagetieredwithoveragepricingoverride";
import { UsageVolumePricingOverride } from "./usagevolumepricingoverride";
import { EndConditions } from "./endconditions";
import { CreateOrderTriggerParams } from "./createordertriggerparams";
export declare enum CreateOrderChargeOverrideBillingBillCycleTypeEnum {
    DefaultFromCustomer = "DefaultFromCustomer",
    SpecificDayofMonth = "SpecificDayofMonth",
    SubscriptionStartDay = "SubscriptionStartDay",
    ChargeTriggerDay = "ChargeTriggerDay",
    SpecificDayofWeek = "SpecificDayofWeek"
}
export declare enum CreateOrderChargeOverrideBillingBillingPeriodEnum {
    Month = "Month",
    Quarter = "Quarter",
    SemiAnnual = "Semi_Annual",
    Annual = "Annual",
    EighteenMonths = "Eighteen_Months",
    TwoYears = "Two_Years",
    ThreeYears = "Three_Years",
    FiveYears = "Five_Years",
    SpecificMonths = "Specific_Months",
    SubscriptionTerm = "Subscription_Term",
    Week = "Week",
    SpecificWeeks = "Specific_Weeks"
}
export declare enum CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum {
    AlignToCharge = "AlignToCharge",
    AlignToSubscriptionStart = "AlignToSubscriptionStart",
    AlignToTermStart = "AlignToTermStart"
}
export declare enum CreateOrderChargeOverrideBillingBillingTimingEnum {
    InAdvance = "IN_ADVANCE",
    InArrears = "IN_ARREARS"
}
export declare enum CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}
/**
 * Billing information about the charge.
 *
**/
export declare class CreateOrderChargeOverrideBilling extends SpeakeasyBase {
    billCycleDay?: number;
    billCycleType?: CreateOrderChargeOverrideBillingBillCycleTypeEnum;
    billingPeriod?: CreateOrderChargeOverrideBillingBillingPeriodEnum;
    billingPeriodAlignment?: CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum;
    billingTiming?: CreateOrderChargeOverrideBillingBillingTimingEnum;
    specificBillingPeriod?: number;
    weeklyBillCycleDay?: CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum;
}
/**
 * Pricing information about the charge.
 *
**/
export declare class CreateOrderChargeOverridePricing extends SpeakeasyBase {
    chargeModelData?: ChargeModelDataOverride;
    discount?: DiscountPricingOverride;
    oneTimeFlatFee?: OneTimeFlatFeePricingOverride;
    oneTimePerUnit?: OneTimePerUnitPricingOverride;
    oneTimeTiered?: OneTimeTieredPricingOverride;
    oneTimeVolume?: OneTimeVolumePricingOverride;
    recurringFlatFee?: RecurringFlatFeePricingOverride;
    recurringPerUnit?: RecurringPerUnitPricingOverride;
    recurringTiered?: RecurringTieredPricingOverride;
    recurringVolume?: RecurringVolumePricingOverride;
    usageFlatFee?: UsageFlatFeePricingOverride;
    usageOverage?: UsageOveragePricingOverride;
    usagePerUnit?: UsagePerUnitPricingOverride;
    usageTiered?: UsageTieredPricingOverride;
    usageTieredWithOverage?: UsageTieredWithOveragePricingOverride;
    usageVolume?: UsageVolumePricingOverride;
}
export declare enum CreateOrderChargeOverrideRevRecTriggerConditionEnum {
    ContractEffectiveDate = "Contract Effective Date",
    ServiceActivationDate = "Service Activation Date",
    CustomerAcceptanceDate = "Customer Acceptance Date"
}
export declare enum CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum {
    RecognizeUponInvoicing = "Recognize upon invoicing",
    RecognizeDailyOverTime = "Recognize daily over time"
}
/**
 * Charge associated with a rate plan.
 *
**/
export declare class CreateOrderChargeOverride extends SpeakeasyBase {
    billing?: CreateOrderChargeOverrideBilling;
    chargeNumber?: string;
    customFields?: Record<string, any>;
    description?: string;
    endDate?: EndConditions;
    pricing?: CreateOrderChargeOverridePricing;
    productRatePlanChargeId: string;
    revRecCode?: string;
    revRecTriggerCondition?: CreateOrderChargeOverrideRevRecTriggerConditionEnum;
    revenueRecognitionRuleName?: CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum;
    startDate?: CreateOrderTriggerParams;
    uniqueToken?: string;
}
