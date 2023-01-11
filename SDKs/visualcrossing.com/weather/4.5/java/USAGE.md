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
                    aggregateHours = "expedita";
                    allowAsynch = true;
                    collectStationContributions = false;
                    contentType = "doloribus";
                    endDateTime = "adipisci";
                    includeNormals = true;
                    key = "similique";
                    locations = "omnis";
                    maxDistance = "voluptatem";
                    maxStations = "et";
                    shortColumnNames = false;
                    startDateTime = "est";
                    unitGroup = "expedita";
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