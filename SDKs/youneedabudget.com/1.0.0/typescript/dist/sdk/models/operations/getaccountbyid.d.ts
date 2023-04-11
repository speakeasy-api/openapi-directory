import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountByIdRequest extends SpeakeasyBase {
    /**
     * The id of the account
     */
    accountId: string;
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
}
export declare class GetAccountByIdResponse extends SpeakeasyBase {
    /**
     * The requested account
     */
    accountResponse?: shared.AccountResponse;
    contentType: string;
    /**
     * The requested account was not found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
