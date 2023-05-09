# Indices

## Overview

Create alternative keys for data entities.

### Available Operations

* [Deleteindexbyname](#deleteindexbyname) - Delete index by name
* [Getindexbyname](#getindexbyname) - Get index by name
* [Getindices](#getindices) - Get indices
* [Putindices](#putindices) - Put indices

## Deleteindexbyname

Delete an index.

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
    res, err := s.Indices.Deleteindexbyname(ctx, operations.DeleteindexbynameRequest{
        ContentType: "application/json",
        DataEntityName: "Client",
        IndexName: "{{index_name}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getindexbyname

Returns an index.

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
    res, err := s.Indices.Getindexbyname(ctx, operations.GetindexbynameRequest{
        ContentType: "application/json",
        DataEntityName: "Client",
        IndexName: "{{index_name}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getindices

Returns the list of indices by data entity.

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
    res, err := s.Indices.Getindices(ctx, operations.GetindicesRequest{
        ContentType: "application/json",
        DataEntityName: "Client",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Putindices

Create an index.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Indices.Putindices(ctx, operations.PutindicesRequest{
        PutindicesRequest: shared.PutindicesRequest{
            Fields: "totam",
            Multiple: false,
            Name: "Lucy Krajcik",
        },
        DataEntityName: "Client",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
