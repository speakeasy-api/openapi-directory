import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreditMemoUnapplyDebitMemoItemRequestType } from "./creditmemounapplydebitmemoitemrequesttype";



export class CreditMemoUnapplyDebitMemoRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=debitMemoId" })
  debitMemoId: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: CreditMemoUnapplyDebitMemoItemRequestType })
  items?: CreditMemoUnapplyDebitMemoItemRequestType[];
}
