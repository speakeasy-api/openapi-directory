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

            if (res.dateTimeJsonResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getIp` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `getIpTxt` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `getIpIpv4` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `getIpIpv4Txt` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `getTimezone` - a listing of all timezones.
* `getTimezoneTxt` - a listing of all timezones.
* `getTimezoneArea` - a listing of all timezones available for that area.
* `getTimezoneAreaTxt` - a listing of all timezones available for that area.
* `getTimezoneAreaLocation` - request the current time for a timezone.
* `getTimezoneAreaLocationTxt` - request the current time for a timezone.
* `getTimezoneAreaLocationRegion` - request the current time for a timezone.
* `getTimezoneAreaLocationRegionTxt` - request the current time for a timezone.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
