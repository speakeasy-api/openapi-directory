import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETCreditMemoPartTypewithSuccess extends SpeakeasyBase {
    /**
     * The amount of the credit memo part.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The ID of the Zuora user who created the credit memo part.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the credit memo part was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The ID of the debit memo associated with the credit memo part.
     *
     * @remarks
     *
     */
    debitMemoId?: string;
    /**
     * The ID of the credit memo part.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The ID of the invoice associated with the credit memo part.
     *
     * @remarks
     *
     */
    invoiceId?: string;
    /**
     * The ID of the Zuora user who last updated the credit memo part.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the credit memo part was last upated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
