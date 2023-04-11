import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateEmployeeSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdateEmployeeRequest extends SpeakeasyBase {
    /**
     * Employee id for single object
     */
    employeeID: string;
    requestBody?: shared.EmployeeInput[];
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class UpdateEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful request
     */
    employees?: shared.Employees;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
