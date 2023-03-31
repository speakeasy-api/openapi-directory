# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Price-Simulations/1.0/go
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

    req := operations.GetVCustomPricesSessionSchemaRequest{
        Accept: "corrupti",
        ContentType: "provident",
    }

    ctx := context.Background()
    res, err := s.CustomPrices.GetVCustomPricesSessionSchema(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestBody != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### CustomPrices

* `GetVCustomPricesSessionSchema` - Get custom prices schema
* `PostVCustomPricesSessionSchema` - Create or Update custom prices schema

### PriceAssociation

* `DeleteVCustomPricesRulesPriceAssociationID` - Disassociate price association by ID
* `GetVCustomPricesRulesPriceAssociationID` - Get price association by ID
* `PostVCustomPricesRules` - Create price association
* `PutVCustomPricesRulesPriceAssociationID` - Update price association by ID

### SessionManagement

* `PostSessions` - Update Order Configuration
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
