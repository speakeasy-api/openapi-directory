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
    deductions?: number;
    earningsLines?: EarningsLine[];
    employeeID?: string;
    firstName?: string;
    lastName?: string;
    leaveAccrualLines?: LeaveAccrualLine[];
    leaveEarningsLines?: LeaveEarningsLine[];
    netPay?: number;
    payslipID?: string;
    reimbursementLines?: ReimbursementLine[];
    reimbursements?: number;
    super?: number;
    superannuationLines?: SuperannuationLine[];
    tax?: number;
    taxLines?: TaxLine[];
    timesheetEarningsLines?: EarningsLine[];
    updatedDateUTC?: string;
    wages?: number;
}
