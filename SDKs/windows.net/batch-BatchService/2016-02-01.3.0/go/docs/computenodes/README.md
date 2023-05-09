# ComputeNodes

### Available Operations

* [ComputeNodeAddUser](#computenodeadduser) - Adds a user account to the specified compute node.
* [ComputeNodeDeleteUser](#computenodedeleteuser) - Deletes a user account from the specified compute node.
* [ComputeNodeDisableScheduling](#computenodedisablescheduling) - Disable task scheduling of the specified compute node.
* [ComputeNodeEnableScheduling](#computenodeenablescheduling) - Enable task scheduling of the specified compute node.
* [ComputeNodeGet](#computenodeget) - Gets information about the specified compute node.
* [ComputeNodeGetRemoteDesktop](#computenodegetremotedesktop) - Gets the Remote Desktop Protocol file for the specified compute node.
* [ComputeNodeGetRemoteLoginSettings](#computenodegetremoteloginsettings) - Gets the settings required for remote login to a compute node.
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
            ExpiryTime: types.MustTimeFromString("2022-08-02T15:33:40.440Z"),
            IsAdmin: sdk.Bool(false),
            Name: "Pauline Dibbert",
            Password: sdk.String("esse"),
            SSHPublicKey: sdk.String("ipsum"),
        },
        APIVersion: "excepturi",
        ClientRequestID: sdk.String("aspernatur"),
        NodeID: "perferendis",
        OcpDate: sdk.String("ad"),
        PoolID: "natus",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(149675),
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
        APIVersion: "iste",
        ClientRequestID: sdk.String("dolor"),
        NodeID: "natus",
        OcpDate: sdk.String("laboriosam"),
        PoolID: "hic",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(902599),
        UserName: "Marisa_Kirlin",
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
        APIVersion: "saepe",
        ClientRequestID: sdk.String("quidem"),
        NodeID: "architecto",
        OcpDate: sdk.String("ipsa"),
        PoolID: "reiciendis",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(666767),
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
        APIVersion: "mollitia",
        ClientRequestID: sdk.String("laborum"),
        NodeID: "dolores",
        OcpDate: sdk.String("dolorem"),
        PoolID: "corporis",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(128926),
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
        DollarSelect: sdk.String("nobis"),
        APIVersion: "enim",
        ClientRequestID: sdk.String("omnis"),
        NodeID: "nemo",
        OcpDate: sdk.String("minima"),
        PoolID: "excepturi",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(38425),
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
        APIVersion: "iure",
        ClientRequestID: sdk.String("culpa"),
        NodeID: "doloribus",
        OcpDate: sdk.String("sapiente"),
        PoolID: "architecto",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(652790),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeNodeGetRemoteDesktop200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## ComputeNodeGetRemoteLoginSettings

Gets the settings required for remote login to a compute node.

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
    res, err := s.ComputeNodes.ComputeNodeGetRemoteLoginSettings(ctx, operations.ComputeNodeGetRemoteLoginSettingsRequest{
        APIVersion: "dolorem",
        ClientRequestID: sdk.String("culpa"),
        NodeID: "consequuntur",
        OcpDate: sdk.String("repellat"),
        PoolID: "mollitia",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(581850),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComputeNodeGetRemoteLoginSettingsResult != nil {
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
        DollarFilter: sdk.String("numquam"),
        DollarSelect: sdk.String("commodi"),
        APIVersion: "quam",
        ClientRequestID: sdk.String("molestiae"),
        Maxresults: sdk.Int(244425),
        OcpDate: sdk.String("error"),
        PoolID: "quia",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(338007),
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
        APIVersion: "laborum",
        ClientRequestID: sdk.String("animi"),
        NodeID: "enim",
        OcpDate: sdk.String("odit"),
        PoolID: "quo",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(196582),
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
            NodeReimageOption: shared.NodeReimageParameterNodeReimageOptionEnumRetaineddata.ToPointer(),
        },
        APIVersion: "ipsam",
        ClientRequestID: sdk.String("id"),
        NodeID: "possimus",
        OcpDate: sdk.String("aut"),
        PoolID: "quasi",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(622846),
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
            ExpiryTime: types.MustTimeFromString("2020-12-24T08:13:29.299Z"),
            Password: sdk.String("quasi"),
            SSHPublicKey: sdk.String("reiciendis"),
        },
        APIVersion: "voluptatibus",
        ClientRequestID: sdk.String("vero"),
        NodeID: "nihil",
        OcpDate: sdk.String("praesentium"),
        PoolID: "voluptatibus",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(55714),
        UserName: "Lelah.Klein3",
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
        IfMatch: sdk.String("reprehenderit"),
        IfModifiedSince: sdk.String("ut"),
        IfNoneMatch: sdk.String("maiores"),
        IfUnmodifiedSince: sdk.String("dicta"),
        NodeRemoveParameter: shared.NodeRemoveParameter{
            NodeDeallocationOption: shared.NodeRemoveParameterNodeDeallocationOptionEnumTerminate.ToPointer(),
            NodeList: []string{
                "iusto",
                "dicta",
            },
            ResizeTimeout: sdk.String("harum"),
        },
        APIVersion: "enim",
        ClientRequestID: sdk.String("accusamus"),
        OcpDate: sdk.String("commodi"),
        PoolID: "repudiandae",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(64147),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
