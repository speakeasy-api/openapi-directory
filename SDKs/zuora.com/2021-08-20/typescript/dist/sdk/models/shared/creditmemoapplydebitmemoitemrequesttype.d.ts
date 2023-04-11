import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreditMemoApplyDebitMemoItemRequestType extends SpeakeasyBase {
    /**
     * The amount that is applied to the specific item.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * The ID of the credit memo item.
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
     * The ID of the debit memo item that the credit memo item is applied to.
     *
     * @remarks
     *
     */
    debitMemoItemId?: string;
    /**
     * The ID of the debit memo taxation item that the credit memo taxation item is applied to.
     *
     * @remarks
     *
     */
    taxItemId?: string;
}
