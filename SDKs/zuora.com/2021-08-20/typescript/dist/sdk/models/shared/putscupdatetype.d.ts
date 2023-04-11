import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeModelConfigurationType } from "./chargemodelconfigurationtype";
import { POSTTierType } from "./posttiertype";
/**
 * Container for custom fields of a Rate Plan Charge object.
 *
 * @remarks
 *
 */
export declare class PUTScUpdateType extends SpeakeasyBase {
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
     * Specifies the number of units in the base set of units for this charge. Must be >=0.
     *
     * @remarks
     *
     * Available for the following charge types for the Overage charge model:
     *
     * * `Recurring`
     * * `Usage-based`
     *
     */
    includedUnits?: number;
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
     * Price for units in the subscription rate plan.
     *
     * @remarks
     *
     * Supports all charge types for the Flat Fee and Per Unit charge models
     *
     */
    price?: number;
    /**
     * Applies an automatic price change when a termed subscription is renewed. The Billing Admin setting **Enable Automatic Price Change When Subscriptions are Renewed?** must be set to Yes to use this field.
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
     *
     * Not available for the Fixed-Amount Discount charge model.
     *
     */
    priceChangeOption?: string;
    /**
     * Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Required if you set the `PriceChangeOption` field to `SpecificPercentageValue`.
     *
     * @remarks
     *
     * Decimal between `-100` and `100`.
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
    /**
     * Quantity of units; must be greater than zero.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * ID of a rate-plan charge for this subscription.
     *
     * @remarks
     *
     */
    ratePlanChargeId: string;
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
     * Specifies when to start billing the customer for the charge. Required if the `triggerEvent` field is set to USD.
     *
     * @remarks
     *
     * `triggerDate` cannot be updated for the following using the REST update subscription call:
     *
     * * One-time charge type
     * * Discount-Fixed Amount charge model
     * * Discount-Percentage charge model
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
     * This is the date when charge changes in the REST request become effective.
     *
     * `triggerEvent` cannot be updated for the following using the REST update subscription call:
     *
     * * One-time charge type
     * * Discount-Fixed Amount charge model
     * * Discount-Percentage charge model
     *
     */
    triggerEvent?: string;
}
