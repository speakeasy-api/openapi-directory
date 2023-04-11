<!-- Start SDK Example Usage -->
```typescript
import {
  GetrulesforapricetableRequest,
  GetrulesforapricetableResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: GetrulesforapricetableRequest = {
  accept: "application/json",
  contentType: "corrupti",
  priceTableId: "b2c",
};

sdk.priceTables.getrulesforapricetable(req).then((res: GetrulesforapricetableResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->