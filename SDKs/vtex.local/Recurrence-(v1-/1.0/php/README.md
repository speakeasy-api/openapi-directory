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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddrecurrenceitemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddrecurrenceitemRequest;
use \OpenAPI\OpenAPI\Models\Shared\Frequency;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddrecurrenceitemRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = [
        new AddrecurrenceitemRequest(),
        new AddrecurrenceitemRequest(),
        new AddrecurrenceitemRequest(),
    ];
    $request->recurrenceId = 'provident';

    $response = $sdk->miscellaneous->addrecurrenceitem($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [miscellaneous](docs/miscellaneous/README.md)

* [addrecurrenceitem](docs/miscellaneous/README.md#addrecurrenceitem) - Add Subscription item
* [getRecurrencebyemail](docs/miscellaneous/README.md#getrecurrencebyemail) - Get Subscriptions
* [getRecurrencebyrecurrenceId](docs/miscellaneous/README.md#getrecurrencebyrecurrenceid) - Get Subscription by recurrenceId
* [getpaymentaccounts](docs/miscellaneous/README.md#getpaymentaccounts) - Get payment accounts
* [getrecurrenceaddresses](docs/miscellaneous/README.md#getrecurrenceaddresses) - Get Subscription addresses
* [getrecurrencesettings](docs/miscellaneous/README.md#getrecurrencesettings) - Get Subscription settings
* [getselfrecurrence](docs/miscellaneous/README.md#getselfrecurrence) - Get self Subscription
* [reindexrecurrence](docs/miscellaneous/README.md#reindexrecurrence) - Reindex Subscription
* [updatepartialrecurrence](docs/miscellaneous/README.md#updatepartialrecurrence) - Update partial Subscription
* [updaterecurrence](docs/miscellaneous/README.md#updaterecurrence) - Update Subscription
* [updaterecurrencesettings](docs/miscellaneous/README.md#updaterecurrencesettings) - Update Subscription settings
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
