import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLeaveApplicationSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdateLeaveApplicationRequest extends SpeakeasyBase {
    /**
     * Leave Application id for single object
     */
    leaveApplicationID: string;
    requestBody: shared.LeaveApplicationInput[];
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class UpdateLeaveApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful request
     */
    leaveApplications?: shared.LeaveApplications;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
