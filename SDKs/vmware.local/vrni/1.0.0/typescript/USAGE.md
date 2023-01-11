<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddApplicationRequest, AddApplicationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AddApplicationRequest = {
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    name: "sit",
  },
};

sdk.applications.addApplication(req).then((res: AddApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->