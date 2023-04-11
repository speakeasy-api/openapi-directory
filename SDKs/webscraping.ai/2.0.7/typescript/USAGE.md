<!-- Start SDK Example Usage -->
```typescript
import {
  AccountResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.account.account().then((res: AccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->