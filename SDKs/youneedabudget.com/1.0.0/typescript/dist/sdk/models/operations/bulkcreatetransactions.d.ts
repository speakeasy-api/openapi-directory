import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkCreateTransactionsRequest extends SpeakeasyBase {
    /**
     * The list of transactions to create
     */
    bulkTransactions: shared.BulkTransactions;
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
}
export declare class BulkCreateTransactionsResponse extends SpeakeasyBase {
    /**
     * The bulk request was processed successfully
     */
    bulkResponse?: shared.BulkResponse;
    contentType: string;
    /**
     * The request could not be understood due to malformed syntax or validation error(s)
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
