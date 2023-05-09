# FreightValues

### Available Operations

* [CreateUpdateFreightValues](#createupdatefreightvalues) - Create/update freight values
* [FreightValues](#freightvalues) - List freight values

## CreateUpdateFreightValues

Creates or updates the freight values of your store's carriers. Learn more in [Shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127#).

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
    res, err := s.FreightValues.CreateUpdateFreightValues(ctx, operations.CreateUpdateFreightValuesRequest{
        Accept: "repellat",
        ContentType: "mollitia",
        RequestBody: []CreateUpdateFreightValuesCreateUpdateFreightValuesRequest{
            operations.CreateUpdateFreightValuesCreateUpdateFreightValuesRequest{
                AbsoluteMoneyCost: "1.00",
                Country: "BRA",
                MaxVolume: 1000000000,
                OperationType: 1,
                Polygon: "polygon2",
                PricePercent: 10,
                PricePercentByWeight: 253291,
                TimeCost: "2.00:00:00",
                WeightEnd: 1000,
                WeightStart: 1,
                ZipCodeEnd: "1234500",
                ZipCodeStart: "1000000",
            },
            operations.CreateUpdateFreightValuesCreateUpdateFreightValuesRequest{
                AbsoluteMoneyCost: "1.00",
                Country: "BRA",
                MaxVolume: 1000000000,
                OperationType: 1,
                Polygon: "polygon2",
                PricePercent: 10,
                PricePercentByWeight: 414369,
                TimeCost: "2.00:00:00",
                WeightEnd: 1000,
                WeightStart: 1,
                ZipCodeEnd: "1234500",
                ZipCodeStart: "1000000",
            },
            operations.CreateUpdateFreightValuesCreateUpdateFreightValuesRequest{
                AbsoluteMoneyCost: "1.00",
                Country: "BRA",
                MaxVolume: 1000000000,
                OperationType: 1,
                Polygon: "polygon2",
                PricePercent: 10,
                PricePercentByWeight: 466311,
                TimeCost: "2.00:00:00",
                WeightEnd: 1000,
                WeightStart: 1,
                ZipCodeEnd: "1234500",
                ZipCodeStart: "1000000",
            },
        },
        CarrierID: "carrier123",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FreightValues

Lists freight values apointed to your store's carriers, searching by carrier ID and postal code (`cep`).

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
    res, err := s.FreightValues.FreightValues(ctx, operations.FreightValuesRequest{
        Accept: "molestiae",
        ContentType: "velit",
        CarrierID: "carrier-123",
        Cep: "12345000",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FreightValues200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
