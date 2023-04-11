import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBudgetSettingsByIdRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
}
export declare class GetBudgetSettingsByIdResponse extends SpeakeasyBase {
    /**
     * The requested budget settings
     */
    budgetSettingsResponse?: shared.BudgetSettingsResponse;
    contentType: string;
    /**
     * The specified Budget was not found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
