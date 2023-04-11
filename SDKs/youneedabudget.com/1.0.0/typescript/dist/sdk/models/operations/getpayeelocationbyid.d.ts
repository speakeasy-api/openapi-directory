import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayeeLocationByIdRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * id of payee location
     */
    payeeLocationId: string;
}
export declare class GetPayeeLocationByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The payee location was not found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * The payee location
     */
    payeeLocationResponse?: shared.PayeeLocationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
