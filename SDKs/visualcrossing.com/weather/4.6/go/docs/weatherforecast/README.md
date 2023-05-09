# WeatherForecast

### Available Operations

* [GetVisualCrossingWebServicesRestServicesWeatherdataForecast](#getvisualcrossingwebservicesrestservicesweatherdataforecast) - Weather Forecast API

## GetVisualCrossingWebServicesRestServicesWeatherdataForecast

Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WeatherForecast.GetVisualCrossingWebServicesRestServicesWeatherdataForecast(ctx, operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest{
        AggregateHours: sdk.String("at"),
        AllowAsynch: sdk.Bool(false),
        ContentType: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        Locations: sdk.String("quod"),
        SendAsDatasource: sdk.Bool(false),
        ShortColumnNames: sdk.Bool(false),
        UnitGroup: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
