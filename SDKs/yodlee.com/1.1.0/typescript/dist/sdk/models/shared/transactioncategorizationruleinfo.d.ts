import { SpeakeasyBase } from "../../../internal/utils";
import { FieldOperation } from "./fieldoperation";
export declare enum TransactionCategorizationRuleInfoSourceEnum {
    System = "SYSTEM",
    User = "USER"
}
export declare class TransactionCategorizationRuleInfo extends SpeakeasyBase {
    categoryId: number;
    priority?: number;
    ruleClause: FieldOperation[];
    source?: TransactionCategorizationRuleInfoSourceEnum;
}
