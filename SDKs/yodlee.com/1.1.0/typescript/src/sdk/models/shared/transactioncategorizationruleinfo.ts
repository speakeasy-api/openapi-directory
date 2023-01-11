import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldOperation } from "./fieldoperation";


export enum TransactionCategorizationRuleInfoSourceEnum {
    System = "SYSTEM",
    User = "USER"
}


export class TransactionCategorizationRuleInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId: number;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=ruleClause", elemType: FieldOperation })
  ruleClause: FieldOperation[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: TransactionCategorizationRuleInfoSourceEnum;
}
