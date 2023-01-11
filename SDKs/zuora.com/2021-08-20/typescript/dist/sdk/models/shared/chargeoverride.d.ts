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
import { TriggerParams } from "./triggerparams";
export declare enum ChargeOverrideBillingBillCycleTypeEnum {
    DefaultFromCustomer = "DefaultFromCustomer",
    SpecificDayofMonth = "SpecificDayofMonth",
    SubscriptionStartDay = "SubscriptionStartDay",
    ChargeTriggerDay = "ChargeTriggerDay",
    SpecificDayofWeek = "SpecificDayofWeek"
}
export declare enum ChargeOverrideBillingBillingPeriodEnum {
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
export declare enum ChargeOverrideBillingBillingPeriodAlignmentEnum {
    AlignToCharge = "AlignToCharge",
    AlignToSubscriptionStart = "AlignToSubscriptionStart",
    AlignToTermStart = "AlignToTermStart"
}
export declare enum ChargeOverrideBillingBillingTimingEnum {
    InAdvance = "IN_ADVANCE",
    InArrears = "IN_ARREARS"
}
export declare enum ChargeOverrideBillingWeeklyBillCycleDayEnum {
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
export declare class ChargeOverrideBilling extends SpeakeasyBase {
    billCycleDay?: number;
    billCycleType?: ChargeOverrideBillingBillCycleTypeEnum;
    billingPeriod?: ChargeOverrideBillingBillingPeriodEnum;
    billingPeriodAlignment?: ChargeOverrideBillingBillingPeriodAlignmentEnum;
    billingTiming?: ChargeOverrideBillingBillingTimingEnum;
    specificBillingPeriod?: number;
    weeklyBillCycleDay?: ChargeOverrideBillingWeeklyBillCycleDayEnum;
}
/**
 * Pricing information about the charge.
 *
**/
export declare class ChargeOverridePricing extends SpeakeasyBase {
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
export declare enum ChargeOverrideRevRecTriggerConditionEnum {
    ContractEffectiveDate = "Contract Effective Date",
    ServiceActivationDate = "Service Activation Date",
    CustomerAcceptanceDate = "Customer Acceptance Date"
}
export declare enum ChargeOverrideRevenueRecognitionRuleNameEnum {
    RecognizeUponInvoicing = "Recognize upon invoicing",
    RecognizeDailyOverTime = "Recognize daily over time"
}
/**
 * Charge associated with a rate plan.
 *
**/
export declare class ChargeOverride extends SpeakeasyBase {
    billing?: ChargeOverrideBilling;
    chargeNumber?: string;
    customFields?: Record<string, any>;
    description?: string;
    endDate?: EndConditions;
    pricing?: ChargeOverridePricing;
    productRatePlanChargeId: string;
    revRecCode?: string;
    revRecTriggerCondition?: ChargeOverrideRevRecTriggerConditionEnum;
    revenueRecognitionRuleName?: ChargeOverrideRevenueRecognitionRuleNameEnum;
    startDate?: TriggerParams;
    uniqueToken?: string;
}
