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