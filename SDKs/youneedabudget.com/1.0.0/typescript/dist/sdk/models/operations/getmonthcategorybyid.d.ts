import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMonthCategoryByIdRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * The id of the category
     */
    categoryId: string;
    /**
     * The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))
     */
    month: Date;
}
export declare class GetMonthCategoryByIdResponse extends SpeakeasyBase {
    /**
     * The requested month category
     */
    categoryResponse?: shared.CategoryResponse;
    contentType: string;
    /**
     * The month category was not was found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
