# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Recurrence-(v1-/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Recurrence-(v1-/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AddrecurrenceitemRequest,
  AddrecurrenceitemResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: AddrecurrenceitemRequest = {
  accept: "application/json",
  contentType: "application/json",
  requestBody: [
    {
      frequency: {
        interval: 592845,
        periodicity: "distinctio",
      },
      quantity: 844266,
      seller: "unde",
      shippingAddressId: "nulla",
      sku: "corrupti",
    },
    {
      frequency: {
        interval: 847252,
        periodicity: "vel",
      },
      quantity: 623564,
      seller: "deserunt",
      shippingAddressId: "suscipit",
      sku: "iure",
    },
    {
      frequency: {
        interval: 297534,
        periodicity: "debitis",
      },
      quantity: 56713,
      seller: "delectus",
      shippingAddressId: "tempora",
      sku: "suscipit",
    },
  ],
  recurrenceId: "molestiae",
};

sdk.miscellaneous.addrecurrenceitem(req).then((res: AddrecurrenceitemResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### miscellaneous

* `addrecurrenceitem` - Add Subscription item
* `getRecurrencebyemail` - Get Subscriptions
* `getRecurrencebyrecurrenceId` - Get Subscription by recurrenceId
* `getpaymentaccounts` - Get payment accounts
* `getrecurrenceaddresses` - Get Subscription addresses
* `getrecurrencesettings` - Get Subscription settings
* `getselfrecurrence` - Get self Subscription
* `reindexrecurrence` - Reindex Subscription
* `updatepartialrecurrence` - Update partial Subscription
* `updaterecurrence` - Update Subscription
* `updaterecurrencesettings` - Update Subscription settings
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

