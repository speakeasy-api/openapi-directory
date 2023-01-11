<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateManualAccountRequest, CreateManualAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateManualAccountRequest = {
  request: {
    account: {
      accountName: "sit",
      accountNumber: "voluptas",
      accountType: "culpa",
      address: {
        address1: "expedita",
        address2: "consequuntur",
        address3: "dolor",
        city: "expedita",
        country: "voluptas",
        sourceType: "fugit",
        state: "et",
        street: "nihil",
        type: "UNKNOWN",
        zip: "dicta",
      },
      amountDue: {
        amount: 48.099998,
        currency: "AUD",
      },
      balance: {
        amount: 11.100000,
        currency: "CHF",
      },
      dueDate: "voluptate",
      frequency: "FIRST_DAY_MONTHLY",
      homeValue: {
        amount: 68.099998,
        currency: "HKD",
      },
      includeInNetWorth: "illum",
      memo: "debitis",
      nickname: "vel",
      valuationType: "SYSTEM",
    },
  },
};

sdk.accounts.createManualAccount(req).then((res: CreateManualAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->