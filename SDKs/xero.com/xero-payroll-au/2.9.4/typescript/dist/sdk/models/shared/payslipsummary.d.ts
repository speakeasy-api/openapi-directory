import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayslipSummary extends SpeakeasyBase {
    deductions?: number;
    employeeGroup?: string;
    employeeID?: string;
    firstName?: string;
    lastName?: string;
    netPay?: number;
    payslipID?: string;
    reimbursements?: number;
    super?: number;
    tax?: number;
    updatedDateUTC?: string;
    wages?: number;
}
export declare class PayslipSummaryInput extends SpeakeasyBase {
    deductions?: number;
    employeeGroup?: string;
    employeeID?: string;
    firstName?: string;
    lastName?: string;
    netPay?: number;
    payslipID?: string;
    reimbursements?: number;
    super?: number;
    tax?: number;
    wages?: number;
}
