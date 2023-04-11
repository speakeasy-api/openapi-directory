import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePayrollCalendarSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreatePayrollCalendarRequest extends SpeakeasyBase {
    requestBody: shared.PayrollCalendarInput[];
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreatePayrollCalendarResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful request
     */
    payrollCalendars?: shared.PayrollCalendars;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
