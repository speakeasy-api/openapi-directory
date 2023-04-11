<!-- Start SDK Example Usage -->
```typescript
import {
  GetreportstatusbyIDRequest,
  GetreportstatusbyIDResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: GetreportstatusbyIDRequest = {
  accept: "corrupti",
  contentType: "provident",
  reportId: "distinctio",
};

sdk.report.getreportstatusbyID(req).then((res: GetreportstatusbyIDResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->