import { SpeakeasyBase } from "../../../internal/utils";
export declare class POSTSubscriptionPreviewCreditMemoItemsType extends SpeakeasyBase {
    /**
     * The credit memo item amount excluding tax.
     *
     * @remarks
     *
     */
    amountWithoutTax?: number;
    /**
     * The amount of the credit memo item. For tax-inclusive credit memo items, the amount indicates the credit memo item amount including tax. For tax-exclusive credit memo items, the amount indicates the credit memo item amount excluding tax
     *
     * @remarks
     *
     */
    chargeAmount?: number;
    /**
     * Description of this credit memo item.
     *
     * @remarks
     *
     */
    chargeDescription?: string;
    /**
     * Name of this credit memo item.
     *
     * @remarks
     *
     */
    chargeName?: string;
    /**
     * Name of the product associated with this credit memo item.
     *
     * @remarks
     *
     */
    productName?: string;
    /**
     * ID of the product rate plan charge associated with this credit memo item.
     *
     * @remarks
     *
     */
    productRatePlanChargeId?: string;
    /**
     * Quantity of the charge associated with this credit memo item.
     *
     * @remarks
     *
     */
    quantity?: number;
    /**
     * End date of the service period for this credit memo item, as yyyy-mm-dd.
     *
     * @remarks
     *
     */
    serviceEndDate?: Date;
    /**
     * Service start date of this credit memo item, as yyyy-mm-dd.
     *
     * @remarks
     *
     */
    serviceStartDate?: Date;
    /**
     * The tax amount of the credit memo item.
     *
     * @remarks
     *
     */
    taxAmount?: number;
    /**
     * Unit used to measure consumption.
     */
    unitOfMeasure?: string;
}
