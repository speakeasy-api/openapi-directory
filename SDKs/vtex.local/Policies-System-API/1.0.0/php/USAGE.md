<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolicyCreateOrUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\PolicySaveRequest;
use \OpenAPI\OpenAPI\Models\Shared\StatementGetResponse;
use \OpenAPI\OpenAPI\Models\Shared\StatementGetResponseCondition;
use \OpenAPI\OpenAPI\Models\Shared\StatementGetResponseConditionConditions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicyCreateOrUpdateRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->policySaveRequest = new PolicySaveRequest();
    $request->policySaveRequest->description = 'distinctio';
    $request->policySaveRequest->name = 'Stuart Stiedemann';
    $request->policySaveRequest->statements = [
        new StatementGetResponse(),
        new StatementGetResponse(),
    ];
    $request->id = '9a674e0f-467c-4c87-96ed-151a05dfc2dd';

    $response = $sdk->policy->policyCreateOrUpdate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->