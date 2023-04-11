import { SpeakeasyBase } from "../../../internal/utils";
export declare class RefundCreditMemoItemType extends SpeakeasyBase {
    /**
     * The amount of the refund on the specific item.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * The ID of the credit memo item that is refunded.
     *
     * @remarks
     *
     */
    creditMemoItemId?: string;
    /**
     * The ID of the credit memo taxation item that is refunded.
     *
     * @remarks
     *
     */
    creditTaxItemId?: string;
}
