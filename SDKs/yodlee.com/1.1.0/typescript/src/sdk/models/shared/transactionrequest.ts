import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateTransactionInput } from "./updatetransaction";



export class TransactionRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction: UpdateTransactionInput;
}
