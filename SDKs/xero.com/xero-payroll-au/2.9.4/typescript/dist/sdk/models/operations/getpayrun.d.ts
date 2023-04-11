import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayRunSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetPayRunRequest extends SpeakeasyBase {
    /**
     * PayRun id for single object
     */
    payRunID: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetPayRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria
     */
    payRuns?: shared.PayRuns;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
