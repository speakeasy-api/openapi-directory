<!-- Start SDK Example Usage -->
```typescript
import {
  .,
  PostJsontoxmlResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: . = "corrupti";

sdk.postJsontoxml(req).then((res: PostJsontoxmlResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->