<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDKIMRequest,
  CreateDKIMResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDKIMRequest = {
  emailProvider: "corrupti",
};

sdk.dkimConfiguration.createDKIM(req).then((res: CreateDKIMResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->