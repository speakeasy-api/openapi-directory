# timelineWeatherAPIDateRangeRequest

### Available Operations

* [getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate](#getvisualcrossingwebservicesrestservicestimelinelocationstartdateenddate) - Historical and Forecast Weather API

## getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate

Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRequest;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRequest req = new GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRequest("excepturi", "nisi", "recusandae", "temporibus") {{
                contentType = "ab";
                include = "quis";
                lang = "veritatis";
                unitGroup = "deserunt";
            }};            

            GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateResponse res = sdk.timelineWeatherAPIDateRangeRequest.getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
