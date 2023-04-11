import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSuperfundProductsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetSuperfundProductsRequest extends SpeakeasyBase {
    /**
     * The ABN of the Regulated SuperFund
     */
    abn?: string;
    /**
     * The USI of the Regulated SuperFund
     */
    usi?: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetSuperfundProductsResponse extends SpeakeasyBase {
    /**
     * validation error for a bad request
     */
    apiException?: shared.APIException;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * search results matching criteria
     */
    superFundProducts?: shared.SuperFundProducts;
}
