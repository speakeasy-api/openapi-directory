import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";



export class TransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction", elemType: Transaction })
  transaction?: Transaction[];
}
