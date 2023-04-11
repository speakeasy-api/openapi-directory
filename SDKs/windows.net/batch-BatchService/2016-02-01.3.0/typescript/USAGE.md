<!-- Start SDK Example Usage -->
```typescript
import {
  AccountListNodeAgentSkusRequest,
  AccountListNodeAgentSkusResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AccountListNodeAgentSkusRequest = {
  dollarFilter: "corrupti",
  apiVersion: "provident",
  clientRequestId: "distinctio",
  maxresults: 844266,
  ocpDate: "unde",
  returnClientRequestId: false,
  timeout: 857946,
};

sdk.accounts.accountListNodeAgentSkus(req).then((res: AccountListNodeAgentSkusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->