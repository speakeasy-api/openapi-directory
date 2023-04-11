import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSuperfundSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetSuperfundRequest extends SpeakeasyBase {
    /**
     * Superfund id for single object
     */
    superFundID: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetSuperfundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * search results matching criteria
     */
    superFunds?: shared.SuperFunds;
}
