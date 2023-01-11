<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetCallLogsRequest, GetCallLogsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetCallLogsRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  pathParams: {
    accountId: "sit",
  },
  queryParams: {
    destinationUser: "voluptas",
    direction: "Outbound",
    endGte: "expedita",
    endLte: "consequuntur",
    from: "dolor",
    page: 67.199997,
    pageSize: 88.099998,
    sourceUser: "nihil",
    startGte: "rerum",
    startLte: "dicta",
    to: "debitis",
  },
};

sdk.getCallLogs(req).then((res: GetCallLogsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->