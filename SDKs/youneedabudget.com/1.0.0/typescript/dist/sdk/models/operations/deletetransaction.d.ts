import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteTransactionRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * The id of the transaction
     */
    transactionId: string;
}
export declare class DeleteTransactionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The transaction was not found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The transaction was successfully deleted
     */
    transactionResponse?: shared.TransactionResponse;
}
