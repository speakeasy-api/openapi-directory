<!-- Start SDK Example Usage -->
```typescript
import {
  GetEndpointsRequest,
  GetEndpointsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetEndpointsRequest = {
  openapi: true,
};

sdk.apiInformation.getEndpoints(req).then((res: GetEndpointsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->