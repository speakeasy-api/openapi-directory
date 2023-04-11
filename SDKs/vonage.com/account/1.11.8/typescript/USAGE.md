<!-- Start SDK Example Usage -->
```typescript
import {
  AccountCtrlGetAccountServicesByAccountIDRequest,
  AccountCtrlGetAccountServicesByAccountIDResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AccountCtrlGetAccountServicesByAccountIDRequest = {
  accountId: 5488.14,
};

sdk.accountCtrlGetAccountServicesByAccountID(req).then((res: AccountCtrlGetAccountServicesByAccountIDResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->