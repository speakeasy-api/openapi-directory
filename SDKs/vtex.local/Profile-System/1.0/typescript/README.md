# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Profile-System/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Profile-System/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateClientAddressRequest,
  CreateClientAddressResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: CreateClientAddressRequest = {
  accept: "application/json",
  contentType: "application/json",
  address: {
    administrativeAreaLevel1: "RJ",
    countryCode: "BR",
    countryName: "Brasil",
    locality: "Locality",
    localityAreaLevel1: "Locality area",
    postalCode: "20200-000",
    route: "51",
    streetNumber: "999",
  },
  alternativeKey: "email",
  profileId: "70caf394-8534-447e-a0ca-1803c669c771",
};

sdk.addresses.createClientAddress(req).then((res: CreateClientAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

