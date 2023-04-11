import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeModelDataOverride } from "./chargemodeldataoverride";
import { DiscountPricingOverride } from "./discountpricingoverride";
import { EndConditions } from "./endconditions";
import { OneTimeFlatFeePricingOverride } from "./onetimeflatfeepricingoverride";
import { OneTimePerUnitPricingOverride } from "./onetimeperunitpricingoverride";
import { OneTimeTieredPricingOverride } from "./onetimetieredpricingoverride";
import { OneTimeVolumePricingOverride } from "./onetimevolumepricingoverride";
import { RecurringFlatFeePricingOverride } from "./recurringflatfeepricingoverride";
import { RecurringPerUnitPricingOverride } from "./recurringperunitpricingoverride";
import { RecurringTieredPricingOverride } from "./recurringtieredpricingoverride";
import { RecurringVolumePricingOverride } from "./recurringvolumepricingoverride";
import { TriggerParams } from "./triggerparams";
import { UsageFlatFeePricingOverride } from "./usageflatfeepricingoverride";
import { UsageOveragePricingOverride } from "./usageoveragepricingoverride";
import { UsagePerUnitPricingOverride } from "./usageperunitpricingoverride";
import { UsageTieredPricingOverride } from "./usagetieredpricingoverride";
import { UsageTieredWithOveragePricingOverride } from "./usagetieredwithoveragepricingoverride";
import { UsageVolumePricingOverride } from "./usagevolumepricingoverride";
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
export declare enum ChargeOverrideForEvergreenBillingBillCycleTypeEnum {
    DefaultFromCustomer = "DefaultFromCustomer",
    SpecificDayofMonth = "SpecificDayofMonth",
    SubscriptionStartDay = "SubscriptionStartDay",
    ChargeTriggerDay = "ChargeTriggerDay",
    SpecificDayofWeek = "SpecificDayofWeek"
}
/**
 * Billing frequency of the charge. The value of this field controls the duration of each billing period.
 *
 * @remarks
 *
 * If the value of this field is `Specific_Months` or `Specific_Weeks`, use the `specificBillingPeriod` field to specify the duration of each billing period.
 *
 */
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
export declare enum ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum {
    AlignToCharge = "AlignToCharge",
    AlignToSubscriptionStart = "AlignToSubscriptionStart",
    AlignToTermStart = "AlignToTermStart"
}
/**
 * Specifies whether to invoice for a billing period on the first day of the billing period (billing in advance) or the first day of the next billing period (billing in arrears).
 *
 * @remarks
 *
 */
export declare enum ChargeOverrideForEvergreenBillingBillingTimingEnum {
    InAdvance = "IN_ADVANCE",
    InArrears = "IN_ARREARS"
}
/**
 * Day of the week that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofWeek`.
 *
 * @remarks
 *
 */
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
 * @remarks
 *
 */
export declare class ChargeOverrideForEvergreenBilling extends SpeakeasyBase {
    /**
     * Day of the month that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofMonth`.
     *
     * @remarks
     *
     */
    billCycleDay?: number;
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
    billCycleType?: ChargeOverrideForEvergreenBillingBillCycleTypeEnum;
    /**
     * Billing frequency of the charge. The value of this field controls the duration of each billing period.
     *
     * @remarks
     *
     * If the value of this field is `Specific_Months` or `Specific_Weeks`, use the `specificBillingPeriod` field to specify the duration of each billing period.
     *
     */
    billingPeriod?: ChargeOverrideForEvergreenBillingBillingPeriodEnum;
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
    billingPeriodAlignment?: ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum;
    /**
     * Specifies whether to invoice for a billing period on the first day of the billing period (billing in advance) or the first day of the next billing period (billing in arrears).
     *
     * @remarks
     *
     */
    billingTiming?: ChargeOverrideForEvergreenBillingBillingTimingEnum;
    /**
     * Duration of each billing period in months or weeks, depending on the value of the `billingPeriod` field. Only applicable if the value of the `billingPeriod` field is `Specific_Months` or `Specific_Weeks`.
     *
     * @remarks
     *
     */
    specificBillingPeriod?: number;
    /**
     * Day of the week that each billing period begins on. Only applicable if the value of the `billCycleType` field is `SpecificDayofWeek`.
     *
     * @remarks
     *
     */
    weeklyBillCycleDay?: ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum;
}
/**
 * Pricing information about the charge.
 *
 * @remarks
 *
 */
