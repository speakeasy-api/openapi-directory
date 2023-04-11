import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayeeLocationsByPayeeRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
    /**
     * id of payee
     */
    payeeId: string;
}
export declare class GetPayeeLocationsByPayeeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No payees locations were found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * The list of requested payee locations
     */
    payeeLocationsResponse?: shared.PayeeLocationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
