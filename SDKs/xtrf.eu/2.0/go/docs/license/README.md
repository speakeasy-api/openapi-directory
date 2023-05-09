# License

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [GetLicense](#getlicense) - Returns license content.
* [Refresh](#refresh) - Refreshes license content.

## GetLicense

Returns license content.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.License.GetLicense(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLicenseResult != nil {
        // handle response
    }
}
```

## Refresh

Refreshes license content. This method returns OK immediately and license is refreshed asynchronously. It takes a while (usually a few seconds) for the license to be actually refreshed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.License.Refresh(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
