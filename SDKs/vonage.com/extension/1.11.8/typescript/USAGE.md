<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ExtensionCtrlGetAccountExtensionByIdRequest, ExtensionCtrlGetAccountExtensionByIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ExtensionCtrlGetAccountExtensionByIdRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  pathParams: {
    accountId: "sit",
    extensionNumber: 14.200000,
  },
};

sdk.extensionCtrlGetAccountExtensionById(req).then((res: ExtensionCtrlGetAccountExtensionByIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->