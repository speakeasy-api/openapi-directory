import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTimesheetSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetTimesheetRequest extends SpeakeasyBase {
    /**
     * Timesheet id for single object
     */
    timesheetID: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetTimesheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * search results matching criteria
     */
    timesheetObject?: shared.TimesheetObject;
}
