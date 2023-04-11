import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePayRunSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdatePayRunRequest extends SpeakeasyBase {
    /**
     * PayRun id for single object
     */
    payRunID: string;
    requestBody?: shared.PayRunInput[];
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class UpdatePayRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful request
     */
    payRuns?: shared.PayRuns;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
