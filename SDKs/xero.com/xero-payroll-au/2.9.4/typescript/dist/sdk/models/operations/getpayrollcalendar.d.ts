import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayrollCalendarSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetPayrollCalendarRequest extends SpeakeasyBase {
    /**
     * Payroll Calendar id for single object
     */
    payrollCalendarID: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetPayrollCalendarResponse extends SpeakeasyBase {
    /**
     * validation error for a bad request
     */
    apiException?: shared.APIException;
    contentType: string;
    /**
     * search results matching criteria
     */
    payrollCalendars?: shared.PayrollCalendars;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
