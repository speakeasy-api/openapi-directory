<!-- Start SDK Example Usage -->
```typescript
import {
  ActivateDockRequest,
  ActivateDockResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: ActivateDockRequest = {
  accept: "corrupti",
  contentType: "provident",
  dockId: "distinctio",
};

sdk.docks.activateDock(req).then((res: ActivateDockResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->