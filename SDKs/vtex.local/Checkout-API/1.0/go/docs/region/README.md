# Region

### Available Operations

* [GetSellersByRegion](#getsellersbyregion) - Get sellers by region or address

## GetSellersByRegion

Retrieve a list of sellers that cater to a specific region or address, according to your set up of our [regionalization feature](https://help.vtex.com/en/tutorial/setting-up-price-and-availability-of-skus-by-region--12ne58BmvYsYuGsimmugoc#). Learn more about [Region v2](https://developers.vtex.com/vtex-developer-docs/changelog/region-v2).

To access the list of sellers, you must choose one of the following methods:

1. Send the identification of the list of sellers (`regionId`) as a path parameter through the URL. Or;
2. Send the `country` (3-digit ISO code) and at least one of the two values (`postal Code` or `geo Coordinates`) as query parameters through the URL. For this method, it is also allowed to send both values (`postalCode` or `geoCoordinates`) in the same request.

### Example Usage

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
    res, err := s.Region.GetSellersByRegion(ctx, operations.GetSellersByRegionRequest{
        Accept: "deleniti",
        ContentType: "pariatur",
        Country: "Mongolia",
        GeoCoordinates: []float64{
            -47.924747467041016,
            -47.924747467041016,
            -47.924747467041016,
            -47.924747467041016,
        },
        PostalCode: sdk.String("93532-2212"),
        RegionID: "v2.1BB18CE648B5111D0933734ED83EC783",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSellersByRegion200ApplicationJSONObject != nil {
        // handle response
    }
}
```
