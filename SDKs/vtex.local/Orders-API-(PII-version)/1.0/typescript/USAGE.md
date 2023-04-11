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