# weatherForecast

### Available Operations

* [getVisualCrossingWebServicesRestServicesWeatherdataForecast](#getvisualcrossingwebservicesrestservicesweatherdataforecast) - Weather Forecast API

## getVisualCrossingWebServicesRestServicesWeatherdataForecast

Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest req = new GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest() {{
                aggregateHours = "at";
                allowAsynch = false;
                contentType = "maiores";
                key = "molestiae";
                locations = "quod";
                sendAsDatasource = false;
                shortColumnNames = false;
                unitGroup = "quod";
            }};            

            GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse res = sdk.weatherForecast.getVisualCrossingWebServicesRestServicesWeatherdataForecast(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
