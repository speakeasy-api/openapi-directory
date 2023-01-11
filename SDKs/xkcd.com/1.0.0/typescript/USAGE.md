<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetInfo0JsonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.getInfo0Json().then((res: GetInfo0JsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->