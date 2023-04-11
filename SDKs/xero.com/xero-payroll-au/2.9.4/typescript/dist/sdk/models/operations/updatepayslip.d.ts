import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePayslipSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdatePayslipRequest extends SpeakeasyBase {
    /**
     * Payslip id for single object
     */
    payslipID: string;
    requestBody?: shared.PayslipLines[];
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class UpdatePayslipResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A successful request - currently returns empty array for JSON
     */
    payslips?: shared.Payslips;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
