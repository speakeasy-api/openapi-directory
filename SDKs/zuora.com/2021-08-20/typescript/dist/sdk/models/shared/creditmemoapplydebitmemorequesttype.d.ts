import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoApplyDebitMemoItemRequestType } from "./creditmemoapplydebitmemoitemrequesttype";
export declare class CreditMemoApplyDebitMemoRequestType extends SpeakeasyBase {
    /**
     * The credit memo amount to be applied to the debit memo.
     *
     * @remarks
     *
     */
    amount: number;
    /**
     * The unique ID of the debit memo that the credit memo is applied to.
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
    items?: CreditMemoApplyDebitMemoItemRequestType[];
}
