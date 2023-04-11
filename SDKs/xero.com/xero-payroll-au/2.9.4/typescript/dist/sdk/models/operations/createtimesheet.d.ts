import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTimesheetSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateTimesheetRequest extends SpeakeasyBase {
    requestBody: shared.TimesheetInput[];
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreateTimesheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful request
     */
    timesheets?: shared.Timesheets;
}
