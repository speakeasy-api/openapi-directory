import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoryByIdRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * The id of the category
     */
    categoryId: string;
}
export declare class GetCategoryByIdResponse extends SpeakeasyBase {
    /**
     * The requested category
     */
    categoryResponse?: shared.CategoryResponse;
    contentType: string;
    /**
     * The category not was found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
