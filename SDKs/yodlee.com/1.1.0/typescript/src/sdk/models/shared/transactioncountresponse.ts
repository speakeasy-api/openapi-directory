import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionCount } from "./transactioncount";



export class TransactionCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: TransactionCount;
}
