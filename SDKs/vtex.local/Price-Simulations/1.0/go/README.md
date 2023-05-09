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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomPrices.GetVCustomPricesSessionSchema(ctx, operations.GetVCustomPricesSessionSchemaRequest{
        Accept: "corrupti",
        ContentType: "provident",
    })
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


### [CustomPrices](docs/customprices/README.md)

* [GetVCustomPricesSessionSchema](docs/customprices/README.md#getvcustompricessessionschema) - Get custom prices schema
* [PostVCustomPricesSessionSchema](docs/customprices/README.md#postvcustompricessessionschema) - Create or Update custom prices schema

### [PriceAssociation](docs/priceassociation/README.md)

* [DeleteVCustomPricesRulesPriceAssociationID](docs/priceassociation/README.md#deletevcustompricesrulespriceassociationid) - Disassociate price association by ID
* [GetVCustomPricesRulesPriceAssociationID](docs/priceassociation/README.md#getvcustompricesrulespriceassociationid) - Get price association by ID
* [PostVCustomPricesRules](docs/priceassociation/README.md#postvcustompricesrules) - Create price association
* [PutVCustomPricesRulesPriceAssociationID](docs/priceassociation/README.md#putvcustompricesrulespriceassociationid) - Update price association by ID

### [SessionManagement](docs/sessionmanagement/README.md)

* [PostSessions](docs/sessionmanagement/README.md#postsessions) - Update Order Configuration
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
