# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/whapi.com/bets/2.0.0/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bets.Cashin(ctx, operations.CashinRequest{
        APIKey: "corrupti",
        APISecret: "provident",
        APITicket: "distinctio",
        BetID: "quibusdam",
        CashInValue: 6027.63,
        CashinBetDelayID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashInResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Bets](docs/bets/README.md)

* [Cashin](docs/bets/README.md#cashin) - Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer
* [GetBetHistory](docs/bets/README.md#getbethistory) - Retrieves the customer’s bet history.
* [GetFreeBets](docs/bets/README.md#getfreebets) - Returns available free bets
* [PlaceComplexBet](docs/bets/README.md#placecomplexbet) - Places a multiple or a complex bet.
* [PlaceSingleBet](docs/bets/README.md#placesinglebet) - Places a single bet
* [ValidateBetslip](docs/bets/README.md#validatebetslip) - Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
