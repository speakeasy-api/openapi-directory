# timelineWeatherAPISingleDateRequest

### Available Operations

* [getVisualCrossingWebServicesRestServicesTimelineLocationStartdate](#getvisualcrossingwebservicesrestservicestimelinelocationstartdate) - Historical and Forecast Weather API

## getVisualCrossingWebServicesRestServicesTimelineLocationStartdate

Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateRequest;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateRequest req = new GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateRequest("perferendis", "ipsam", "repellendus") {{
                contentType = "sapiente";
                include = "quo";
                lang = "odit";
                unitGroup = "at";
            }};            

            GetVisualCrossingWebServicesRestServicesTimelineLocationStartdateResponse res = sdk.timelineWeatherAPISingleDateRequest.getVisualCrossingWebServicesRestServicesTimelineLocationStartdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
