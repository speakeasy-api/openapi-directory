import { SpeakeasyBase } from "../../../internal/utils";
import { LeavePeriod } from "./leaveperiod";
import { ValidationError } from "./validationerror";
export declare class LeaveApplicationInput extends SpeakeasyBase {
    /**
     * The Description of the Leave
     */
    description?: string;
    /**
     * The Xero identifier for Payroll Employee
     */
    employeeID?: string;
    /**
     * End date of the leave (YYYY-MM-DD)
     */
    endDate?: string;
    /**
     * The Xero identifier for Payroll Employee
     */
    leaveApplicationID?: string;
    leavePeriods?: LeavePeriod[];
    /**
     * The Xero identifier for Leave Type
     */
    leaveTypeID?: string;
    /**
     * Start date of the leave (YYYY-MM-DD)
     */
    startDate?: string;
    /**
     * The title of the leave
     */
    title?: string;
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
}
export declare class LeaveApplication extends SpeakeasyBase {
    /**
     * The Description of the Leave
     */
    description?: string;
    /**
     * The Xero identifier for Payroll Employee
     */
    employeeID?: string;
    /**
     * End date of the leave (YYYY-MM-DD)
     */
    endDate?: string;
    /**
     * The Xero identifier for Payroll Employee
     */
    leaveApplicationID?: string;
    leavePeriods?: LeavePeriod[];
    /**
     * The Xero identifier for Leave Type
     */
    leaveTypeID?: string;
    /**
     * Start date of the leave (YYYY-MM-DD)
     */
    startDate?: string;
    /**
     * The title of the leave
     */
    title?: string;
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
}
