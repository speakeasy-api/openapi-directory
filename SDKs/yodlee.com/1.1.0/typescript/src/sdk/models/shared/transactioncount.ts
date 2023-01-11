import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionTotal } from "./transactiontotal";



export class TransactionCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TOTAL" })
  total?: TransactionTotal;
}
