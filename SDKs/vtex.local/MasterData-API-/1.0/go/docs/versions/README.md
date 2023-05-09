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
        Accept: "vel",
        ContentType: "quod",
        Acronym: "officiis",
        ID: "2af7a73c-f3be-4453-b870-b326b5a73429",
        VersionID: "maxime",
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
        Accept: "pariatur",
        ContentType: "soluta",
        Acronym: "dicta",
        ID: "a8422bb6-79d2-4322-b15b-f0cbb1e31b8b",
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
        Accept: "cupiditate",
        ContentType: "aperiam",
        Acronym: "delectus",
        ID: "3443a110-8e0a-4dcf-8b92-1879fce953f7",
        VersionID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Putversion != nil {
        // handle response
    }
}
```
