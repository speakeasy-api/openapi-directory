<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetIpResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.getIp().then((res: GetIpResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->