# TasksClassic

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [AddFile](#addfile) - Adds files to a given task.
* [Delete14](#delete14) - Removes a task.
* [GetContacts1](#getcontacts1) - Returns contacts of a given task.
* [GetCustomFields7](#getcustomfields7) - Returns custom fields of a given task.
* [GetDates3](#getdates3) - Returns dates of a given task.
* [GetInstructions2](#getinstructions2) - Returns instructions of a given task.
* [GetProgress](#getprogress) - Returns progress of a given task.
* [GetTaskFiles](#gettaskfiles) - Returns lists of files of a given task.
* [Start1](#start1) - Starts a task.
* [UpdateClientTaskPONumber](#updateclienttaskponumber) - Updates Client Task PO Number of a given task.
* [UpdateContacts1](#updatecontacts1) - Updates contacts of a given task.
* [UpdateCustomFields5](#updatecustomfields5) - Updates custom fields of a given task.
* [UpdateDates2](#updatedates2) - Updates dates of a given task.
* [UpdateInstructions3](#updateinstructions3) - Updates instructions of a given task.
* [UpdateName](#updatename) - Updates name of a given task.

## AddFile

Adds files to a given task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.AddFile(ctx, operations.AddFileRequest{
        FileDTO: shared.FileDTO{
            Content: sdk.String("impedit"),
            Name: sdk.String("Sonia Wiegand"),
            Token: sdk.String("maiores"),
            URL: sdk.String("alias"),
        },
        TaskID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Delete14

Removes a task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.Delete14(ctx, operations.Delete14Request{
        ForceJobsRemoval: sdk.Bool(false),
        RemoveExternalProjects: sdk.Bool(false),
        RemoveFilesFromDisc: sdk.Bool(false),
        TaskID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetContacts1

Returns contacts of a given task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.GetContacts1(ctx, operations.GetContacts1Request{
        TaskID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactsDTO != nil {
        // handle response
    }
}
```

## GetCustomFields7

Returns custom fields of a given task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.GetCustomFields7(ctx, operations.GetCustomFields7Request{
        TaskID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomFieldsDTO != nil {
        // handle response
    }
}
```

## GetDates3

Returns dates of a given task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.GetDates3(ctx, operations.GetDates3Request{
        TaskID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectDatesDTO != nil {
        // handle response
    }
}
```

## GetInstructions2

Returns instructions of a given task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.GetInstructions2(ctx, operations.GetInstructions2Request{
        TaskID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstructionsDTO != nil {
        // handle response
    }
}
```

## GetProgress

Returns progress of a given task. Progress contains information about task's status (ie. opened or ready) and current phase (ie. translation). Workflow phase is defined as the first one which contains not ready jobs (ie. opened or started). When no such job exists then workflow phase is not included.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.GetProgress(ctx, operations.GetProgressRequest{
        TaskID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskProgressDTO != nil {
        // handle response
    }
}
```

## GetTaskFiles

Returns several lists of files for a given task: input files divided by type, output files, bundles, files per job, preview files.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.GetTaskFiles(ctx, operations.GetTaskFilesRequest{
        TaskID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskFilesDTO != nil {
        // handle response
    }
}
```

## Start1

Starts a task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.Start1(ctx, operations.Start1Request{
        TaskID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateClientTaskPONumber

Updates Client Task PO Number of a given task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.UpdateClientTaskPONumber(ctx, operations.UpdateClientTaskPONumberRequest{
        StringDTO: shared.StringDTO{
            Value: sdk.String("in"),
        },
        TaskID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringDTO != nil {
        // handle response
    }
}
```

## UpdateContacts1

Updates contacts of a given task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.UpdateContacts1(ctx, operations.UpdateContacts1Request{
        ContactsDTO: shared.ContactsDTO{
            AdditionalIds: []int64{
                203621,
            },
            PrimaryID: sdk.Int64(876649),
            SendBackToID: sdk.Int64(566312),
        },
        TaskID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactsDTO != nil {
        // handle response
    }
}
```

## UpdateCustomFields5

Updates custom fields of a given task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.UpdateCustomFields5(ctx, operations.UpdateCustomFields5Request{
        RequestBody: []shared.CustomFieldDTO{
            shared.CustomFieldDTO{
                Key: sdk.String("impedit"),
                Name: sdk.String("Eva Carroll"),
                Type: shared.CustomFieldDTOTypeEnumCheckbox.ToPointer(),
                Value: map[string]interface{}{
                    "error": "vel",
                },
            },
        },
        TaskID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomFieldsDTO != nil {
        // handle response
    }
}
```

## UpdateDates2

Updates dates of a given task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.UpdateDates2(ctx, operations.UpdateDates2Request{
        ProjectDatesDTO: shared.ProjectDatesDTO{
            ActualDeliveryDate: &shared.TimeDTO{
                Value: sdk.Int64(664197),
            },
            ActualStartDate: &shared.TimeDTO{
                Value: sdk.Int64(388169),
            },
            Deadline: &shared.TimeDTO{
                Value: sdk.Int64(401688),
            },
            StartDate: &shared.TimeDTO{
                Value: sdk.Int64(555679),
            },
        },
        TaskID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectDatesDTO != nil {
        // handle response
    }
}
```

## UpdateInstructions3

Updates instructions of a given task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.UpdateInstructions3(ctx, operations.UpdateInstructions3Request{
        InstructionsDTO: shared.InstructionsDTO{
            ForProvider: sdk.String("ullam"),
            FromCustomer: sdk.String("quae"),
            Internal: sdk.String("similique"),
            Notes: sdk.String("incidunt"),
            PaymentNoteForCustomer: sdk.String("quam"),
            PaymentNoteForVendor: sdk.String("magni"),
        },
        TaskID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstructionsDTO != nil {
        // handle response
    }
}
```

## UpdateName

Updates name of a given task.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TasksClassic.UpdateName(ctx, operations.UpdateNameRequest{
        StringDTO: shared.StringDTO{
            Value: sdk.String("delectus"),
        },
        TaskID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StringDTO != nil {
        // handle response
    }
}
```
