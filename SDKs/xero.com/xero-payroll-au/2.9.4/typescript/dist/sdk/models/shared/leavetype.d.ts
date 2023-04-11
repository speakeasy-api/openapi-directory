import { SpeakeasyBase } from "../../../internal/utils";
export declare class LeaveType extends SpeakeasyBase {
    /**
     * Is the current record
     */
    currentRecord?: boolean;
    /**
     * Set this to indicate that an employee will be paid when taking this type of leave
     */
    isPaidLeave?: boolean;
    /**
     * Enter an amount here if your organisation pays an additional percentage on top of ordinary earnings when your employees take leave (typically 17.5%)
     */
    leaveLoadingRate?: number;
    /**
     * Xero identifier
     */
    leaveTypeID?: string;
    /**
     * Name of the earnings rate (max length = 100)
     */
    name?: string;
    /**
     * The number of units the employee is entitled to each year
     */
    normalEntitlement?: number;
    /**
     * Set this if you want a balance for this leave type to be shown on your employee’s payslips
     */
    showOnPayslip?: boolean;
    /**
     * The type of units by which leave entitlements are normally tracked. These are typically the same as the type of units used for the employee’s ordinary earnings rate
     */
    typeOfUnits?: string;
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
}
export declare class LeaveTypeInput extends SpeakeasyBase {
    /**
     * Is the current record
     */
    currentRecord?: boolean;
    /**
     * Set this to indicate that an employee will be paid when taking this type of leave
     */
    isPaidLeave?: boolean;
    /**
     * Enter an amount here if your organisation pays an additional percentage on top of ordinary earnings when your employees take leave (typically 17.5%)
     */
    leaveLoadingRate?: number;
    /**
     * Xero identifier
     */
    leaveTypeID?: string;
    /**
     * Name of the earnings rate (max length = 100)
     */
    name?: string;
    /**
     * The number of units the employee is entitled to each year
     */
    normalEntitlement?: number;
    /**
     * Set this if you want a balance for this leave type to be shown on your employee’s payslips
     */
    showOnPayslip?: boolean;
    /**
     * The type of units by which leave entitlements are normally tracked. These are typically the same as the type of units used for the employee’s ordinary earnings rate
     */
    typeOfUnits?: string;
}
