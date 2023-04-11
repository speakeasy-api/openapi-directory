<!-- Start SDK Example Usage -->
```typescript
import {
  AutoCompleteRequest,
  AutoCompleteResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: AutoCompleteRequest = {
  accept: "application/json",
  contentType: "application/json",
  productNameContains: "jeans",
};

sdk.autocomplete.autoComplete(req).then((res: AutoCompleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->