import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTransactionRequest extends SpeakeasyBase {
    /**
     * The transaction or transactions to create.  To create a single transaction you can specify a value for the `transaction` object and to create multiple transactions you can specify an array of `transactions`.  It is expected that you will only provide a value for one of these objects.
     */
    postTransactionsWrapper: shared.PostTransactionsWrapper;
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
}
export declare class CreateTransactionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request could not be understood due to malformed syntax or validation error(s).
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * The transaction or transactions were successfully created
     */
    saveTransactionsResponse?: shared.SaveTransactionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
