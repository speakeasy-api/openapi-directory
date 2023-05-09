# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vonage.com/extension/1.11.8/go
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
    res, err := s.ExtensionCtrlGetAccountExtensionByID(ctx, operations.ExtensionCtrlGetAccountExtensionByIDRequest{
        AccountID: "corrupti",
        ExtensionNumber: 5928.45,
    }, operations.ExtensionCtrlGetAccountExtensionByIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EndUserRouteHalResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [ExtensionCtrlGetAccountExtensionByID](docs/sdk/README.md#extensionctrlgetaccountextensionbyid) - Get extension data by account ID and extension number
* [ExtensionCtrlGetAccountExtensions](docs/sdk/README.md#extensionctrlgetaccountextensions) - Get account extensions data by account ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
