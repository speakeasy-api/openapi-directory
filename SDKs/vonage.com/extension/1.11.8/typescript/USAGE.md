<!-- Start SDK Example Usage -->
```typescript
import {
  ExtensionCtrlGetAccountExtensionByIDRequest,
  ExtensionCtrlGetAccountExtensionByIDResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ExtensionCtrlGetAccountExtensionByIDRequest = {
  accountId: "corrupti",
  extensionNumber: 5928.45,
};

sdk.extensionCtrlGetAccountExtensionByID(req).then((res: ExtensionCtrlGetAccountExtensionByIDResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->