import { SpeakeasyBase } from "../../../internal/utils";
export declare class LeaveAccrualLine extends SpeakeasyBase {
    /**
     * If you want to auto calculate leave.
     */
    autoCalculate?: boolean;
    /**
     * Xero identifier for the Leave type.
     */
    leaveTypeID?: string;
    /**
     * Leave Accrual number of units
     */
    numberOfUnits?: number;
}
