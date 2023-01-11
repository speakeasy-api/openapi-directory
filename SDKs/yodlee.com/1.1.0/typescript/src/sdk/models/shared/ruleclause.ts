import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RuleClauseFieldEnum {
    Amount = "amount",
    Description = "description"
}

export enum RuleClauseOperationEnum {
    NumberEquals = "numberEquals",
    NumberLessThan = "numberLessThan",
    NumberLessThanEquals = "numberLessThanEquals",
    NumberGreaterThan = "numberGreaterThan",
    NumberGreaterThanEquals = "numberGreaterThanEquals",
    StringEquals = "stringEquals",
    StringContains = "stringContains"
}


export class RuleClause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: RuleClauseFieldEnum;

  @SpeakeasyMetadata({ data: "json, name=fieldValue" })
  fieldValue?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: RuleClauseOperationEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleClauseId" })
  ruleClauseId?: number;

  @SpeakeasyMetadata({ data: "json, name=userDefinedRuleId" })
  userDefinedRuleId?: number;
}
