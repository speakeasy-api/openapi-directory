<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateFeedConnectionsRequest, CreateFeedConnectionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateFeedConnectionsRequest = {
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  headers: {
    xeroTenantId: "sit",
  },
  request: {
    items: [
      {
        accountId: "culpa",
        accountName: "expedita",
        accountNumber: "consequuntur",
        accountToken: "dolor",
        accountType: "expedita",
        country: "SO",
        currency: "GGP",
        error: {
          detail: "et",
          status: 2661732831099943416,
          title: "rerum",
          type: "account-not-valid",
        },
        id: "debitis",
        status: "PENDING",
      },
    ],
    pagination: {
      itemCount: 2339563716805116249,
      page: 7144924247938981575,
      pageCount: 161231572858529631,
      pageSize: 7259475919510918339,
    },
  },
};

sdk.bankFeeds.createFeedConnections(req).then((res: CreateFeedConnectionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->