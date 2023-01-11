<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.accounts.getAccount().then((res: GetAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->