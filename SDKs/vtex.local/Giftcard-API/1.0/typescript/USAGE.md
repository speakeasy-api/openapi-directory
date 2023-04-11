<!-- Start SDK Example Usage -->
```typescript
import {
  CreateGiftCardRequest,
  CreateGiftCardResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: CreateGiftCardRequest = {
  accept: "corrupti",
  contentType: "provident",
  createGiftCardRequest: {
    caption: "rewards program",
    expiringDate: "2020-09-01T13:15:30Z",
    multipleCredits: false,
    multipleRedemptions: false,
    profileId: "1234",
    relationName: "insert example here",
    restrictedToOwner: false,
  },
  xVTEXAPIAppKey: "distinctio",
  xVTEXAPIAppToken: "quibusdam",
};

sdk.giftCard.createGiftCard(req).then((res: CreateGiftCardResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->