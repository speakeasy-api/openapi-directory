import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Order Delta Mrr. This is a metric that reflects the change to the TCV on rate plan charge object as the result of the order.
 *
 * @remarks
 *
 */
export declare class OrderDeltaMrr extends SpeakeasyBase {
    /**
     * The charge number for the associated Rate Plan Charge. This field can be null if the metric is generated for an Order Line Item.
     *
     * @remarks
     *
     */
    chargeNumber?: string;
    /**
     * ISO 3-letter currency code (uppercase). For example, USD.
     *
     * @remarks
     *
     */
    currency?: string;
    /**
     * The end date for the order delta metric.
     *
     * @remarks
     *
     */
    endDate?: Date;
    /**
     * The gross amount for the metric. The is the amount excluding applied discount.
     *
     * @remarks
     *
     */
    grossAmount?: number;
    /**
     * The net amount for the metric. The is the amount with discounts applied
     *
     * @remarks
     *
     */
    netAmount?: number;
    /**
     * The Id for the related Order Action. This field can be null if the metric is generated for an Order Line Item.
     *
     * @remarks
     *
     */
    orderActionId?: string;
    /**
     * The sequence for the related Order Action. This field can be null if the metric is generated for an Order Line Item.
     *
     * @remarks
     *
     */
    orderActionSequence?: string;
    /**
     * The type for the related Order Action. This field can be null if the metric is generated for an Order Line Item.
     *
     * @remarks
     *
     */
    orderActionType?: string;
    /**
     * The Id for the associated Product Rate Plan Charge. This field can be null if the Order Line Item is not associated with a Product Rate Plan Charge.
     *
     * @remarks
     *
     */
    productRatePlanChargeId?: string;
    /**
     * The id for the associated Rate Plan Charge. This field can be null if the metric is generated for an Order Line Item.
     *
     * @remarks
     *
     */
    ratePlanChargeId?: string;
    /**
     * The start date for the order delta metric.
     *
     * @remarks
     *
     */
    startDate?: Date;
    /**
     * The number of the subscription. This field can be null if the metric is generated for an Order Line Item.
     *
     * @remarks
     *
     */
    subscriptionNumber?: string;
}
