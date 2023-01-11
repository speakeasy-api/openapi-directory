import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionCategorizationRuleInfo } from "./transactioncategorizationruleinfo";



export class TransactionCategorizationRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule: TransactionCategorizationRuleInfo;
}
