# Files

### Available Operations

* [FileDeleteFromComputeNode](#filedeletefromcomputenode) - Deletes the specified task file from the compute node.
* [FileDeleteFromTask](#filedeletefromtask) - Deletes the specified task file from the compute node where the task ran.
* [FileGetFromComputeNode](#filegetfromcomputenode) - Returns the content of the specified task file.
* [FileGetFromTask](#filegetfromtask) - Returns the content of the specified task file.
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
        APIVersion: "ipsum",
        ClientRequestID: sdk.String("quidem"),
        FileName: "molestias",
        NodeID: "excepturi",
        OcpDate: sdk.String("pariatur"),
        PoolID: "modi",
        Recursive: sdk.Bool(false),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(508969),
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
        APIVersion: "rem",
        ClientRequestID: sdk.String("voluptates"),
        FileName: "quasi",
        JobID: "repudiandae",
        OcpDate: sdk.String("sint"),
        Recursive: sdk.Bool(false),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "veritatis",
        Timeout: sdk.Int(929297),
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

Returns the content of the specified task file.

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
        IfModifiedSince: sdk.String("incidunt"),
        IfUnmodifiedSince: sdk.String("enim"),
        APIVersion: "consequatur",
        ClientRequestID: sdk.String("est"),
        FileName: "quibusdam",
        NodeID: "explicabo",
        OcpDate: sdk.String("deserunt"),
        OcpRange: sdk.String("distinctio"),
        PoolID: "quibusdam",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(289406),
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

Returns the content of the specified task file.

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
        IfModifiedSince: sdk.String("modi"),
        IfUnmodifiedSince: sdk.String("qui"),
        APIVersion: "aliquid",
        ClientRequestID: sdk.String("cupiditate"),
        FileName: "quos",
        JobID: "perferendis",
        OcpDate: sdk.String("magni"),
        OcpRange: sdk.String("assumenda"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "ipsam",
        Timeout: sdk.Int(4695),
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
        IfModifiedSince: sdk.String("fugit"),
        IfUnmodifiedSince: sdk.String("dolorum"),
        APIVersion: "excepturi",
        ClientRequestID: sdk.String("tempora"),
        FileName: "facilis",
        NodeID: "tempore",
        OcpDate: sdk.String("labore"),
        PoolID: "delectus",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(433288),
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
        IfModifiedSince: sdk.String("non"),
        IfUnmodifiedSince: sdk.String("eligendi"),
        APIVersion: "sint",
        ClientRequestID: sdk.String("aliquid"),
        FileName: "provident",
        JobID: "necessitatibus",
        OcpDate: sdk.String("sint"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "officia",
        Timeout: sdk.Int(223081),
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
        DollarFilter: sdk.String("debitis"),
        APIVersion: "a",
        ClientRequestID: sdk.String("dolorum"),
        Maxresults: sdk.Int(447125),
        NodeID: "in",
        OcpDate: sdk.String("illum"),
        PoolID: "maiores",
        Recursive: sdk.Bool(false),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(699479),
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
        DollarFilter: sdk.String("dicta"),
        APIVersion: "magnam",
        ClientRequestID: sdk.String("cumque"),
        JobID: "facere",
        Maxresults: sdk.Int(411820),
        OcpDate: sdk.String("aliquid"),
        Recursive: sdk.Bool(false),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "laborum",
        Timeout: sdk.Int(881104),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodeFileListResult != nil {
        // handle response
    }
}
```
