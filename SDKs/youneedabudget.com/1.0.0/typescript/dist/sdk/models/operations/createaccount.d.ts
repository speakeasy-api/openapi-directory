import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAccountRequest extends SpeakeasyBase {
    /**
     * The account to create.
     */
    postAccountWrapper: shared.PostAccountWrapper;
    /**
     * The id of the budget ("last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)
     */
    budgetId: string;
}
export declare class CreateAccountResponse extends SpeakeasyBase {
    /**
     * The account was successfully created
     */
    accountResponse?: shared.AccountResponse;
    contentType: string;
    /**
     * The request could not be understood due to malformed syntax or validation error(s).
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
