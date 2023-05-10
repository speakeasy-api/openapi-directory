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
use \OpenAPI\OpenAPI\Models\Operations\AffiliationByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AffiliationByIdRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->xPROVIDERAPIAppKey = '{{X-PROVIDER-API-AppKey}}';
    $request->xPROVIDERAPIAppToken = '{{X-PROVIDER-API-AppToken}}';
    $request->affiliationId = 'e046d326-5421-45ab-95ae-f13d37f260b5';

    $response = $sdk->configuration->affiliationById($request);

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


### [configuration](docs/configuration/README.md)

* [affiliationById](docs/configuration/README.md#affiliationbyid) - Affiliation By Id
* [affiliations](docs/configuration/README.md#affiliations) - Affiliations
* [availablePaymentMethods](docs/configuration/README.md#availablepaymentmethods) - Available Payment Methods
* [insertAffiliation](docs/configuration/README.md#insertaffiliation) - Insert Affiliation
* [insertRule](docs/configuration/README.md#insertrule) - Insert Rule
* [putRuleById](docs/configuration/README.md#putrulebyid) - Rule By Id
* [rule](docs/configuration/README.md#rule) - Delete Rule
* [ruleById](docs/configuration/README.md#rulebyid) - Rule By Id
* [rules](docs/configuration/README.md#rules) - Rules
* [updateAffiliation](docs/configuration/README.md#updateaffiliation) - Update Affiliation

### [installments](docs/installments/README.md)

* [installmentsoptions](docs/installments/README.md#installmentsoptions) - Installments options

### [transactionFlow](docs/transactionflow/README.md)

* [cancelthetransaction](docs/transactionflow/README.md#cancelthetransaction) - Cancel the transaction
* [refundthetransaction](docs/transactionflow/README.md#refundthetransaction) - Refund the transaction
* [settlethetransaction](docs/transactionflow/README.md#settlethetransaction) - Settle the transaction

### [transactionProcess](docs/transactionprocess/README.md)

* [oneCreateanewtransaction](docs/transactionprocess/README.md#onecreateanewtransaction) - 1. Starts a new transaction
* [twoSendPaymentsPublic](docs/transactionprocess/README.md#twosendpaymentspublic) - 2.1 Send Payments Information Public
* [twoSendPaymentsWithSavedCreditCard](docs/transactionprocess/README.md#twosendpaymentswithsavedcreditcard) - 2.2 Send Payments With Saved Credit Card
* [threeSendAdditionalData](docs/transactionprocess/README.md#threesendadditionaldata) - 3. Send Additional Data
* [fourDoauthorization](docs/transactionprocess/README.md#fourdoauthorization) - Do authorization
* [paymentDetails](docs/transactionprocess/README.md#paymentdetails) - Payment Details
* [transactionDetails](docs/transactionprocess/README.md#transactiondetails) - Transaction Details
* [transactionSettlementDetails](docs/transactionprocess/README.md#transactionsettlementdetails) - Transaction Settlement  Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
