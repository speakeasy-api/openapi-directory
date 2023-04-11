<!-- Start SDK Example Usage -->
```typescript
import {
  GetInfo0JsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.getInfo0Json().then((res: GetInfo0JsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->