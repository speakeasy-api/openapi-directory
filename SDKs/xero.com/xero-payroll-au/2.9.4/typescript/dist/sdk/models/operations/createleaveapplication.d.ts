import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLeaveApplicationSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateLeaveApplicationRequest extends SpeakeasyBase {
    requestBody: shared.LeaveApplicationInput[];
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreateLeaveApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful request
     */
    leaveApplications?: shared.LeaveApplications;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
