import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETPaymentPartType extends SpeakeasyBase {
    /**
     * The amount of the payment part.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The ID of the Zuora user who created the payment part.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the payment part was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The ID of the debit memo associated with the payment part.
     *
     * @remarks
     *
     */
    debitMemoId?: string;
    /**
     * The ID of the payment part.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The ID of the invoice associated with the payment part.
     *
     * @remarks
     *
     */
    invoiceId?: string;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
    /**
     * The ID of the Zuora user who last updated the payment part.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the payment part was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
