import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionCategorizationRule } from "./transactioncategorizationrule";



export class TransactionCategorizationRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=txnRules", elemType: TransactionCategorizationRule })
  txnRules?: TransactionCategorizationRule[];
}
