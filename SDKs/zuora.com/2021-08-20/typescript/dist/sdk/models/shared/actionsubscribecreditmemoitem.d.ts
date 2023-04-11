import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionSubscribeCreditMemoItem extends SpeakeasyBase {
    /**
     * The credit memo item amount excluding tax.
     *
     * @remarks
     *
     */
    amountWithoutTax?: number;
    /**
     * Name of this credit memo item.
     *
     * @remarks
     *
     */
    chargeName?: string;
    /**
     * Description of this credit memo item.
     *
     * @remarks
     *
     */
    description?: string;
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
     *
     * @remarks
     *
     */
    unitOfMeasure?: string;
}
