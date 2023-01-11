import { SpeakeasyBase } from "../../../internal/utils";
import { LeavePeriod } from "./leaveperiod";
import { ValidationError } from "./validationerror";
export declare class LeaveApplication extends SpeakeasyBase {
    description?: string;
    employeeID?: string;
    endDate?: string;
    leaveApplicationID?: string;
    leavePeriods?: LeavePeriod[];
    leaveTypeID?: string;
    startDate?: string;
    title?: string;
    updatedDateUTC?: string;
    validationErrors?: ValidationError[];
}
export declare class LeaveApplicationInput extends SpeakeasyBase {
    description?: string;
    employeeID?: string;
    endDate?: string;
    leaveApplicationID?: string;
    leavePeriods?: LeavePeriod[];
    leaveTypeID?: string;
    startDate?: string;
    title?: string;
    validationErrors?: ValidationError[];
}
