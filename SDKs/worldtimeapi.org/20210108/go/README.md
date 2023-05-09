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

import(
	"context"
	"log"
	"openapi"
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

### [SDK](docs/sdk/README.md)

* [GetIP](docs/sdk/README.md#getip) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [GetIPTxt](docs/sdk/README.md#getiptxt) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [GetIPIpv4](docs/sdk/README.md#getipipv4) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [GetIPIpv4Txt](docs/sdk/README.md#getipipv4txt) - request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.
* [GetTimezone](docs/sdk/README.md#gettimezone) - a listing of all timezones.
* [GetTimezoneTxt](docs/sdk/README.md#gettimezonetxt) - a listing of all timezones.
* [GetTimezoneArea](docs/sdk/README.md#gettimezonearea) - a listing of all timezones available for that area.
* [GetTimezoneAreaTxt](docs/sdk/README.md#gettimezoneareatxt) - a listing of all timezones available for that area.
* [GetTimezoneAreaLocation](docs/sdk/README.md#gettimezonearealocation) - request the current time for a timezone.
* [GetTimezoneAreaLocationTxt](docs/sdk/README.md#gettimezonearealocationtxt) - request the current time for a timezone.
* [GetTimezoneAreaLocationRegion](docs/sdk/README.md#gettimezonearealocationregion) - request the current time for a timezone.
* [GetTimezoneAreaLocationRegionTxt](docs/sdk/README.md#gettimezonearealocationregiontxt) - request the current time for a timezone.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
