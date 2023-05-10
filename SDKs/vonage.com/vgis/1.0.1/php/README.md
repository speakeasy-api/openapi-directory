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

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->accounts->getAccount();

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [getAccount](docs/accounts/README.md#getaccount) - Account info

### [calls](docs/calls/README.md)

* [callAnswer](docs/calls/README.md#callanswer) - Answer call (On supported devices)
* [callHold](docs/calls/README.md#callhold) - Put call on hold
* [callTransfer](docs/calls/README.md#calltransfer) - Transfer call
* [callUnold](docs/calls/README.md#callunold) - Unhold
* [callVMTransfer](docs/calls/README.md#callvmtransfer) - Send call to voicemail
* [createCall](docs/calls/README.md#createcall) - Place a call
* [destroyCall](docs/calls/README.md#destroycall) - End a call
* [getCallsCount](docs/calls/README.md#getcallscount) - Get calls count
* [getRoles](docs/calls/README.md#getroles) - Get a call
* [listCalls](docs/calls/README.md#listcalls) - List active calls

### [events](docs/events/README.md)

* [getEvent](docs/events/README.md#getevent) - Get event
* [getEventsCount](docs/events/README.md#geteventscount) - Get events count
* [listEvents](docs/events/README.md#listevents) - List events

### [users](docs/users/README.md)

* [getUser](docs/users/README.md#getuser) - User info

### [webhooks](docs/webhooks/README.md)

* [createWebhook](docs/webhooks/README.md#createwebhook) - Create a new webhook subscription
* [destroyWebhook](docs/webhooks/README.md#destroywebhook) - Remove a web hook
* [listWebhooks](docs/webhooks/README.md#listwebhooks) - List web hooks
* [renewWebhook](docs/webhooks/README.md#renewwebhook) - Renews a web hook
* [viewWebhook](docs/webhooks/README.md#viewwebhook) - Get web hook details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
