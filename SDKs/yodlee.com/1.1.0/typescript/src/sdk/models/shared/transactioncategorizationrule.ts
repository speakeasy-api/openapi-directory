import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleClause } from "./ruleclause";



export class TransactionCategorizationRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryLevelId" })
  categoryLevelId?: number;

  @SpeakeasyMetadata({ data: "json, name=memId" })
  memId?: number;

  @SpeakeasyMetadata({ data: "json, name=ruleClauses", elemType: RuleClause })
  ruleClauses?: RuleClause[];

  @SpeakeasyMetadata({ data: "json, name=rulePriority" })
  rulePriority?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionCategorisationId" })
  transactionCategorisationId?: number;

  @SpeakeasyMetadata({ data: "json, name=userDefinedRuleId" })
  userDefinedRuleId?: number;
}
