import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBudgetsRequest extends SpeakeasyBase {
    /**
     * Whether to include the list of budget accounts
     */
    includeAccounts?: boolean;
}
export declare class GetBudgetsResponse extends SpeakeasyBase {
    /**
     * The list of budgets
     */
    budgetSummaryResponse?: shared.BudgetSummaryResponse;
    contentType: string;
    /**
     * No budgets were found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
