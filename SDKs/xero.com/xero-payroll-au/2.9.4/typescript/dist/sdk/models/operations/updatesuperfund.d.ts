import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSuperfundSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdateSuperfundRequest extends SpeakeasyBase {
    requestBody?: shared.SuperFundInput[];
    /**
     * Superfund id for single object
     */
    superFundID: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class UpdateSuperfundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful request
     */
    superFunds?: shared.SuperFunds;
}
