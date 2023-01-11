import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarTypeEnum } from "./calendartypeenum";
import { ValidationError } from "./validationerror";
export declare class PayrollCalendar extends SpeakeasyBase {
    calendarType?: CalendarTypeEnum;
    name?: string;
    paymentDate?: string;
    payrollCalendarID?: string;
    startDate?: string;
    updatedDateUTC?: string;
    validationErrors?: ValidationError[];
}
export declare class PayrollCalendarInput extends SpeakeasyBase {
    calendarType?: CalendarTypeEnum;
    name?: string;
    paymentDate?: string;
    payrollCalendarID?: string;
    startDate?: string;
    validationErrors?: ValidationError[];
}
