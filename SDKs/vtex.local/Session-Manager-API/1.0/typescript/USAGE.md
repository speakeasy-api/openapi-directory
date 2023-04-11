<!-- Start SDK Example Usage -->
```typescript
import {
  GetSegmentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.segment.getSegment().then((res: GetSegmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->