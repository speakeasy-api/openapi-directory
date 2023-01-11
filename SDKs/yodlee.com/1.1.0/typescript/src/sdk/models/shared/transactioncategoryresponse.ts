import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionCategory } from "./transactioncategory";



export class TransactionCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactionCategory", elemType: TransactionCategory })
  transactionCategory?: TransactionCategory[];
}
