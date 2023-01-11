<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAccountRequest, CreateAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearer: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateAccountRequest = {
  pathParams: {
    budgetId: "sit",
  },
  request: {
    account: {
      balance: 2259404117704393152,
      name: "culpa",
      type: "lineOfCredit",
    },
  },
};

sdk.accounts.createAccount(req).then((res: CreateAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->