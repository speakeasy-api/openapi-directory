import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePayRunSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreatePayRunRequest extends SpeakeasyBase {
    requestBody: shared.PayRunInput[];
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreatePayRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful request
     */
    payRuns?: shared.PayRuns;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
