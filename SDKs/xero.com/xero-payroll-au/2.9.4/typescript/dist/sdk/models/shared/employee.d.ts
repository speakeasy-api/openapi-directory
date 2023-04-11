import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccount } from "./bankaccount";
import { EmployeeStatusEnum } from "./employeestatusenum";
import { HomeAddress } from "./homeaddress";
import { LeaveBalance } from "./leavebalance";
import { LeaveLine } from "./leaveline";
import { OpeningBalances } from "./openingbalances";
import { PayTemplate } from "./paytemplate";
import { SuperMembership } from "./supermembership";
import { TaxDeclaration, TaxDeclarationInput } from "./taxdeclaration";
import { ValidationError } from "./validationerror";
/**
 * The employee’s gender. See Employee Gender
 */
export declare enum EmployeeGenderEnum {
    N = "N",
    M = "M",
    F = "F",
    I = "I"
}
export declare class EmployeeInput extends SpeakeasyBase {
    bankAccounts?: BankAccount[];
    /**
     * Employees classification
     */
    classification?: string;
    /**
     * Date of birth of the employee (YYYY-MM-DD)
     */
    dateOfBirth: string;
    /**
     * The email address for the employee
     */
    email?: string;
    /**
     * The Employee Group allows you to report on payroll expenses and liabilities for each group of employees
     */
    employeeGroupName?: string;
    /**
     * Xero unique identifier for an Employee
     */
    employeeID?: string;
    /**
     * First name of employee
     */
    firstName: string;
    /**
     * The employee’s gender. See Employee Gender
     */
    gender?: EmployeeGenderEnum;
    homeAddress?: HomeAddress;
    /**
     * Authorised to approve other employees' leave requests
     */
    isAuthorisedToApproveLeave?: boolean;
    /**
     * Authorised to approve timesheets
     */
    isAuthorisedToApproveTimesheets?: boolean;
    /**
     * JobTitle of the employee
     */
    jobTitle?: string;
    /**
     * Last name of employee
     */
    lastName: string;
    leaveBalances?: LeaveBalance[];
    leaveLines?: LeaveLine[];
    /**
     * Middle name(s) of the employee
     */
    middleNames?: string;
    /**
     * Employee mobile number
     */
    mobile?: string;
    openingBalances?: OpeningBalances;
    /**
     * Xero unique identifier for earnings rate
     */
    ordinaryEarningsRateID?: string;
    payTemplate?: PayTemplate;
    /**
     * Xero unique identifier for payroll calendar for the employee
     */
    payrollCalendarID?: string;
    /**
     * Employee phone number
     */
    phone?: string;
    /**
     * Start date for an employee (YYYY-MM-DD)
     */
    startDate?: string;
    /**
     * Employee Status Types
     */
    status?: EmployeeStatusEnum;
    superMemberships?: SuperMembership[];
    taxDeclaration?: TaxDeclarationInput;
    /**
     * Employee Termination Date (YYYY-MM-DD)
     */
    terminationDate?: string;
    /**
     * Title of the employee
     */
    title?: string;
    /**
     * Employee’s twitter name
     */
    twitterUserName?: string;
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
}
export declare class Employee extends SpeakeasyBase {
    bankAccounts?: BankAccount[];
    /**
     * Employees classification
     */
    classification?: string;
    /**
     * Date of birth of the employee (YYYY-MM-DD)
     */
    dateOfBirth: string;
    /**
     * The email address for the employee
     */
    email?: string;
    /**
     * The Employee Group allows you to report on payroll expenses and liabilities for each group of employees
     */
    employeeGroupName?: string;
    /**
     * Xero unique identifier for an Employee
     */
    employeeID?: string;
    /**
     * First name of employee
     */
    firstName: string;
    /**
     * The employee’s gender. See Employee Gender
     */
    gender?: EmployeeGenderEnum;
    homeAddress?: HomeAddress;
    /**
     * Authorised to approve other employees' leave requests
     */
    isAuthorisedToApproveLeave?: boolean;
    /**
     * Authorised to approve timesheets
     */
    isAuthorisedToApproveTimesheets?: boolean;
    /**
     * JobTitle of the employee
     */
    jobTitle?: string;
    /**
     * Last name of employee
     */
    lastName: string;
    leaveBalances?: LeaveBalance[];
    leaveLines?: LeaveLine[];
    /**
     * Middle name(s) of the employee
     */
    middleNames?: string;
    /**
     * Employee mobile number
     */
    mobile?: string;
    openingBalances?: OpeningBalances;
    /**
     * Xero unique identifier for earnings rate
     */
    ordinaryEarningsRateID?: string;
    payTemplate?: PayTemplate;
    /**
     * Xero unique identifier for payroll calendar for the employee
     */
    payrollCalendarID?: string;
    /**
     * Employee phone number
     */
    phone?: string;
    /**
     * Start date for an employee (YYYY-MM-DD)
     */
    startDate?: string;
    /**
     * Employee Status Types
     */
    status?: EmployeeStatusEnum;
    superMemberships?: SuperMembership[];
    taxDeclaration?: TaxDeclaration;
    /**
     * Employee Termination Date (YYYY-MM-DD)
     */
    terminationDate?: string;
    /**
     * Title of the employee
     */
    title?: string;
    /**
     * Employee’s twitter name
     */
    twitterUserName?: string;
    /**
     * Last modified timestamp
     */
    updatedDateUTC?: string;
    /**
     * Displays array of validation error messages from the API
     */
    validationErrors?: ValidationError[];
}
