<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAdminRequestsUnmatchedNearMissesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.nearMisses.getAdminRequestsUnmatchedNearMisses().then((res: GetAdminRequestsUnmatchedNearMissesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->