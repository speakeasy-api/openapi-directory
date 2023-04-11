<!-- Start SDK Example Usage -->
```typescript
import {
  GetWindowToChangeSellerRequest,
  GetWindowToChangeSellerResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: GetWindowToChangeSellerRequest = {
  accept: "corrupti",
  contentType: "provident",
};

sdk.changeSeller.getWindowToChangeSeller(req).then((res: GetWindowToChangeSellerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->