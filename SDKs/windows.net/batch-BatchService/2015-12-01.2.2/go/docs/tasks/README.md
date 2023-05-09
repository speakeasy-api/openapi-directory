# Tasks

### Available Operations

* [TaskAdd](#taskadd) - Adds a task to the specified job.
* [TaskDelete](#taskdelete) - Deletes a task from the specified job.
* [TaskGet](#taskget) - Gets information about the specified task.
* [TaskList](#tasklist) - Lists all of the tasks that are associated with the specified job.
* [TaskListSubtasks](#tasklistsubtasks) - Lists all of the subtasks that are associated with the specified multi-instance task.
* [TaskTerminate](#taskterminate) - Terminates the specified task.
* [TaskUpdate](#taskupdate) - Updates the properties of the specified task.

## TaskAdd

Adds a task to the specified job.

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
    res, err := s.Tasks.TaskAdd(ctx, operations.TaskAddRequest{
        TaskAddParameter: shared.TaskAddParameter{
            AffinityInfo: &shared.AffinityInformation{
                AffinityID: sdk.String("dicta"),
            },
            CommandLine: "quos",
            Constraints: &shared.TaskConstraints{
                MaxTaskRetryCount: sdk.Int(356315),
                MaxWallClockTime: sdk.String("dolore"),
                RetentionTime: sdk.String("modi"),
            },
            DependsOn: &shared.TaskDependencies{
                TaskIDRanges: []shared.TaskIDRange{
                    shared.TaskIDRange{
                        End: 807419,
                        Start: 265905,
                    },
                    shared.TaskIDRange{
                        End: 163558,
                        Start: 828147,
                    },
                    shared.TaskIDRange{
                        End: 876840,
                        Start: 985109,
                    },
                    shared.TaskIDRange{
                        End: 773711,
                        Start: 783397,
                    },
                },
                TaskIds: []string{
                    "totam",
                    "reiciendis",
                    "ab",
                    "sint",
                },
            },
            DisplayName: sdk.String("nihil"),
            EnvironmentSettings: []shared.EnvironmentSetting{
                shared.EnvironmentSetting{
                    Name: sdk.String("Lydia Douglas"),
                    Value: sdk.String("neque"),
                },
                shared.EnvironmentSetting{
                    Name: sdk.String("Melanie Cruickshank"),
                    Value: sdk.String("distinctio"),
                },
            },
            ID: "408f05e3-d48f-4daf-b13a-1f5fd94259c0",
            MultiInstanceSettings: &shared.MultiInstanceSettings{
                CommonResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("nesciunt"),
                        FilePath: sdk.String("commodi"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("sapiente"),
                        FilePath: sdk.String("consequuntur"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("veniam"),
                        FilePath: sdk.String("debitis"),
                    },
                },
                CoordinationCommandLine: sdk.String("officia"),
                NumberOfInstances: 575062,
            },
            ResourceFiles: []shared.ResourceFile{
                shared.ResourceFile{
                    BlobSource: sdk.String("numquam"),
                    FilePath: sdk.String("tenetur"),
                },
                shared.ResourceFile{
                    BlobSource: sdk.String("adipisci"),
                    FilePath: sdk.String("libero"),
                },
            },
            RunElevated: sdk.Bool(false),
        },
        APIVersion: "in",
        ClientRequestID: sdk.String("minima"),
        JobID: "ex",
        OcpDate: sdk.String("minus"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(68880),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskDelete

Deletes a task from the specified job.

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
    res, err := s.Tasks.TaskDelete(ctx, operations.TaskDeleteRequest{
        IfMatch: sdk.String("beatae"),
        IfModifiedSince: sdk.String("hic"),
        IfNoneMatch: sdk.String("nisi"),
        IfUnmodifiedSince: sdk.String("quisquam"),
        APIVersion: "dolor",
        ClientRequestID: sdk.String("ducimus"),
        JobID: "fuga",
        OcpDate: sdk.String("minima"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "architecto",
        Timeout: sdk.Int(181476),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskGet

Gets information about the specified task.

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
    res, err := s.Tasks.TaskGet(ctx, operations.TaskGetRequest{
        DollarExpand: sdk.String("aliquid"),
        DollarSelect: sdk.String("magni"),
        IfMatch: sdk.String("incidunt"),
        IfModifiedSince: sdk.String("adipisci"),
        IfNoneMatch: sdk.String("praesentium"),
        IfUnmodifiedSince: sdk.String("dolor"),
        APIVersion: "exercitationem",
        ClientRequestID: sdk.String("expedita"),
        JobID: "facilis",
        OcpDate: sdk.String("impedit"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "sit",
        Timeout: sdk.Int(363482),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudTask != nil {
        // handle response
    }
}
```

## TaskList

Lists all of the tasks that are associated with the specified job.

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
    res, err := s.Tasks.TaskList(ctx, operations.TaskListRequest{
        DollarExpand: sdk.String("culpa"),
        DollarFilter: sdk.String("consequuntur"),
        DollarSelect: sdk.String("amet"),
        APIVersion: "deserunt",
        ClientRequestID: sdk.String("modi"),
        JobID: "veniam",
        Maxresults: sdk.Int(800256),
        OcpDate: sdk.String("itaque"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(955569),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudTaskListResult != nil {
        // handle response
    }
}
```

## TaskListSubtasks

Lists all of the subtasks that are associated with the specified multi-instance task.

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
    res, err := s.Tasks.TaskListSubtasks(ctx, operations.TaskListSubtasksRequest{
        DollarSelect: sdk.String("quisquam"),
        APIVersion: "enim",
        ClientRequestID: sdk.String("doloribus"),
        JobID: "assumenda",
        OcpDate: sdk.String("officiis"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "architecto",
        Timeout: sdk.Int(5315),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudTaskListSubtasksResult != nil {
        // handle response
    }
}
```

## TaskTerminate

Terminates the specified task.

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
    res, err := s.Tasks.TaskTerminate(ctx, operations.TaskTerminateRequest{
        IfMatch: sdk.String("culpa"),
        IfModifiedSince: sdk.String("ipsa"),
        IfNoneMatch: sdk.String("nobis"),
        IfUnmodifiedSince: sdk.String("necessitatibus"),
        APIVersion: "quia",
        ClientRequestID: sdk.String("dicta"),
        JobID: "vel",
        OcpDate: sdk.String("perspiciatis"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "debitis",
        Timeout: sdk.Int(354821),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskUpdate

Updates the properties of the specified task.

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
    res, err := s.Tasks.TaskUpdate(ctx, operations.TaskUpdateRequest{
        IfMatch: sdk.String("architecto"),
        IfModifiedSince: sdk.String("accusantium"),
        IfNoneMatch: sdk.String("perferendis"),
        IfUnmodifiedSince: sdk.String("veritatis"),
        TaskUpdateParameter: shared.TaskUpdateParameter{
            Constraints: &shared.TaskConstraints{
                MaxTaskRetryCount: sdk.Int(590585),
                MaxWallClockTime: sdk.String("cumque"),
                RetentionTime: sdk.String("iure"),
            },
        },
        APIVersion: "quibusdam",
        ClientRequestID: sdk.String("quod"),
        JobID: "nemo",
        OcpDate: sdk.String("recusandae"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "velit",
        Timeout: sdk.Int(299153),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
