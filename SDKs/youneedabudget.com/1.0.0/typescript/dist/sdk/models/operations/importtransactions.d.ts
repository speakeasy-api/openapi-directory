import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportTransactionsRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
}
export declare class ImportTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request could not be understood due to malformed syntax or validation error(s)
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was successful but there were no transactions to import
     */
    transactionsImportResponse?: shared.TransactionsImportResponse;
}
