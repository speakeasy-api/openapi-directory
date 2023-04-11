import { SpeakeasyBase } from "../../../internal/utils";
import { PayRunStatusEnum } from "./payrunstatusenum";
import { PayslipSummary, PayslipSummaryInput } from "./payslipsummary";
import { ValidationError } from "./validationerror";
export declare class PayRunInput extends SpeakeasyBase {
    /**
     * The total Deductions for the Payrun
     */
    deductions?: number;
    /**
     * The total NetPay for the Payrun
     */
    netPay?: number;
    /**
     * Xero identifier for pay run
     */
    payRunID?: string;
    /**
     * Period End Date for the PayRun (YYYY-MM-DD)
     */
    payRunPeriodEndDate?: string;
    /**
     * Period Start Date for the PayRun (YYYY-MM-DD)
     */
    payRunPeriodStartDate?: string;
    payRunStatus?: PayRunStatusEnum;
    /**
     * Payment Date for the PayRun (YYYY-MM-DD)
     */
    paymentDate?: string;
    /**
     * Xero identifier for pay run
     */
    payrollCalendarID: string;
    /**
     * Payslip message for the PayRun
     */
    payslipMessage?: string;
    /**
     * The payslips in the payrun
     */
    payslips?: PayslipSummaryInput[];
    /**
     * The total Reimbursements for the Payrun
     */
    reimbursement?: number;
    /**
     * The total Super for the Payrun
     */
    super?: number;
    /**
     * The total Tax for the Payrun
     */
    tax?: number;
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
    /**
     * The total Wages for the Payrun
     */
    wages?: number;
}
export declare class PayRun extends SpeakeasyBase {
    /**
     * The total Deductions for the Payrun
     */
    deductions?: number;
    /**
     * The total NetPay for the Payrun
     */
    netPay?: number;
    /**
     * Xero identifier for pay run
     */
    payRunID?: string;
    /**
     * Period End Date for the PayRun (YYYY-MM-DD)
     */
    payRunPeriodEndDate?: string;
    /**
     * Period Start Date for the PayRun (YYYY-MM-DD)
     */
    payRunPeriodStartDate?: string;
    payRunStatus?: PayRunStatusEnum;
    /**
     * Payment Date for the PayRun (YYYY-MM-DD)
     */
    paymentDate?: string;
    /**
     * Xero identifier for pay run
     */
    payrollCalendarID: string;
    /**
     * Payslip message for the PayRun
     */
    payslipMessage?: string;
    /**
     * The payslips in the payrun
     */
    payslips?: PayslipSummary[];
    /**
     * The total Reimbursements for the Payrun
     */
    reimbursement?: number;
    /**
     * The total Super for the Payrun
     */
    super?: number;
    /**
     * The total Tax for the Payrun
     */
    tax?: number;
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
    /**
     * The total Wages for the Payrun
     */
    wages?: number;
}
