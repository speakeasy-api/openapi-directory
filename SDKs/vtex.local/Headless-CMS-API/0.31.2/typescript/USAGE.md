<!-- Start SDK Example Usage -->
```typescript
import {
  GetAllContentTypesRequest,
  GetAllContentTypesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAllContentTypesRequest = {
  builderId: "faststore",
};

sdk.pages.getAllContentTypes(req).then((res: GetAllContentTypesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->