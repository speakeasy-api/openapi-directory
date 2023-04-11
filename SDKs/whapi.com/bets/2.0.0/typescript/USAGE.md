<!-- Start SDK Example Usage -->
```typescript
import {
  CashinRequest,
  CashinResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CashinRequest = {
  apiKey: "corrupti",
  apiSecret: "provident",
  apiTicket: "distinctio",
  betId: "quibusdam",
  cashInValue: 6027.63,
  cashinBetDelayId: "nulla",
};

sdk.bets.cashin(req).then((res: CashinResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->