export declare class ChargeOverrideForEvergreenPricing extends SpeakeasyBase {
    /**
     * Container for charge model configuration data.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
     *
     */
    chargeModelData?: ChargeModelDataOverride;
    /**
     * Pricing information about a discount charge.
     *
     * @remarks
     *
     */
    discount?: DiscountPricingOverride;
    /**
     * Pricing information about a one-time charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
     *
     * @remarks
     *
     */
    oneTimeFlatFee?: OneTimeFlatFeePricingOverride;
    /**
     * Pricing information about a one-time charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit purchased.
     *
     * @remarks
     *
     */
    oneTimePerUnit?: OneTimePerUnitPricingOverride;
    /**
     * Pricing information about a one-time charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
     *
     * @remarks
     *
     */
    oneTimeTiered?: OneTimeTieredPricingOverride;
    /**
     * Pricing information about a one-time charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
     *
     * @remarks
     *
     */
    oneTimeVolume?: OneTimeVolumePricingOverride;
    /**
     * Pricing information about a recurring charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
     *
     * @remarks
     *
     */
    recurringFlatFee?: RecurringFlatFeePricingOverride;
    /**
     * Pricing information about a recurring charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit purchased.
     *
     * @remarks
     *
     */
    recurringPerUnit?: RecurringPerUnitPricingOverride;
    /**
     * Pricing information about a recurring charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
     *
     * @remarks
     *
     */
    recurringTiered?: RecurringTieredPricingOverride;
    /**
     * Pricing information about a recurring charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
     *
     * @remarks
     *
     */
    recurringVolume?: RecurringVolumePricingOverride;
    /**
     * Pricing information about a usage charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
     *
     * @remarks
     *
     */
    usageFlatFee?: UsageFlatFeePricingOverride;
    /**
     * Pricing information about a usage charge that uses the "overage" charge model. In this charge model, the charge has an allowance of free units and a fixed price per additional unit consumed.
     *
     * @remarks
     *
     */
    usageOverage?: UsageOveragePricingOverride;
    /**
     * Pricing information about a usage charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit consumed.
     *
     * @remarks
     *
     */
    usagePerUnit?: UsagePerUnitPricingOverride;
    /**
     * Pricing information about a usage charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed.
     *
     * @remarks
     *
     */
    usageTiered?: UsageTieredPricingOverride;
    /**
     * Pricing information about a usage charge that uses the "tiered with overage" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed. The charge also has a fixed price per unit consumed beyond the limit of the final tier.
     *
     * @remarks
     *
     */
    usageTieredWithOverage?: UsageTieredWithOveragePricingOverride;
    /**
     * Pricing information about a usage charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are consumed.
     *
     * @remarks
     *
     */
    usageVolume?: UsageVolumePricingOverride;
}
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
export declare enum ChargeOverrideForEvergreenRevRecTriggerConditionEnum {
    ContractEffectiveDate = "Contract Effective Date",
    ServiceActivationDate = "Service Activation Date",
    CustomerAcceptanceDate = "Customer Acceptance Date"
}
/**
 * Specifies the revenue recognition rule.
 *
 * @remarks
 *
 *   * `Recognize upon invoicing`
 *   * `Recognize daily over time`
 *
 */
export declare enum ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum {
    RecognizeUponInvoicing = "Recognize upon invoicing",
    RecognizeDailyOverTime = "Recognize daily over time"
}
/**
 * Charge associated with a rate plan.
 *
 * @remarks
 *
 */
export declare class ChargeOverrideForEvergreen extends SpeakeasyBase {
    /**
     * Billing information about the charge.
     *
     * @remarks
     *
     */
    billing?: ChargeOverrideForEvergreenBilling;
    /**
     * Charge number of the charge. For example, C-00000307.
     *
     * @remarks
     *
     * If you do not set this field, Zuora will generate the charge number.
     *
     */
    chargeNumber?: string;
    /**
     * Container for custom fields of a Rate Plan Charge object.
     *
     * @remarks
     *
     */
    customFields?: Record<string, any>;
    /**
     * Description of the charge.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * Specifies when a charge becomes inactive.
     *
     * @remarks
     *
     */
    endDate?: EndConditions;
    /**
     * Pricing information about the charge.
     *
     * @remarks
     *
     */
    pricing?: ChargeOverrideForEvergreenPricing;
    /**
     * Internal identifier of the product rate plan charge that the charge is based on.
     *
     * @remarks
     *
     */
    productRatePlanChargeId: string;
    /**
     * Revenue Recognition Code
     *
     * @remarks
     *
     */
    revRecCode?: string;
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
    revRecTriggerCondition?: ChargeOverrideForEvergreenRevRecTriggerConditionEnum;
    /**
     * Specifies the revenue recognition rule.
     *
     * @remarks
     *
     *   * `Recognize upon invoicing`
     *   * `Recognize daily over time`
     *
     */
    revenueRecognitionRuleName?: ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum;
    /**
     * Specifies when a charge becomes active.
     *
     * @remarks
     *
     */
    startDate?: TriggerParams;
    /**
     * Unique identifier for the charge. This identifier enables you to refer to the charge before the charge has an internal identifier in Zuora.
     *
     * @remarks
     *
     * For instance, suppose that you want to use a single order to add a product to a subscription and later update the same product. When you add the product, you can set a unique identifier for the charge. Then when you update the product, you can use the same unique identifier to specify which charge to modify.
     *
     */
    uniqueToken?: string;
}
