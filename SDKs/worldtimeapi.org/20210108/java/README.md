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
import org.openapis.openapi.models.operations.GetIpResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIpResponse res = sdk.getIp();

            if (res.dateTimeJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getIp](docs/sdk/README.md#getip) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getIpTxt](docs/sdk/README.md#getiptxt) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getIpIpv4](docs/sdk/README.md#getipipv4) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getIpIpv4Txt](docs/sdk/README.md#getipipv4txt) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [getTimezone](docs/sdk/README.md#gettimezone) - a listing of all timezones.
* [getTimezoneTxt](docs/sdk/README.md#gettimezonetxt) - a listing of all timezones.
* [getTimezoneArea](docs/sdk/README.md#gettimezonearea) - a listing of all timezones available for that area.
* [getTimezoneAreaTxt](docs/sdk/README.md#gettimezoneareatxt) - a listing of all timezones available for that area.
* [getTimezoneAreaLocation](docs/sdk/README.md#gettimezonearealocation) - request the current time for a timezone.
* [getTimezoneAreaLocationTxt](docs/sdk/README.md#gettimezonearealocationtxt) - request the current time for a timezone.
* [getTimezoneAreaLocationRegion](docs/sdk/README.md#gettimezonearealocationregion) - request the current time for a timezone.
* [getTimezoneAreaLocationRegionTxt](docs/sdk/README.md#gettimezonearealocationregiontxt) - request the current time for a timezone.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
