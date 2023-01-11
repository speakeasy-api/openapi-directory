import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoApplyDebitMemoItemRequestType } from "./creditmemoapplydebitmemoitemrequesttype";



export class CreditMemoApplyDebitMemoRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=debitMemoId" })
  debitMemoId: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: CreditMemoApplyDebitMemoItemRequestType })
  items?: CreditMemoApplyDebitMemoItemRequestType[];
}
