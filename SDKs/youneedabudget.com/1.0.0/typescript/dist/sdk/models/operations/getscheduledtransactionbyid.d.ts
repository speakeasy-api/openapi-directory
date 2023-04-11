import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScheduledTransactionByIdRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * The id of the scheduled transaction
     */
    scheduledTransactionId: string;
}
export declare class GetScheduledTransactionByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The scheduled transaction was not found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * The requested Scheduled Transaction
     */
    scheduledTransactionResponse?: shared.ScheduledTransactionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
