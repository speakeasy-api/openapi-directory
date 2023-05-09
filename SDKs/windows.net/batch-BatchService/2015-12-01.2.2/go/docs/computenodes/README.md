# ComputeNodes

### Available Operations

* [ComputeNodeAddUser](#computenodeadduser) - Adds a user account to the specified compute node.
* [ComputeNodeDeleteUser](#computenodedeleteuser) - Deletes a user account from the specified compute node.
* [ComputeNodeDisableScheduling](#computenodedisablescheduling) - Disable task scheduling of the specified compute node.
* [ComputeNodeEnableScheduling](#computenodeenablescheduling) - Enable task scheduling of the specified compute node.
* [ComputeNodeGet](#computenodeget) - Gets information about the specified compute node.
* [ComputeNodeGetRemoteDesktop](#computenodegetremotedesktop) - Gets the Remote Desktop Protocol file for the specified compute node.
* [ComputeNodeList](#computenodelist) - Lists the compute nodes in the specified pool.
* [ComputeNodeReboot](#computenodereboot) - Restarts the specified compute node.
* [ComputeNodeReimage](#computenodereimage) - Reinstalls the operating system on the specified compute node.
* [ComputeNodeUpdateUser](#computenodeupdateuser) - Updates the password or expiration time of a user account on the specified compute node.
* [PoolRemoveNodes](#poolremovenodes) - Removes compute nodes from the specified pool.

## ComputeNodeAddUser

Adds a user account to the specified compute node.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ComputeNodes.ComputeNodeAddUser(ctx, operations.ComputeNodeAddUserRequest{
        ComputeNodeUser: shared.ComputeNodeUser{
            ExpiryTime: types.MustTimeFromString("2021-11-02T03:00:47.309Z"),
            IsAdmin: sdk.Bool(false),
            Name: "Cassandra Welch",
            Password: "beatae",
        },
        APIVersion: "commodi",
        ClientRequestID: sdk.String("molestiae"),
        NodeID: "modi",
        OcpDate: sdk.String("qui"),
        PoolID: "impedit",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(736918),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ComputeNodeDeleteUser

Deletes a user account from the specified compute node.

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
    res, err := s.ComputeNodes.ComputeNodeDeleteUser(ctx, operations.ComputeNodeDeleteUserRequest{
        APIVersion: "esse",
        ClientRequestID: sdk.String("ipsum"),
        NodeID: "excepturi",
        OcpDate: sdk.String("aspernatur"),
        PoolID: "perferendis",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(324141),
        UserName: "Lia.Cormier",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ComputeNodeDisableScheduling

Disable task scheduling of the specified compute node.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ComputeNodes.ComputeNodeDisableScheduling(ctx, operations.ComputeNodeDisableSchedulingRequest{
        NodeDisableSchedulingParameter: &shared.NodeDisableSchedulingParameter{
            NodeDisableSchedulingOption: shared.NodeDisableSchedulingParameterNodeDisableSchedulingOptionEnumTerminate.ToPointer(),
        },
        APIVersion: "laboriosam",
        ClientRequestID: sdk.String("hic"),
        NodeID: "saepe",
        OcpDate: sdk.String("fuga"),
        PoolID: "in",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(359508),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ComputeNodeEnableScheduling

Enable task scheduling of the specified compute node.

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
    res, err := s.ComputeNodes.ComputeNodeEnableScheduling(ctx, operations.ComputeNodeEnableSchedulingRequest{
        APIVersion: "iste",
        ClientRequestID: sdk.String("iure"),
        NodeID: "saepe",
        OcpDate: sdk.String("quidem"),
        PoolID: "architecto",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(60225),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ComputeNodeGet

Gets information about the specified compute node.

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
    res, err := s.ComputeNodes.ComputeNodeGet(ctx, operations.ComputeNodeGetRequest{
        DollarSelect: sdk.String("reiciendis"),
        APIVersion: "est",
        ClientRequestID: sdk.String("mollitia"),
        NodeID: "laborum",
        OcpDate: sdk.String("dolores"),
        PoolID: "dolorem",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(358152),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeNode != nil {
        // handle response
    }
}
```

## ComputeNodeGetRemoteDesktop

Gets the Remote Desktop Protocol file for the specified compute node.

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
    res, err := s.ComputeNodes.ComputeNodeGetRemoteDesktop(ctx, operations.ComputeNodeGetRemoteDesktopRequest{
        APIVersion: "explicabo",
        ClientRequestID: sdk.String("nobis"),
        NodeID: "enim",
        OcpDate: sdk.String("omnis"),
        PoolID: "nemo",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(325047),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeNodeGetRemoteDesktop200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## ComputeNodeList

Lists the compute nodes in the specified pool.

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
    res, err := s.ComputeNodes.ComputeNodeList(ctx, operations.ComputeNodeListRequest{
        DollarFilter: sdk.String("excepturi"),
        DollarSelect: sdk.String("accusantium"),
        APIVersion: "iure",
        ClientRequestID: sdk.String("culpa"),
        Maxresults: sdk.Int(988374),
        OcpDate: sdk.String("sapiente"),
        PoolID: "architecto",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(652790),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeNodeListResult != nil {
        // handle response
    }
}
```

## ComputeNodeReboot

Restarts the specified compute node.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ComputeNodes.ComputeNodeReboot(ctx, operations.ComputeNodeRebootRequest{
        NodeRebootParameter: &shared.NodeRebootParameter{
            NodeRebootOption: shared.NodeRebootParameterNodeRebootOptionEnumRequeue.ToPointer(),
        },
        APIVersion: "culpa",
        ClientRequestID: sdk.String("consequuntur"),
        NodeID: "repellat",
        OcpDate: sdk.String("mollitia"),
        PoolID: "occaecati",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(253291),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ComputeNodeReimage

Reinstalls the operating system on the specified compute node.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ComputeNodes.ComputeNodeReimage(ctx, operations.ComputeNodeReimageRequest{
        NodeReimageParameter: &shared.NodeReimageParameter{
            NodeReimageOption: shared.NodeReimageParameterNodeReimageOptionEnumTerminate.ToPointer(),
        },
        APIVersion: "quam",
        ClientRequestID: sdk.String("molestiae"),
        NodeID: "velit",
        OcpDate: sdk.String("error"),
        PoolID: "quia",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(338007),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ComputeNodeUpdateUser

Updates the password or expiration time of a user account on the specified compute node.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ComputeNodes.ComputeNodeUpdateUser(ctx, operations.ComputeNodeUpdateUserRequest{
        NodeUpdateUserParameter: shared.NodeUpdateUserParameter{
            ExpiryTime: types.MustTimeFromString("2022-04-29T17:10:10.440Z"),
            Password: "animi",
        },
        APIVersion: "enim",
        ClientRequestID: sdk.String("odit"),
        NodeID: "quo",
        OcpDate: sdk.String("sequi"),
        PoolID: "tenetur",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(368725),
        UserName: "Makayla9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PoolRemoveNodes

Removes compute nodes from the specified pool.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ComputeNodes.PoolRemoveNodes(ctx, operations.PoolRemoveNodesRequest{
        IfMatch: sdk.String("error"),
        IfModifiedSince: sdk.String("temporibus"),
        IfNoneMatch: sdk.String("laborum"),
        IfUnmodifiedSince: sdk.String("quasi"),
        NodeRemoveParameter: shared.NodeRemoveParameter{
            NodeDeallocationOption: shared.NodeRemoveParameterNodeDeallocationOptionEnumRetaineddata.ToPointer(),
            NodeList: []string{
                "vero",
                "nihil",
                "praesentium",
                "voluptatibus",
            },
            ResizeTimeout: sdk.String("ipsa"),
        },
        APIVersion: "omnis",
        ClientRequestID: sdk.String("voluptate"),
        OcpDate: sdk.String("cum"),
        PoolID: "perferendis",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(39187),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
