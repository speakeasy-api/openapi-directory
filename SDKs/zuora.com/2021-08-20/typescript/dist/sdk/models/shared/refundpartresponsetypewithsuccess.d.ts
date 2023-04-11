import { SpeakeasyBase } from "../../../internal/utils";
export declare class RefundPartResponseTypewithSuccess extends SpeakeasyBase {
    /**
     * The amount of the refund part.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The ID of the Zuora user who created the refund part.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the refund part was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The ID of the credit memo associated with the refund part.
     *
     * @remarks
     *
     */
    creditMemoId?: string;
    /**
     * The ID of the refund part.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The ID of the payment associated with the refund part.
     *
     * @remarks
     *
     */
    paymentId?: string;
    /**
     * The ID of the Zuora user who last updated the refund part.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the refund part was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
