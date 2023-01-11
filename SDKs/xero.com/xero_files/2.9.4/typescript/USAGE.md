<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateFileAssociationRequest, CreateFileAssociationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateFileAssociationRequest = {
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    fileId: "sit",
  },
  headers: {
    xeroTenantId: "voluptas",
  },
  request: {
    fileId: "culpa",
    objectGroup: "Payment",
    objectId: "consequuntur",
    objectType: "Accpay",
  },
};

sdk.files.createFileAssociation(req).then((res: CreateFileAssociationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->