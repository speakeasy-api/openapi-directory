# payrollAu

## Overview

Operations available to regular developers

### Available Operations

* [createEmployee](#createemployee) - Creates a payroll employee
* [createLeaveApplication](#createleaveapplication) - Creates a leave application
* [createPayItem](#createpayitem) - Creates a pay item
* [createPayRun](#createpayrun) - Creates a pay run
* [createPayrollCalendar](#createpayrollcalendar) - Creates a Payroll Calendar
* [createSuperfund](#createsuperfund) - Creates a superfund
* [createTimesheet](#createtimesheet) - Creates a timesheet
* [getEmployee](#getemployee) - Retrieves an employee's detail by unique employee id
* [getEmployees](#getemployees) - Searches payroll employees
* [getLeaveApplication](#getleaveapplication) - Retrieves a leave application by a unique leave application id
* [getLeaveApplications](#getleaveapplications) - Retrieves leave applications
* [getPayItems](#getpayitems) - Retrieves pay items
* [getPayRun](#getpayrun) - Retrieves a pay run by using a unique pay run id
* [getPayRuns](#getpayruns) - Retrieves pay runs
* [getPayrollCalendar](#getpayrollcalendar) - Retrieves payroll calendar by using a unique payroll calendar ID
* [getPayrollCalendars](#getpayrollcalendars) - Retrieves payroll calendars
* [getPayslip](#getpayslip) - Retrieves for a payslip by a unique payslip id
* [getSettings](#getsettings) - Retrieves payroll settings
* [getSuperfund](#getsuperfund) - Retrieves a superfund by using a unique superfund ID
* [getSuperfundProducts](#getsuperfundproducts) - Retrieves superfund products
* [getSuperfunds](#getsuperfunds) - Retrieves superfunds
* [getTimesheet](#gettimesheet) - Retrieves a timesheet by using a unique timesheet id
* [getTimesheets](#gettimesheets) - Retrieves timesheets
* [updateEmployee](#updateemployee) - Updates an employee's detail
* [updateLeaveApplication](#updateleaveapplication) - Updates a specific leave application
* [updatePayRun](#updatepayrun) - Updates a pay run
* [updatePayslip](#updatepayslip) - Updates a payslip
* [updateSuperfund](#updatesuperfund) - Updates a superfund
* [updateTimesheet](#updatetimesheet) - Updates a timesheet

## createEmployee

Creates a payroll employee

### Example Usage

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
    $request->xeroTenantId = 'quibusdam';

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

## createLeaveApplication

Creates a leave application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateLeaveApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\LeaveApplicationInput;
use \OpenAPI\OpenAPI\Models\Shared\LeavePeriod;
use \OpenAPI\OpenAPI\Models\Shared\LeavePeriodStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationError;
use \OpenAPI\OpenAPI\Models\Operations\CreateLeaveApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLeaveApplicationRequest();
    $request->requestBody = [
        new LeaveApplicationInput(),
        new LeaveApplicationInput(),
        new LeaveApplicationInput(),
    ];
    $request->xeroTenantId = 'nulla';

    $requestSecurity = new CreateLeaveApplicationSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->createLeaveApplication($request, $requestSecurity);

    if ($response->leaveApplications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPayItem

Creates a pay item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayItemInput;
use \OpenAPI\OpenAPI\Models\Shared\DeductionTypeInput;
use \OpenAPI\OpenAPI\Models\Shared\DeductionTypeDeductionCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EarningsRateInput;
use \OpenAPI\OpenAPI\Models\Shared\AllowanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EarningsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmploymentTerminationPaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LeaveTypeInput;
use \OpenAPI\OpenAPI\Models\Shared\ReimbursementTypeInput;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayItemRequest();
    $request->payItemInput = new PayItemInput();
    $request->payItemInput->deductionTypes = [
        new DeductionTypeInput(),
        new DeductionTypeInput(),
        new DeductionTypeInput(),
    ];
    $request->payItemInput->earningsRates = [
        new EarningsRateInput(),
        new EarningsRateInput(),
        new EarningsRateInput(),
        new EarningsRateInput(),
    ];
    $request->payItemInput->leaveTypes = [
        new LeaveTypeInput(),
        new LeaveTypeInput(),
    ];
    $request->payItemInput->reimbursementTypes = [
        new ReimbursementTypeInput(),
        new ReimbursementTypeInput(),
        new ReimbursementTypeInput(),
    ];
    $request->xeroTenantId = 'deserunt';

    $requestSecurity = new CreatePayItemSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->createPayItem($request, $requestSecurity);

    if ($response->payItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPayRun

Creates a pay run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayRunInput;
use \OpenAPI\OpenAPI\Models\Shared\PayRunStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayslipSummaryInput;
use \OpenAPI\OpenAPI\Models\Shared\ValidationError;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayRunRequest();
    $request->requestBody = [
        new PayRunInput(),
        new PayRunInput(),
    ];
    $request->xeroTenantId = 'iure';

    $requestSecurity = new CreatePayRunSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->createPayRun($request, $requestSecurity);

    if ($response->payRuns !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPayrollCalendar

Creates a Payroll Calendar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayrollCalendarRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayrollCalendarInput;
use \OpenAPI\OpenAPI\Models\Shared\CalendarTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationError;
use \OpenAPI\OpenAPI\Models\Operations\CreatePayrollCalendarSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePayrollCalendarRequest();
    $request->requestBody = [
        new PayrollCalendarInput(),
        new PayrollCalendarInput(),
    ];
    $request->xeroTenantId = 'debitis';

    $requestSecurity = new CreatePayrollCalendarSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->createPayrollCalendar($request, $requestSecurity);

    if ($response->payrollCalendars !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSuperfund

Creates a superfund

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSuperfundRequest;
use \OpenAPI\OpenAPI\Models\Shared\SuperFundInput;
use \OpenAPI\OpenAPI\Models\Shared\SuperFundTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationError;
use \OpenAPI\OpenAPI\Models\Operations\CreateSuperfundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSuperfundRequest();
    $request->requestBody = [
        new SuperFundInput(),
    ];
    $request->xeroTenantId = 'delectus';

    $requestSecurity = new CreateSuperfundSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->createSuperfund($request, $requestSecurity);

    if ($response->superFunds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTimesheet

Creates a timesheet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTimesheetRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimesheetInput;
use \OpenAPI\OpenAPI\Models\Shared\TimesheetStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimesheetLineInput;
use \OpenAPI\OpenAPI\Models\Shared\ValidationError;
use \OpenAPI\OpenAPI\Models\Operations\CreateTimesheetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTimesheetRequest();
    $request->requestBody = [
        new TimesheetInput(),
        new TimesheetInput(),
    ];
    $request->xeroTenantId = 'suscipit';

    $requestSecurity = new CreateTimesheetSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->createTimesheet($request, $requestSecurity);

    if ($response->timesheets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployee

Retrieves an employee's detail by unique employee id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeeRequest();
    $request->employeeID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'molestiae';

    $requestSecurity = new GetEmployeeSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getEmployee($request, $requestSecurity);

    if ($response->employees !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployees

Searches payroll employees

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployeesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployeesRequest();
    $request->ifModifiedSince = 'minus';
    $request->xeroTenantId = 'placeat';
    $request->order = 'voluptatum';
    $request->page = 479977;
    $request->where = 'excepturi';

    $requestSecurity = new GetEmployeesSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getEmployees($request, $requestSecurity);

    if ($response->employees !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLeaveApplication

Retrieves a leave application by a unique leave application id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLeaveApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLeaveApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLeaveApplicationRequest();
    $request->leaveApplicationID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'nisi';

    $requestSecurity = new GetLeaveApplicationSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getLeaveApplication($request, $requestSecurity);

    if ($response->leaveApplications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLeaveApplications

Retrieves leave applications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLeaveApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLeaveApplicationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLeaveApplicationsRequest();
    $request->ifModifiedSince = 'recusandae';
    $request->xeroTenantId = 'temporibus';
    $request->order = 'ab';
    $request->page = 337396;
    $request->where = 'veritatis';

    $requestSecurity = new GetLeaveApplicationsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getLeaveApplications($request, $requestSecurity);

    if ($response->leaveApplications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayItems

Retrieves pay items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPayItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayItemsRequest();
    $request->ifModifiedSince = 'deserunt';
    $request->xeroTenantId = 'perferendis';
    $request->order = 'ipsam';
    $request->page = 832620;
    $request->where = 'sapiente';

    $requestSecurity = new GetPayItemsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getPayItems($request, $requestSecurity);

    if ($response->payItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayRun

Retrieves a pay run by using a unique pay run id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayRunRequest();
    $request->payRunID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'quo';

    $requestSecurity = new GetPayRunSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getPayRun($request, $requestSecurity);

    if ($response->payRuns !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayRuns

Retrieves pay runs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayRunsRequest();
    $request->ifModifiedSince = 'odit';
    $request->xeroTenantId = 'at';
    $request->order = 'at';
    $request->page = 978619;
    $request->where = 'molestiae';

    $requestSecurity = new GetPayRunsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getPayRuns($request, $requestSecurity);

    if ($response->payRuns !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayrollCalendar

Retrieves payroll calendar by using a unique payroll calendar ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayrollCalendarRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPayrollCalendarSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayrollCalendarRequest();
    $request->payrollCalendarID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'quod';

    $requestSecurity = new GetPayrollCalendarSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getPayrollCalendar($request, $requestSecurity);

    if ($response->payrollCalendars !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayrollCalendars

Retrieves payroll calendars

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayrollCalendarsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPayrollCalendarsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayrollCalendarsRequest();
    $request->ifModifiedSince = 'quod';
    $request->xeroTenantId = 'esse';
    $request->order = 'totam';
    $request->page = 780529;
    $request->where = 'dolorum';

    $requestSecurity = new GetPayrollCalendarsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getPayrollCalendars($request, $requestSecurity);

    if ($response->payrollCalendars !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayslip

Retrieves for a payslip by a unique payslip id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayslipRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPayslipSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayslipRequest();
    $request->payslipID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'dicta';

    $requestSecurity = new GetPayslipSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getPayslip($request, $requestSecurity);

    if ($response->payslipObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettings

Retrieves payroll settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingsRequest();
    $request->xeroTenantId = 'nam';

    $requestSecurity = new GetSettingsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getSettings($request, $requestSecurity);

    if ($response->settingsObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuperfund

Retrieves a superfund by using a unique superfund ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSuperfundRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSuperfundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuperfundRequest();
    $request->superFundID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'officia';

    $requestSecurity = new GetSuperfundSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getSuperfund($request, $requestSecurity);

    if ($response->superFunds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuperfundProducts

Retrieves superfund products

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSuperfundProductsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSuperfundProductsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuperfundProductsRequest();
    $request->abn = 'occaecati';
    $request->usi = 'fugit';
    $request->xeroTenantId = 'deleniti';

    $requestSecurity = new GetSuperfundProductsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getSuperfundProducts($request, $requestSecurity);

    if ($response->superFundProducts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuperfunds

Retrieves superfunds

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSuperfundsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSuperfundsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuperfundsRequest();
    $request->ifModifiedSince = 'hic';
    $request->xeroTenantId = 'optio';
    $request->order = 'totam';
    $request->page = 105907;
    $request->where = 'commodi';

    $requestSecurity = new GetSuperfundsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getSuperfunds($request, $requestSecurity);

    if ($response->superFunds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimesheet

Retrieves a timesheet by using a unique timesheet id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTimesheetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTimesheetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimesheetRequest();
    $request->timesheetID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'molestiae';

    $requestSecurity = new GetTimesheetSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getTimesheet($request, $requestSecurity);

    if ($response->timesheetObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimesheets

Retrieves timesheets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTimesheetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTimesheetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimesheetsRequest();
    $request->ifModifiedSince = 'modi';
    $request->xeroTenantId = 'qui';
    $request->order = 'impedit';
    $request->page = 736918;
    $request->where = 'esse';

    $requestSecurity = new GetTimesheetsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->getTimesheets($request, $requestSecurity);

    if ($response->timesheets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEmployee

Update properties on a single employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmployeeRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmployeeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEmployeeRequest();
    $request->employeeID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->requestBody = [
        new EmployeeInput(),
    ];
    $request->xeroTenantId = 'excepturi';

    $requestSecurity = new UpdateEmployeeSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->updateEmployee($request, $requestSecurity);

    if ($response->employees !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLeaveApplication

Updates a specific leave application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLeaveApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\LeaveApplicationInput;
use \OpenAPI\OpenAPI\Models\Shared\LeavePeriod;
use \OpenAPI\OpenAPI\Models\Shared\LeavePeriodStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationError;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLeaveApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLeaveApplicationRequest();
    $request->leaveApplicationID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->requestBody = [
        new LeaveApplicationInput(),
    ];
    $request->xeroTenantId = 'perferendis';

    $requestSecurity = new UpdateLeaveApplicationSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->updateLeaveApplication($request, $requestSecurity);

    if ($response->leaveApplications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePayRun

Update properties on a single PayRun

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePayRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayRunInput;
use \OpenAPI\OpenAPI\Models\Shared\PayRunStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayslipSummaryInput;
use \OpenAPI\OpenAPI\Models\Shared\ValidationError;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePayRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePayRunRequest();
    $request->payRunID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->requestBody = [
        new PayRunInput(),
        new PayRunInput(),
    ];
    $request->xeroTenantId = 'natus';

    $requestSecurity = new UpdatePayRunSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->updatePayRun($request, $requestSecurity);

    if ($response->payRuns !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePayslip

Update lines on a single payslips

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePayslipRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayslipLines;
use \OpenAPI\OpenAPI\Models\Shared\DeductionLine;
use \OpenAPI\OpenAPI\Models\Shared\DeductionTypeCalculationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EarningsLine;
use \OpenAPI\OpenAPI\Models\Shared\EarningsRateCalculationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LeaveAccrualLine;
use \OpenAPI\OpenAPI\Models\Shared\LeaveEarningsLine;
use \OpenAPI\OpenAPI\Models\Shared\ReimbursementLine;
use \OpenAPI\OpenAPI\Models\Shared\SuperannuationLine;
use \OpenAPI\OpenAPI\Models\Shared\SuperannuationCalculationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SuperannuationContributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaxLine;
use \OpenAPI\OpenAPI\Models\Shared\ManualTaxTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePayslipSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePayslipRequest();
    $request->payslipID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->requestBody = [
        new PayslipLines(),
    ];
    $request->xeroTenantId = 'iste';

    $requestSecurity = new UpdatePayslipSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->updatePayslip($request, $requestSecurity);

    if ($response->payslips !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSuperfund

Update properties on a single Superfund

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSuperfundRequest;
use \OpenAPI\OpenAPI\Models\Shared\SuperFundInput;
use \OpenAPI\OpenAPI\Models\Shared\SuperFundTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidationError;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSuperfundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSuperfundRequest();
    $request->requestBody = [
        new SuperFundInput(),
    ];
    $request->superFundID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'natus';

    $requestSecurity = new UpdateSuperfundSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->updateSuperfund($request, $requestSecurity);

    if ($response->superFunds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTimesheet

Update properties on a single timesheet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTimesheetRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimesheetInput;
use \OpenAPI\OpenAPI\Models\Shared\TimesheetStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimesheetLineInput;
use \OpenAPI\OpenAPI\Models\Shared\ValidationError;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTimesheetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTimesheetRequest();
    $request->requestBody = [
        new TimesheetInput(),
        new TimesheetInput(),
    ];
    $request->timesheetID = '4ff1e5cc-9835-40d5-bb18-09fdb118db9c';
    $request->xeroTenantId = 'hic';

    $requestSecurity = new UpdateTimesheetSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payrollAu->updateTimesheet($request, $requestSecurity);

    if ($response->timesheets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
