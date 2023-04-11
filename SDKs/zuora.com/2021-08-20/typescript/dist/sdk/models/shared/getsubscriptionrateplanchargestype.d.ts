import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeModelConfigurationType } from "./chargemodelconfigurationtype";
import { GETDiscountApplyDetailsType } from "./getdiscountapplydetailstype";
import { GETTierType } from "./gettiertype";
/**
 * Container for custom fields of a Rate Plan Charge object.
 *
 * @remarks
 *
 */
export declare class GETSubscriptionRatePlanChargesType extends SpeakeasyBase {
    /**
     * Specifies the type of charges a specific discount applies to.
     *
     * @remarks
     *
     * This field is only used when applied to a discount charge model. If you are not using a discount charge model, the value is null.
     *
     * Possible values:
     *
     * * `RECURRING`
     * * `USAGE`
     * * `ONETIMERECURRING`
     * * `ONETIMEUSAGE`
     * * `RECURRINGUSAGE`
     * * `ONETIMERECURRINGUSAGE`
     *
     */
    applyDiscountTo?: string;
    /**
     * Billing cycle day (BCD), which is when bill runs generate invoices
     *
     * @remarks
     * for charges associated with the product rate plan charge or the account.
     *
     * Values:
     *
     * * `DefaultFromCustomer`
     * * `SpecificDayofMonth(#)`
     * * `SubscriptionStartDay`
     * * `ChargeTriggerDay`
     * * `SpecificDayofWeek/dayofweek`: in which dayofweek is the day in the week you define your billing periods to start.
     *
     * In the response data, a day-of-the-month value (`1`-`31`) appears in place of the hash sign above ("#"). If this value exceeds the number of days in a particular month, the last day of the month is used as the BCD.
     *
     */
    billingDay?: string;
    /**
     * Allows billing period to be overridden on the rate plan charge.
     *
     * @remarks
     *
     */
    billingPeriod?: string;
    /**
     * Possible values:
     *
     * @remarks
     *
     * * `AlignToCharge`
     * * `AlignToSubscriptionStart`
     * * `AlignToTermStart`
     *
     */
    billingPeriodAlignment?: string;
    /**
     * The billing timing for the charge. This field is only used if the `ratePlanChargeType` value is `Recurring`.
     *
     * @remarks
     *
     * Possible values are:
     *
     * * `In Advance`
     * * `In Arrears`
     *
     * **Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
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
     * The date through which a customer has been billed for the charge.
     *
     * @remarks
     *
     */
    chargedThroughDate?: Date;
    /**
     * Currency used by the account. For example, `USD` or `EUR`.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * Description of the rate plan charge.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * The amount of the discount.
     *
     * @remarks
     *
     */
    discountAmount?: number;
    /**
     * Container for the application details about a discount rate plan charge.
     *
     * @remarks
     *
     * Only discount rate plan charges have values in this field.
     *
     */
    discountApplyDetails?: GETDiscountApplyDetailsType[];
    /**
     * The class that the discount belongs to. The discount class defines the order in which discount rate plan charges are applied.
     *
     * @remarks
     *
     * For more information, see [Manage Discount Classes](https://knowledgecenter.zuora.com/BC_Subscription_Management/Product_Catalog/B_Charge_Models/Manage_Discount_Classes).
     *
     */
    discountClass?: string;
    /**
     * The level of the discount. Values: `RatePlan`, `Subscription`, `Account`.
     *
     * @remarks
     *
     */
    discountLevel?: string;
    /**
     * The amount of the discount as a percentage.
     *
     * @remarks
     *
     */
    discountPercentage?: number;
    /**
     * The change (delta) of monthly recurring charge exists when the change in monthly recurring revenue caused by an amendment or a new subscription.
     *
     * @remarks
     *
     */
    dmrc?: number;
    /**
     * A value of `true` indicates that an invoice for a charge segment has been completed. A value of `false` indicates that an invoice has not been completed for the charge segment.
     *
     * @remarks
     *
     */
    done?: boolean;
    /**
     * After an amendment or an AutomatedPriceChange event, `dtcv` displays the change (delta) for the total contract value (TCV) amount for this charge, compared with its previous value with recurring charge types.
     *
     * @remarks
     *
     */
    dtcv?: number;
    /**
     * The effective end date of the rate plan charge.
     *
     * @remarks
     *
     */
    effectiveEndDate?: Date;
    /**
     * The effective start date of the rate plan charge.
     *
     * @remarks
     *
     */
    effectiveStartDate?: Date;
    /**
     * Defines when the charge ends after the charge trigger date.
     *
     * @remarks
     *
     * If the subscription ends before the charge end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the charge end date.
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
     * Rate plan charge ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Specifies the number of units in the base set of units.
     *
     * @remarks
     *
     */
    includedUnits?: number;
    /**
     * List price base; possible values are:
     *
     * @remarks
     *
     * * `Per_Billing_Period`
     * * `Per_Month`
     * * `Per_Week`
     *
     */
    listPriceBase?: string;
    /**
     * Charge model; possible values are:
     *
     * @remarks
     *
     * * `FlatFee`
     * * `PerUnit`
     * * `Overage`
     * * `Volume`
     * * `Tiered`
     * * `TieredWithOverage`
     * * `DiscountFixedAmount`
     * * `DiscountPercentage`
     * * `MultiAttributePricing`
     * * `PreratedPerUnit`
     * * `PreratedPricing`
     * * `HighWatermarkVolumePricing`
     * * `HighWatermarkTieredPricing`
     *
     */
    model?: string;
    /**
     * Monthly recurring revenue of the rate plan charge.
     *
     * @remarks
     *
     */
    mrr?: number;
    /**
     * Charge name.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * Charge number.
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
     */
    numberOfPeriods?: number;
    /**
     * The original ID of the rate plan charge.
     *
     * @remarks
     *
     */
    originalChargeId?: string;
    /**
     * Determines when to calculate overage charges.
     *
     * @remarks
     *
     */
    overageCalculationOption?: string;
    /**
     * The price for units over the allowed amount.
     *
     * @remarks
     *
     */
    overagePrice?: number;
    /**
     * Determines whether to credit the customer with unused units of usage.
     *
     * @remarks
     *
     */
    overageUnusedUnitsCreditOption?: string;
    /**
     * The price associated with the rate plan charge expressed as a decimal.
     *
     * @remarks
     *
     */
    price?: number;
    /**
     * When the following is true:
     *
     * @remarks
     *
     * 1. AutomatedPriceChange setting is on
     *
     * 2. Charge type is not one-time
     *
     * 3. Charge model is not discount percentage
     *
     * Then an automatic price change can have a value for when a termed subscription is renewed.
     *
     * Values (one of the following):
     *
     * * `NoChange` (default)
     * * `SpecificPercentageValue`
     * * `UseLatestProductCatalogPricing`
     *
     */
    priceChangeOption?: string;
    /**
     * A planned future price increase amount as a percentage.
     *
     * @remarks
     *
     */
    priceIncreasePercentage?: number;
    /**
     * Concise description of rate plan charge model.
     *
     * @remarks
     *
     */
    pricingSummary?: string;
    /**
     * The date until when charges have been processed. When billing in arrears, such as usage, this field value is the the same as the `ChargedThroughDate` value. This date is the earliest date when a charge can be amended.
     *
     * @remarks
     *
     */
    processedThroughDate?: Date;
    productRatePlanChargeId?: string;
    /**
     * The quantity of units, such as the number of authors in a hosted wiki service. Valid for all charge models except for Flat Fee pricing.
     *
     * @remarks
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
     * The identifying number of the subscription rate plan segment. Segments are numbered sequentially, starting with 1.
     *
     * @remarks
     *
     */
    segment?: number;
    /**
     * Specifies when revenue recognition begins. When charge model is `Overage` or `TieredWithOverage`, `smoothingModel` will be one of the following values:
     *
     * @remarks
     *
     * * `ContractEffectiveDate`
     * * `ServiceActivationDate`
     * * `CustomerAcceptanceDate`
     *
     */
    smoothingModel?: string;
    /**
     * Customizes the number of month or week for the charges billing period. This field is required if you set the value of the `BillingPeriod` field to `Specific_Months` or `Specific_Weeks`.
     *
     * @remarks
     *
     */
    specificBillingPeriod?: number;
    /**
     * The specific date on which the charge ends. If the subscription ends before the specific end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the specific end date.
     *
     * @remarks
     *
     */
    specificEndDate?: Date;
    /**
     * The total contract value.
     *
     * @remarks
     *
     */
    tcv?: number;
    /**
     * One or many defined ranges with distinct pricing.
     *
     * @remarks
     *
     */
    tiers?: GETTierType[];
    /**
     * The date that the rate plan charge will be triggered.
     *
     * @remarks
     *
     */
    triggerDate?: Date;
    /**
     * The event that will cause the rate plan charge to be triggered.
     *
     * @remarks
     *
     * Possible values:
     *
     * * `ContractEffective`
     * * `ServiceActivation`
     * * `CustomerAcceptance`
     * * `SpecificDate`
     *
     */
    triggerEvent?: string;
    /**
     * Charge type. Possible values are: `OneTime`, `Recurring`, `Usage`.
     *
     * @remarks
     *
     */
    type?: string;
    /**
     * Specifies the rate to credit a customer for unused units of usage. This field is applicable only for overage charge models when the
     *
     * @remarks
     * `OverageUnusedUnitsCreditOption` field value is `CreditBySpecificRate`.
     *
     */
    unusedUnitsCreditRates?: number;
    /**
     * Specifies the units to measure usage.
     *
     * @remarks
     *
     */
    uom?: string;
    /**
     * Specifies the length of the period during which the charge is active. If this period ends before the subscription ends, the charge ends when this period ends.
     *
     * @remarks
     *
     * If the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge end date will change accordingly up to the original period end.
     *
     */
    upToPeriods?: string;
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
     */
    upToPeriodsType?: string;
    /**
     * Determines how Zuora processes usage records for per-unit usage charges.
     *
     * @remarks
     *
     */
    usageRecordRatingOption?: string;
    /**
     * Rate plan charge revision number.
     *
     * @remarks
     *
     */
    version?: number;
}
