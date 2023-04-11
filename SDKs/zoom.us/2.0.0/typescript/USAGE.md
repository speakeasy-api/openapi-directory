<!-- Start SDK Example Usage -->
```typescript
import {
  AccountRequest,
  AccountResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: AccountRequest = {
  accountId: "corrupti",
};

sdk.accounts.account(req).then((res: AccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->