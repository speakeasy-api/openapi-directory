# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Giftcard-API/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateGiftCardRequest{
        Accept: "corrupti",
        ContentType: "provident",
        CreateGiftCardRequest: shared.CreateGiftCardRequest{
            Caption: "rewards program",
            ExpiringDate: "2020-09-01T13:15:30Z",
            MultipleCredits: false,
            MultipleRedemptions: false,
            ProfileID: "1234",
            RelationName: "insert example here",
            RestrictedToOwner: false,
        },
        XVTEXAPIAppKey: "distinctio",
        XVTEXAPIAppToken: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.GiftCard.CreateGiftCard(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### GiftCard

* `CreateGiftCard` - Create GiftCard
* `GetGiftCardbyID` - Get GiftCard by ID
* `GetGiftCardusingJSON` - Get GiftCard using JSON

### Transaction

* `CancelGiftCardTransaction` - Cancel GiftCard Transaction
* `CreateGiftCardTransaction` - Create GiftCard Transaction
* `GetGiftCardTransactionbyID` - Get GiftCard Transaction by ID
* `GetGiftCardTransactions` - Get GiftCard Transactions
* `GetTransactionAuthorizations` - Get Transaction Authorizations
* `GetTransactionCancellations` - Get Transaction Cancellations
* `GetTransactionSettlements` - Get Transaction Settlements
* `SettleGiftCardTransaction` - Settle GiftCard Transaction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
