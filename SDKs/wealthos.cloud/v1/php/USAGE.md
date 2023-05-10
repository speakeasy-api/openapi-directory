<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankAccountUpdateRequestBodyForBankAccount;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBankAccountRequest();
    $request->requestBody = new UpdateBankAccountUpdateRequestBodyForBankAccount();
    $request->requestBody->accountName = 'corrupti';
    $request->requestBody->accountStatus = UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum::INACTIVE;
    $request->requestBody->defaultAccount = UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum::NO;
    $request->requestBody->referenceVersion = 1;
    $request->bankAccountId = 'quibusdam';
    $request->xApiKey = 'unde';

    $requestSecurity = new UpdateBankAccountSecurity();
    $requestSecurity->apiSecretKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->bankAccounts->updateBankAccount($request, $requestSecurity);

    if ($response->updateBankAccount201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->