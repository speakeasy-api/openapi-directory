<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AccountCtrlGetAccountServicesByAccountIdRequest, AccountCtrlGetAccountServicesByAccountIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AccountCtrlGetAccountServicesByAccountIdRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  pathParams: {
    accountId: 74.099998,
  },
};

sdk.accountCtrlGetAccountServicesByAccountId(req).then((res: AccountCtrlGetAccountServicesByAccountIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->