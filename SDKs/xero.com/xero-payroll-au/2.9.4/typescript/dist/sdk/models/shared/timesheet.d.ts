import { SpeakeasyBase } from "../../../internal/utils";
import { TimesheetStatusEnum } from "./timesheetstatusenum";
import { TimesheetLine } from "./timesheetline";
import { ValidationError } from "./validationerror";
import { TimesheetLineInput } from "./timesheetline";
export declare class Timesheet extends SpeakeasyBase {
    employeeID: string;
    endDate: string;
    hours?: number;
    startDate: string;
    status?: TimesheetStatusEnum;
    timesheetID?: string;
    timesheetLines?: TimesheetLine[];
    updatedDateUTC?: string;
    validationErrors?: ValidationError[];
}
export declare class TimesheetInput extends SpeakeasyBase {
    employeeID: string;
    endDate: string;
    hours?: number;
    startDate: string;
    status?: TimesheetStatusEnum;
    timesheetID?: string;
    timesheetLines?: TimesheetLineInput[];
    validationErrors?: ValidationError[];
}
