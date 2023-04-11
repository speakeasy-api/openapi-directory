import { SpeakeasyBase } from "../../../internal/utils";
import { DeductionLine } from "./deductionline";
import { EarningsLine } from "./earningsline";
import { LeaveAccrualLine } from "./leaveaccrualline";
import { LeaveEarningsLine } from "./leaveearningsline";
import { ReimbursementLine } from "./reimbursementline";
import { SuperannuationLine } from "./superannuationline";
import { TaxLine } from "./taxline";
export declare class Payslip extends SpeakeasyBase {
    deductionLines?: DeductionLine[];
    /**
     * The Deductions for the Payslip
     */
    deductions?: number;
    earningsLines?: EarningsLine[];
    /**
     * The Xero identifier for an employee
     */
    employeeID?: string;
    /**
     * First name of employee
     */
    firstName?: string;
    /**
     * Last name of employee
     */
    lastName?: string;
    leaveAccrualLines?: LeaveAccrualLine[];
    leaveEarningsLines?: LeaveEarningsLine[];
    /**
     * The NetPay for the Payslip
     */
    netPay?: number;
    /**
     * Xero identifier for the payslip
     */
    payslipID?: string;
    reimbursementLines?: ReimbursementLine[];
    /**
     * The Reimbursements for the Payslip
     */
    reimbursements?: number;
    /**
     * The Super for the Payslip
     */
    super?: number;
    superannuationLines?: SuperannuationLine[];
    /**
     * The Tax for the Payslip
     */
    tax?: number;
    taxLines?: TaxLine[];
    timesheetEarningsLines?: EarningsLine[];
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
    /**
     * The Wages for the Payslip
     */
    wages?: number;
}
