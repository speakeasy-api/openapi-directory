# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Orders-API-(PII-version)/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Orders-API-(PII-version)/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  InvoiceNotification2Request,
  InvoiceNotification2Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: InvoiceNotification2Request = {
  accept: "application/json",
  contentType: "application/json",
  invoiceNotificationRequest: {
    cfop: "6.104",
    courier: "corrupti",
    extraValue: 100,
    invoiceKey: "provident",
    invoiceNumber: "123456789",
    invoiceUrl: "distinctio",
    invoiceValue: "2499",
    issuedDate: "2020-07-15",
    items: [
      {
        itemIndex: "67",
        price: 2499,
        quantity: 3,
      },
      {
        itemIndex: "67",
        price: 2499,
        quantity: 3,
      },
      {
        itemIndex: "67",
        price: 2499,
        quantity: 3,
      },
      {
        itemIndex: "67",
        price: 2499,
        quantity: 3,
      },
    ],
    trackingNumber: "unde",
    trackingUrl: "nulla",
    type: "Output",
    volumes: 3,
  },
  orderId: "70caf3941s6df1",
};

sdk.invoice.invoiceNotification2(req).then((res: InvoiceNotification2Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### invoice

* `invoiceNotification2` - Order invoice notification

### orders

* `cancelOrder2` - Cancel order
* `getOrder2` - Get order
* `listOrders2` - List orders
* `startHandling2` - Start handling order

### payment

* `sendPaymentNotification2` - Send payment notification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

