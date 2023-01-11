import { SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoApplyDebitMemoItemRequestType } from "./creditmemoapplydebitmemoitemrequesttype";
export declare class CreditMemoApplyDebitMemoRequestType extends SpeakeasyBase {
    amount: number;
    debitMemoId: string;
    items?: CreditMemoApplyDebitMemoItemRequestType[];
}
