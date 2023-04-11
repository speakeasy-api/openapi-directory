<!-- Start SDK Example Usage -->
```typescript
import {
  UserCtrlGetUserByIDRequest,
  UserCtrlGetUserByIDResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: UserCtrlGetUserByIDRequest = {
  accountId: "corrupti",
  userId: 5928.45,
};

sdk.userCtrlGetUserByID(req).then((res: UserCtrlGetUserByIDResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->