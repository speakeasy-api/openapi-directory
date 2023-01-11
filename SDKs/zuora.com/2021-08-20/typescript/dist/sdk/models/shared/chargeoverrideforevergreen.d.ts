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
export declare enum ChargeOverrideForEvergreenBillingBillCycleTypeEnum {
    DefaultFromCustomer = "DefaultFromCustomer",
    SpecificDayofMonth = "SpecificDayofMonth",
    SubscriptionStartDay = "SubscriptionStartDay",
    ChargeTriggerDay = "ChargeTriggerDay",
    SpecificDayofWeek = "SpecificDayofWeek"
}
export declare enum ChargeOverrideForEvergreenBillingBillingPeriodEnum {
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
export declare enum ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum {
    AlignToCharge = "AlignToCharge",
    AlignToSubscriptionStart = "AlignToSubscriptionStart",
    AlignToTermStart = "AlignToTermStart"
}
export declare enum ChargeOverrideForEvergreenBillingBillingTimingEnum {
    InAdvance = "IN_ADVANCE",
    InArrears = "IN_ARREARS"
}
export declare enum ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum {
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
export declare class ChargeOverrideForEvergreenBilling extends SpeakeasyBase {
    billCycleDay?: number;
    billCycleType?: ChargeOverrideForEvergreenBillingBillCycleTypeEnum;
    billingPeriod?: ChargeOverrideForEvergreenBillingBillingPeriodEnum;
    billingPeriodAlignment?: ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum;
    billingTiming?: ChargeOverrideForEvergreenBillingBillingTimingEnum;
    specificBillingPeriod?: number;
    weeklyBillCycleDay?: ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum;
}
/**
 * Pricing information about the charge.
 *
**/
export declare class ChargeOverrideForEvergreenPricing extends SpeakeasyBase {
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
export declare enum ChargeOverrideForEvergreenRevRecTriggerConditionEnum {
    ContractEffectiveDate = "Contract Effective Date",
    ServiceActivationDate = "Service Activation Date",
    CustomerAcceptanceDate = "Customer Acceptance Date"
}
export declare enum ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum {
    RecognizeUponInvoicing = "Recognize upon invoicing",
    RecognizeDailyOverTime = "Recognize daily over time"
}
/**
 * Charge associated with a rate plan.
 *
**/
export declare class ChargeOverrideForEvergreen extends SpeakeasyBase {
    billing?: ChargeOverrideForEvergreenBilling;
    chargeNumber?: string;
    customFields?: Record<string, any>;
    description?: string;
    endDate?: EndConditions;
    pricing?: ChargeOverrideForEvergreenPricing;
    productRatePlanChargeId: string;
    revRecCode?: string;
    revRecTriggerCondition?: ChargeOverrideForEvergreenRevRecTriggerConditionEnum;
    revenueRecognitionRuleName?: ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum;
    startDate?: TriggerParams;
    uniqueToken?: string;
}
