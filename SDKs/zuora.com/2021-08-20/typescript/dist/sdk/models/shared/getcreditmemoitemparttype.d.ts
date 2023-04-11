import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETCreditMemoItemPartType extends SpeakeasyBase {
    /**
     * The amount of the credit memo part item.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The ID of the Zuora user who created the credit memo part item.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the credit memo part item was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The ID of the credit memo item associated with the credit memo part item.
     *
     * @remarks
     *
     */
    creditMemoItemId?: string;
    /**
     * The ID of the credit memo taxation item.
     *
     * @remarks
     *
     */
    creditTaxItemId?: string;
    /**
     * The ID of the debit memo item associated with the credit memo part item.
     *
     * @remarks
     *
     */
    debitMemoItemId?: string;
    /**
     * The ID of the credit memo part item.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The ID of the invoice item associated with the credit memo part item.
     *
     * @remarks
     *
     */
    invoiceItemId?: string;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
    /**
     * The ID of the invoice or debit memo taxation item associated with the credit memo taxation item.
     *
     * @remarks
     *
     */
    taxItemId?: string;
    /**
     * The ID of the Zuora user who last updated the credit memo part item.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the credit memo part item was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
