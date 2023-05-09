# Tasks

### Available Operations

* [TaskAdd](#taskadd) - Adds a task to the specified job.
* [TaskAddCollection](#taskaddcollection) - Adds a collection of tasks to the specified job.
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
                AffinityID: sdk.String("laboriosam"),
            },
            CommandLine: "sed",
            Constraints: &shared.TaskConstraints{
                MaxTaskRetryCount: sdk.Int(486272),
                MaxWallClockTime: sdk.String("natus"),
                RetentionTime: sdk.String("provident"),
            },
            DependsOn: &shared.TaskDependencies{
                TaskIDRanges: []shared.TaskIDRange{
                    shared.TaskIDRange{
                        End: 983854,
                        Start: 703966,
                    },
                    shared.TaskIDRange{
                        End: 697330,
                        Start: 932080,
                    },
                    shared.TaskIDRange{
                        End: 389548,
                        Start: 601714,
                    },
                },
                TaskIds: []string{
                    "perspiciatis",
                    "hic",
                },
            },
            DisplayName: sdk.String("cum"),
            EnvironmentSettings: []shared.EnvironmentSetting{
                shared.EnvironmentSetting{
                    Name: sdk.String("Alton Goyette"),
                    Value: sdk.String("id"),
                },
            },
            ID: "e6c3d5db-3ade-4bd5-9aea-4c506a8aa94c",
            MultiInstanceSettings: &shared.MultiInstanceSettings{
                CommonResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("fugit"),
                        FileMode: sdk.String("aliquid"),
                        FilePath: sdk.String("magnam"),
                    },
                },
                CoordinationCommandLine: sdk.String("quaerat"),
                NumberOfInstances: 755868,
            },
            ResourceFiles: []shared.ResourceFile{
                shared.ResourceFile{
                    BlobSource: sdk.String("nostrum"),
                    FileMode: sdk.String("officiis"),
                    FilePath: sdk.String("unde"),
                },
                shared.ResourceFile{
                    BlobSource: sdk.String("nulla"),
                    FileMode: sdk.String("error"),
                    FilePath: sdk.String("mollitia"),
                },
                shared.ResourceFile{
                    BlobSource: sdk.String("magnam"),
                    FileMode: sdk.String("nostrum"),
                    FilePath: sdk.String("esse"),
                },
                shared.ResourceFile{
                    BlobSource: sdk.String("corrupti"),
                    FileMode: sdk.String("fuga"),
                    FilePath: sdk.String("facere"),
                },
            },
            RunElevated: sdk.Bool(false),
        },
        APIVersion: "impedit",
        ClientRequestID: sdk.String("quasi"),
        JobID: "deserunt",
        OcpDate: sdk.String("quod"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(385739),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TaskAddCollection

Adds a collection of tasks to the specified job.

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
    res, err := s.Tasks.TaskAddCollection(ctx, operations.TaskAddCollectionRequest{
        TaskAddCollectionParameter: shared.TaskAddCollectionParameter{
            Value: []shared.TaskAddParameter{
                shared.TaskAddParameter{
                    AffinityInfo: &shared.AffinityInformation{
                        AffinityID: sdk.String("voluptatem"),
                    },
                    CommandLine: "facere",
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(901008),
                        MaxWallClockTime: sdk.String("maxime"),
                        RetentionTime: sdk.String("consequatur"),
                    },
                    DependsOn: &shared.TaskDependencies{
                        TaskIDRanges: []shared.TaskIDRange{
                            shared.TaskIDRange{
                                End: 102390,
                                Start: 627161,
                            },
                        },
                        TaskIds: []string{
                            "blanditiis",
                            "quae",
                            "magni",
                            "officiis",
                        },
                    },
                    DisplayName: sdk.String("sed"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Jose Mante"),
                            Value: sdk.String("laudantium"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("James Zemlak III"),
                            Value: sdk.String("earum"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Lee Gibson"),
                            Value: sdk.String("eligendi"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Crystal Terry I"),
                            Value: sdk.String("impedit"),
                        },
                    },
                    ID: "14125b09-60a6-4681-91a4-72af923c5949",
                    MultiInstanceSettings: &shared.MultiInstanceSettings{
                        CommonResourceFiles: []shared.ResourceFile{
                            shared.ResourceFile{
                                BlobSource: sdk.String("laudantium"),
                                FileMode: sdk.String("velit"),
                                FilePath: sdk.String("reiciendis"),
                            },
                            shared.ResourceFile{
                                BlobSource: sdk.String("amet"),
                                FileMode: sdk.String("nemo"),
                                FilePath: sdk.String("ipsa"),
                            },
                            shared.ResourceFile{
                                BlobSource: sdk.String("quisquam"),
                                FileMode: sdk.String("tenetur"),
                                FilePath: sdk.String("quas"),
                            },
                            shared.ResourceFile{
                                BlobSource: sdk.String("molestiae"),
                                FileMode: sdk.String("aliquid"),
                                FilePath: sdk.String("asperiores"),
                            },
                        },
                        CoordinationCommandLine: sdk.String("a"),
                        NumberOfInstances: 749702,
                    },
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("accusantium"),
                            FileMode: sdk.String("dicta"),
                            FilePath: sdk.String("minus"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("commodi"),
                            FileMode: sdk.String("eveniet"),
                            FilePath: sdk.String("porro"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("tempore"),
                            FileMode: sdk.String("quidem"),
                            FilePath: sdk.String("modi"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                },
            },
        },
        APIVersion: "voluptates",
        ClientRequestID: sdk.String("fugit"),
        JobID: "eius",
        OcpDate: sdk.String("sequi"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(758194),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskAddCollectionResult != nil {
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
        IfMatch: sdk.String("asperiores"),
        IfModifiedSince: sdk.String("esse"),
        IfNoneMatch: sdk.String("blanditiis"),
        IfUnmodifiedSince: sdk.String("sint"),
        APIVersion: "repellat",
        ClientRequestID: sdk.String("a"),
        JobID: "animi",
        OcpDate: sdk.String("maiores"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "itaque",
        Timeout: sdk.Int(861591),
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
        DollarExpand: sdk.String("deserunt"),
        DollarSelect: sdk.String("corporis"),
        IfMatch: sdk.String("velit"),
        IfModifiedSince: sdk.String("officiis"),
        IfNoneMatch: sdk.String("enim"),
        IfUnmodifiedSince: sdk.String("officia"),
        APIVersion: "saepe",
        ClientRequestID: sdk.String("eum"),
        JobID: "repudiandae",
        OcpDate: sdk.String("accusantium"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "officia",
        Timeout: sdk.Int(770128),
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
        DollarExpand: sdk.String("quasi"),
        DollarFilter: sdk.String("blanditiis"),
        DollarSelect: sdk.String("eius"),
        APIVersion: "quisquam",
        ClientRequestID: sdk.String("eos"),
        JobID: "nobis",
        Maxresults: sdk.Int(620054),
        OcpDate: sdk.String("minus"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(154389),
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
        DollarSelect: sdk.String("magnam"),
        APIVersion: "reprehenderit",
        ClientRequestID: sdk.String("quod"),
        JobID: "quos",
        OcpDate: sdk.String("corrupti"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "amet",
        Timeout: sdk.Int(473326),
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
        IfMatch: sdk.String("amet"),
        IfModifiedSince: sdk.String("laborum"),
        IfNoneMatch: sdk.String("modi"),
        IfUnmodifiedSince: sdk.String("perferendis"),
        APIVersion: "necessitatibus",
        ClientRequestID: sdk.String("architecto"),
        JobID: "molestias",
        OcpDate: sdk.String("dolore"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "sunt",
        Timeout: sdk.Int(982991),
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
        IfMatch: sdk.String("neque"),
        IfModifiedSince: sdk.String("odit"),
        IfNoneMatch: sdk.String("earum"),
        IfUnmodifiedSince: sdk.String("veniam"),
        TaskUpdateParameter: shared.TaskUpdateParameter{
            Constraints: &shared.TaskConstraints{
                MaxTaskRetryCount: sdk.Int(373106),
                MaxWallClockTime: sdk.String("eaque"),
                RetentionTime: sdk.String("exercitationem"),
            },
        },
        APIVersion: "veniam",
        ClientRequestID: sdk.String("nihil"),
        JobID: "ad",
        OcpDate: sdk.String("nisi"),
        ReturnClientRequestID: sdk.Bool(false),
        TaskID: "tenetur",
        Timeout: sdk.Int(338281),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
