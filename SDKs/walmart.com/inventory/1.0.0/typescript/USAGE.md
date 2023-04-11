<!-- Start SDK Example Usage -->
```typescript
import {
  GetInventoryRequest,
  GetInventoryResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetInventoryRequest = {
  wmConsumerChannelType: "corrupti",
  wmQosCorrelationId: "provident",
  wmSecAccessToken: "distinctio",
  wmSvcName: "quibusdam",
  shipNode: "unde",
  sku: "nulla",
};

sdk.inventory.getInventory(req).then((res: GetInventoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->