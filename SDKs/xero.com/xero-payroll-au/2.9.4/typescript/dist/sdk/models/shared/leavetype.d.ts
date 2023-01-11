import { SpeakeasyBase } from "../../../internal/utils";
export declare class LeaveType extends SpeakeasyBase {
    currentRecord?: boolean;
    isPaidLeave?: boolean;
    leaveLoadingRate?: number;
    leaveTypeID?: string;
    name?: string;
    normalEntitlement?: number;
    showOnPayslip?: boolean;
    typeOfUnits?: string;
    updatedDateUTC?: string;
}
export declare class LeaveTypeInput extends SpeakeasyBase {
    currentRecord?: boolean;
    isPaidLeave?: boolean;
    leaveLoadingRate?: number;
    leaveTypeID?: string;
    name?: string;
    normalEntitlement?: number;
    showOnPayslip?: boolean;
    typeOfUnits?: string;
}
