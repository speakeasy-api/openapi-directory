# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Headless-CMS-API/0.31.2/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Pages.GetAllContentTypes(ctx, operations.GetAllContentTypesRequest{
        BuilderID: "faststore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllContentTypes200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Pages](docs/pages/README.md)

* [GetAllContentTypes](docs/pages/README.md#getallcontenttypes) - Get all Content Types
* [GetCMSpage](docs/pages/README.md#getcmspage) - Get CMS page
* [GetPagesbyContentType](docs/pages/README.md#getpagesbycontenttype) - Get all CMS pages by Content Type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
