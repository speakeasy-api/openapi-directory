<!-- Start SDK Example Usage -->
```typescript
import {
  shared.ApplicationRequest,
  AddApplicationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.ApplicationRequest = {
  name: "corrupti",
};

sdk.applications.addApplication(req).then((res: AddApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->