# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/SKU-Bindings-API/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/SKU-Bindings-API/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ActivateSKUBindingRequest,
  ActivateSKUBindingResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: ActivateSKUBindingRequest = {
  accept: "corrupti",
  contentType: "provident",
  sellerId: "vtxkfj7352",
  skuSellerId: "71",
};

sdk.skuBindings.activateSKUBinding(req).then((res: ActivateSKUBindingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### skuBindings

* `activateSKUBinding` - Activate SKU Binding
* `bindtoanothersku` - Bind a seller's SKU to another SKU
* `changeNotification` - Change Notification with SKU ID
* `deactivateSKUBinding` - Deactivate SKU Binding
* `deleteSKUsellerassociation` - Remove a seller's SKU Binding
* `getSKUseller` - Get details of a seller's SKU
* `getallbySellerId` - Get all SKU Bindings by Seller ID
* `getbySkuId` - Get SKU Bindings by SKU ID
* `getpagedadmin` - Get SKU Bindings information
* `getpagedbySellerId` - Get paged SKU Bindings by Seller ID
* `insertSKUBinding` - Insert SKU Binding
* `postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId` - Change Notification with Seller ID and Seller SKU ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

