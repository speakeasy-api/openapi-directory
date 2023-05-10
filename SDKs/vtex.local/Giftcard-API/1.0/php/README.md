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
use \OpenAPI\OpenAPI\Models\Operations\CreateGiftCardRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGiftCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGiftCardRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->createGiftCardRequest = new CreateGiftCardRequest();
    $request->createGiftCardRequest->caption = 'rewards program';
    $request->createGiftCardRequest->expiringDate = '2020-09-01T13:15:30Z';
    $request->createGiftCardRequest->multipleCredits = false;
    $request->createGiftCardRequest->multipleRedemptions = false;
    $request->createGiftCardRequest->profileId = '1234';
    $request->createGiftCardRequest->relationName = 'insert example here';
    $request->createGiftCardRequest->restrictedToOwner = false;
    $request->xVTEXAPIAppKey = 'distinctio';
    $request->xVTEXAPIAppToken = 'quibusdam';

    $response = $sdk->giftCard->createGiftCard($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [giftCard](docs/giftcard/README.md)

* [createGiftCard](docs/giftcard/README.md#creategiftcard) - Create GiftCard
* [getGiftCardbyID](docs/giftcard/README.md#getgiftcardbyid) - Get GiftCard by ID
* [getGiftCardusingJSON](docs/giftcard/README.md#getgiftcardusingjson) - Get GiftCard using JSON

### [transaction](docs/transaction/README.md)

* [cancelGiftCardTransaction](docs/transaction/README.md#cancelgiftcardtransaction) - Cancel GiftCard Transaction
* [createGiftCardTransaction](docs/transaction/README.md#creategiftcardtransaction) - Create GiftCard Transaction
* [getGiftCardTransactionbyID](docs/transaction/README.md#getgiftcardtransactionbyid) - Get GiftCard Transaction by ID
* [getGiftCardTransactions](docs/transaction/README.md#getgiftcardtransactions) - Get GiftCard Transactions
* [getTransactionAuthorizations](docs/transaction/README.md#gettransactionauthorizations) - Get Transaction Authorizations
* [getTransactionCancellations](docs/transaction/README.md#gettransactioncancellations) - Get Transaction Cancellations
* [getTransactionSettlements](docs/transaction/README.md#gettransactionsettlements) - Get Transaction Settlements
* [settleGiftCardTransaction](docs/transaction/README.md#settlegiftcardtransaction) - Settle GiftCard Transaction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
