import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTBillingPreviewCreditMemoItem extends SpeakeasyBase {
    /**
     * The amount of the credit memo item. For tax-inclusive credit memo items, the amount indicates the credit memo item amount including tax. For tax-exclusive credit memo items, the amount indicates the credit memo item amount excluding tax
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The credit memo item amount excluding tax.
     *
     * @remarks
     *
     */
    amountWithoutTax?: number;
    /**
     * The unique ID of the credit memo item that the discount charge is applied to.
     *
     * @remarks
     *
     */
    appliedToItemId?: string;
    /**
     * The date when the credit memo item is created.
     *
     * @remarks
     *
     */
    chargeDate?: Date;
    /**
     * Number of the charge.
     *
     * @remarks
     *
     */
    chargeNumber?: string;
    /**
     * The type of charge.
     *
     * @remarks
     *
     * Possible values are `OneTime`, `Recurring`, and `Usage`.
     *
     */
    chargeType?: string;
    /**
     * Comment of the credit memo item.
     *
     * @remarks
     *
     */
    comment?: string;
    /**
     * Credit memo item id.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Identifies the kind of charge.
     *
     * @remarks
     *
     * Possible values:
     * * charge
     * * discount
     * * prepayment
     * * tax
     *
     */
    processingType?: string;
    /**
     * Quantity of this item, in the configured unit of measure for the charge.
     *
     * @remarks
     *
     */
    quantity?: string;
    /**
     * Id of the rate plan charge associated with this item.
     *
     * @remarks
     *
     */
    ratePlanChargeId?: string;
    /**
     * End date of the service period for this item, i.e., the last day of the service period, in yyyy-mm-dd format.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * Start date of the service period for this item, in yyyy-mm-dd format. If the charge is a one-time fee, this is the date of that charge.
     *
     * @remarks
     *
     */
    serviceStartDate?: Date;
    /**
     * Unique SKU for the product associated with this item.
     *
     * @remarks
     *
     */
    sku?: string;
    /**
     * Name of the unique SKU for the product associated with this item.
     *
     * @remarks
     *
     */
    skuName?: string;
    /**
     * ID of the subscription associated with this item.
     *
     * @remarks
     *
     */
    subscriptionId?: string;
    /**
     * Name of the subscription associated with this item.
     *
     * @remarks
     *
     */
    subscriptionNumber?: string;
    /**
     * Unit used to measure consumption.
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
}
