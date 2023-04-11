<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAccountRequest,
  CreateAccountResponse
} from "openapi/dist/sdk/models/operations";
import {
  AccountTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAccountRequest = {
  postAccountWrapper: {
    account: {
      balance: 548814,
      name: "provident",
      type: AccountTypeEnum.StudentLoan,
    },
  },
  budgetId: "quibusdam",
};

sdk.accounts.createAccount(req).then((res: CreateAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->