<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteConnectionRequest, DeleteConnectionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteConnectionRequest = {
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    id: "sit",
  },
};

sdk.identity.deleteConnection(req).then((res: DeleteConnectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->