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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### addresses

* `createClientAddress` - Create client address
* `deleteAddress` - Delete address
* `getAddress` - Get address
* `getAddressByVersion` - Get address by version
* `getClientAddresses` - Get client addresses
* `getUnmaskedAddress` - Get unmasked address
* `getUnmaskedAddressByVersion` - Get unmasked address by version
* `getUnmaskedClientAddresses` - Get unmasked client addresses
* `updateClientAddress` - Update client address

### profiles

* `createClientProfile` - Create client profile
* `deleteClientProfile` - Delete client profile
* `getProfile` - Get profile
* `getProfileByVersion` - Get profile by version
* `getUnmaskedProfile` - Get unmasked profile
* `getUnmaskedProfileByVersion` - Get unmasked profile by version
* `updateClientProfile` - Updates client profile

### prospects

* `createProspect` - Create prospect
* `deleteProspect` - Delete prospect
* `getProspect` - Get prospect
* `getUnmaskedProspect` - Get unmasked prospect
* `updateProspect` - Update prospect

### purchaseInformation

* `createPurchaseInformation` - Create purchase information
* `deletePurchaseInformation` - Delete purchase information
* `getPurchaseInformation` - Get purchase information
* `getUnmaskedPurchaseInformation` - Get unmasked purchase information
* `updatePurchaseInformation` - Update purchase information

### schemas

* `createOrUpdateProfileSchema` - Create or update profile schema
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
