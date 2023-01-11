import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum ChargeOverrideForEvergreenBillingBillCycleTypeEnum {
    DefaultFromCustomer = "DefaultFromCustomer",
    SpecificDayofMonth = "SpecificDayofMonth",
    SubscriptionStartDay = "SubscriptionStartDay",
    ChargeTriggerDay = "ChargeTriggerDay",
    SpecificDayofWeek = "SpecificDayofWeek"
}

export enum ChargeOverrideForEvergreenBillingBillingPeriodEnum {
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

export enum ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum {
    AlignToCharge = "AlignToCharge",
    AlignToSubscriptionStart = "AlignToSubscriptionStart",
    AlignToTermStart = "AlignToTermStart"
}

export enum ChargeOverrideForEvergreenBillingBillingTimingEnum {
    InAdvance = "IN_ADVANCE",
    InArrears = "IN_ARREARS"
}

export enum ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}


// ChargeOverrideForEvergreenBilling
/** 
 * Billing information about the charge.
 * 
**/
export class ChargeOverrideForEvergreenBilling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billCycleDay" })
  billCycleDay?: number;

  @SpeakeasyMetadata({ data: "json, name=billCycleType" })
  billCycleType?: ChargeOverrideForEvergreenBillingBillCycleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=billingPeriod" })
  billingPeriod?: ChargeOverrideForEvergreenBillingBillingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=billingPeriodAlignment" })
  billingPeriodAlignment?: ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=billingTiming" })
  billingTiming?: ChargeOverrideForEvergreenBillingBillingTimingEnum;

  @SpeakeasyMetadata({ data: "json, name=specificBillingPeriod" })
  specificBillingPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=weeklyBillCycleDay" })
  weeklyBillCycleDay?: ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum;
}


// ChargeOverrideForEvergreenPricing
/** 
 * Pricing information about the charge.
 * 
**/
export class ChargeOverrideForEvergreenPricing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeModelData" })
  chargeModelData?: ChargeModelDataOverride;

  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: DiscountPricingOverride;

  @SpeakeasyMetadata({ data: "json, name=oneTimeFlatFee" })
  oneTimeFlatFee?: OneTimeFlatFeePricingOverride;

  @SpeakeasyMetadata({ data: "json, name=oneTimePerUnit" })
  oneTimePerUnit?: OneTimePerUnitPricingOverride;

  @SpeakeasyMetadata({ data: "json, name=oneTimeTiered" })
  oneTimeTiered?: OneTimeTieredPricingOverride;

  @SpeakeasyMetadata({ data: "json, name=oneTimeVolume" })
  oneTimeVolume?: OneTimeVolumePricingOverride;

  @SpeakeasyMetadata({ data: "json, name=recurringFlatFee" })
  recurringFlatFee?: RecurringFlatFeePricingOverride;

  @SpeakeasyMetadata({ data: "json, name=recurringPerUnit" })
  recurringPerUnit?: RecurringPerUnitPricingOverride;

  @SpeakeasyMetadata({ data: "json, name=recurringTiered" })
  recurringTiered?: RecurringTieredPricingOverride;

  @SpeakeasyMetadata({ data: "json, name=recurringVolume" })
  recurringVolume?: RecurringVolumePricingOverride;

  @SpeakeasyMetadata({ data: "json, name=usageFlatFee" })
  usageFlatFee?: UsageFlatFeePricingOverride;

  @SpeakeasyMetadata({ data: "json, name=usageOverage" })
  usageOverage?: UsageOveragePricingOverride;

  @SpeakeasyMetadata({ data: "json, name=usagePerUnit" })
  usagePerUnit?: UsagePerUnitPricingOverride;

  @SpeakeasyMetadata({ data: "json, name=usageTiered" })
  usageTiered?: UsageTieredPricingOverride;

  @SpeakeasyMetadata({ data: "json, name=usageTieredWithOverage" })
  usageTieredWithOverage?: UsageTieredWithOveragePricingOverride;

  @SpeakeasyMetadata({ data: "json, name=usageVolume" })
  usageVolume?: UsageVolumePricingOverride;
}

export enum ChargeOverrideForEvergreenRevRecTriggerConditionEnum {
    ContractEffectiveDate = "Contract Effective Date",
    ServiceActivationDate = "Service Activation Date",
    CustomerAcceptanceDate = "Customer Acceptance Date"
}

export enum ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum {
    RecognizeUponInvoicing = "Recognize upon invoicing",
    RecognizeDailyOverTime = "Recognize daily over time"
}


// ChargeOverrideForEvergreen
/** 
 * Charge associated with a rate plan.
 * 
**/
export class ChargeOverrideForEvergreen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: ChargeOverrideForEvergreenBilling;

  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: EndConditions;

  @SpeakeasyMetadata({ data: "json, name=pricing" })
  pricing?: ChargeOverrideForEvergreenPricing;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId: string;

  @SpeakeasyMetadata({ data: "json, name=revRecCode" })
  revRecCode?: string;

  @SpeakeasyMetadata({ data: "json, name=revRecTriggerCondition" })
  revRecTriggerCondition?: ChargeOverrideForEvergreenRevRecTriggerConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=revenueRecognitionRuleName" })
  revenueRecognitionRuleName?: ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: TriggerParams;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
