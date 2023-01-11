<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostJsontoxmlRequest, PostJsontoxmlResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostJsontoxmlRequest = {
  request: "sit",
};

sdk.postJsontoxml(req).then((res: PostJsontoxmlResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->