<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest;
import org.openapis.openapi.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest req = new GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest() {{
                queryParams = new GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams() {{
                    aggregateHours = "corrupti";
                    allowAsynch = false;
                    collectStationContributions = false;
                    contentType = "provident";
                    endDateTime = "distinctio";
                    includeNormals = false;
                    key = "quibusdam";
                    locations = "unde";
                    maxDistance = "nulla";
                    maxStations = "corrupti";
                    shortColumnNames = false;
                    startDateTime = "illum";
                    unitGroup = "vel";
                }};
            }};            

            GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse res = sdk.historicalWeather.getVisualCrossingWebServicesRestServicesWeatherdataHistory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->