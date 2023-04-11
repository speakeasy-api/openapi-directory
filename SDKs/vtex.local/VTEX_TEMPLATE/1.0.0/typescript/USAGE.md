<!-- Start SDK Example Usage -->
```typescript
import {
  CreatePetsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

sdk.pets.createPets().then((res: CreatePetsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->