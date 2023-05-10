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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmployeeRequest;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeInput;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\HomeAddress;
use \OpenAPI\OpenAPI\Models\Shared\StateEnum;
use \OpenAPI\OpenAPI\Models\Shared\LeaveBalance;
use \OpenAPI\OpenAPI\Models\Shared\LeaveLine;
use \OpenAPI\OpenAPI\Models\Shared\LeaveLineCalculationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmploymentTerminationPaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementFinalPayPayoutTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpeningBalances;
use \OpenAPI\OpenAPI\Models\Shared\DeductionLine;
use \OpenAPI\OpenAPI\Models\Shared\DeductionTypeCalculationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EarningsLine;
use \OpenAPI\OpenAPI\Models\Shared\EarningsRateCalculationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReimbursementLine;
use \OpenAPI\OpenAPI\Models\Shared\SuperLine;
use \OpenAPI\OpenAPI\Models\Shared\SuperannuationCalculationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SuperannuationContributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayTemplate;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SuperMembership;
use \OpenAPI\OpenAPI\Models\Shared\TaxDeclarationInput;
use \OpenAPI\OpenAPI\Models\Shared\EmploymentBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResidencyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TFNExemptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationError;
use \OpenAPI\OpenAPI\Models\Operations\CreateEmployeeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEmployeeRequest();
    $request->requestBody = [
        new EmployeeInput(),
        new EmployeeInput(),
        new EmployeeInput(),
    ];
    $request->xeroTenantId = 'provident';

    $requestSecurity = new CreateEmployeeSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->createEmployee($request, $requestSecurity);

    if ($response->employees !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [payrollAu](docs/payrollau/README.md)

* [createEmployee](docs/payrollau/README.md#createemployee) - Creates a payroll employee
* [createLeaveApplication](docs/payrollau/README.md#createleaveapplication) - Creates a leave application
* [createPayItem](docs/payrollau/README.md#createpayitem) - Creates a pay item
* [createPayRun](docs/payrollau/README.md#createpayrun) - Creates a pay run
* [createPayrollCalendar](docs/payrollau/README.md#createpayrollcalendar) - Creates a Payroll Calendar
* [createSuperfund](docs/payrollau/README.md#createsuperfund) - Creates a superfund
* [createTimesheet](docs/payrollau/README.md#createtimesheet) - Creates a timesheet
* [getEmployee](docs/payrollau/README.md#getemployee) - Retrieves an employee's detail by unique employee id
* [getEmployees](docs/payrollau/README.md#getemployees) - Searches payroll employees
* [getLeaveApplication](docs/payrollau/README.md#getleaveapplication) - Retrieves a leave application by a unique leave application id
* [getLeaveApplications](docs/payrollau/README.md#getleaveapplications) - Retrieves leave applications
* [getPayItems](docs/payrollau/README.md#getpayitems) - Retrieves pay items
* [getPayRun](docs/payrollau/README.md#getpayrun) - Retrieves a pay run by using a unique pay run id
* [getPayRuns](docs/payrollau/README.md#getpayruns) - Retrieves pay runs
* [getPayrollCalendar](docs/payrollau/README.md#getpayrollcalendar) - Retrieves payroll calendar by using a unique payroll calendar ID
* [getPayrollCalendars](docs/payrollau/README.md#getpayrollcalendars) - Retrieves payroll calendars
* [getPayslip](docs/payrollau/README.md#getpayslip) - Retrieves for a payslip by a unique payslip id
* [getSettings](docs/payrollau/README.md#getsettings) - Retrieves payroll settings
* [getSuperfund](docs/payrollau/README.md#getsuperfund) - Retrieves a superfund by using a unique superfund ID
* [getSuperfundProducts](docs/payrollau/README.md#getsuperfundproducts) - Retrieves superfund products
* [getSuperfunds](docs/payrollau/README.md#getsuperfunds) - Retrieves superfunds
* [getTimesheet](docs/payrollau/README.md#gettimesheet) - Retrieves a timesheet by using a unique timesheet id
* [getTimesheets](docs/payrollau/README.md#gettimesheets) - Retrieves timesheets
* [updateEmployee](docs/payrollau/README.md#updateemployee) - Updates an employee's detail
* [updateLeaveApplication](docs/payrollau/README.md#updateleaveapplication) - Updates a specific leave application
* [updatePayRun](docs/payrollau/README.md#updatepayrun) - Updates a pay run
* [updatePayslip](docs/payrollau/README.md#updatepayslip) - Updates a payslip
* [updateSuperfund](docs/payrollau/README.md#updatesuperfund) - Updates a superfund
* [updateTimesheet](docs/payrollau/README.md#updatetimesheet) - Updates a timesheet
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
