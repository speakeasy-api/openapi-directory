<!-- Start SDK Example Usage -->
```typescript
import {
  AddClientPreferencesRequest,
  AddClientPreferencesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: AddClientPreferencesRequest = {
  accept: "corrupti",
  contentType: "provident",
  requestBody: {
    locale: "distinctio",
    optinNewsLetter: false,
  },
  orderFormId: "quibusdam",
};

sdk.cartAttachments.addClientPreferences(req).then((res: AddClientPreferencesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->