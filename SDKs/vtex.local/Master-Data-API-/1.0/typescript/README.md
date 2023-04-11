# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Master-Data-API-/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Master-Data-API-/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateNewCustomerAddressRequest,
  CreateNewCustomerAddressResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: CreateNewCustomerAddressRequest = {
  accept: "application/json",
  contentType: "application/json",
  schema: "schema",
  createUpdateAddressRequests: {
    addressName: "My house",
    addressType: "residential",
    city: "Rio de Janeiro",
    complement: "3rd floor",
    country: "BRA",
    neighborhood: "Botafogo",
    number: "300",
    postalCode: "12345-000",
    receiverName: "Clark Kent.",
    reference: "Grey building",
    state: "Rio de Janeiro",
    street: "Praia de Botafogo",
    userId: "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e",
  },
};

sdk.addresses.createNewCustomerAddress(req).then((res: CreateNewCustomerAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### addresses

* `createNewCustomerAddress` - Create new customer address
* `deleteCustomerAddress` - Delete customer address
* `updateCustomerAddress` - Update customer address

### clusters

* `validatedocumentbyclusters` - Validate document by clusters

### customerProfiles

* `createNewCustomerProfilev2` - Create new customer profile
* `deleteCustomerProfile` - Delete customer profile
* `updateCustomerProfile` - Update customer profile

### documents

* `createnewdocument` - Create new document
* `createorupdatepartialdocument` - Create partial document
* `deletedocument` - Delete document
* `getdocument` - Get document
* `updateentiredocument` - Update entire document
* `updatepartialdocument` - Update partial document

### indices

* `deleteindexbyname` - Delete index by name
* `getindexbyname` - Get index by name
* `getindices` - Get indices
* `putindices` - Put indices

### schemas

* `deleteschemabyname` - Delete schema by name
* `getschemabyname` - Get schema by name
* `getschemas` - Get schemas
* `saveschemabyname` - Save schema by name

### scroll

* `scrolldocuments` - Scroll documents

### search

* `searchdocuments` - Search documents

### versions

* `getversion` - Get version
* `listversions` - List versions
* `putversion` - Put version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

