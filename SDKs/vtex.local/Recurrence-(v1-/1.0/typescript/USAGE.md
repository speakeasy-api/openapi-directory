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