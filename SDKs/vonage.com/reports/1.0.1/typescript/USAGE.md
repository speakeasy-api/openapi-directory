<!-- Start SDK Example Usage -->
```typescript
import {
  GetCallLogsRequest,
  GetCallLogsResponse,
  GetCallLogsDirectionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetCallLogsRequest = {
  accountId: "corrupti",
  destinationUser: "provident",
  direction: GetCallLogsDirectionEnum.Outbound,
  endGte: "quibusdam",
  endLte: "unde",
  from: "nulla",
  page: 5448.83,
  pageSize: 8472.52,
  sourceUser: "vel",
  startGte: "error",
  startLte: "deserunt",
  to: "suscipit",
};

sdk.getCallLogs(req).then((res: GetCallLogsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->