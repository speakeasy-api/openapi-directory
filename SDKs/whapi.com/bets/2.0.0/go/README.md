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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CashinRequest{
        APIKey: "corrupti",
        APISecret: "provident",
        APITicket: "distinctio",
        BetID: "quibusdam",
        CashInValue: 6027.63,
        CashinBetDelayID: "nulla",
    }

    ctx := context.Background()
    res, err := s.Bets.Cashin(ctx, req)
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


### Bets

* `Cashin` - Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer
* `GetBetHistory` - Retrieves the customer’s bet history.
* `GetFreeBets` - Returns available free bets
* `PlaceComplexBet` - Places a multiple or a complex bet.
* `PlaceSingleBet` - Places a single bet
* `ValidateBetslip` - Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
