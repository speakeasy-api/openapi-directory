<!-- Start SDK Example Usage -->
```typescript
import {
  CreateFileAssociationRequest,
  CreateFileAssociationResponse
} from "openapi/dist/sdk/models/operations";
import {
  ObjectTypeEnum,
  ObjectGroupEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateFileAssociationRequest = {
  association: {
    fileId: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    objectGroup: ObjectGroupEnum.Overpayment,
    objectId: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    objectType: ObjectTypeEnum.Current,
  },
  fileId: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
  xeroTenantId: "esse",
};

sdk.files.createFileAssociation(req).then((res: CreateFileAssociationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->