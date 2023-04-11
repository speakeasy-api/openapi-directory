import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBudgetMonthRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))
     */
    month: Date;
}
export declare class GetBudgetMonthResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The budget month was not found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * The budget month detail
     */
    monthDetailResponse?: shared.MonthDetailResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
