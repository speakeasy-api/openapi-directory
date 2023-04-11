<!-- Start SDK Example Usage -->
```typescript
import {
  UpdateBankAccountRequest,
  UpdateBankAccountResponse,
  UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum,
  UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: UpdateBankAccountRequest = {
  requestBody: {
    accountName: "corrupti",
    accountStatus: UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum.Inactive,
    defaultAccount: UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum.No,
    referenceVersion: 1,
  },
  bankAccountId: "quibusdam",
  xApiKey: "unde",
};

sdk.bankAccounts.updateBankAccount(req).then((res: UpdateBankAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->