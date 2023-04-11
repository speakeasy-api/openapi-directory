<!-- Start SDK Example Usage -->
```typescript
import {
  GetProductRatingRequest,
  GetProductRatingResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: GetProductRatingRequest = {
  accept: "corrupti",
  contentType: "provident",
  productId: "1",
};

sdk.rating.getProductRating(req).then((res: GetProductRatingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->