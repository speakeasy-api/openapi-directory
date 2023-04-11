# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Giftcard-API/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/vtex.local/Giftcard-API/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### giftCard

* `createGiftCard` - Create GiftCard
* `getGiftCardbyID` - Get GiftCard by ID
* `getGiftCardusingJSON` - Get GiftCard using JSON

### transaction

* `cancelGiftCardTransaction` - Cancel GiftCard Transaction
* `createGiftCardTransaction` - Create GiftCard Transaction
* `getGiftCardTransactionbyID` - Get GiftCard Transaction by ID
* `getGiftCardTransactions` - Get GiftCard Transactions
* `getTransactionAuthorizations` - Get Transaction Authorizations
* `getTransactionCancellations` - Get Transaction Cancellations
* `getTransactionSettlements` - Get Transaction Settlements
* `settleGiftCardTransaction` - Settle GiftCard Transaction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

