import { SpeakeasyBase } from "../../../internal/utils";
import { RuleClause } from "./ruleclause";
export declare class TransactionCategorizationRule extends SpeakeasyBase {
    categoryLevelId?: number;
    memId?: number;
    ruleClauses?: RuleClause[];
    rulePriority?: number;
    transactionCategorisationId?: number;
    userDefinedRuleId?: number;
}
