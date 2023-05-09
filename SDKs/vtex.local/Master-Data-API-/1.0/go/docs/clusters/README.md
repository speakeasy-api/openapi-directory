# Clusters

## Overview

Lets you know if a particular document is in one or more clusters.

### Available Operations

* [Validatedocumentbyclusters](#validatedocumentbyclusters) - Validate document by clusters

## Validatedocumentbyclusters

Check if a document is present in one or more clusters (specific set of field values).

> There is a limit of five rules per request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Clusters.Validatedocumentbyclusters(ctx, operations.ValidatedocumentbyclustersRequest{
        Accept: "application/json",
        RequestBody: "{"foo":"XcoYpSoHZ]","bar":43758,"bike":89177,"a":96366,"b":38344,"name":79172,"prop":"RMUEwn'@)]"}",
        DataEntityName: "Client",
        ID: "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
