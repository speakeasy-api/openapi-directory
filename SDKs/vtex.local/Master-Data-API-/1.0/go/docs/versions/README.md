# Versions

## Overview

Master Data documents are versioned. This means that for each change a new version is generated. The `versions` APIs allows to query the versions and also apply the state of a document to the most current version.

### Available Operations

* [Getversion](#getversion) - Get version
* [Listversions](#listversions) - List versions
* [Putversion](#putversion) - Put version

## Getversion

Returns the version of a document.

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
    res, err := s.Versions.Getversion(ctx, operations.GetversionRequest{
        Accept: "application/json",
        ContentType: "application/json",
        DataEntityName: "Client",
        ID: "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e",
        VersionID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getversion != nil {
        // handle response
    }
}
```

## Listversions

Allows to list the versions of a document.

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
    res, err := s.Versions.Listversions(ctx, operations.ListversionsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        DataEntityName: "Client",
        Fields: sdk.String("ad"),
        ID: "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e",
        Load: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listversions != nil {
        // handle response
    }
}
```

## Putversion

Updates document with version values.

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
    res, err := s.Versions.Putversion(ctx, operations.PutversionRequest{
        Accept: "application/json",
        ContentType: "application/json",
        DataEntityName: "Client",
        ID: "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e",
        VersionID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentResponse != nil {
        // handle response
    }
}
```
