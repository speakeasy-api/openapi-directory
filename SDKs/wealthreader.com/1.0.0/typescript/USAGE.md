<!-- Start SDK Example Usage -->
```typescript
import {
  GetEntitiesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.entityData.getEntities().then((res: GetEntitiesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->