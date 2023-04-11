import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLeaveApplicationSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetLeaveApplicationRequest extends SpeakeasyBase {
    /**
     * Leave Application id for single object
     */
    leaveApplicationID: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetLeaveApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria
     */
    leaveApplications?: shared.LeaveApplications;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
