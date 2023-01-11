<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AccountRequest, AccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    oAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: AccountRequest = {
  pathParams: {
    accountId: "sit",
  },
};

sdk.accounts.account(req).then((res: AccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->