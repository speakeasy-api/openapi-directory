import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmployeeSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetEmployeeRequest extends SpeakeasyBase {
    /**
     * Employee id for single object
     */
    employeeID: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria
     */
    employees?: shared.Employees;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
