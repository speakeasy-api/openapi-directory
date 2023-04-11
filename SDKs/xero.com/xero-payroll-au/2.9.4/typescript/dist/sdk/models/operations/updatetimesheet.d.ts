import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTimesheetSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdateTimesheetRequest extends SpeakeasyBase {
    requestBody?: shared.TimesheetInput[];
    /**
     * Timesheet id for single object
     */
    timesheetID: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class UpdateTimesheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful request
     */
    timesheets?: shared.Timesheets;
}
