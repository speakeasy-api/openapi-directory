# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Pricing-API/1.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PriceTables.Getrulesforapricetable(ctx, operations.GetrulesforapricetableRequest{
        Accept: "application/json",
        ContentType: "corrupti",
        PriceTableID: "b2c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getrulesforapricetable200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [PriceTables](docs/pricetables/README.md)

* [Getrulesforapricetable](docs/pricetables/README.md#getrulesforapricetable) - Get rules for a price table
* [Listpricetables](docs/pricetables/README.md#listpricetables) - List price tables
* [Getallpricetablesandrules](docs/pricetables/README.md#getallpricetablesandrules) - Get all price tables and their rules
* [PutPricingPipelineCatalogPriceTableID](docs/pricetables/README.md#putpricingpipelinecatalogpricetableid) - Update rules for a price table

### [PricesAndFixedPrices](docs/pricesandfixedprices/README.md)

* [CreateUpdatePriceOrFixedPrice](docs/pricesandfixedprices/README.md#createupdatepriceorfixedprice) - Create or Update Base Price or Fixed Prices
* [DeletePrice](docs/pricesandfixedprices/README.md#deleteprice) - Delete Price
* [Deletefixedpricesonapricetableortradepolicy](docs/pricesandfixedprices/README.md#deletefixedpricesonapricetableortradepolicy) - Delete Fixed Prices on a price table or trade policy
* [GetComputedPricebypricetable](docs/pricesandfixedprices/README.md#getcomputedpricebypricetable) - Get Computed Price by price table or trade policy
* [GetFixedPrices](docs/pricesandfixedprices/README.md#getfixedprices) - Get Fixed Prices
* [GetFixedPricesonapricetable](docs/pricesandfixedprices/README.md#getfixedpricesonapricetable) - Get Fixed Prices on a price table or trade policy
* [GetPrice](docs/pricesandfixedprices/README.md#getprice) - Get Price
* [Createorupdatefixedpricesonpricetableortradepolicy](docs/pricesandfixedprices/README.md#createorupdatefixedpricesonpricetableortradepolicy) - Create or Update Fixed Prices on a price table or trade policy

### [PricingConfiguration](docs/pricingconfiguration/README.md)

* [GetPricingConfig](docs/pricingconfiguration/README.md#getpricingconfig) - Get Pricing Configuration
* [GetPricingv2Status](docs/pricingconfiguration/README.md#getpricingv2status) - Get Pricing v2 Status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
