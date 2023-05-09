# Identity

### Available Operations

* [DeleteConnection](#deleteconnection) - Deletes a connection for this user (i.e. disconnect a tenant)
* [GetConnections](#getconnections) - Retrieves the connections for this user

## DeleteConnection

Override the base server url that include version

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
    res, err := s.Identity.DeleteConnection(ctx, operations.DeleteConnectionRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    }, operations.DeleteConnectionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetConnections

Override the base server url that include version

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
    res, err := s.Identity.GetConnections(ctx, operations.GetConnectionsRequest{
        AuthEventID: sdk.String("cb739205-9293-496f-aa75-96eb10faaa23"),
    }, operations.GetConnectionsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connections != nil {
        // handle response
    }
}
```
