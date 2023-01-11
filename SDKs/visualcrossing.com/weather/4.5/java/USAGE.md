<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest req = new GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest() {{
                queryParams = new GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams() {{
                    aggregateHours = "sit";
                    allowAsynch = false;
                    collectStationContributions = true;
                    contentType = "expedita";
                    endDateTime = "consequuntur";
                    includeNormals = false;
                    key = "expedita";
                    locations = "voluptas";
                    maxDistance = "fugit";
                    maxStations = "et";
                    shortColumnNames = true;
                    startDateTime = "rerum";
                    unitGroup = "dicta";
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