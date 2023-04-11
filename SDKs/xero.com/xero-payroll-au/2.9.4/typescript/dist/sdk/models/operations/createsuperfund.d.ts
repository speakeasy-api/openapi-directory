import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSuperfundSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateSuperfundRequest extends SpeakeasyBase {
    requestBody: shared.SuperFundInput[];
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreateSuperfundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful request
     */
    superFunds?: shared.SuperFunds;
}
