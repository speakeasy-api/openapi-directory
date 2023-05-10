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
use \OpenAPI\OpenAPI\Models\Operations\CreateClientAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\Address;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClientAddressRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->address = new Address();
    $request->address->administrativeAreaLevel1 = 'RJ';
    $request->address->countryCode = 'BR';
    $request->address->countryName = 'Brasil';
    $request->address->locality = 'Locality';
    $request->address->localityAreaLevel1 = 'Locality area';
    $request->address->postalCode = '20200-000';
    $request->address->route = '51';
    $request->address->streetNumber = '999';
    $request->alternativeKey = 'email';
    $request->profileId = '70caf394-8534-447e-a0ca-1803c669c771';

    $response = $sdk->addresses->createClientAddress($request);

    if ($response->createClientAddress201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [addresses](docs/addresses/README.md)

* [createClientAddress](docs/addresses/README.md#createclientaddress) - Create client address
* [deleteAddress](docs/addresses/README.md#deleteaddress) - Delete address
* [getAddress](docs/addresses/README.md#getaddress) - Get address
* [getAddressByVersion](docs/addresses/README.md#getaddressbyversion) - Get address by version
* [getClientAddresses](docs/addresses/README.md#getclientaddresses) - Get client addresses
* [getUnmaskedAddress](docs/addresses/README.md#getunmaskedaddress) - Get unmasked address
* [getUnmaskedAddressByVersion](docs/addresses/README.md#getunmaskedaddressbyversion) - Get unmasked address by version
* [getUnmaskedClientAddresses](docs/addresses/README.md#getunmaskedclientaddresses) - Get unmasked client addresses
* [updateClientAddress](docs/addresses/README.md#updateclientaddress) - Update client address

### [profiles](docs/profiles/README.md)

* [createClientProfile](docs/profiles/README.md#createclientprofile) - Create client profile
* [deleteClientProfile](docs/profiles/README.md#deleteclientprofile) - Delete client profile
* [getProfile](docs/profiles/README.md#getprofile) - Get profile
* [getProfileByVersion](docs/profiles/README.md#getprofilebyversion) - Get profile by version
* [getUnmaskedProfile](docs/profiles/README.md#getunmaskedprofile) - Get unmasked profile
* [getUnmaskedProfileByVersion](docs/profiles/README.md#getunmaskedprofilebyversion) - Get unmasked profile by version
* [updateClientProfile](docs/profiles/README.md#updateclientprofile) - Updates client profile

### [prospects](docs/prospects/README.md)

* [createProspect](docs/prospects/README.md#createprospect) - Create prospect
* [deleteProspect](docs/prospects/README.md#deleteprospect) - Delete prospect
* [getProspect](docs/prospects/README.md#getprospect) - Get prospect
* [getUnmaskedProspect](docs/prospects/README.md#getunmaskedprospect) - Get unmasked prospect
* [updateProspect](docs/prospects/README.md#updateprospect) - Update prospect

### [purchaseInformation](docs/purchaseinformation/README.md)

* [createPurchaseInformation](docs/purchaseinformation/README.md#createpurchaseinformation) - Create purchase information
* [deletePurchaseInformation](docs/purchaseinformation/README.md#deletepurchaseinformation) - Delete purchase information
* [getPurchaseInformation](docs/purchaseinformation/README.md#getpurchaseinformation) - Get purchase information
* [getUnmaskedPurchaseInformation](docs/purchaseinformation/README.md#getunmaskedpurchaseinformation) - Get unmasked purchase information
* [updatePurchaseInformation](docs/purchaseinformation/README.md#updatepurchaseinformation) - Update purchase information

### [schemas](docs/schemas/README.md)

* [createOrUpdateProfileSchema](docs/schemas/README.md#createorupdateprofileschema) - Create or update profile schema
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
