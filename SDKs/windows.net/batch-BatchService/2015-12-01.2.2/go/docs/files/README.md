# Files

### Available Operations

* [FileDeleteFromComputeNode](#filedeletefromcomputenode) - Deletes the specified task file from the compute node.
* [FileDeleteFromTask](#filedeletefromtask) - Deletes the specified task file from the compute node where the task ran.
* [FileGetFromComputeNode](#filegetfromcomputenode) - Gets the content of the specified task file.
* [FileGetFromTask](#filegetfromtask) - Gets the content of the specified task file.
* [FileGetNodeFilePropertiesFromComputeNode](#filegetnodefilepropertiesfromcomputenode) - Gets the properties of the specified compute node file.
* [FileGetNodeFilePropertiesFromTask](#filegetnodefilepropertiesfromtask) - Gets the properties of the specified task file.
* [FileListFromComputeNode](#filelistfromcomputenode) - Lists all of the files in task directories on the specified compute node.
* [FileListFromTask](#filelistfromtask) - Lists the files in a task's directory on its compute node.

## FileDeleteFromComputeNode

Deletes the specified task file from the compute node.

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
    res, err := s.Files.FileDeleteFromComputeNode(ctx, operations.FileDeleteFromComputeNodeRequest{
        APIVersion: "reprehenderit",
        ClientRequestID: sdk.String("ut"),
        FileName: "maiores",
        NodeID: "dicta",
        OcpDate: sdk.String("corporis"),
        PoolID: "dolore",
        Recursive: sdk.Bool(false),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(480894),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FileDeleteFromTask

Deletes the specified task file from the compute node where the task ran.

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
    res, err := s.Files.FileDeleteFromTask(ctx, operations.FileDeleteFromTaskRequest{
        APIVersion: "dicta",
        ClientRequestID: sdk.String("harum"),
        FileName: "enim",
        JobID: "accusamus",
        OcpDate: sdk.String("commodi"),
        Recursive: sdk.Bool(false),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "repudiandae",
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

## FileGetFromComputeNode

Gets the content of the specified task file.

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
    res, err := s.Files.FileGetFromComputeNode(ctx, operations.FileGetFromComputeNodeRequest{
        IfModifiedSince: sdk.String("ipsum"),
        IfUnmodifiedSince: sdk.String("quidem"),
        APIVersion: "molestias",
        ClientRequestID: sdk.String("excepturi"),
        FileName: "pariatur",
        NodeID: "modi",
        OcpDate: sdk.String("praesentium"),
        OcpRange: sdk.String("rem"),
        PoolID: "voluptates",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(93940),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileGetFromComputeNode200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## FileGetFromTask

Gets the content of the specified task file.

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
    res, err := s.Files.FileGetFromTask(ctx, operations.FileGetFromTaskRequest{
        IfModifiedSince: sdk.String("repudiandae"),
        IfUnmodifiedSince: sdk.String("sint"),
        APIVersion: "veritatis",
        ClientRequestID: sdk.String("itaque"),
        FileName: "incidunt",
        JobID: "enim",
        OcpDate: sdk.String("consequatur"),
        OcpRange: sdk.String("est"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "quibusdam",
        Timeout: sdk.Int(131797),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileGetFromTask200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## FileGetNodeFilePropertiesFromComputeNode

Gets the properties of the specified compute node file.

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
    res, err := s.Files.FileGetNodeFilePropertiesFromComputeNode(ctx, operations.FileGetNodeFilePropertiesFromComputeNodeRequest{
        IfModifiedSince: sdk.String("deserunt"),
        IfUnmodifiedSince: sdk.String("distinctio"),
        APIVersion: "quibusdam",
        ClientRequestID: sdk.String("labore"),
        FileName: "modi",
        NodeID: "qui",
        OcpDate: sdk.String("aliquid"),
        PoolID: "cupiditate",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(552822),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FileGetNodeFilePropertiesFromTask

Gets the properties of the specified task file.

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
    res, err := s.Files.FileGetNodeFilePropertiesFromTask(ctx, operations.FileGetNodeFilePropertiesFromTaskRequest{
        IfModifiedSince: sdk.String("perferendis"),
        IfUnmodifiedSince: sdk.String("magni"),
        APIVersion: "assumenda",
        ClientRequestID: sdk.String("ipsam"),
        FileName: "alias",
        JobID: "fugit",
        OcpDate: sdk.String("dolorum"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "excepturi",
        Timeout: sdk.Int(270008),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FileListFromComputeNode

Lists all of the files in task directories on the specified compute node.

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
    res, err := s.Files.FileListFromComputeNode(ctx, operations.FileListFromComputeNodeRequest{
        DollarFilter: sdk.String("facilis"),
        APIVersion: "tempore",
        ClientRequestID: sdk.String("labore"),
        Maxresults: sdk.Int(962189),
        NodeID: "eum",
        OcpDate: sdk.String("non"),
        PoolID: "eligendi",
        Recursive: sdk.Bool(false),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(576157),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodeFileListResult != nil {
        // handle response
    }
}
```

## FileListFromTask

Lists the files in a task's directory on its compute node.

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
    res, err := s.Files.FileListFromTask(ctx, operations.FileListFromTaskRequest{
        DollarFilter: sdk.String("aliquid"),
        APIVersion: "provident",
        ClientRequestID: sdk.String("necessitatibus"),
        JobID: "sint",
        Maxresults: sdk.Int(638921),
        OcpDate: sdk.String("dolor"),
        Recursive: sdk.Bool(false),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "debitis",
        Timeout: sdk.Int(952749),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodeFileListResult != nil {
        // handle response
    }
}
```
