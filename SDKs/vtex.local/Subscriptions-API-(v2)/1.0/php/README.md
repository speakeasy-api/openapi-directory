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
use \OpenAPI\OpenAPI\Models\Operations\GetreportstatusbyIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetreportstatusbyIDRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->reportId = 'distinctio';

    $response = $sdk->report->getreportstatusbyID($request);

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


### [report](docs/report/README.md)

* [getreportstatusbyID](docs/report/README.md#getreportstatusbyid) - Get report status by ID
* [requestreportbyStatus](docs/report/README.md#requestreportbystatus) - Retrieve Subscription report by Status
* [requestreportbydate](docs/report/README.md#requestreportbydate) - Retrieve Subscription report by date
* [requestreportbyorderdate](docs/report/README.md#requestreportbyorderdate) - Retrieve Subscription report by order date
* [requestreportbyschedule](docs/report/README.md#requestreportbyschedule) - Retrieve Subscription report by schedule
* [requestreportbyupdate](docs/report/README.md#requestreportbyupdate) - Request report by update

### [settings](docs/settings/README.md)

* [editSettings](docs/settings/README.md#editsettings) - Edit Subscriptions settings
* [getSettings](docs/settings/README.md#getsettings) - Get Subscriptions Settings

### [subscriptionGroup](docs/subscriptiongroup/README.md)

* [additemsubscriptionGroupId](docs/subscriptiongroup/README.md#additemsubscriptiongroupid) - Add Subscription item by groupId
* [cancelSubscriptionbygroupId](docs/subscriptiongroup/README.md#cancelsubscriptionbygroupid) - Cancel Subscription by groupId
* [getAllsubscriptiongroup](docs/subscriptiongroup/README.md#getallsubscriptiongroup) - List All subscription groups
* [getConfigsubscriptionsgroup](docs/subscriptiongroup/README.md#getconfigsubscriptionsgroup) - List Subscription group's Configuration
* [getConversationMessagebygroupId](docs/subscriptiongroup/README.md#getconversationmessagebygroupid) - Get Conversation Message by groupId
* [getNextpurchase](docs/subscriptiongroup/README.md#getnextpurchase) - Get Next purchase
* [getSimulatebysubscriptionGroup](docs/subscriptiongroup/README.md#getsimulatebysubscriptiongroup) - Get Simulation by subscription-group
* [getSubscriptionbygroupId](docs/subscriptiongroup/README.md#getsubscriptionbygroupid) - Get Subscription by groupId
* [getaddressesbygroupId](docs/subscriptiongroup/README.md#getaddressesbygroupid) - Get addresses by groupId
* [getfrequencyoptionsbygroupId](docs/subscriptiongroup/README.md#getfrequencyoptionsbygroupid) - Get frequency options by groupId
* [getpaymentSystembygroupId](docs/subscriptiongroup/README.md#getpaymentsystembygroupid) - Get payment System by groupId
* [getsubscriptiongrouplist](docs/subscriptiongroup/README.md#getsubscriptiongrouplist) - Get subscription group list
* [getwillcreatebygroupId](docs/subscriptiongroup/README.md#getwillcreatebygroupid) - List 'Will create' by groupId
* [insertAddressesbygroupId](docs/subscriptiongroup/README.md#insertaddressesbygroupid) - Insert Addresses by groupId
* [retrysubscriptionbygroupId](docs/subscriptiongroup/README.md#retrysubscriptionbygroupid) - Retry subscription by groupId
* [updateSubscriptionbygroupId](docs/subscriptiongroup/README.md#updatesubscriptionbygroupid) - Update Subscription by groupId

### [subscriptions](docs/subscriptions/README.md)

* [cancelSubscriptionsbySubscriptionId](docs/subscriptions/README.md#cancelsubscriptionsbysubscriptionid) - Cancel Subscriptions by SubscriptionId
* [getSubscriptionList](docs/subscriptions/README.md#getsubscriptionlist) - Get Subscription List
* [getfrequencyoptionsbysubscriptionId](docs/subscriptions/README.md#getfrequencyoptionsbysubscriptionid) - Get frequency options by subscriptionId
* [getsubscriptionbyId](docs/subscriptions/README.md#getsubscriptionbyid) - Retrieve subscription by ID
* [getsubscriptionstocustomer](docs/subscriptions/README.md#getsubscriptionstocustomer) - Retrieve customer's subscriptions
* [insertAddressesforSubscription](docs/subscriptions/README.md#insertaddressesforsubscription) - Insert Addresses for Subscription
* [updateSubscriptionsbySubscriptionId](docs/subscriptions/README.md#updatesubscriptionsbysubscriptionid) - Update Subscriptions by SubscriptionId
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
