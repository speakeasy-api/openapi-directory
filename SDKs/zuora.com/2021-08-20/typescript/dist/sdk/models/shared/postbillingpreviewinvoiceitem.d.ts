import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTBillingPreviewInvoiceItem extends SpeakeasyBase {
    /**
     * The unique ID of the invoice item that the discount charge is applied to.
     *
     * @remarks
     *
     */
    appliedToItemId?: string;
    /**
     * The amount of the charge. This amount doesn't include taxes regardless if the charge's tax mode is inclusive or exclusive.
     *
     * @remarks
     *
     */
    chargeAmount?: string;
    /**
     * The date when the invoice item was created.
     *
     * @remarks
     *
     */
    chargeDate?: Date;
    /**
     * Description of the charge.
     *
     * @remarks
     *
     */
    chargeDescription?: string;
    /**
     * Id of the charge.
     *
     * @remarks
     *
     */
    chargeId?: string;
    /**
     * Name of the charge.
     *
     * @remarks
     *
     */
    chargeName?: string;
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
     * Invoice item ID.
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
     */
    processingType?: string;
    /**
     * Name of the product associated with this item.
     *
     * @remarks
     *
     */
    productName?: string;
    /**
     * Quantity of this item, in the configured unit of measure for the charge.
     *
     * @remarks
     *
     */
    quantity?: string;
    /**
     * End date of the service period for this item, i.e., the last day of the service period, in `yyyy-mm-dd` format.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * Start date of the service period for this item, in `yyyy-mm-dd` format. If the charge is a one-time fee, this is the date of that charge.
     *
     * @remarks
     *
     */
    serviceStartDate?: Date;
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
    subscriptionName?: string;
    /**
     * Number of the subscription associated with this item.
     *
     * @remarks
     *
     */
    subscriptionNumber?: string;
    /**
     * Tax applied to the charge. This field returns `0` becasue the BillingPreview operation does not calculate taxes for charges in the subscription.
     *
     * @remarks
     *
     */
    taxAmount?: string;
    /**
     * Unit used to measure consumption.
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
}
