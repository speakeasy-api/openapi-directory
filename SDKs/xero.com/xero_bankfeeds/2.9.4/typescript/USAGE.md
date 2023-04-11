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