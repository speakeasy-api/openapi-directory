# policy

### Available Operations

* [policyCreateOrUpdate](#policycreateorupdate) - Create Policy
* [policyDelete](#policydelete) - Delete Policy by ID
* [policyEvaluate](#policyevaluate) - Evaluate Policies
* [policyGet](#policyget) - Get Policy by ID
* [policyList](#policylist) - Get Policy List
* [putApiPolicyEnginePoliciesId](#putapipolicyenginepoliciesid) - Update Policy

## policyCreateOrUpdate

Creates a new policy from scratch.

### Example Usage

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
    $request->accept = 'maiores';
    $request->contentType = 'molestiae';
    $request->policySaveRequest = new PolicySaveRequest();
    $request->policySaveRequest->description = 'quod';
    $request->policySaveRequest->name = 'Erik Lebsack';
    $request->policySaveRequest->statements = [
        new StatementGetResponse(),
    ];
    $request->id = 'ba928fc8-1674-42cb-b392-05929396fea7';

    $response = $sdk->policy->policyCreateOrUpdate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## policyDelete

Deletes a specific policy of the account by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolicyDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicyDeleteRequest();
    $request->accept = 'corporis';
    $request->contentType = 'iste';
    $request->id = '6eb10faa-a235-42c5-9559-07aff1a3a2fa';

    $response = $sdk->policy->policyDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## policyEvaluate

This endpoint consults all policies and checks the ones that satisfy the request body’s conditions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolicyEvaluateRequest;
use \OpenAPI\OpenAPI\Models\Shared\EvaluatePolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicyEvaluateRequest();
    $request->accept = 'occaecati';
    $request->contentType = 'numquam';
    $request->evaluatePolicyRequest = new EvaluatePolicyRequest();
    $request->evaluatePolicyRequest->context = [
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->evaluatePolicyRequest->resource = 'quia';

    $response = $sdk->policy->policyEvaluate($request);

    if ($response->policyActionGetResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## policyGet

Retrieves general information of a policy by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolicyGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicyGetRequest();
    $request->accept = 'quis';
    $request->contentType = 'vitae';
    $request->id = 'aa52c3f5-ad01-49da-9ffe-78f097b0074f';

    $response = $sdk->policy->policyGet($request);

    if ($response->policyGetResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## policyList

Retrieves a list of all policies in the account and general information of each policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolicyListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolicyListRequest();
    $request->accept = 'dicta';
    $request->contentType = 'corporis';

    $response = $sdk->policy->policyList($request);

    if ($response->policyGetResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApiPolicyEnginePoliciesId

Updates an existing policy at your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutApiPolicyEnginePoliciesIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\PolicySaveRequest;
use \OpenAPI\OpenAPI\Models\Shared\StatementGetResponse;
use \OpenAPI\OpenAPI\Models\Shared\StatementGetResponseCondition;
use \OpenAPI\OpenAPI\Models\Shared\StatementGetResponseConditionConditions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApiPolicyEnginePoliciesIdRequest();
    $request->accept = 'dolore';
    $request->contentType = 'iusto';
    $request->policySaveRequest = new PolicySaveRequest();
    $request->policySaveRequest->description = 'dicta';
    $request->policySaveRequest->name = 'Bill Thompson';
    $request->policySaveRequest->statements = [
        new StatementGetResponse(),
    ];
    $request->id = '3b99d488-e1e9-41e4-90ad-2abd44269802';

    $response = $sdk->policy->putApiPolicyEnginePoliciesId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
