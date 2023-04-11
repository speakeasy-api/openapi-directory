import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateMonthCategoryRequest extends SpeakeasyBase {
    /**
     * The category to update.  Only `budgeted` amount can be updated and any other fields specified will be ignored.
     */
    patchMonthCategoryWrapper: shared.PatchMonthCategoryWrapper;
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
export declare class UpdateMonthCategoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request could not be understood due to malformed syntax or validation error(s)
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * The month category was successfully updated
     */
    saveCategoryResponse?: shared.SaveCategoryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
