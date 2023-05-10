<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\PostAccountWrapper;
use \OpenAPI\OpenAPI\Models\Shared\SaveAccount;
use \OpenAPI\OpenAPI\Models\Shared\AccountTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountRequest();
    $request->postAccountWrapper = new PostAccountWrapper();
    $request->postAccountWrapper->account = new SaveAccount();
    $request->postAccountWrapper->account->balance = 548814;
    $request->postAccountWrapper->account->name = 'Kelvin Sporer';
    $request->postAccountWrapper->account->type = AccountTypeEnum::MORTGAGE;
    $request->budgetId = 'illum';

    $response = $sdk->accounts->createAccount($request);

    if ($response->accountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->