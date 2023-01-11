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
import { CreateOrderTriggerParams } from "./createordertriggerparams";


export enum CreateOrderChargeOverrideBillingBillCycleTypeEnum {
    DefaultFromCustomer = "DefaultFromCustomer",
    SpecificDayofMonth = "SpecificDayofMonth",
    SubscriptionStartDay = "SubscriptionStartDay",
    ChargeTriggerDay = "ChargeTriggerDay",
    SpecificDayofWeek = "SpecificDayofWeek"
}

export enum CreateOrderChargeOverrideBillingBillingPeriodEnum {
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

export enum CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum {
    AlignToCharge = "AlignToCharge",
    AlignToSubscriptionStart = "AlignToSubscriptionStart",
    AlignToTermStart = "AlignToTermStart"
}

export enum CreateOrderChargeOverrideBillingBillingTimingEnum {
    InAdvance = "IN_ADVANCE",
    InArrears = "IN_ARREARS"
}

export enum CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}


// CreateOrderChargeOverrideBilling
/** 
 * Billing information about the charge.
 * 
**/
export class CreateOrderChargeOverrideBilling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billCycleDay" })
  billCycleDay?: number;

  @SpeakeasyMetadata({ data: "json, name=billCycleType" })
  billCycleType?: CreateOrderChargeOverrideBillingBillCycleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=billingPeriod" })
  billingPeriod?: CreateOrderChargeOverrideBillingBillingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=billingPeriodAlignment" })
  billingPeriodAlignment?: CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=billingTiming" })
  billingTiming?: CreateOrderChargeOverrideBillingBillingTimingEnum;

  @SpeakeasyMetadata({ data: "json, name=specificBillingPeriod" })
  specificBillingPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=weeklyBillCycleDay" })
  weeklyBillCycleDay?: CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum;
}


// CreateOrderChargeOverridePricing
/** 
 * Pricing information about the charge.
 * 
**/
export class CreateOrderChargeOverridePricing extends SpeakeasyBase {
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

export enum CreateOrderChargeOverrideRevRecTriggerConditionEnum {
    ContractEffectiveDate = "Contract Effective Date",
    ServiceActivationDate = "Service Activation Date",
    CustomerAcceptanceDate = "Customer Acceptance Date"
}

export enum CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum {
    RecognizeUponInvoicing = "Recognize upon invoicing",
    RecognizeDailyOverTime = "Recognize daily over time"
}


// CreateOrderChargeOverride
/** 
 * Charge associated with a rate plan.
 * 
**/
export class CreateOrderChargeOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: CreateOrderChargeOverrideBilling;

  @SpeakeasyMetadata({ data: "json, name=chargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: EndConditions;

  @SpeakeasyMetadata({ data: "json, name=pricing" })
  pricing?: CreateOrderChargeOverridePricing;

  @SpeakeasyMetadata({ data: "json, name=productRatePlanChargeId" })
  productRatePlanChargeId: string;

  @SpeakeasyMetadata({ data: "json, name=revRecCode" })
  revRecCode?: string;

  @SpeakeasyMetadata({ data: "json, name=revRecTriggerCondition" })
  revRecTriggerCondition?: CreateOrderChargeOverrideRevRecTriggerConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=revenueRecognitionRuleName" })
  revenueRecognitionRuleName?: CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: CreateOrderTriggerParams;

  @SpeakeasyMetadata({ data: "json, name=uniqueToken" })
  uniqueToken?: string;
}
