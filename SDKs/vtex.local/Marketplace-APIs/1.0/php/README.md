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
use \OpenAPI\OpenAPI\Models\Operations\GetProductoffersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductoffersRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->accountName = 'distinctio';
    $request->environment = 'quibusdam';
    $request->productId = 'unde';

    $response = $sdk->matchedOffers->getProductoffers($request);

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


### [matchedOffers](docs/matchedoffers/README.md)

* [getProductoffers](docs/matchedoffers/README.md#getproductoffers) - Get Matched Offer's Data by Product ID
* [getSKUoffers](docs/matchedoffers/README.md#getskuoffers) - Get Matched Offer's Data by SKU ID
* [getofferslist](docs/matchedoffers/README.md#getofferslist) - Get Matched Offers List

### [notification](docs/notification/README.md)

* [inventoryNotification](docs/notification/README.md#inventorynotification) - Notify marketplace of inventory update
* [priceNotification](docs/notification/README.md#pricenotification) - Notify marketplace of price update

### [salesChannelMapping](docs/saleschannelmapping/README.md)

* [retrieveMapping](docs/saleschannelmapping/README.md#retrievemapping) - Get Sales Channel Mapping Data
* [upsertMapping](docs/saleschannelmapping/README.md#upsertmapping) - Upsert Sales Channel Mapping

### [sellerCommissions](docs/sellercommissions/README.md)

* [bulkUpsertSellerCommissions](docs/sellercommissions/README.md#bulkupsertsellercommissions) - Upsert Seller Commissions in Bulk
* [listSellerCommissions](docs/sellercommissions/README.md#listsellercommissions) - List Seller Commissions by seller ID
* [removeSellerCommissions](docs/sellercommissions/README.md#removesellercommissions) - Remove Seller Commissions by Category ID
* [retrieveSellerCommissions](docs/sellercommissions/README.md#retrievesellercommissions) - Get Seller Commissions by Category ID
* [upsertSellerCommissions](docs/sellercommissions/README.md#upsertsellercommissions) - Upsert Seller Commissions by Category ID

### [sellerInvite](docs/sellerinvite/README.md)

* [acceptSellerLead](docs/sellerinvite/README.md#acceptsellerlead) - Accept Seller Lead
* [createSellerFromSellerLead](docs/sellerinvite/README.md#createsellerfromsellerlead) - Create Seller From Lead
* [createSellerLead](docs/sellerinvite/README.md#createsellerlead) - Invite Seller Lead
* [listSellerLeads](docs/sellerinvite/README.md#listsellerleads) - List Seller Leads
* [removeSellerLead](docs/sellerinvite/README.md#removesellerlead) - Delete Seller Lead
* [resendSellerLeadRequest](docs/sellerinvite/README.md#resendsellerleadrequest) - Resend Seller Lead Invite
* [retrieveSellerLead](docs/sellerinvite/README.md#retrievesellerlead) - Get Seller Lead's Data by Id

### [sellers](docs/sellers/README.md)

* [getListSellers](docs/sellers/README.md#getlistsellers) - List Sellers
* [getRetrieveSeller](docs/sellers/README.md#getretrieveseller) - Get Seller data by ID
* [updateSeller](docs/sellers/README.md#updateseller) - Update Seller by Seller ID
* [upsertSellerRequest](docs/sellers/README.md#upsertsellerrequest) - Configure Seller Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
