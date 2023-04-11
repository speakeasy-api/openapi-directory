import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeModelConfigurationType } from "./chargemodelconfigurationtype";
import { POSTTierType } from "./posttiertype";
/**
 * Container for custom fields of a Rate Plan Charge object.
 *
 * @remarks
 *
 */
export declare class PUTScAddType extends SpeakeasyBase {
    /**
     * Specifies the type of charges that you want a specific discount to apply to.
     *
     * @remarks
     *
     * Values:
     *
     * * `ONETIME`
     * * `RECURRING`
     * * `USAGE`
     * * `ONETIMERECURRING`
     * * `ONETIMEUSAGE`
     * * `RECURRINGUSAGE`
     * * `ONETIMERECURRINGUSAGE`
     *
     * Available for the following charge type for the Discount-Fixed Amount and Discount-Percentage charge models:
     *
     * * Recurring
     *
     */
    applyDiscountTo?: string;
    /**
     * Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month customer is billed.
     *
     * @remarks
     *
     * Values: `1`-`31`
     *
     * Available for the following charge types:
     *
     * * Recurring
     * * Usage-based
     *
     */
    billCycleDay?: string;
    /**
     * Specifies how to determine the billing day for the charge. When this field is set to `SpecificDayofMonth`, set the `BillCycleDay` field. When this field is set to `SpecificDayofWeek`, set the `weeklyBillCycleDay` field.
     *
     * @remarks
     *
     * Values:
     *
     * * `DefaultFromCustomer`
     * * `SpecificDayofMonth`
     * * `SubscriptionStartDay`
     * * `ChargeTriggerDay`
     * * `SpecificDayofWeek`
     *
     * Available for the following charge types:
     *
     * * Recurring
     * * Usage-based
     *
     */
    billCycleType?: string;
    /**
     * Billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD).
     *
     * @remarks
     *
     * Values:
     *
     * * `Month`
     * * `Quarter`
     * * `Semi_Annual`
     * * `Annual`
     * * `Eighteen_Months`
     * * `Two_Years`
     * * `Three_Years`
     * * `Five_Years`
     * * `Specific_Months`
     * * `Subscription_Term`
     * * `Week`
     * * `Specific_Weeks`
     *
     * Available for the following charge types:
     *
     * * Recurring
     * * Usage-based
     *
     */
    billingPeriod?: string;
    /**
     * Aligns charges within the same subscription if multiple charges begin on different dates.
     *
     * @remarks
     *
     * Values:
     *
     * * `AlignToCharge`
     * * `AlignToSubscriptionStart`
     * * `AlignToTermStart`
     *
     * Available for the following charge types:
     *
     * * Recurring
     * * Usage-based
     *
     */
    billingPeriodAlignment?: string;
    /**
     * Billing timing for the charge for recurring charge types. Not avaliable for one time, usage and discount charges.
     *
     * @remarks
     *
     * Values:
     *
     * * `IN_ADVANCE` (default)
     * * `IN_ARREARS`
     *
     */
    billingTiming?: string;
    /**
     * Container for charge model configuration data.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. These charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
     *
     */
    chargeModelConfiguration?: ChargeModelConfigurationType;
    /**
     * Description of the charge.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * Specifies the amount of fixed-amount discount.
     *
     * @remarks
     *
     * Available for the following charge type for the Discount-Fixed Amount charge model:
     *
     * * Recurring
     *
     */
    discountAmount?: number;
    /**
     * Specifies if the discount applies to the product rate plan only , the entire subscription, or to any activity in the account.
     *
     * @remarks
     *
     * Values:
     *
     * * `rateplan`
     * * `subscription`
     * * `account`
     *
     * Available for the following charge type for the Discount-Fixed Amount and Discount-Percentage charge models:
     *
     * * Recurring
     *
     */
    discountLevel?: string;
    /**
     * Specifies the percentage of a percentage discount.
     *
     * @remarks
     *
     * Available for the following charge type for the Discount-Percentage charge model:
     *
     * * Recurring
     *
     */
    discountPercentage?: number;
    /**
     * Defines when the charge ends after the charge trigger date. If the subscription ends before the charge end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the charge end date.
     *
     * @remarks
     *
     * Values:
     *
     * * `Subscription_End`
     * * `Fixed_Period`
     * * `Specific_End_Date`
     *
     */
    endDateCondition?: string;
    /**
     * Specifies the number of units in the base set of units for this charge. Must be >=`0`.
     *
     * @remarks
     *
     * Available for the following charge types for the Overage charge model:
     *
     * * Recurring
     * * Usage-based
     *
     */
    includedUnits?: number;
    /**
     * The list price base for the product rate plan charge.
     *
     * @remarks
     *
     * Values:
     *
     * * `Per_Billing_Period`
     * * `Per_Month`
     * * `Per_Week`
     *
     * Available for the following charge type for the Flat Fee, Per Unit, Volume Pricing, and Tiered Pricing charge models:
     *
     * * Recurring
     *
     */
    listPriceBase?: string;
    /**
     * Unique number that identifies the charge. System-generated if not provided.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * Specifies the number of periods to use when calculating charges in an overage smoothing charge model.
     *
     * @remarks
     *
     * Available for the following charge type for the Overage and Tiered with Overage charge models:
     *
     * * Usage-based
     *
     */
    numberOfPeriods?: number;
    /**
     * Price for units over the allowed amount.
     *
     * @remarks
     *
     * Available for the following charge type for the Overage and Tiered with Overage charge models:
     *
     * * Usage-based
     *
     */
    overagePrice?: number;
    /**
     * Determines whether to credit the customer with unused units of usage.
     *
     * @remarks
     *
     * Values:
     *
     * * `NoCredit`
     * * `CreditBySpecificRate`
     *
     * Available for the following charge type for the Overage and Tiered with Overage charge models:
     *
     * * Usage-based
     *
     */
    overageUnusedUnitsCreditOption?: string;
    /**
     * Price for units in the subscription rate plan.
     *
     * @remarks
     *
     * Supports all charge types for the Flat Fee and Per Unit charge models
     *
     */
    price?: number;
    /**
     * Applies an automatic price change when a termed subscription is renewed. The Zuora Billing Admin setting Enable Automatic Price Change When Subscriptions are Renewed?  must be set to Yes to use this field.  See Define Default Subscription Settings for more information on setting this option.
     *
     * @remarks
     *
     * Values:
     *
     * * `NoChange` (default)
     * * `SpecificPercentageValue`
     * * `UseLatestProductCatalogPricing`
     *
     * Available for the following charge types:
     *
     * * Recurring
     * * Usage-based
     * * Not available for the Fixed-Amount Discount charge model.
     *
     */
    priceChangeOption?: string;
    /**
     * Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Required if you set the `PriceChangeOption` field to `SpecificPercentageValue`.
     *
     * @remarks
     *
     * Decimal between -100 and 100.
     *
     * Available for the following charge types:
     *
     * * Recurring
     * * Usage-based
     *
     * Not available for the Fixed-Amount Discount charge model.
     *
     */
    priceIncreasePercentage?: number;
    productRatePlanChargeId: string;
    /**
     * Number of units. Must be >=`0`.
     *
     * @remarks
     *
     * Available for the following charge types for the Per Unit, Volume Pricing, and Tiered Pricing charge models:
     *
     * * One-time
     * * Recurring
     *
     */
    quantity?: number;
    /**
     * Specifies a rating group based on which usage records are rated.
     *
     * @remarks
     *
     * Possible values:
     *
     * - `ByBillingPeriod` (default): The rating is based on all the usages in a billing period.
     * - `ByUsageStartDate`: The rating is based on all the usages on the same usage start date.
     * - `ByUsageRecord`: The rating is based on each usage record.
     * - `ByUsageUpload`: The rating is based on all the  usages in a uploaded usage file (`.xls` or `.csv`).
     * - `ByGroupId`: The rating is based on all the usages in a custom group.
     *
     * **Note:**
     * - The `ByBillingPeriod` value can be applied for all charge models.
     * - The `ByUsageStartDate`, `ByUsageRecord`, and `ByUsageUpload` values can only be applied for per unit, volume pricing, and tiered pricing charge models.
     * - The `ByGroupId` value is only available if you have the Active Rating feature enabled.
     * - Use this field only for Usage charges. One-Time Charges and Recurring Charges return `NULL`.
     *
     */
    ratingGroup?: string;
    /**
     * Specifies the number of month or week for the charges billing period. Required if you set the value of the `billingPeriod` field to `Specific_Months` or `Specific_Weeks`.
     *
     * @remarks
     *
     * Available for the following charge types:
     *
     * * Recurring
     * * Usage-based
     *
     */
    specificBillingPeriod?: number;
    /**
     * Defines when the charge ends after the charge trigger date.
     *
     * @remarks
     *
     * This field is only applicable when the `endDateCondition` field is set to `Specific_End_Date`.
     *
     * If the subscription ends before the specific end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the specific end date.
     *
     */
    specificEndDate?: Date;
    /**
     * Container for Volume, Tiered or Tiered with Overage charge models. Supports the following charge types:
     *
     * @remarks
     *
     * * One-time
     * * Recurring
     * * Usage-based
     *
     */
    tiers?: POSTTierType[];
    /**
     * Specifies when to start billing the customer for the charge. Required if the `triggerEvent` field is set to `USD`.
     *
     * @remarks
     *
     */
    triggerDate?: Date;
    /**
     * Specifies when to start billing the customer for the charge.
     *
     * @remarks
     *
     * Values:
     *
     * * `UCE`
     * * `USA`
     * * `UCA`
     * * `USD`
     *
     */
    triggerEvent?: string;
    /**
     * Specifies the rate to credit a customer for unused units of usage. This field applies only for overage charge models when the `OverageUnusedUnitsCreditOption` field is set to `CreditBySpecificRate`.
     *
     * @remarks
     *
     * Available for the following charge type for the Overage and Tiered with Overage charge models:
     *
     * * Usage-based
     *
     */
    unusedUnitsCreditRates?: number;
    /**
     * The period type used to define when the charge ends.
     *
     * @remarks
     *
     * Values:
     *
     * * `Billing_Periods`
     * * `Days`
     * * `Weeks`
     * * `Months`
     * * `Years`
     *
     * You must use this field together with the `upToPeriods` field to specify the time period.
     *
     * This field is applicable only when the `endDateCondition` field is set to `Fixed_Period`.
     *
     */
    upToPeriods?: number;
    /**
     * The period type used to define when the charge ends.
     *
     * @remarks
     *
     * Values:
     *
     * * `Billing_Periods`
     * * `Days`
     * * `Weeks`
     * * `Months`
     * * `Years`
     *
     * You must use this field together with the `upToPeriods` field to specify the time period.
     *
     * This field is applicable only when the `endDateCondition` field is set to `Fixed_Period`.
     *
     */
    upToPeriodsType?: string;
}
