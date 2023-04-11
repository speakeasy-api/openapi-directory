<!-- Start SDK Example Usage -->
```typescript
import {
  GetFindInteractionsRequest,
  GetFindInteractionsResponse,
  GetFindInteractionsFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetFindInteractionsRequest = {
  format: GetFindInteractionsFormatEnum.Dump,
  query: "provident",
};

sdk.allFunctions.getFindInteractions(req).then((res: GetFindInteractionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->