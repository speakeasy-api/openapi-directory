<!-- Start SDK Example Usage -->
```typescript
import {
  GetVCustomPricesSessionSchemaRequest,
  GetVCustomPricesSessionSchemaResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetVCustomPricesSessionSchemaRequest = {
  accept: "corrupti",
  contentType: "provident",
};

sdk.customPrices.getVCustomPricesSessionSchema(req).then((res: GetVCustomPricesSessionSchemaResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->