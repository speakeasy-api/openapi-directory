import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInvoiceApplicationPartType extends SpeakeasyBase {
    /**
     * The amount that is applied to the invoice.
     *
     * @remarks
     *
     */
    appliedAmount?: number;
    /**
     * The ID of the Zuora user who created the payment or credit memo.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the payment or credit memo was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-12-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The ID of credit memo that is applied to the specified invoice.
     *
     * @remarks
     *
     */
    creditMemoId?: string;
    /**
     * The ID of the payment that is applied to the specified invoice.
     *
     * @remarks
     *
     */
    paymentId?: string;
    /**
     * The ID of the Zuora user who last updated the payment or credit memo.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the payment or credit memo was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2018-01-02 11:42:16.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
