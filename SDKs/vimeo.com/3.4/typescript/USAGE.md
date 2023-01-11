<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetEndpointsRequest, GetEndpointsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: GetEndpointsRequest = {
  queryParams: {
    openapi: false,
  },
};

sdk.apiInformation.getEndpoints(req).then((res: GetEndpointsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->