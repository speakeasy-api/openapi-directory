import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBudgetByIdRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
     */
    lastKnowledgeOfServer?: number;
}
export declare class GetBudgetByIdResponse extends SpeakeasyBase {
    /**
     * The requested budget
     */
    budgetDetailResponse?: shared.BudgetDetailResponse;
    contentType: string;
    /**
     * The specified budget was not found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
