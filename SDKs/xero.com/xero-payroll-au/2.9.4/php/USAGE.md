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