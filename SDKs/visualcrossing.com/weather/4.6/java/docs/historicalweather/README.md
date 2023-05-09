# historicalWeather

### Available Operations

* [getVisualCrossingWebServicesRestServicesWeatherdataHistory](#getvisualcrossingwebservicesrestservicesweatherdatahistory) - Retrieves hourly or daily historical weather records.

## getVisualCrossingWebServicesRestServicesWeatherdataHistory

The weather history data is suitable for retrieving hourly or daily historical weather records.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest req = new GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest() {{
                aggregateHours = "error";
                allowAsynch = false;
                collectStationContributions = false;
                contentType = "deserunt";
                endDateTime = "suscipit";
                includeNormals = false;
                key = "iure";
                locations = "magnam";
                maxDistance = "debitis";
                maxStations = "ipsa";
                shortColumnNames = false;
                startDateTime = "delectus";
                unitGroup = "tempora";
            }};            

            GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse res = sdk.historicalWeather.getVisualCrossingWebServicesRestServicesWeatherdataHistory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
