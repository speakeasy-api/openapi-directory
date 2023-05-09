# JobSchedules

### Available Operations

* [JobScheduleAdd](#jobscheduleadd) - Adds a job schedule to the specified account.
* [JobScheduleDelete](#jobscheduledelete) - Deletes a job schedule from the specified account.
* [JobScheduleDisable](#jobscheduledisable) - Disables a job schedule.
* [JobScheduleEnable](#jobscheduleenable) - Enables a job schedule.
* [JobScheduleExists](#jobscheduleexists) - Checks the specified job schedule exists.
* [JobScheduleGet](#jobscheduleget) - Gets information about the specified job schedule.
* [JobScheduleList](#jobschedulelist) - Lists all of the job schedules in the specified account.
* [JobSchedulePatch](#jobschedulepatch) - Updates the properties of the specified job schedule.
* [JobScheduleTerminate](#jobscheduleterminate) - Terminates a job schedule.
* [JobScheduleUpdate](#jobscheduleupdate) - Updates the properties of the specified job schedule.

## JobScheduleAdd

Adds a job schedule to the specified account.

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
    res, err := s.JobSchedules.JobScheduleAdd(ctx, operations.JobScheduleAddRequest{
        JobScheduleAddParameter: shared.JobScheduleAddParameter{
            DisplayName: sdk.String("dolorum"),
            ID: "77dfb14c-d66a-4e39-9efb-9ba88f3a6699",
            JobSpecification: shared.JobSpecification{
                CommonEnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Marcia Gutkowski"),
                        Value: sdk.String("labore"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Laurie Mosciski"),
                        Value: sdk.String("vero"),
                    },
                },
                Constraints: &shared.JobConstraints{
                    MaxTaskRetryCount: sdk.Int(135474),
                    MaxWallClockTime: sdk.String("architecto"),
                },
                DisplayName: sdk.String("magnam"),
                JobManagerTask: &shared.JobManagerTask{
                    CommandLine: sdk.String("et"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(569965),
                        MaxWallClockTime: sdk.String("ullam"),
                        RetentionTime: sdk.String("provident"),
                    },
                    DisplayName: sdk.String("quos"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Angie Wisozk"),
                            Value: sdk.String("eum"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Jana Connelly III"),
                            Value: sdk.String("doloribus"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Frederick Schoen"),
                            Value: sdk.String("in"),
                        },
                    },
                    ID: sdk.String("11e5b7fd-2ed0-4289-a1cd-dc692601fb57"),
                    KillJobOnCompletion: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("nam"),
                            FilePath: sdk.String("eaque"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("pariatur"),
                            FilePath: sdk.String("nemo"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    RunExclusive: sdk.Bool(false),
                },
                JobPreparationTask: &shared.JobPreparationTask{
                    CommandLine: sdk.String("voluptatibus"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(16627),
                        MaxWallClockTime: sdk.String("fugiat"),
                        RetentionTime: sdk.String("amet"),
                    },
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Lewis Welch"),
                            Value: sdk.String("dolores"),
                        },
                    },
                    ID: sdk.String("58705320-2c73-4d5f-a9b9-0c28909b3fe4"),
                    RerunOnNodeRebootAfterSuccess: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("dolorum"),
                            FilePath: sdk.String("deleniti"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("pariatur"),
                            FilePath: sdk.String("provident"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("nobis"),
                            FilePath: sdk.String("libero"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    WaitForSuccess: sdk.Bool(false),
                },
                JobReleaseTask: &shared.JobReleaseTask{
                    CommandLine: sdk.String("delectus"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Gene Effertz"),
                            Value: sdk.String("qui"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Mindy Marks"),
                            Value: sdk.String("dignissimos"),
                        },
                    },
                    ID: sdk.String("f3a41006-74eb-4f69-a80d-1ba77a89ebf7"),
                    MaxWallClockTime: sdk.String("ipsum"),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("id"),
                            FilePath: sdk.String("saepe"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("eius"),
                            FilePath: sdk.String("aspernatur"),
                        },
                    },
                    RetentionTime: sdk.String("perferendis"),
                    RunElevated: sdk.Bool(false),
                },
                Metadata: []shared.MetadataItem{
                    shared.MetadataItem{
                        Name: sdk.String("Tomas Hammes"),
                        Value: sdk.String("deserunt"),
                    },
                },
                PoolInfo: &shared.PoolInformation{
                    AutoPoolSpecification: &shared.AutoPoolSpecification{
                        AutoPoolIDPrefix: sdk.String("provident"),
                        KeepAlive: sdk.Bool(false),
                        Pool: &shared.PoolSpecification{
                            ApplicationPackageReferences: []shared.ApplicationPackageReference{
                                shared.ApplicationPackageReference{
                                    ApplicationID: "repellendus",
                                    Version: sdk.String("totam"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "similique",
                                    Version: sdk.String("alias"),
                                },
                            },
                            AutoScaleEvaluationInterval: sdk.String("at"),
                            AutoScaleFormula: sdk.String("quaerat"),
                            CertificateReferences: []shared.CertificateReference{
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                                    StoreName: sdk.String("quod"),
                                    Thumbprint: "officiis",
                                    ThumbprintAlgorithm: "qui",
                                    Visibility: sdk.String("dolorum"),
                                },
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                    StoreName: sdk.String("esse"),
                                    Thumbprint: "harum",
                                    ThumbprintAlgorithm: "iusto",
                                    Visibility: sdk.String("ipsum"),
                                },
                            },
                            DisplayName: sdk.String("quisquam"),
                            EnableAutoScale: sdk.Bool(false),
                            EnableInterNodeCommunication: sdk.Bool(false),
                            MaxTasksPerNode: sdk.Int(947371),
                            Metadata: []shared.MetadataItem{
                                shared.MetadataItem{
                                    Name: sdk.String("Tomas Funk"),
                                    Value: sdk.String("sapiente"),
                                },
                            },
                            OsFamily: sdk.String("totam"),
                            ResizeTimeout: sdk.String("nihil"),
                            StartTask: &shared.StartTask{
                                CommandLine: sdk.String("sit"),
                                EnvironmentSettings: []shared.EnvironmentSetting{
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Jane Kassulke"),
                                        Value: sdk.String("deserunt"),
                                    },
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Tracy Gottlieb"),
                                        Value: sdk.String("maxime"),
                                    },
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Dominic Carroll"),
                                        Value: sdk.String("incidunt"),
                                    },
                                },
                                MaxTaskRetryCount: sdk.Int(132068),
                                ResourceFiles: []shared.ResourceFile{
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("distinctio"),
                                        FilePath: sdk.String("facilis"),
                                    },
                                },
                                RunElevated: sdk.Bool(false),
                                WaitForSuccess: sdk.Bool(false),
                            },
                            TargetDedicated: sdk.Int(396060),
                            TargetOSVersion: sdk.String("quam"),
                            TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                                NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumPack,
                            },
                            VMSize: sdk.String("temporibus"),
                        },
                        PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumJobschedule,
                    },
                    PoolID: sdk.String("neque"),
                },
                Priority: sdk.Int(144847),
                UsesTaskDependencies: sdk.Bool(false),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Ashley Hermiston"),
                    Value: sdk.String("voluptatem"),
                },
            },
            Schedule: shared.Schedule{
                DoNotRunAfter: types.MustTimeFromString("2020-10-05T00:59:28.911Z"),
                DoNotRunUntil: types.MustTimeFromString("2022-10-25T09:42:54.177Z"),
                RecurrenceInterval: sdk.String("saepe"),
                StartWindow: sdk.String("ipsum"),
            },
        },
        APIVersion: "veritatis",
        ClientRequestID: sdk.String("nobis"),
        OcpDate: sdk.String("quos"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(731694),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobScheduleDelete

Deletes a job schedule from the specified account.

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
    res, err := s.JobSchedules.JobScheduleDelete(ctx, operations.JobScheduleDeleteRequest{
        IfMatch: sdk.String("cupiditate"),
        IfModifiedSince: sdk.String("aperiam"),
        IfNoneMatch: sdk.String("delectus"),
        IfUnmodifiedSince: sdk.String("dolorem"),
        APIVersion: "dolore",
        ClientRequestID: sdk.String("labore"),
        JobScheduleID: "adipisci",
        OcpDate: sdk.String("dolorum"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(100294),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobScheduleDisable

Disables a job schedule.

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
    res, err := s.JobSchedules.JobScheduleDisable(ctx, operations.JobScheduleDisableRequest{
        IfMatch: sdk.String("quae"),
        IfModifiedSince: sdk.String("aut"),
        IfNoneMatch: sdk.String("quas"),
        IfUnmodifiedSince: sdk.String("itaque"),
        APIVersion: "consequatur",
        ClientRequestID: sdk.String("est"),
        JobScheduleID: "repellendus",
        OcpDate: sdk.String("porro"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(984330),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobScheduleEnable

Enables a job schedule.

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
    res, err := s.JobSchedules.JobScheduleEnable(ctx, operations.JobScheduleEnableRequest{
        IfMatch: sdk.String("ut"),
        IfModifiedSince: sdk.String("facilis"),
        IfNoneMatch: sdk.String("cupiditate"),
        IfUnmodifiedSince: sdk.String("qui"),
        APIVersion: "quae",
        ClientRequestID: sdk.String("laudantium"),
        JobScheduleID: "odio",
        OcpDate: sdk.String("occaecati"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(977496),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobScheduleExists

Checks the specified job schedule exists.

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
    res, err := s.JobSchedules.JobScheduleExists(ctx, operations.JobScheduleExistsRequest{
        DollarSelect: sdk.String("quisquam"),
        IfMatch: sdk.String("vero"),
        IfModifiedSince: sdk.String("omnis"),
        IfNoneMatch: sdk.String("quis"),
        IfUnmodifiedSince: sdk.String("ipsum"),
        APIVersion: "delectus",
        ClientRequestID: sdk.String("voluptate"),
        JobScheduleID: "consectetur",
        OcpDate: sdk.String("vero"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(949319),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobScheduleGet

Gets information about the specified job schedule.

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
    res, err := s.JobSchedules.JobScheduleGet(ctx, operations.JobScheduleGetRequest{
        DollarExpand: sdk.String("dignissimos"),
        DollarSelect: sdk.String("hic"),
        IfMatch: sdk.String("distinctio"),
        IfModifiedSince: sdk.String("quod"),
        IfNoneMatch: sdk.String("odio"),
        IfUnmodifiedSince: sdk.String("similique"),
        APIVersion: "facilis",
        ClientRequestID: sdk.String("vero"),
        JobScheduleID: "ducimus",
        OcpDate: sdk.String("dolore"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(844550),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudJobSchedule != nil {
        // handle response
    }
}
```

## JobScheduleList

Lists all of the job schedules in the specified account.

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
    res, err := s.JobSchedules.JobScheduleList(ctx, operations.JobScheduleListRequest{
        DollarExpand: sdk.String("illum"),
        DollarFilter: sdk.String("sequi"),
        DollarSelect: sdk.String("natus"),
        APIVersion: "impedit",
        ClientRequestID: sdk.String("aut"),
        Maxresults: sdk.Int(974259),
        OcpDate: sdk.String("exercitationem"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(862310),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudJobScheduleListResult != nil {
        // handle response
    }
}
```

## JobSchedulePatch

Updates the properties of the specified job schedule.

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
    res, err := s.JobSchedules.JobSchedulePatch(ctx, operations.JobSchedulePatchRequest{
        IfMatch: sdk.String("fugit"),
        IfModifiedSince: sdk.String("porro"),
        IfNoneMatch: sdk.String("maiores"),
        IfUnmodifiedSince: sdk.String("doloribus"),
        JobSchedulePatchParameter: shared.JobSchedulePatchParameter{
            JobSpecification: &shared.JobSpecification{
                CommonEnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Kurt Abernathy"),
                        Value: sdk.String("ipsam"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Judy Keebler"),
                        Value: sdk.String("ratione"),
                    },
                },
                Constraints: &shared.JobConstraints{
                    MaxTaskRetryCount: sdk.Int(401132),
                    MaxWallClockTime: sdk.String("laudantium"),
                },
                DisplayName: sdk.String("dicta"),
                JobManagerTask: &shared.JobManagerTask{
                    CommandLine: sdk.String("dolor"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(980700),
                        MaxWallClockTime: sdk.String("quasi"),
                        RetentionTime: sdk.String("ex"),
                    },
                    DisplayName: sdk.String("nulla"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Gordon Willms"),
                            Value: sdk.String("ea"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Lewis Hartmann II"),
                            Value: sdk.String("ea"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Glenn Walter"),
                            Value: sdk.String("eaque"),
                        },
                    },
                    ID: sdk.String("fb008c42-e141-4aac-b66c-8dd6b1442907"),
                    KillJobOnCompletion: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("odio"),
                            FilePath: sdk.String("eius"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("esse"),
                            FilePath: sdk.String("esse"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    RunExclusive: sdk.Bool(false),
                },
                JobPreparationTask: &shared.JobPreparationTask{
                    CommandLine: sdk.String("rem"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(683282),
                        MaxWallClockTime: sdk.String("reprehenderit"),
                        RetentionTime: sdk.String("quidem"),
                    },
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Agnes Hoeger"),
                            Value: sdk.String("praesentium"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Harold Bednar"),
                            Value: sdk.String("neque"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Dallas Sanford"),
                            Value: sdk.String("eos"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Mrs. Virginia McGlynn"),
                            Value: sdk.String("ipsam"),
                        },
                    },
                    ID: sdk.String("23c7e0bc-7178-4e47-96f2-a70c688282aa"),
                    RerunOnNodeRebootAfterSuccess: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("atque"),
                            FilePath: sdk.String("explicabo"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("minima"),
                            FilePath: sdk.String("nisi"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    WaitForSuccess: sdk.Bool(false),
                },
                JobReleaseTask: &shared.JobReleaseTask{
                    CommandLine: sdk.String("fugit"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Norma Christiansen"),
                            Value: sdk.String("atque"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Tamara Vandervort IV"),
                            Value: sdk.String("quod"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Dr. Ignacio Jacobi"),
                            Value: sdk.String("harum"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Luz McClure"),
                            Value: sdk.String("eligendi"),
                        },
                    },
                    ID: sdk.String("0ab3c20c-4f37-489f-9871-f99dd2efd121"),
                    MaxWallClockTime: sdk.String("similique"),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("aliquid"),
                            FilePath: sdk.String("tenetur"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("quae"),
                            FilePath: sdk.String("earum"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("vel"),
                            FilePath: sdk.String("in"),
                        },
                    },
                    RetentionTime: sdk.String("eius"),
                    RunElevated: sdk.Bool(false),
                },
                Metadata: []shared.MetadataItem{
                    shared.MetadataItem{
                        Name: sdk.String("Gerardo Bartoletti"),
                        Value: sdk.String("dicta"),
                    },
                    shared.MetadataItem{
                        Name: sdk.String("Delores Hermiston IV"),
                        Value: sdk.String("qui"),
                    },
                    shared.MetadataItem{
                        Name: sdk.String("Marc Leuschke"),
                        Value: sdk.String("architecto"),
                    },
                },
                PoolInfo: &shared.PoolInformation{
                    AutoPoolSpecification: &shared.AutoPoolSpecification{
                        AutoPoolIDPrefix: sdk.String("omnis"),
                        KeepAlive: sdk.Bool(false),
                        Pool: &shared.PoolSpecification{
                            ApplicationPackageReferences: []shared.ApplicationPackageReference{
                                shared.ApplicationPackageReference{
                                    ApplicationID: "quasi",
                                    Version: sdk.String("at"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "et",
                                    Version: sdk.String("voluptate"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "ipsa",
                                    Version: sdk.String("minima"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "veritatis",
                                    Version: sdk.String("consectetur"),
                                },
                            },
                            AutoScaleEvaluationInterval: sdk.String("adipisci"),
                            AutoScaleFormula: sdk.String("iste"),
                            CertificateReferences: []shared.CertificateReference{
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                                    StoreName: sdk.String("rem"),
                                    Thumbprint: "aut",
                                    ThumbprintAlgorithm: "laudantium",
                                    Visibility: sdk.String("eum"),
                                },
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                                    StoreName: sdk.String("ab"),
                                    Thumbprint: "corrupti",
                                    ThumbprintAlgorithm: "non",
                                    Visibility: sdk.String("voluptatem"),
                                },
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                                    StoreName: sdk.String("occaecati"),
                                    Thumbprint: "numquam",
                                    ThumbprintAlgorithm: "impedit",
                                    Visibility: sdk.String("explicabo"),
                                },
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                                    StoreName: sdk.String("aut"),
                                    Thumbprint: "dignissimos",
                                    ThumbprintAlgorithm: "dicta",
                                    Visibility: sdk.String("maiores"),
                                },
                            },
                            DisplayName: sdk.String("natus"),
                            EnableAutoScale: sdk.Bool(false),
                            EnableInterNodeCommunication: sdk.Bool(false),
                            MaxTasksPerNode: sdk.Int(244651),
                            Metadata: []shared.MetadataItem{
                                shared.MetadataItem{
                                    Name: sdk.String("Tabitha Bayer"),
                                    Value: sdk.String("consequuntur"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Luke Schoen"),
                                    Value: sdk.String("asperiores"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Anna Hahn"),
                                    Value: sdk.String("labore"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Josephine Paucek"),
                                    Value: sdk.String("velit"),
                                },
                            },
                            OsFamily: sdk.String("culpa"),
                            ResizeTimeout: sdk.String("est"),
                            StartTask: &shared.StartTask{
                                CommandLine: sdk.String("recusandae"),
                                EnvironmentSettings: []shared.EnvironmentSetting{
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Chester Kuphal"),
                                        Value: sdk.String("labore"),
                                    },
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Johnathan Ritchie"),
                                        Value: sdk.String("corporis"),
                                    },
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Mack Hettinger"),
                                        Value: sdk.String("aperiam"),
                                    },
                                },
                                MaxTaskRetryCount: sdk.Int(738683),
                                ResourceFiles: []shared.ResourceFile{
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("in"),
                                        FilePath: sdk.String("exercitationem"),
                                    },
                                },
                                RunElevated: sdk.Bool(false),
                                WaitForSuccess: sdk.Bool(false),
                            },
                            TargetDedicated: sdk.Int(937285),
                            TargetOSVersion: sdk.String("facere"),
                            TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                                NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumSpread,
                            },
                            VMSize: sdk.String("doloribus"),
                        },
                        PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumJob,
                    },
                    PoolID: sdk.String("reiciendis"),
                },
                Priority: sdk.Int(697142),
                UsesTaskDependencies: sdk.Bool(false),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Clifford Cartwright"),
                    Value: sdk.String("non"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Heather Kuhn"),
                    Value: sdk.String("consectetur"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Dr. Maryann Howe"),
                    Value: sdk.String("vitae"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Otis Goldner"),
                    Value: sdk.String("voluptas"),
                },
            },
            Schedule: &shared.Schedule{
                DoNotRunAfter: types.MustTimeFromString("2022-09-04T14:12:47.618Z"),
                DoNotRunUntil: types.MustTimeFromString("2021-08-22T12:22:32.426Z"),
                RecurrenceInterval: sdk.String("adipisci"),
                StartWindow: sdk.String("minus"),
            },
        },
        APIVersion: "dolores",
        ClientRequestID: sdk.String("blanditiis"),
        JobScheduleID: "in",
        OcpDate: sdk.String("dolore"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(304468),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobScheduleTerminate

Terminates a job schedule.

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
    res, err := s.JobSchedules.JobScheduleTerminate(ctx, operations.JobScheduleTerminateRequest{
        IfMatch: sdk.String("officiis"),
        IfModifiedSince: sdk.String("temporibus"),
        IfNoneMatch: sdk.String("ullam"),
        IfUnmodifiedSince: sdk.String("adipisci"),
        APIVersion: "cum",
        ClientRequestID: sdk.String("blanditiis"),
        JobScheduleID: "quas",
        OcpDate: sdk.String("hic"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(201517),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobScheduleUpdate

Updates the properties of the specified job schedule.

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
    res, err := s.JobSchedules.JobScheduleUpdate(ctx, operations.JobScheduleUpdateRequest{
        IfMatch: sdk.String("culpa"),
        IfModifiedSince: sdk.String("corrupti"),
        IfNoneMatch: sdk.String("pariatur"),
        IfUnmodifiedSince: sdk.String("totam"),
        JobScheduleUpdateParameter: shared.JobScheduleUpdateParameter{
            JobSpecification: shared.JobSpecification{
                CommonEnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Della Bailey"),
                        Value: sdk.String("reiciendis"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Jaime Quigley"),
                        Value: sdk.String("ab"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Micheal Osinski"),
                        Value: sdk.String("commodi"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Benjamin Hodkiewicz III"),
                        Value: sdk.String("sapiente"),
                    },
                },
                Constraints: &shared.JobConstraints{
                    MaxTaskRetryCount: sdk.Int(895386),
                    MaxWallClockTime: sdk.String("illo"),
                },
                DisplayName: sdk.String("reiciendis"),
                JobManagerTask: &shared.JobManagerTask{
                    CommandLine: sdk.String("perferendis"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(546885),
                        MaxWallClockTime: sdk.String("maiores"),
                        RetentionTime: sdk.String("incidunt"),
                    },
                    DisplayName: sdk.String("sed"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Jana Emard"),
                            Value: sdk.String("quos"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Eddie Goodwin"),
                            Value: sdk.String("ex"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Ethel Towne"),
                            Value: sdk.String("quaerat"),
                        },
                    },
                    ID: sdk.String("45e80ca5-5efd-420e-857e-1858b6a89fbe"),
                    KillJobOnCompletion: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("dolorum"),
                            FilePath: sdk.String("nostrum"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    RunExclusive: sdk.Bool(false),
                },
                JobPreparationTask: &shared.JobPreparationTask{
                    CommandLine: sdk.String("officia"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(676243),
                        MaxWallClockTime: sdk.String("corrupti"),
                        RetentionTime: sdk.String("accusamus"),
                    },
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Louis Grady V"),
                            Value: sdk.String("expedita"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Barbara Koelpin IV"),
                            Value: sdk.String("quas"),
                        },
                    },
                    ID: sdk.String("e5186206-5e90-44f3-b119-4b8abf603a79"),
                    RerunOnNodeRebootAfterSuccess: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("provident"),
                            FilePath: sdk.String("repellendus"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("delectus"),
                            FilePath: sdk.String("voluptates"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("perferendis"),
                            FilePath: sdk.String("est"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("quidem"),
                            FilePath: sdk.String("reprehenderit"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    WaitForSuccess: sdk.Bool(false),
                },
                JobReleaseTask: &shared.JobReleaseTask{
                    CommandLine: sdk.String("facere"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Miss Hubert Hartmann"),
                            Value: sdk.String("quasi"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Mitchell Zboncak"),
                            Value: sdk.String("quidem"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Henry Koepp"),
                            Value: sdk.String("ea"),
                        },
                    },
                    ID: sdk.String("89eee952-6f8d-4986-a881-ead4f0e10125"),
                    MaxWallClockTime: sdk.String("laboriosam"),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("a"),
                            FilePath: sdk.String("molestias"),
                        },
                    },
                    RetentionTime: sdk.String("magnam"),
                    RunElevated: sdk.Bool(false),
                },
                Metadata: []shared.MetadataItem{
                    shared.MetadataItem{
                        Name: sdk.String("Toni Torphy"),
                        Value: sdk.String("adipisci"),
                    },
                    shared.MetadataItem{
                        Name: sdk.String("Tracy Cronin"),
                        Value: sdk.String("quis"),
                    },
                    shared.MetadataItem{
                        Name: sdk.String("Isabel Blick"),
                        Value: sdk.String("eveniet"),
                    },
                    shared.MetadataItem{
                        Name: sdk.String("Meghan Batz IV"),
                        Value: sdk.String("quae"),
                    },
                },
                PoolInfo: &shared.PoolInformation{
                    AutoPoolSpecification: &shared.AutoPoolSpecification{
                        AutoPoolIDPrefix: sdk.String("molestiae"),
                        KeepAlive: sdk.Bool(false),
                        Pool: &shared.PoolSpecification{
                            ApplicationPackageReferences: []shared.ApplicationPackageReference{
                                shared.ApplicationPackageReference{
                                    ApplicationID: "qui",
                                    Version: sdk.String("cum"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "iure",
                                    Version: sdk.String("necessitatibus"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "ratione",
                                    Version: sdk.String("laborum"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "distinctio",
                                    Version: sdk.String("voluptatum"),
                                },
                            },
                            AutoScaleEvaluationInterval: sdk.String("rem"),
                            AutoScaleFormula: sdk.String("aliquam"),
                            CertificateReferences: []shared.CertificateReference{
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                    StoreName: sdk.String("alias"),
                                    Thumbprint: "corporis",
                                    ThumbprintAlgorithm: "perspiciatis",
                                    Visibility: sdk.String("nihil"),
                                },
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                                    StoreName: sdk.String("voluptas"),
                                    Thumbprint: "alias",
                                    ThumbprintAlgorithm: "maiores",
                                    Visibility: sdk.String("reiciendis"),
                                },
                            },
                            DisplayName: sdk.String("dolores"),
                            EnableAutoScale: sdk.Bool(false),
                            EnableInterNodeCommunication: sdk.Bool(false),
                            MaxTasksPerNode: sdk.Int(663866),
                            Metadata: []shared.MetadataItem{
                                shared.MetadataItem{
                                    Name: sdk.String("Dr. Lee Dooley"),
                                    Value: sdk.String("quaerat"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Carla Graham"),
                                    Value: sdk.String("debitis"),
                                },
                            },
                            OsFamily: sdk.String("laudantium"),
                            ResizeTimeout: sdk.String("eum"),
                            StartTask: &shared.StartTask{
                                CommandLine: sdk.String("nemo"),
                                EnvironmentSettings: []shared.EnvironmentSetting{
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Sherri Hauck"),
                                        Value: sdk.String("provident"),
                                    },
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Marion Boyer"),
                                        Value: sdk.String("mollitia"),
                                    },
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Rufus Okuneva"),
                                        Value: sdk.String("accusantium"),
                                    },
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Domingo Herman"),
                                        Value: sdk.String("earum"),
                                    },
                                },
                                MaxTaskRetryCount: sdk.Int(637583),
                                ResourceFiles: []shared.ResourceFile{
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("placeat"),
                                        FilePath: sdk.String("modi"),
                                    },
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("voluptatibus"),
                                        FilePath: sdk.String("molestias"),
                                    },
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("officiis"),
                                        FilePath: sdk.String("sapiente"),
                                    },
                                },
                                RunElevated: sdk.Bool(false),
                                WaitForSuccess: sdk.Bool(false),
                            },
                            TargetDedicated: sdk.Int(764562),
                            TargetOSVersion: sdk.String("vitae"),
                            TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                                NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumUnmapped,
                            },
                            VMSize: sdk.String("tempora"),
                        },
                        PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumJob,
                    },
                    PoolID: sdk.String("inventore"),
                },
                Priority: sdk.Int(147685),
                UsesTaskDependencies: sdk.Bool(false),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Lisa Flatley"),
                    Value: sdk.String("eius"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Wilfred Rutherford"),
                    Value: sdk.String("eum"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Cathy Breitenberg"),
                    Value: sdk.String("earum"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Dr. Terrell Stanton"),
                    Value: sdk.String("maiores"),
                },
            },
            Schedule: shared.Schedule{
                DoNotRunAfter: types.MustTimeFromString("2021-10-20T05:12:41.056Z"),
                DoNotRunUntil: types.MustTimeFromString("2021-11-10T12:47:28.024Z"),
                RecurrenceInterval: sdk.String("dolorem"),
                StartWindow: sdk.String("fugit"),
            },
        },
        APIVersion: "cumque",
        ClientRequestID: sdk.String("fuga"),
        JobScheduleID: "ratione",
        OcpDate: sdk.String("animi"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(898760),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
