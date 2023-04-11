import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations available to regular developers
 */
export declare class PayrollAu {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a payroll employee
     */
    createEmployee(req: operations.CreateEmployeeRequest, security: operations.CreateEmployeeSecurity, config?: AxiosRequestConfig): Promise<operations.CreateEmployeeResponse>;
    /**
     * Creates a leave application
     */
    createLeaveApplication(req: operations.CreateLeaveApplicationRequest, security: operations.CreateLeaveApplicationSecurity, config?: AxiosRequestConfig): Promise<operations.CreateLeaveApplicationResponse>;
    /**
     * Creates a pay item
     */
    createPayItem(req: operations.CreatePayItemRequest, security: operations.CreatePayItemSecurity, config?: AxiosRequestConfig): Promise<operations.CreatePayItemResponse>;
    /**
     * Creates a pay run
     */
    createPayRun(req: operations.CreatePayRunRequest, security: operations.CreatePayRunSecurity, config?: AxiosRequestConfig): Promise<operations.CreatePayRunResponse>;
    /**
     * Creates a Payroll Calendar
     */
    createPayrollCalendar(req: operations.CreatePayrollCalendarRequest, security: operations.CreatePayrollCalendarSecurity, config?: AxiosRequestConfig): Promise<operations.CreatePayrollCalendarResponse>;
    /**
     * Creates a superfund
     */
    createSuperfund(req: operations.CreateSuperfundRequest, security: operations.CreateSuperfundSecurity, config?: AxiosRequestConfig): Promise<operations.CreateSuperfundResponse>;
    /**
     * Creates a timesheet
     */
    createTimesheet(req: operations.CreateTimesheetRequest, security: operations.CreateTimesheetSecurity, config?: AxiosRequestConfig): Promise<operations.CreateTimesheetResponse>;
    /**
     * Retrieves an employee's detail by unique employee id
     */
    getEmployee(req: operations.GetEmployeeRequest, security: operations.GetEmployeeSecurity, config?: AxiosRequestConfig): Promise<operations.GetEmployeeResponse>;
    /**
     * Searches payroll employees
     */
    getEmployees(req: operations.GetEmployeesRequest, security: operations.GetEmployeesSecurity, config?: AxiosRequestConfig): Promise<operations.GetEmployeesResponse>;
    /**
     * Retrieves a leave application by a unique leave application id
     */
    getLeaveApplication(req: operations.GetLeaveApplicationRequest, security: operations.GetLeaveApplicationSecurity, config?: AxiosRequestConfig): Promise<operations.GetLeaveApplicationResponse>;
    /**
     * Retrieves leave applications
     */
    getLeaveApplications(req: operations.GetLeaveApplicationsRequest, security: operations.GetLeaveApplicationsSecurity, config?: AxiosRequestConfig): Promise<operations.GetLeaveApplicationsResponse>;
    /**
     * Retrieves pay items
     */
    getPayItems(req: operations.GetPayItemsRequest, security: operations.GetPayItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPayItemsResponse>;
    /**
     * Retrieves a pay run by using a unique pay run id
     */
    getPayRun(req: operations.GetPayRunRequest, security: operations.GetPayRunSecurity, config?: AxiosRequestConfig): Promise<operations.GetPayRunResponse>;
    /**
     * Retrieves pay runs
     */
    getPayRuns(req: operations.GetPayRunsRequest, security: operations.GetPayRunsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPayRunsResponse>;
    /**
     * Retrieves payroll calendar by using a unique payroll calendar ID
     */
    getPayrollCalendar(req: operations.GetPayrollCalendarRequest, security: operations.GetPayrollCalendarSecurity, config?: AxiosRequestConfig): Promise<operations.GetPayrollCalendarResponse>;
    /**
     * Retrieves payroll calendars
     */
    getPayrollCalendars(req: operations.GetPayrollCalendarsRequest, security: operations.GetPayrollCalendarsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPayrollCalendarsResponse>;
    /**
     * Retrieves for a payslip by a unique payslip id
     */
    getPayslip(req: operations.GetPayslipRequest, security: operations.GetPayslipSecurity, config?: AxiosRequestConfig): Promise<operations.GetPayslipResponse>;
    /**
     * Retrieves payroll settings
     */
    getSettings(req: operations.GetSettingsRequest, security: operations.GetSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetSettingsResponse>;
    /**
     * Retrieves a superfund by using a unique superfund ID
     */
    getSuperfund(req: operations.GetSuperfundRequest, security: operations.GetSuperfundSecurity, config?: AxiosRequestConfig): Promise<operations.GetSuperfundResponse>;
    /**
     * Retrieves superfund products
     */
    getSuperfundProducts(req: operations.GetSuperfundProductsRequest, security: operations.GetSuperfundProductsSecurity, config?: AxiosRequestConfig): Promise<operations.GetSuperfundProductsResponse>;
    /**
     * Retrieves superfunds
     */
    getSuperfunds(req: operations.GetSuperfundsRequest, security: operations.GetSuperfundsSecurity, config?: AxiosRequestConfig): Promise<operations.GetSuperfundsResponse>;
    /**
     * Retrieves a timesheet by using a unique timesheet id
     */
    getTimesheet(req: operations.GetTimesheetRequest, security: operations.GetTimesheetSecurity, config?: AxiosRequestConfig): Promise<operations.GetTimesheetResponse>;
    /**
     * Retrieves timesheets
     */
    getTimesheets(req: operations.GetTimesheetsRequest, security: operations.GetTimesheetsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTimesheetsResponse>;
    /**
     * Updates an employee's detail
     *
     * @remarks
     * Update properties on a single employee
     */
    updateEmployee(req: operations.UpdateEmployeeRequest, security: operations.UpdateEmployeeSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateEmployeeResponse>;
    /**
     * Updates a specific leave application
     */
    updateLeaveApplication(req: operations.UpdateLeaveApplicationRequest, security: operations.UpdateLeaveApplicationSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateLeaveApplicationResponse>;
    /**
     * Updates a pay run
     *
     * @remarks
     * Update properties on a single PayRun
     */
    updatePayRun(req: operations.UpdatePayRunRequest, security: operations.UpdatePayRunSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePayRunResponse>;
    /**
     * Updates a payslip
     *
     * @remarks
     * Update lines on a single payslips
     */
    updatePayslip(req: operations.UpdatePayslipRequest, security: operations.UpdatePayslipSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePayslipResponse>;
    /**
     * Updates a superfund
     *
     * @remarks
     * Update properties on a single Superfund
     */
    updateSuperfund(req: operations.UpdateSuperfundRequest, security: operations.UpdateSuperfundSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateSuperfundResponse>;
    /**
     * Updates a timesheet
     *
     * @remarks
     * Update properties on a single timesheet
     */
    updateTimesheet(req: operations.UpdateTimesheetRequest, security: operations.UpdateTimesheetSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateTimesheetResponse>;
}
