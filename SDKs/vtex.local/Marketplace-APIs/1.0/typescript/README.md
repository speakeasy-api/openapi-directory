# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Marketplace-APIs/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Marketplace-APIs/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetProductoffersRequest,
  GetProductoffersResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: GetProductoffersRequest = {
  accept: "corrupti",
  contentType: "provident",
  accountName: "distinctio",
  environment: "quibusdam",
  productId: "unde",
};

sdk.matchedOffers.getProductoffers(req).then((res: GetProductoffersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### matchedOffers

* `getProductoffers` - Get Matched Offer's Data by Product ID
* `getSKUoffers` - Get Matched Offer's Data by SKU ID
* `getofferslist` - Get Matched Offers List

### notification

* `inventoryNotification` - Notify marketplace of inventory update
* `priceNotification` - Notify marketplace of price update

### salesChannelMapping

* `retrieveMapping` - Get Sales Channel Mapping Data
* `upsertMapping` - Upsert Sales Channel Mapping

### sellerCommissions

* `bulkUpsertSellerCommissions` - Upsert Seller Commissions in Bulk
* `listSellerCommissions` - List Seller Commissions by seller ID
* `removeSellerCommissions` - Remove Seller Commissions by Category ID
* `retrieveSellerCommissions` - Get Seller Commissions by Category ID
* `upsertSellerCommissions` - Upsert Seller Commissions by Category ID

### sellerInvite

* `acceptSellerLead` - Accept Seller Lead
* `createSellerFromSellerLead` - Create Seller From Lead
* `createSellerLead` - Invite Seller Lead
* `listSellerLeads` - List Seller Leads
* `removeSellerLead` - Delete Seller Lead
* `resendSellerLeadRequest` - Resend Seller Lead Invite
* `retrieveSellerLead` - Get Seller Lead's Data by Id

### sellers

* `getListSellers` - List Sellers
* `getRetrieveSeller` - Get Seller data by ID
* `updateSeller` - Update Seller by Seller ID
* `upsertSellerRequest` - Configure Seller Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

