<!-- Start SDK Example Usage -->
```typescript
import {
  GetIpResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.getIp().then((res: GetIpResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->