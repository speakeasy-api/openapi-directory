<!-- Start SDK Example Usage -->
```typescript
import {
  AffiliationByIdRequest,
  AffiliationByIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: AffiliationByIdRequest = {
  accept: "application/json",
  contentType: "application/json",
  xPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
  xPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
  affiliationId: "e046d326-5421-45ab-95ae-f13d37f260b5",
};

sdk.configuration.affiliationById(req).then((res: AffiliationByIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->