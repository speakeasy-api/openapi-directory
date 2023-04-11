<!-- Start SDK Example Usage -->
```typescript
import {
  RetrieveattachmentRequest,
  RetrieveattachmentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: RetrieveattachmentRequest = {
  acronym: "corrupti",
  field: "provident",
  fileName: "distinctio",
  id: "quibusdam",
};

sdk.attachments.retrieveattachment(req).then((res: RetrieveattachmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->