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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [policy](docs/policy/README.md)

* [policyCreateOrUpdate](docs/policy/README.md#policycreateorupdate) - Create Policy
* [policyDelete](docs/policy/README.md#policydelete) - Delete Policy by ID
* [policyEvaluate](docs/policy/README.md#policyevaluate) - Evaluate Policies
* [policyGet](docs/policy/README.md#policyget) - Get Policy by ID
* [policyList](docs/policy/README.md#policylist) - Get Policy List
* [putApiPolicyEnginePoliciesId](docs/policy/README.md#putapipolicyenginepoliciesid) - Update Policy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
