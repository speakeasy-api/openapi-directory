import { SpeakeasyBase } from "../../../internal/utils";
export declare class LeaveBalance extends SpeakeasyBase {
    /**
     * The name of the leave type
     */
    leaveName?: string;
    /**
     * Identifier of the leave type (see PayItems)
     */
    leaveTypeID?: string;
    /**
     * The balance of the leave available
     */
    numberOfUnits?: number;
    /**
     * The type of units as specified by the LeaveType (see PayItems)
     */
    typeOfUnits?: string;
}
