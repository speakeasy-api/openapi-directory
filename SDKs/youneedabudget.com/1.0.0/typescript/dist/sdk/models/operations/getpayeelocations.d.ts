import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayeeLocationsRequest extends SpeakeasyBase {
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
}
export declare class GetPayeeLocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No payees locations were found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * The list of payee locations
     */
    payeeLocationsResponse?: shared.PayeeLocationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
