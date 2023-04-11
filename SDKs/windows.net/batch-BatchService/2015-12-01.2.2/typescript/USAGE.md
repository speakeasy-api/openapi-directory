<!-- Start SDK Example Usage -->
```typescript
import {
  ApplicationGetRequest,
  ApplicationGetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ApplicationGetRequest = {
  apiVersion: "corrupti",
  applicationId: "provident",
  clientRequestId: "distinctio",
  ocpDate: "quibusdam",
  returnClientRequestId: false,
  timeout: 602763,
};

sdk.applications.applicationGet(req).then((res: ApplicationGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->