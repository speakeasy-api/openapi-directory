import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RuleClauseFieldEnum {
    Amount = "amount",
    Description = "description"
}
export declare enum RuleClauseOperationEnum {
    NumberEquals = "numberEquals",
    NumberLessThan = "numberLessThan",
    NumberLessThanEquals = "numberLessThanEquals",
    NumberGreaterThan = "numberGreaterThan",
    NumberGreaterThanEquals = "numberGreaterThanEquals",
    StringEquals = "stringEquals",
    StringContains = "stringContains"
}
export declare class RuleClause extends SpeakeasyBase {
    field?: RuleClauseFieldEnum;
    fieldValue?: string;
    operation?: RuleClauseOperationEnum;
    ruleClauseId?: number;
    userDefinedRuleId?: number;
}
