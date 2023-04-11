import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoUnapplyDebitMemoItemRequestType } from "./creditmemounapplydebitmemoitemrequesttype";
export declare class CreditMemoUnapplyDebitMemoRequestType extends SpeakeasyBase {
    /**
     * The credit memo amount to be unapplied from the debit memo.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * The unique ID of the debit memo that the credit memo is unapplied from.
     *
     * @remarks
     *
     */
    debitMemoId: string;
    /**
     * Container for items. The maximum number of items is 1,000.
     *
     * @remarks
     *
     */
    items?: CreditMemoUnapplyDebitMemoItemRequestType[];
}
