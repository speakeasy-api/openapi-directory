<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetFindInteractionsRequest, GetFindInteractionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetFindInteractionsRequest = {
  queryParams: {
    format: "json",
    query: "voluptas",
  },
};

sdk.allFunctions.getFindInteractions(req).then((res: GetFindInteractionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->