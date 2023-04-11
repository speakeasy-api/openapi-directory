<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteConnectionRequest,
  DeleteConnectionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteConnectionRequest = {
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.identity.deleteConnection(req).then((res: DeleteConnectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->