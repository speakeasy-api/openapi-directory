import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETPaymentItemPartTypewithSuccess extends SpeakeasyBase {
    /**
     * The amount of the payment part item.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The ID of the Zuora user who created the payment part item.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the payment part item was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The ID of the debit memo item associated with the payment part item.
     *
     * @remarks
     *
     */
    debitMemoItemId?: string;
    /**
     * The ID of the payment part item.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The ID of the invoice item associated with the payment part item.
     *
     * @remarks
     *
     */
    invoiceItemId?: string;
    /**
     * The ID of the taxation item associated with the payment part item.
     *
     * @remarks
     *
     */
    taxItemId?: string;
    /**
     * The ID of the Zuora user who last updated the payment part item.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the payment part item was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
