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
            DisplayName: sdk.String("non"),
            ID: "95efb9ba-88f3-4a66-9970-74ba4469b6e2",
            JobSpecification: shared.JobSpecification{
                CommonEnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Frances Marks"),
                        Value: sdk.String("quos"),
                    },
                },
                Constraints: &shared.JobConstraints{
                    MaxTaskRetryCount: sdk.Int(574325),
                    MaxWallClockTime: sdk.String("accusantium"),
                },
                DisplayName: sdk.String("mollitia"),
                JobManagerTask: &shared.JobManagerTask{
                    CommandLine: sdk.String("reiciendis"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(652103),
                        MaxWallClockTime: sdk.String("ad"),
                        RetentionTime: sdk.String("eum"),
                    },
                    DisplayName: sdk.String("dolor"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Vivian Boyle"),
                            Value: sdk.String("debitis"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Jasmine Lind"),
                            Value: sdk.String("architecto"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Elvira Herman"),
                            Value: sdk.String("repellat"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Louis Turner Sr."),
                            Value: sdk.String("praesentium"),
                        },
                    },
                    ID: sdk.String("921cddc6-9260-41fb-976b-0d5f0d30c5fb"),
                    KillJobOnCompletion: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("dolores"),
                            FileMode: sdk.String("quis"),
                            FilePath: sdk.String("totam"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("dignissimos"),
                            FileMode: sdk.String("eaque"),
                            FilePath: sdk.String("quis"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("nesciunt"),
                            FileMode: sdk.String("eos"),
                            FilePath: sdk.String("perferendis"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    RunExclusive: sdk.Bool(false),
                },
                JobPreparationTask: &shared.JobPreparationTask{
                    CommandLine: sdk.String("dolores"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(793698),
                        MaxWallClockTime: sdk.String("quam"),
                        RetentionTime: sdk.String("dolor"),
                    },
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Mindy Walter"),
                            Value: sdk.String("perspiciatis"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Robyn Cruickshank"),
                            Value: sdk.String("eaque"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Jean Ferry"),
                            Value: sdk.String("modi"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Omar Leuschke"),
                            Value: sdk.String("nobis"),
                        },
                    },
                    ID: sdk.String("bf486333-23f9-4b77-b3a4-100674ebf692"),
                    RerunOnNodeRebootAfterSuccess: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("sit"),
                            FileMode: sdk.String("fugiat"),
                            FilePath: sdk.String("ab"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("soluta"),
                            FileMode: sdk.String("dolorum"),
                            FilePath: sdk.String("iusto"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("voluptate"),
                            FileMode: sdk.String("dolorum"),
                            FilePath: sdk.String("deleniti"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    WaitForSuccess: sdk.Bool(false),
                },
                JobReleaseTask: &shared.JobReleaseTask{
                    CommandLine: sdk.String("omnis"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Emmett Kovacek"),
                            Value: sdk.String("id"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Mrs. Ray Collins"),
                            Value: sdk.String("accusamus"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Jenna Hoppe"),
                            Value: sdk.String("minima"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Dr. Jimmie Murphy"),
                            Value: sdk.String("tempora"),
                        },
                    },
                    ID: sdk.String("6ce2af7a-73cf-43be-853f-870b326b5a73"),
                    MaxWallClockTime: sdk.String("incidunt"),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("cupiditate"),
                            FileMode: sdk.String("maxime"),
                            FilePath: sdk.String("pariatur"),
                        },
                    },
                    RetentionTime: sdk.String("soluta"),
                    RunElevated: sdk.Bool(false),
                },
                Metadata: []shared.MetadataItem{
                    shared.MetadataItem{
                        Name: sdk.String("Felix Gorczany"),
                        Value: sdk.String("distinctio"),
                    },
                },
                PoolInfo: &shared.PoolInformation{
                    AutoPoolSpecification: &shared.AutoPoolSpecification{
                        AutoPoolIDPrefix: sdk.String("facilis"),
                        KeepAlive: sdk.Bool(false),
                        Pool: &shared.PoolSpecification{
                            ApplicationPackageReferences: []shared.ApplicationPackageReference{
                                shared.ApplicationPackageReference{
                                    ApplicationID: "quam",
                                    Version: sdk.String("molestias"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "temporibus",
                                    Version: sdk.String("qui"),
                                },
                            },
                            AutoScaleEvaluationInterval: sdk.String("neque"),
                            AutoScaleFormula: sdk.String("fugit"),
                            CertificateReferences: []shared.CertificateReference{
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                                    StoreName: sdk.String("sunt"),
                                    Thumbprint: "ullam",
                                    ThumbprintAlgorithm: "nam",
                                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                                        shared.CertificateReferenceVisibilityEnumStarttask,
                                        shared.CertificateReferenceVisibilityEnumUnmapped,
                                        shared.CertificateReferenceVisibilityEnumRemoteuser,
                                        shared.CertificateReferenceVisibilityEnumRemoteuser,
                                    },
                                },
                            },
                            CloudServiceConfiguration: &shared.CloudServiceConfiguration{
                                CurrentOSVersion: sdk.String("et"),
                                OsFamily: "saepe",
                                TargetOSVersion: sdk.String("ipsum"),
                            },
                            DisplayName: sdk.String("veritatis"),
                            EnableAutoScale: sdk.Bool(false),
                            EnableInterNodeCommunication: sdk.Bool(false),
                            MaxTasksPerNode: sdk.Int(749255),
                            Metadata: []shared.MetadataItem{
                                shared.MetadataItem{
                                    Name: sdk.String("Kent Bayer"),
                                    Value: sdk.String("dolore"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Mr. Josephine Pagac V"),
                                    Value: sdk.String("itaque"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Jodi Skiles"),
                                    Value: sdk.String("ut"),
                                },
                            },
                            ResizeTimeout: sdk.String("facilis"),
                            StartTask: &shared.StartTask{
                                CommandLine: sdk.String("cupiditate"),
                                EnvironmentSettings: []shared.EnvironmentSetting{
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Marsha Kuhic"),
                                        Value: sdk.String("quisquam"),
                                    },
                                },
                                MaxTaskRetryCount: sdk.Int(876506),
                                ResourceFiles: []shared.ResourceFile{
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("quis"),
                                        FileMode: sdk.String("ipsum"),
                                        FilePath: sdk.String("delectus"),
                                    },
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("voluptate"),
                                        FileMode: sdk.String("consectetur"),
                                        FilePath: sdk.String("vero"),
                                    },
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("tenetur"),
                                        FileMode: sdk.String("dignissimos"),
                                        FilePath: sdk.String("hic"),
                                    },
                                },
                                RunElevated: sdk.Bool(false),
                                WaitForSuccess: sdk.Bool(false),
                            },
                            TargetDedicated: sdk.Int(715561),
                            TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                                NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumUnmapped,
                            },
                            VirtualMachineConfiguration: &shared.VirtualMachineConfiguration{
                                ImageReference: shared.ImageReference{
                                    Offer: "odio",
                                    Publisher: "similique",
                                    Sku: "facilis",
                                    Version: sdk.String("vero"),
                                },
                                NodeAgentSKUID: "ducimus",
                                WindowsConfiguration: &shared.WindowsConfiguration{
                                    EnableAutomaticUpdates: sdk.Bool(false),
                                },
                            },
                            VMSize: sdk.String("dolore"),
                        },
                        PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumUnmapped,
                    },
                    PoolID: sdk.String("illum"),
                },
                Priority: sdk.Int(194342),
                UsesTaskDependencies: sdk.Bool(false),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Richard Wiza"),
                    Value: sdk.String("fugit"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Elijah Wyman"),
                    Value: sdk.String("ducimus"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Brandi Glover"),
                    Value: sdk.String("aspernatur"),
                },
            },
            Schedule: shared.Schedule{
                DoNotRunAfter: types.MustTimeFromString("2022-03-06T22:14:54.933Z"),
                DoNotRunUntil: types.MustTimeFromString("2022-10-23T16:55:55.380Z"),
                RecurrenceInterval: sdk.String("ex"),
                StartWindow: sdk.String("laudantium"),
            },
        },
        APIVersion: "dicta",
        ClientRequestID: sdk.String("dolor"),
        OcpDate: sdk.String("maiores"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(97844),
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
        IfMatch: sdk.String("ex"),
        IfModifiedSince: sdk.String("nulla"),
        IfNoneMatch: sdk.String("excepturi"),
        IfUnmodifiedSince: sdk.String("voluptatibus"),
        APIVersion: "nostrum",
        ClientRequestID: sdk.String("sapiente"),
        JobScheduleID: "quisquam",
        OcpDate: sdk.String("saepe"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(411372),
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
        IfMatch: sdk.String("impedit"),
        IfModifiedSince: sdk.String("corporis"),
        IfNoneMatch: sdk.String("veniam"),
        IfUnmodifiedSince: sdk.String("aliquid"),
        APIVersion: "inventore",
        ClientRequestID: sdk.String("magnam"),
        JobScheduleID: "ea",
        OcpDate: sdk.String("quo"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(232234),
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
        IfMatch: sdk.String("recusandae"),
        IfModifiedSince: sdk.String("aspernatur"),
        IfNoneMatch: sdk.String("minima"),
        IfUnmodifiedSince: sdk.String("eaque"),
        APIVersion: "a",
        ClientRequestID: sdk.String("libero"),
        JobScheduleID: "aut",
        OcpDate: sdk.String("aut"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(533466),
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
        IfMatch: sdk.String("impedit"),
        IfModifiedSince: sdk.String("aliquam"),
        IfNoneMatch: sdk.String("fugit"),
        IfUnmodifiedSince: sdk.String("accusamus"),
        APIVersion: "inventore",
        ClientRequestID: sdk.String("non"),
        JobScheduleID: "et",
        OcpDate: sdk.String("dolorum"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(672048),
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
        DollarExpand: sdk.String("placeat"),
        DollarSelect: sdk.String("velit"),
        IfMatch: sdk.String("eum"),
        IfModifiedSince: sdk.String("autem"),
        IfNoneMatch: sdk.String("nobis"),
        IfUnmodifiedSince: sdk.String("quas"),
        APIVersion: "assumenda",
        ClientRequestID: sdk.String("nulla"),
        JobScheduleID: "voluptas",
        OcpDate: sdk.String("libero"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(96549),
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
        DollarExpand: sdk.String("tempora"),
        DollarFilter: sdk.String("numquam"),
        DollarSelect: sdk.String("explicabo"),
        APIVersion: "provident",
        ClientRequestID: sdk.String("ipsa"),
        Maxresults: sdk.Int(476477),
        OcpDate: sdk.String("magnam"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(487935),
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
        IfMatch: sdk.String("eius"),
        IfModifiedSince: sdk.String("esse"),
        IfNoneMatch: sdk.String("esse"),
        IfUnmodifiedSince: sdk.String("rem"),
        JobSchedulePatchParameter: shared.JobSchedulePatchParameter{
            JobSpecification: &shared.JobSpecification{
                CommonEnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Yvette Stehr"),
                        Value: sdk.String("suscipit"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Alan Lang Jr."),
                        Value: sdk.String("id"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Luis Satterfield"),
                        Value: sdk.String("fuga"),
                    },
                },
                Constraints: &shared.JobConstraints{
                    MaxTaskRetryCount: sdk.Int(259422),
                    MaxWallClockTime: sdk.String("eos"),
                },
                DisplayName: sdk.String("voluptas"),
                JobManagerTask: &shared.JobManagerTask{
                    CommandLine: sdk.String("ab"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(587600),
                        MaxWallClockTime: sdk.String("consequatur"),
                        RetentionTime: sdk.String("tempora"),
                    },
                    DisplayName: sdk.String("debitis"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Emily Satterfield"),
                            Value: sdk.String("aperiam"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Ms. Jermaine Kulas"),
                            Value: sdk.String("accusamus"),
                        },
                    },
                    ID: sdk.String("4796f2a7-0c68-4828-aaa4-82562f222e98"),
                    KillJobOnCompletion: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("esse"),
                            FileMode: sdk.String("eveniet"),
                            FilePath: sdk.String("accusamus"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    RunExclusive: sdk.Bool(false),
                },
                JobPreparationTask: &shared.JobPreparationTask{
                    CommandLine: sdk.String("veritatis"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(458604),
                        MaxWallClockTime: sdk.String("quod"),
                        RetentionTime: sdk.String("nam"),
                    },
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Frances Turner"),
                            Value: sdk.String("molestiae"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Tracy Harber"),
                            Value: sdk.String("sit"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Randolph Fisher"),
                            Value: sdk.String("consequatur"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Calvin Williamson"),
                            Value: sdk.String("blanditiis"),
                        },
                    },
                    ID: sdk.String("9fd871f9-9dd2-4efd-921a-a6f1e674bdb0"),
                    RerunOnNodeRebootAfterSuccess: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("sapiente"),
                            FileMode: sdk.String("dicta"),
                            FilePath: sdk.String("ullam"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("reprehenderit"),
                            FileMode: sdk.String("ullam"),
                            FilePath: sdk.String("nisi"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    WaitForSuccess: sdk.Bool(false),
                },
                JobReleaseTask: &shared.JobReleaseTask{
                    CommandLine: sdk.String("aut"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Rosemarie Jacobs"),
                            Value: sdk.String("dolorum"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Dr. Belinda West III"),
                            Value: sdk.String("ipsa"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Marie Feest"),
                            Value: sdk.String("temporibus"),
                        },
                    },
                    ID: sdk.String("08086a18-4039-44c2-a071-f93f5f0642da"),
                    MaxWallClockTime: sdk.String("maxime"),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("officia"),
                            FileMode: sdk.String("asperiores"),
                            FilePath: sdk.String("nemo"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("quae"),
                            FileMode: sdk.String("quaerat"),
                            FilePath: sdk.String("porro"),
                        },
                    },
                    RetentionTime: sdk.String("quod"),
                    RunElevated: sdk.Bool(false),
                },
                Metadata: []shared.MetadataItem{
                    shared.MetadataItem{
                        Name: sdk.String("Josephine Paucek"),
                        Value: sdk.String("velit"),
                    },
                    shared.MetadataItem{
                        Name: sdk.String("Rex Walter"),
                        Value: sdk.String("vel"),
                    },
                },
                PoolInfo: &shared.PoolInformation{
                    AutoPoolSpecification: &shared.AutoPoolSpecification{
                        AutoPoolIDPrefix: sdk.String("ducimus"),
                        KeepAlive: sdk.Bool(false),
                        Pool: &shared.PoolSpecification{
                            ApplicationPackageReferences: []shared.ApplicationPackageReference{
                                shared.ApplicationPackageReference{
                                    ApplicationID: "vel",
                                    Version: sdk.String("labore"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "possimus",
                                    Version: sdk.String("facilis"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "cum",
                                    Version: sdk.String("commodi"),
                                },
                            },
                            AutoScaleEvaluationInterval: sdk.String("in"),
                            AutoScaleFormula: sdk.String("corporis"),
                            CertificateReferences: []shared.CertificateReference{
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                    StoreName: sdk.String("nemo"),
                                    Thumbprint: "recusandae",
                                    ThumbprintAlgorithm: "aliquid",
                                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                                        shared.CertificateReferenceVisibilityEnumRemoteuser,
                                    },
                                },
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                                    StoreName: sdk.String("in"),
                                    Thumbprint: "exercitationem",
                                    ThumbprintAlgorithm: "earum",
                                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                                        shared.CertificateReferenceVisibilityEnumTask,
                                        shared.CertificateReferenceVisibilityEnumUnmapped,
                                        shared.CertificateReferenceVisibilityEnumTask,
                                        shared.CertificateReferenceVisibilityEnumUnmapped,
                                    },
                                },
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                    StoreName: sdk.String("saepe"),
                                    Thumbprint: "necessitatibus",
                                    ThumbprintAlgorithm: "dolore",
                                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                                        shared.CertificateReferenceVisibilityEnumUnmapped,
                                    },
                                },
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                                    StoreName: sdk.String("non"),
                                    Thumbprint: "amet",
                                    ThumbprintAlgorithm: "beatae",
                                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                                        shared.CertificateReferenceVisibilityEnumUnmapped,
                                        shared.CertificateReferenceVisibilityEnumUnmapped,
                                    },
                                },
                            },
                            CloudServiceConfiguration: &shared.CloudServiceConfiguration{
                                CurrentOSVersion: sdk.String("consectetur"),
                                OsFamily: "corporis",
                                TargetOSVersion: sdk.String("harum"),
                            },
                            DisplayName: sdk.String("laboriosam"),
                            EnableAutoScale: sdk.Bool(false),
                            EnableInterNodeCommunication: sdk.Bool(false),
                            MaxTasksPerNode: sdk.Int(58356),
                            Metadata: []shared.MetadataItem{
                                shared.MetadataItem{
                                    Name: sdk.String("Terry Tillman"),
                                    Value: sdk.String("aspernatur"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Melanie Hirthe"),
                                    Value: sdk.String("dolorum"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Bethany D'Amore"),
                                    Value: sdk.String("dolore"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Rochelle Smitham"),
                                    Value: sdk.String("cum"),
                                },
                            },
                            ResizeTimeout: sdk.String("blanditiis"),
                            StartTask: &shared.StartTask{
                                CommandLine: sdk.String("quas"),
                                EnvironmentSettings: []shared.EnvironmentSetting{
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Molly Lowe"),
                                        Value: sdk.String("hic"),
                                    },
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
                                },
                                MaxTaskRetryCount: sdk.Int(696077),
                                ResourceFiles: []shared.ResourceFile{
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("voluptas"),
                                        FileMode: sdk.String("unde"),
                                        FilePath: sdk.String("architecto"),
                                    },
                                },
                                RunElevated: sdk.Bool(false),
                                WaitForSuccess: sdk.Bool(false),
                            },
                            TargetDedicated: sdk.Int(382808),
                            TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                                NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumUnmapped,
                            },
                            VirtualMachineConfiguration: &shared.VirtualMachineConfiguration{
                                ImageReference: shared.ImageReference{
                                    Offer: "debitis",
                                    Publisher: "illo",
                                    Sku: "reiciendis",
                                    Version: sdk.String("perferendis"),
                                },
                                NodeAgentSKUID: "corrupti",
                                WindowsConfiguration: &shared.WindowsConfiguration{
                                    EnableAutomaticUpdates: sdk.Bool(false),
                                },
                            },
                            VMSize: sdk.String("maiores"),
                        },
                        PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumJobschedule,
                    },
                    PoolID: sdk.String("sed"),
                },
                Priority: sdk.Int(592231),
                UsesTaskDependencies: sdk.Bool(false),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Nathan Jaskolski"),
                    Value: sdk.String("voluptatibus"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Rhonda Klocko"),
                    Value: sdk.String("sit"),
                },
            },
            Schedule: &shared.Schedule{
                DoNotRunAfter: types.MustTimeFromString("2022-02-10T20:44:13.580Z"),
                DoNotRunUntil: types.MustTimeFromString("2021-08-01T17:10:22.856Z"),
                RecurrenceInterval: sdk.String("quaerat"),
                StartWindow: sdk.String("incidunt"),
            },
        },
        APIVersion: "ipsam",
        ClientRequestID: sdk.String("debitis"),
        JobScheduleID: "rem",
        OcpDate: sdk.String("sit"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(750595),
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
        IfMatch: sdk.String("error"),
        IfModifiedSince: sdk.String("veniam"),
        IfNoneMatch: sdk.String("minima"),
        IfUnmodifiedSince: sdk.String("recusandae"),
        APIVersion: "reiciendis",
        ClientRequestID: sdk.String("nulla"),
        JobScheduleID: "magni",
        OcpDate: sdk.String("aperiam"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(901483),
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
        IfMatch: sdk.String("numquam"),
        IfModifiedSince: sdk.String("veniam"),
        IfNoneMatch: sdk.String("in"),
        IfUnmodifiedSince: sdk.String("officiis"),
        JobScheduleUpdateParameter: shared.JobScheduleUpdateParameter{
            JobSpecification: shared.JobSpecification{
                CommonEnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Jorge Langosh"),
                        Value: sdk.String("dolorum"),
                    },
                },
                Constraints: &shared.JobConstraints{
                    MaxTaskRetryCount: sdk.Int(530089),
                    MaxWallClockTime: sdk.String("error"),
                },
                DisplayName: sdk.String("hic"),
                JobManagerTask: &shared.JobManagerTask{
                    CommandLine: sdk.String("expedita"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(892863),
                        MaxWallClockTime: sdk.String("neque"),
                        RetentionTime: sdk.String("dolorum"),
                    },
                    DisplayName: sdk.String("nostrum"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Byron Thiel"),
                            Value: sdk.String("fugit"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Janis Bartell"),
                            Value: sdk.String("magnam"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Ms. Georgia Hintz"),
                            Value: sdk.String("repudiandae"),
                        },
                    },
                    ID: sdk.String("51862065-e904-4f3b-9194-b8abf603a79f"),
                    KillJobOnCompletion: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("repellendus"),
                            FileMode: sdk.String("delectus"),
                            FilePath: sdk.String("voluptates"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("perferendis"),
                            FileMode: sdk.String("est"),
                            FilePath: sdk.String("quidem"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("reprehenderit"),
                            FileMode: sdk.String("facere"),
                            FilePath: sdk.String("fuga"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    RunExclusive: sdk.Bool(false),
                },
                JobPreparationTask: &shared.JobPreparationTask{
                    CommandLine: sdk.String("praesentium"),
                    Constraints: &shared.TaskConstraints{
                        MaxTaskRetryCount: sdk.Int(648598),
                        MaxWallClockTime: sdk.String("veniam"),
                        RetentionTime: sdk.String("voluptatem"),
                    },
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Ryan Littel"),
                            Value: sdk.String("totam"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Ms. Alison Schoen"),
                            Value: sdk.String("assumenda"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Leah Mueller"),
                            Value: sdk.String("accusamus"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Darrell Collier"),
                            Value: sdk.String("corrupti"),
                        },
                    },
                    ID: sdk.String("d986e881-ead4-4f0e-9012-563f94e29e97"),
                    RerunOnNodeRebootAfterSuccess: sdk.Bool(false),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("eveniet"),
                            FileMode: sdk.String("occaecati"),
                            FilePath: sdk.String("consequuntur"),
                        },
                    },
                    RunElevated: sdk.Bool(false),
                    WaitForSuccess: sdk.Bool(false),
                },
                JobReleaseTask: &shared.JobReleaseTask{
                    CommandLine: sdk.String("fugit"),
                    EnvironmentSettings: []shared.EnvironmentSetting{
                        shared.EnvironmentSetting{
                            Name: sdk.String("Mrs. Bessie Muller"),
                            Value: sdk.String("eveniet"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Meghan Batz IV"),
                            Value: sdk.String("quae"),
                        },
                        shared.EnvironmentSetting{
                            Name: sdk.String("Tricia Denesik"),
                            Value: sdk.String("necessitatibus"),
                        },
                    },
                    ID: sdk.String("3ab8845f-0597-4a60-bf2a-54a31e94764a"),
                    MaxWallClockTime: sdk.String("adipisci"),
                    ResourceFiles: []shared.ResourceFile{
                        shared.ResourceFile{
                            BlobSource: sdk.String("laudantium"),
                            FileMode: sdk.String("eum"),
                            FilePath: sdk.String("nemo"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("recusandae"),
                            FileMode: sdk.String("esse"),
                            FilePath: sdk.String("provident"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("quis"),
                            FileMode: sdk.String("eum"),
                            FilePath: sdk.String("reiciendis"),
                        },
                        shared.ResourceFile{
                            BlobSource: sdk.String("provident"),
                            FileMode: sdk.String("aspernatur"),
                            FilePath: sdk.String("ullam"),
                        },
                    },
                    RetentionTime: sdk.String("quasi"),
                    RunElevated: sdk.Bool(false),
                },
                Metadata: []shared.MetadataItem{
                    shared.MetadataItem{
                        Name: sdk.String("Angie McLaughlin"),
                        Value: sdk.String("ex"),
                    },
                    shared.MetadataItem{
                        Name: sdk.String("Ruth Zulauf"),
                        Value: sdk.String("in"),
                    },
                    shared.MetadataItem{
                        Name: sdk.String("Darin Nienow"),
                        Value: sdk.String("modi"),
                    },
                },
                PoolInfo: &shared.PoolInformation{
                    AutoPoolSpecification: &shared.AutoPoolSpecification{
                        AutoPoolIDPrefix: sdk.String("voluptatibus"),
                        KeepAlive: sdk.Bool(false),
                        Pool: &shared.PoolSpecification{
                            ApplicationPackageReferences: []shared.ApplicationPackageReference{
                                shared.ApplicationPackageReference{
                                    ApplicationID: "officiis",
                                    Version: sdk.String("sapiente"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "cumque",
                                    Version: sdk.String("vitae"),
                                },
                                shared.ApplicationPackageReference{
                                    ApplicationID: "rerum",
                                    Version: sdk.String("tempora"),
                                },
                            },
                            AutoScaleEvaluationInterval: sdk.String("quis"),
                            AutoScaleFormula: sdk.String("inventore"),
                            CertificateReferences: []shared.CertificateReference{
                                shared.CertificateReference{
                                    StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                    StoreName: sdk.String("quae"),
                                    Thumbprint: "perferendis",
                                    ThumbprintAlgorithm: "velit",
                                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                                        shared.CertificateReferenceVisibilityEnumTask,
                                    },
                                },
                            },
                            CloudServiceConfiguration: &shared.CloudServiceConfiguration{
                                CurrentOSVersion: sdk.String("eius"),
                                OsFamily: "rem",
                                TargetOSVersion: sdk.String("at"),
                            },
                            DisplayName: sdk.String("impedit"),
                            EnableAutoScale: sdk.Bool(false),
                            EnableInterNodeCommunication: sdk.Bool(false),
                            MaxTasksPerNode: sdk.Int(179410),
                            Metadata: []shared.MetadataItem{
                                shared.MetadataItem{
                                    Name: sdk.String("Ms. Cheryl Hane"),
                                    Value: sdk.String("earum"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Dr. Terrell Stanton"),
                                    Value: sdk.String("maiores"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Gene Sauer"),
                                    Value: sdk.String("fugit"),
                                },
                                shared.MetadataItem{
                                    Name: sdk.String("Grant Dickens"),
                                    Value: sdk.String("nulla"),
                                },
                            },
                            ResizeTimeout: sdk.String("consequatur"),
                            StartTask: &shared.StartTask{
                                CommandLine: sdk.String("quasi"),
                                EnvironmentSettings: []shared.EnvironmentSetting{
                                    shared.EnvironmentSetting{
                                        Name: sdk.String("Ada McClure"),
                                        Value: sdk.String("quasi"),
                                    },
                                },
                                MaxTaskRetryCount: sdk.Int(169025),
                                ResourceFiles: []shared.ResourceFile{
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("nulla"),
                                        FileMode: sdk.String("necessitatibus"),
                                        FilePath: sdk.String("ipsa"),
                                    },
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("tempora"),
                                        FileMode: sdk.String("nihil"),
                                        FilePath: sdk.String("molestiae"),
                                    },
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("dicta"),
                                        FileMode: sdk.String("iusto"),
                                        FilePath: sdk.String("esse"),
                                    },
                                    shared.ResourceFile{
                                        BlobSource: sdk.String("praesentium"),
                                        FileMode: sdk.String("maiores"),
                                        FilePath: sdk.String("reiciendis"),
                                    },
                                },
                                RunElevated: sdk.Bool(false),
                                WaitForSuccess: sdk.Bool(false),
                            },
                            TargetDedicated: sdk.Int(423706),
                            TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                                NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumSpread,
                            },
                            VirtualMachineConfiguration: &shared.VirtualMachineConfiguration{
                                ImageReference: shared.ImageReference{
                                    Offer: "fugiat",
                                    Publisher: "doloremque",
                                    Sku: "dicta",
                                    Version: sdk.String("odio"),
                                },
                                NodeAgentSKUID: "tempora",
                                WindowsConfiguration: &shared.WindowsConfiguration{
                                    EnableAutomaticUpdates: sdk.Bool(false),
                                },
                            },
                            VMSize: sdk.String("esse"),
                        },
                        PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumJob,
                    },
                    PoolID: sdk.String("consectetur"),
                },
                Priority: sdk.Int(399812),
                UsesTaskDependencies: sdk.Bool(false),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Ralph Hegmann"),
                    Value: sdk.String("aliquid"),
                },
            },
            Schedule: shared.Schedule{
                DoNotRunAfter: types.MustTimeFromString("2022-03-28T13:55:18.249Z"),
                DoNotRunUntil: types.MustTimeFromString("2022-12-23T23:30:38.445Z"),
                RecurrenceInterval: sdk.String("eum"),
                StartWindow: sdk.String("voluptas"),
            },
        },
        APIVersion: "iste",
        ClientRequestID: sdk.String("id"),
        JobScheduleID: "ab",
        OcpDate: sdk.String("error"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(822407),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
