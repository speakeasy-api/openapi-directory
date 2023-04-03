# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### payrollAu

* `createEmployee` - Creates a payroll employee
* `createLeaveApplication` - Creates a leave application
* `createPayItem` - Creates a pay item
* `createPayRun` - Creates a pay run
* `createPayrollCalendar` - Creates a Payroll Calendar
* `createSuperfund` - Creates a superfund
* `createTimesheet` - Creates a timesheet
* `getEmployee` - Retrieves an employee's detail by unique employee id
* `getEmployees` - Searches payroll employees
* `getLeaveApplication` - Retrieves a leave application by a unique leave application id
* `getLeaveApplications` - Retrieves leave applications
* `getPayItems` - Retrieves pay items
* `getPayRun` - Retrieves a pay run by using a unique pay run id
* `getPayRuns` - Retrieves pay runs
* `getPayrollCalendar` - Retrieves payroll calendar by using a unique payroll calendar ID
* `getPayrollCalendars` - Retrieves payroll calendars
* `getPayslip` - Retrieves for a payslip by a unique payslip id
* `getSettings` - Retrieves payroll settings
* `getSuperfund` - Retrieves a superfund by using a unique superfund ID
* `getSuperfundProducts` - Retrieves superfund products
* `getSuperfunds` - Retrieves superfunds
* `getTimesheet` - Retrieves a timesheet by using a unique timesheet id
* `getTimesheets` - Retrieves timesheets
* `updateEmployee` - Updates an employee's detail
* `updateLeaveApplication` - Updates a specific leave application
* `updatePayRun` - Updates a pay run
* `updatePayslip` - Updates a payslip
* `updateSuperfund` - Updates a superfund
* `updateTimesheet` - Updates a timesheet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
