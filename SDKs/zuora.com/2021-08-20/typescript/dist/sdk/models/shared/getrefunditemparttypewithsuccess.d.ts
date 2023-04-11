import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETRefundItemPartTypewithSuccess extends SpeakeasyBase {
    /**
     * The amount of the refund part item.
     *
     * @remarks
     *
     */
    amount?: number;
    /**
     * The ID of the Zuora user who created the refund part item.
     *
     * @remarks
     *
     */
    createdById?: string;
    /**
     * The date and time when the refund part item was created, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-01 15:31:10.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * The ID of the credit memo item associated with the refund part item.
     *
     * @remarks
     *
     */
    creditMemoItemId?: string;
    /**
     * The ID of the credit memo taxation item associated with the refund part item.
     *
     * @remarks
     *
     */
    creditTaxItemId?: string;
    /**
     * The ID of the refund part item.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The ID of the Zuora user who last updated the refund part item.
     *
     * @remarks
     *
     */
    updatedById?: string;
    /**
     * The date and time when the refund part item was last updated, in `yyyy-mm-dd hh:mm:ss` format. For example, 2017-03-02 15:36:10.
     *
     * @remarks
     *
     */
    updatedDate?: Date;
}
