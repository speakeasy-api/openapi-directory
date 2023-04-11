import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.
 */
export declare enum GetTransactionsByPayeeTypeEnum {
    Uncategorized = "uncategorized",
    Unapproved = "unapproved"
}
export declare class GetTransactionsByPayeeRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
     */
    lastKnowledgeOfServer?: number;
    /**
     * The id of the payee
     */
    payeeId: string;
    /**
     * If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
     */
    sinceDate?: Date;
    /**
     * If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.
     */
    type?: GetTransactionsByPayeeTypeEnum;
}
export declare class GetTransactionsByPayeeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No transactions were found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * The list of requested transactions
     */
    hybridTransactionsResponse?: shared.HybridTransactionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
