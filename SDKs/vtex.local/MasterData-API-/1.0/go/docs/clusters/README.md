# Clusters

## Overview

Lets you know if a particular document is in one or more clusters.

### Available Operations

* [ValidateDocumentbyClusters](#validatedocumentbyclusters) - Validate Document by Clusters

## ValidateDocumentbyClusters

Validate Document by Clusters

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
    res, err := s.Clusters.ValidateDocumentbyClusters(ctx, operations.ValidateDocumentbyClustersRequest{
        Accept: "culpa",
        RequestBody: []interface{}{
            "sapiente",
            "architecto",
            "mollitia",
            "dolorem",
        },
        Acronym: "culpa",
        ID: "2fa94677-3925-41aa-92c3-f5ad019da1ff",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
