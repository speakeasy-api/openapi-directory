import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayeeByIdRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * The id of the payee
     */
    payeeId: string;
}
export declare class GetPayeeByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The payee was not found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * The requested payee
     */
    payeeResponse?: shared.PayeeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
