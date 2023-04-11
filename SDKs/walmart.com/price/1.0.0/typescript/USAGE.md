<!-- Start SDK Example Usage -->
```typescript
import {
  OptCapProgramInPriceRequest,
  OptCapProgramInPriceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: OptCapProgramInPriceRequest = {
  requestBody: {
    subsidyEnrolled: false,
    subsidyPreference: false,
  },
  wmConsumerChannelType: "corrupti",
  wmQosCorrelationId: "provident",
  wmSecAccessToken: "distinctio",
  wmSvcName: "quibusdam",
};

sdk.prices.optCapProgramInPrice(req).then((res: OptCapProgramInPriceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->