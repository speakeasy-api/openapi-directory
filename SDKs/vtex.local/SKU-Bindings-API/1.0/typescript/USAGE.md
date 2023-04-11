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