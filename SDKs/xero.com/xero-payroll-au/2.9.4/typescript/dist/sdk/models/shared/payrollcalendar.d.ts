import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarTypeEnum } from "./calendartypeenum";
import { ValidationError } from "./validationerror";
export declare class PayrollCalendar extends SpeakeasyBase {
    calendarType?: CalendarTypeEnum;
    /**
     * Name of the Payroll Calendar
     */
    name?: string;
    /**
     * The date on which employees will be paid for the upcoming pay period (YYYY-MM-DD)
     */
    paymentDate?: string;
    /**
     * Xero identifier
     */
    payrollCalendarID?: string;
    /**
     * The start date of the upcoming pay period. The end date will be calculated based upon this date, and the calendar type selected (YYYY-MM-DD)
     */
    startDate?: string;
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
}
export declare class PayrollCalendarInput extends SpeakeasyBase {
    calendarType?: CalendarTypeEnum;
    /**
     * Name of the Payroll Calendar
     */
    name?: string;
    /**
     * The date on which employees will be paid for the upcoming pay period (YYYY-MM-DD)
     */
    paymentDate?: string;
    /**
     * Xero identifier
     */
    payrollCalendarID?: string;
    /**
     * The start date of the upcoming pay period. The end date will be calculated based upon this date, and the calendar type selected (YYYY-MM-DD)
     */
    startDate?: string;
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
}
