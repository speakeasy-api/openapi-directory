import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoUnapplyDebitMemoItemRequestType } from "./creditmemounapplydebitmemoitemrequesttype";
export declare class CreditMemoUnapplyDebitMemoRequestType extends SpeakeasyBase {
    amount: number;
    debitMemoId: string;
    items?: CreditMemoUnapplyDebitMemoItemRequestType[];
}
