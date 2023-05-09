# Infrastructure

## Overview

Infra APIs

### Available Operations

* [GetNode](#getnode) - Show node details
* [ListNodes](#listnodes) - List nodes

## GetNode

Get details of infrastructure nodes. Only admin users can get this information. The proxy id is
required for adding a data source for selecting appropriate proxy node to add the data source.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Infrastructure.GetNode(ctx, operations.GetNodeRequest{
        ID: "c5888098-3dab-4f9e-b3ff-dd9f7f079af4",
    }, operations.GetNodeSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## ListNodes

Get list of infrastructure nodes. Only admin users can retrieve this information.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Infrastructure.ListNodes(ctx, operations.ListNodesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodeListResult != nil {
        // handle response
    }
}
```
