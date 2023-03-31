# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/worldtimeapi.org/20210108/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GetIP(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DateTimeJSONResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `GetIP` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `GetIPTxt` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `GetIPIpv4` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `GetIPIpv4Txt` - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* `GetTimezone` - a listing of all timezones.
* `GetTimezoneTxt` - a listing of all timezones.
* `GetTimezoneArea` - a listing of all timezones available for that area.
* `GetTimezoneAreaTxt` - a listing of all timezones available for that area.
* `GetTimezoneAreaLocation` - request the current time for a timezone.
* `GetTimezoneAreaLocationTxt` - request the current time for a timezone.
* `GetTimezoneAreaLocationRegion` - request the current time for a timezone.
* `GetTimezoneAreaLocationRegionTxt` - request the current time for a timezone.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
