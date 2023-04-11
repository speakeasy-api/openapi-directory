import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoriesRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
     */
    lastKnowledgeOfServer?: number;
}
export declare class GetCategoriesResponse extends SpeakeasyBase {
    /**
     * The categories grouped by category group
     */
    categoriesResponse?: shared.CategoriesResponse;
    contentType: string;
    /**
     * No categories were found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
