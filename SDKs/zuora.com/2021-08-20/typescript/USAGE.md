<!-- Start SDK Example Usage -->
```typescript
import {
  DELETEAccountingCodeRequest,
  DELETEAccountingCodeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DELETEAccountingCodeRequest = {
  zuoraEntityIds: "corrupti",
  zuoraTrackId: "provident",
  acId: "distinctio",
};

sdk.accountingCodes.deleteAccountingCode(req).then((res: DELETEAccountingCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->