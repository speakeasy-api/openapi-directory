import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTransactionRequest extends SpeakeasyBase {
    /**
     * The transaction to update
     */
    putTransactionWrapper: shared.PutTransactionWrapper;
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * The id of the transaction
     */
    transactionId: string;
}
export declare class UpdateTransactionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request could not be understood due to malformed syntax or validation error(s)
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The transaction was successfully updated
     */
    transactionResponse?: shared.TransactionResponse;
}
