# Task

### Available Operations

* [AddComment](#addcomment) - Add Comment on a Task
* [EditTask](#edittask) - Update Task
* [GetTask](#gettask) - Retrieve Task
* [Listtasksbyassignee](#listtasksbyassignee) - List tasks
* [NewTask](#newtask) - Create Task

## AddComment

Adds a comment to a given task, filtering by `taskId`.

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
    res, err := s.Task.AddComment(ctx, operations.AddCommentRequest{
        Accept: "application/json",
        AddCommentRequest: shared.AddCommentRequest{
            Text: "corrupti",
        },
        ContentType: "application/json",
        TaskID: "123456abc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddComment200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## EditTask

Updates a given task's status, for example, filtering by `taskId`.

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
    res, err := s.Task.EditTask(ctx, operations.EditTaskRequest{
        Accept: "application/json",
        ContentType: "application/json",
        EditTaskRequest: shared.EditTaskRequest{
            Status: "provident",
        },
        TaskID: "123456abc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditTask200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## GetTask

Retrieves a given task, filtering by `taskId`.

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
    res, err := s.Task.GetTask(ctx, operations.GetTaskRequest{
        Accept: "application/json",
        ContentType: "application/json",
        TaskID: "123456abc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTask200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## Listtasksbyassignee

This endpoint allows you to filter tasks. You can choose between the following filtering options: 

- **Assignees:** using `assignee.email` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?assignee.email={{person@email.com}}&status={{open}}`. 

- **Targets:** using `targetId` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?target.id={{name}}&status={{open}}`. 

- **Paged tasks:** using `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?page={{1}}&perPage={{10}}&status=;{{-Closed}}`. 

- **Context:** using `context`, `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?context={{context}}&page={{1}}&perPage={{10}}&status={{-Closed}}`.

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
    res, err := s.Task.Listtasksbyassignee(ctx, operations.ListtasksbyassigneeRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AssigneeEmail: sdk.String("{{assigneeEmail}}"),
        Context: sdk.String("{{context}}"),
        Page: sdk.String("{{page}}"),
        PerPage: sdk.String("{{desired number per page}}"),
        Status: sdk.String("open"),
        TargetID: sdk.String("{{targetId}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listtasksbyassignee200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## NewTask

Creates a new task in VTEX DO.

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
    res, err := s.Task.NewTask(ctx, operations.NewTaskRequest{
        Accept: "application/json",
        ContentType: "application/json",
        NewTaskRequest: shared.NewTaskRequest{
            Assignee: shared.Assignee{
                Email: "Rosalinda_Mitchell84@hotmail.com",
                ID: "69a674e0-f467-4cc8-b96e-d151a05dfc2d",
                Name: "Emilio Krajcik",
            },
            Context: "esse",
            Description: "totam",
            Domain: "porro",
            DueDate: "dolorum",
            Followers: []shared.Follower{
                shared.Follower{
                    Email: "Lucie53@hotmail.com",
                    ID: "fc816742-cb73-4920-9929-396fea7596eb",
                    Name: "Brenda Wisozk",
                },
            },
            Name: "Ernest Ebert",
            ParentTaskID: "nobis",
            Priority: "enim",
            SurrogateKey: "omnis",
            Target: []shared.Target{
                shared.Target{
                    ID: "5907aff1-a3a2-4fa9-8677-39251aa52c3f",
                    Type: "ipsam",
                    URL: "id",
                },
                shared.Target{
                    ID: "d019da1f-fe78-4f09-bb00-74f15471b5e6",
                    Type: "repudiandae",
                    URL: "quae",
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NewTask200ApplicationJSONAny != nil {
        // handle response
    }
}
```
