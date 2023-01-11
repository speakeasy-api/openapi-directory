<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { UserCtrlGetUserByIdRequest, UserCtrlGetUserByIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: UserCtrlGetUserByIdRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  pathParams: {
    accountId: "sit",
    userId: 14.200000,
  },
};

sdk.userCtrlGetUserById(req).then((res: UserCtrlGetUserByIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->