<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { UpdateBankAccountRequest, UpdateBankAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: UpdateBankAccountRequest = {
  security: {
    apiSecretKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    bankAccountId: "sit",
  },
  headers: {
    xApiKey: "voluptas",
  },
  request: "culpa",
};

sdk.bankAccounts.updateBankAccount(req).then((res: UpdateBankAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->