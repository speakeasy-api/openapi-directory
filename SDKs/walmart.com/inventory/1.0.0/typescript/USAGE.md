<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetInventoryRequest, GetInventoryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    basicScheme: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: GetInventoryRequest = {
  queryParams: {
    shipNode: "sit",
    sku: "voluptas",
  },
  headers: {
    authorization: "culpa",
    wmCONSUMERCHANNELTYPE: "expedita",
    wmQOSCORRELATIONID: "consequuntur",
    wmSECACCESSTOKEN: "dolor",
    wmSVCNAME: "expedita",
  },
};

sdk.inventory.getInventory(req).then((res: GetInventoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->