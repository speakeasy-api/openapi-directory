import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTSubscriptionPreviewInvoiceItemsType extends SpeakeasyBase {
    /**
     * The amount of the charge. This amount doesn't include taxes unless the charge's tax mode is inclusive.
     *
     * @remarks
     *
     */
    chargeAmount?: number;
    /**
     * Description of the charge.
     *
     * @remarks
     *
     */
    chargeDescription?: string;
    /**
     * Name of the charge.
     *
     * @remarks
     *
     */
    chargeName?: string;
    /**
     * Name of the product associated with this item.
     *
     * @remarks
     *
     */
    productName?: string;
    /**
     * ID of the product rate plan charge.
     *
     * @remarks
     *
     */
    productRatePlanChargeId?: string;
    /**
     * Quantity of this item.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * End date of the service period for this item, i.e., the last day of the period, as yyyy-mm-dd.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * Service start date as yyyy-mm-dd. If the charge is a one-time fee, this is the date of that charge.
     *
     * @remarks
     *
     */
    serviceStartDate?: Date;
    /**
     * The tax amount of the invoice item.
     *
     * @remarks
     *
     */
    taxAmount?: number;
    unitOfMeasure?: string;
}
