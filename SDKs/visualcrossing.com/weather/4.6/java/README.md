# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
            }}            

            GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse res = sdk.historicalWeather.getVisualCrossingWebServicesRestServicesWeatherdataHistory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### historicalWeather

* `getVisualCrossingWebServicesRestServicesWeatherdataHistory` - Retrieves hourly or daily historical weather records.

### timelineWeatherAPI15DayForecastRequest

* `getVisualCrossingWebServicesRestServicesTimelineLocation` - Historical and Forecast Weather API

### timelineWeatherAPIDateRangeRequest

* `getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate` - Historical and Forecast Weather API

### timelineWeatherAPISingleDateRequest

* `getVisualCrossingWebServicesRestServicesTimelineLocationStartdate` - Historical and Forecast Weather API

### weatherForecast

* `getVisualCrossingWebServicesRestServicesWeatherdataForecast` - Weather Forecast API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
