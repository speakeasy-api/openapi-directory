# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/xero.com/xero_bankfeeds/2.9.4/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/xero.com/xero_bankfeeds/2.9.4/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateFeedConnectionsRequest,
  CreateFeedConnectionsResponse
} from "openapi/dist/sdk/models/operations";
import {
  FeedConnectionAccountTypeEnum,
  FeedConnectionStatusEnum,
  ErrorTypeEnum,
  CurrencyCodeEnum,
  CountryCodeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateFeedConnectionsRequest = {
  feedConnections: {
    items: [
      {
        accountId: "079a88ea-276d-41fb-a1f1-366ef3e22921",
        accountName: "Joe's Savings Account",
        accountNumber: "3809087654321500",
        accountToken: "10000123",
        accountType: FeedConnectionAccountTypeEnum.Bank,
        country: CountryCodeEnum.Gb,
        currency: CurrencyCodeEnum.Aud,
        error: {
          detail: "The application has not been configured to use these API endpoints.",
          status: 403,
          title: "Invalid Application",
          type: ErrorTypeEnum.InvalidApplication,
        },
        id: "0d3cf8d-95dc-4466-8dc0-47e6d1197e28",
        status: FeedConnectionStatusEnum.Rejected,
      },
      {
        accountId: "079a88ea-276d-41fb-a1f1-366ef3e22921",
        accountName: "Joe's Savings Account",
        accountNumber: "3809087654321500",
        accountToken: "10000123",
        accountType: FeedConnectionAccountTypeEnum.Bank,
        country: CountryCodeEnum.Gb,
        currency: CurrencyCodeEnum.Aud,
        error: {
          detail: "The application has not been configured to use these API endpoints.",
          status: 403,
          title: "Invalid Application",
          type: ErrorTypeEnum.InvalidApplication,
        },
        id: "0d3cf8d-95dc-4466-8dc0-47e6d1197e28",
        status: FeedConnectionStatusEnum.Rejected,
      },
      {
        accountId: "079a88ea-276d-41fb-a1f1-366ef3e22921",
        accountName: "Joe's Savings Account",
        accountNumber: "3809087654321500",
        accountToken: "10000123",
        accountType: FeedConnectionAccountTypeEnum.Bank,
        country: CountryCodeEnum.Gb,
        currency: CurrencyCodeEnum.Aud,
        error: {
          detail: "The application has not been configured to use these API endpoints.",
          status: 403,
          title: "Invalid Application",
          type: ErrorTypeEnum.InvalidApplication,
        },
        id: "0d3cf8d-95dc-4466-8dc0-47e6d1197e28",
        status: FeedConnectionStatusEnum.Rejected,
      },
    ],
    pagination: {
      itemCount: 2,
      page: 1,
      pageCount: 1,
      pageSize: 10,
    },
  },
  xeroTenantId: "provident",
};

sdk.bankFeeds.createFeedConnections(req).then((res: CreateFeedConnectionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bankFeeds

* `createFeedConnections` - Create one or more new feed connection
* `createStatements` - Creates one or more new statements
* `deleteFeedConnections` - Delete an existing feed connection
* `getFeedConnection` - Retrieve single feed connection based on a unique id provided
* `getFeedConnections` - Searches for feed connections
* `getStatement` - Retrieve single statement based on unique id provided
* `getStatements` - Retrieve all statements
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

