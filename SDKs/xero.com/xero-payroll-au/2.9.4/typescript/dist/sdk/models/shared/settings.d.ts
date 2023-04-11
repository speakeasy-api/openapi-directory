import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * The tracking category used for employees
 */
export declare class SettingsTrackingCategoriesEmployeeGroups extends SpeakeasyBase {
    /**
     * The identifier for the tracking category
     */
    trackingCategoryID?: string;
    /**
     * Name of the tracking category
     */
    trackingCategoryName?: string;
}
/**
 * The tracking category used for timesheets
 */
export declare class SettingsTrackingCategoriesTimesheetCategories extends SpeakeasyBase {
    /**
     * The identifier for the tracking category
     */
    trackingCategoryID?: string;
    /**
     * Name of the tracking category
     */
    trackingCategoryName?: string;
}
/**
 * Tracking categories for Employees and Timesheets
 */
export declare class SettingsTrackingCategories extends SpeakeasyBase {
    /**
     * The tracking category used for employees
     */
    employeeGroups?: SettingsTrackingCategoriesEmployeeGroups;
    /**
     * The tracking category used for timesheets
     */
    timesheetCategories?: SettingsTrackingCategoriesTimesheetCategories;
}
export declare class Settings extends SpeakeasyBase {
    /**
     * Payroll Account details for SuperExpense, SuperLiabilty, WagesExpense, PAYGLiability & WagesPayable.
     */
    accounts?: Account[];
    /**
     * Number of days in the Payroll year
     */
    daysInPayrollYear?: number;
    /**
     * Tracking categories for Employees and Timesheets
     */
    trackingCategories?: SettingsTrackingCategories;
}
