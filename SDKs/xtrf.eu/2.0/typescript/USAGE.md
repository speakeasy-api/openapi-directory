<!-- Start SDK Example Usage -->
```typescript
import {
  BrowseCSVRequest,
  BrowseCSVResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    xAuthAccessToken: "YOUR_API_KEY_HERE",
  },
});

const req: BrowseCSVRequest = {
  additionalOrder: "corrupti",
  secondarySeparator: "provident",
  separator: "distinctio",
  viewId: 844266,
};

sdk.browser.browseCSV(req).then((res: BrowseCSVResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->