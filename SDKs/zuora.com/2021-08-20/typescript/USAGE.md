<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteAccountingCodeRequest, DeleteAccountingCodeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteAccountingCodeRequest = {
  pathParams: {
    acId: "sit",
  },
  headers: {
    zuoraEntityIds: "voluptas",
    zuoraTrackId: "culpa",
  },
};

sdk.accountingCodes.deleteAccountingCode(req).then((res: DeleteAccountingCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->