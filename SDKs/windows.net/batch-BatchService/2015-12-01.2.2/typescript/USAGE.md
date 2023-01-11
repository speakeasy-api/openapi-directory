<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ApplicationGetRequest, ApplicationGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ApplicationGetRequest = {
  pathParams: {
    applicationId: "sit",
  },
  queryParams: {
    apiVersion: "voluptas",
    timeout: 6050128673802995827,
  },
  headers: {
    clientRequestId: "expedita",
    ocpDate: "consequuntur",
    returnClientRequestId: false,
  },
};

sdk.applications.applicationGet(req).then((res: ApplicationGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->