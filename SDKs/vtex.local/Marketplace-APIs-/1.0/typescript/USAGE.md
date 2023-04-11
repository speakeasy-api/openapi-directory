<!-- Start SDK Example Usage -->
```typescript
import {
  GetSuggestionRequest,
  GetSuggestionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: GetSuggestionRequest = {
  accept: "corrupti",
  contentType: "provident",
  accountName: "distinctio",
  sellerId: "quibusdam",
  sellerSkuId: "unde",
};

sdk.getSuggestions.getSuggestion(req).then((res: GetSuggestionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->