<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AuthenticateRequest, AuthenticateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AuthenticateRequest = {
  pathParams: {
    username: "sit",
  },
  queryParams: {
    password: "voluptas",
  },
};

sdk.account.authenticate(req).then((res: AuthenticateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->