<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CashinRequest, CashinResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CashinRequest = {
  pathParams: {
    betId: "sit",
  },
  queryParams: {
    cashInValue: 14.200000,
    cashinBetDelayId: "expedita",
  },
  headers: {
    apiKey: "consequuntur",
    apiSecret: "dolor",
    apiTicket: "expedita",
  },
};

sdk.bets.cashin(req).then((res: CashinResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->