import { SpeakeasyBase } from "../../../internal/utils";
import { TimesheetLine, TimesheetLineInput } from "./timesheetline";
import { TimesheetStatusEnum } from "./timesheetstatusenum";
import { ValidationError } from "./validationerror";
export declare class TimesheetInput extends SpeakeasyBase {
    /**
     * The Xero identifier for an employee
     */
    employeeID: string;
    /**
     * Period end date (YYYY-MM-DD)
     */
    endDate: string;
    /**
     * Timesheet total hours
     */
    hours?: number;
    /**
     * Period start date (YYYY-MM-DD)
     */
    startDate: string;
    status?: TimesheetStatusEnum;
    /**
     * The Xero identifier for a Payroll Timesheet
     */
    timesheetID?: string;
    timesheetLines?: TimesheetLineInput[];
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
}
export declare class Timesheet extends SpeakeasyBase {
    /**
     * The Xero identifier for an employee
     */
    employeeID: string;
    /**
     * Period end date (YYYY-MM-DD)
     */
    endDate: string;
    /**
     * Timesheet total hours
     */
    hours?: number;
    /**
     * Period start date (YYYY-MM-DD)
     */
    startDate: string;
    status?: TimesheetStatusEnum;
    /**
     * The Xero identifier for a Payroll Timesheet
     */
    timesheetID?: string;
    timesheetLines?: TimesheetLine[];
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
}
