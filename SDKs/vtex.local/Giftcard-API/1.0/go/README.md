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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GiftCard.CreateGiftCard(ctx, operations.CreateGiftCardRequest{
        Accept: "corrupti",
        ContentType: "provident",
        CreateGiftCardRequest: shared.CreateGiftCardRequest{
            Caption: "rewards program",
            ExpiringDate: "2020-09-01T13:15:30Z",
            MultipleCredits: sdk.Bool(false),
            MultipleRedemptions: sdk.Bool(false),
            ProfileID: "1234",
            RelationName: "insert example here",
            RestrictedToOwner: sdk.Bool(false),
        },
        XVTEXAPIAppKey: "distinctio",
        XVTEXAPIAppToken: "quibusdam",
    })
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


### [GiftCard](docs/giftcard/README.md)

* [CreateGiftCard](docs/giftcard/README.md#creategiftcard) - Create GiftCard
* [GetGiftCardbyID](docs/giftcard/README.md#getgiftcardbyid) - Get GiftCard by ID
* [GetGiftCardusingJSON](docs/giftcard/README.md#getgiftcardusingjson) - Get GiftCard using JSON

### [Transaction](docs/transaction/README.md)

* [CancelGiftCardTransaction](docs/transaction/README.md#cancelgiftcardtransaction) - Cancel GiftCard Transaction
* [CreateGiftCardTransaction](docs/transaction/README.md#creategiftcardtransaction) - Create GiftCard Transaction
* [GetGiftCardTransactionbyID](docs/transaction/README.md#getgiftcardtransactionbyid) - Get GiftCard Transaction by ID
* [GetGiftCardTransactions](docs/transaction/README.md#getgiftcardtransactions) - Get GiftCard Transactions
* [GetTransactionAuthorizations](docs/transaction/README.md#gettransactionauthorizations) - Get Transaction Authorizations
* [GetTransactionCancellations](docs/transaction/README.md#gettransactioncancellations) - Get Transaction Cancellations
* [GetTransactionSettlements](docs/transaction/README.md#gettransactionsettlements) - Get Transaction Settlements
* [SettleGiftCardTransaction](docs/transaction/README.md#settlegiftcardtransaction) - Settle GiftCard Transaction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
