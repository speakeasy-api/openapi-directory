# timelineWeatherAPI15DayForecastRequest

### Available Operations

* [getVisualCrossingWebServicesRestServicesTimelineLocation](#getvisualcrossingwebservicesrestservicestimelinelocation) - Historical and Forecast Weather API

## getVisualCrossingWebServicesRestServicesTimelineLocation

Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesTimelineLocationRequest;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesTimelineLocationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVisualCrossingWebServicesRestServicesTimelineLocationRequest req = new GetVisualCrossingWebServicesRestServicesTimelineLocationRequest("suscipit", "molestiae") {{
                contentType = "minus";
                include = "placeat";
                lang = "voluptatum";
                unitGroup = "iusto";
            }};            

            GetVisualCrossingWebServicesRestServicesTimelineLocationResponse res = sdk.timelineWeatherAPI15DayForecastRequest.getVisualCrossingWebServicesRestServicesTimelineLocation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
