import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetSummary } from "./budgetsummary";
export declare class BudgetSummaryResponseData extends SpeakeasyBase {
    budgets: BudgetSummary[];
    defaultBudget?: BudgetSummary;
}
/**
 * The list of budgets
 */
export declare class BudgetSummaryResponse extends SpeakeasyBase {
    data: BudgetSummaryResponseData;
}
