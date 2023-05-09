# Jobs

### Available Operations

* [JobAdd](#jobadd) - Adds a job to the specified account.
* [JobDelete](#jobdelete) - Deletes a job.
* [JobDisable](#jobdisable) - Disables the specified job, preventing new tasks from running.
* [JobEnable](#jobenable) - Enables the specified job, allowing new tasks to run.
* [JobGet](#jobget) - Gets information about the specified job.
* [JobGetAllJobsLifetimeStatistics](#jobgetalljobslifetimestatistics) - Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
* [JobList](#joblist) - Lists all of the jobs in the specified account.
* [JobListFromJobSchedule](#joblistfromjobschedule) - Lists the jobs that have been created under the specified job schedule.
* [JobListPreparationAndReleaseTaskStatus](#joblistpreparationandreleasetaskstatus) - Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
* [JobPatch](#jobpatch) - Updates the properties of a job.
* [JobTerminate](#jobterminate) - Terminates the specified job, marking it as completed.
* [JobUpdate](#jobupdate) - Updates the properties of a job.

## JobAdd

Adds a job to the specified account.

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
    res, err := s.Jobs.JobAdd(ctx, operations.JobAddRequest{
        JobAddParameter: shared.JobAddParameter{
            CommonEnvironmentSettings: []shared.EnvironmentSetting{
                shared.EnvironmentSetting{
                    Name: sdk.String("Joyce Borer"),
                    Value: sdk.String("occaecati"),
                },
                shared.EnvironmentSetting{
                    Name: sdk.String("Josephine Boyer"),
                    Value: sdk.String("nulla"),
                },
                shared.EnvironmentSetting{
                    Name: sdk.String("Jeffrey Goldner"),
                    Value: sdk.String("dicta"),
                },
                shared.EnvironmentSetting{
                    Name: sdk.String("Tamara Lang"),
                    Value: sdk.String("vel"),
                },
            },
            Constraints: &shared.JobConstraints{
                MaxTaskRetryCount: sdk.Int(99958),
                MaxWallClockTime: sdk.String("fugiat"),
            },
            DisplayName: sdk.String("doloremque"),
            ID: "17476360-a15d-4b6a-a606-59a1adeaab58",
            JobManagerTask: &shared.JobManagerTask{
                CommandLine: sdk.String("enim"),
                Constraints: &shared.TaskConstraints{
                    MaxTaskRetryCount: sdk.Int(110477),
                    MaxWallClockTime: sdk.String("repellendus"),
                    RetentionTime: sdk.String("ex"),
                },
                DisplayName: sdk.String("quo"),
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Ms. Geraldine Ratke"),
                        Value: sdk.String("aliquid"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Miss Nora Moen"),
                        Value: sdk.String("culpa"),
                    },
                },
                ID: sdk.String("0fe1ade0-08e6-4f8c-9f35-0d8cdb5a3418"),
                KillJobOnCompletion: sdk.Bool(false),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("tempora"),
                        FilePath: sdk.String("dolor"),
                    },
                },
                RunElevated: sdk.Bool(false),
                RunExclusive: sdk.Bool(false),
            },
            JobPreparationTask: &shared.JobPreparationTask{
                CommandLine: sdk.String("consequatur"),
                Constraints: &shared.TaskConstraints{
                    MaxTaskRetryCount: sdk.Int(100014),
                    MaxWallClockTime: sdk.String("sit"),
                    RetentionTime: sdk.String("modi"),
                },
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Marsha Bergstrom"),
                        Value: sdk.String("ipsam"),
                    },
                },
                ID: sdk.String("208ece7e-253b-4668-851c-6c6e205e16de"),
                RerunOnNodeRebootAfterSuccess: sdk.Bool(false),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("harum"),
                        FilePath: sdk.String("sequi"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("doloribus"),
                        FilePath: sdk.String("repudiandae"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("optio"),
                        FilePath: sdk.String("occaecati"),
                    },
                },
                RunElevated: sdk.Bool(false),
                WaitForSuccess: sdk.Bool(false),
            },
            JobReleaseTask: &shared.JobReleaseTask{
                CommandLine: sdk.String("nemo"),
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Gerard Hodkiewicz"),
                        Value: sdk.String("quos"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Janice Kunze"),
                        Value: sdk.String("laudantium"),
                    },
                },
                ID: sdk.String("418d1623-09fb-4092-9921-aefb9f58c4d8"),
                MaxWallClockTime: sdk.String("commodi"),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("commodi"),
                        FilePath: sdk.String("totam"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("earum"),
                        FilePath: sdk.String("modi"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("nam"),
                        FilePath: sdk.String("vero"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("voluptatem"),
                        FilePath: sdk.String("ipsam"),
                    },
                },
                RetentionTime: sdk.String("vel"),
                RunElevated: sdk.Bool(false),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Sheila Wolff"),
                    Value: sdk.String("nulla"),
                },
            },
            PoolInfo: shared.PoolInformation{
                AutoPoolSpecification: &shared.AutoPoolSpecification{
                    AutoPoolIDPrefix: sdk.String("deserunt"),
                    KeepAlive: sdk.Bool(false),
                    Pool: &shared.PoolSpecification{
                        ApplicationPackageReferences: []shared.ApplicationPackageReference{
                            shared.ApplicationPackageReference{
                                ApplicationID: "nemo",
                                Version: sdk.String("reprehenderit"),
                            },
                            shared.ApplicationPackageReference{
                                ApplicationID: "est",
                                Version: sdk.String("quis"),
                            },
                        },
                        AutoScaleEvaluationInterval: sdk.String("sint"),
                        AutoScaleFormula: sdk.String("accusamus"),
                        CertificateReferences: []shared.CertificateReference{
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                StoreName: sdk.String("necessitatibus"),
                                Thumbprint: "asperiores",
                                ThumbprintAlgorithm: "ex",
                                Visibility: sdk.String("voluptas"),
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                StoreName: sdk.String("delectus"),
                                Thumbprint: "quae",
                                ThumbprintAlgorithm: "minus",
                                Visibility: sdk.String("fuga"),
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                StoreName: sdk.String("consectetur"),
                                Thumbprint: "velit",
                                ThumbprintAlgorithm: "atque",
                                Visibility: sdk.String("ipsum"),
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                StoreName: sdk.String("magni"),
                                Thumbprint: "soluta",
                                ThumbprintAlgorithm: "repudiandae",
                                Visibility: sdk.String("nam"),
                            },
                        },
                        DisplayName: sdk.String("dolore"),
                        EnableAutoScale: sdk.Bool(false),
                        EnableInterNodeCommunication: sdk.Bool(false),
                        MaxTasksPerNode: sdk.Int(482892),
                        Metadata: []shared.MetadataItem{
                            shared.MetadataItem{
                                Name: sdk.String("Stella DuBuque"),
                                Value: sdk.String("quibusdam"),
                            },
                            shared.MetadataItem{
                                Name: sdk.String("Christina Wolf"),
                                Value: sdk.String("quibusdam"),
                            },
                        },
                        OsFamily: sdk.String("inventore"),
                        ResizeTimeout: sdk.String("facere"),
                        StartTask: &shared.StartTask{
                            CommandLine: sdk.String("libero"),
                            EnvironmentSettings: []shared.EnvironmentSetting{
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Howard Sauer"),
                                    Value: sdk.String("illo"),
                                },
                            },
                            MaxTaskRetryCount: sdk.Int(36561),
                            ResourceFiles: []shared.ResourceFile{
                                shared.ResourceFile{
                                    BlobSource: sdk.String("ea"),
                                    FilePath: sdk.String("beatae"),
                                },
                                shared.ResourceFile{
                                    BlobSource: sdk.String("vero"),
                                    FilePath: sdk.String("excepturi"),
                                },
                            },
                            RunElevated: sdk.Bool(false),
                            WaitForSuccess: sdk.Bool(false),
                        },
                        TargetDedicated: sdk.Int(431994),
                        TargetOSVersion: sdk.String("velit"),
                        TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                            NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumSpread,
                        },
                        VMSize: sdk.String("perspiciatis"),
                    },
                    PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumUnmapped,
                },
                PoolID: sdk.String("dicta"),
            },
            Priority: sdk.Int(772266),
            UsesTaskDependencies: sdk.Bool(false),
        },
        APIVersion: "voluptatibus",
        ClientRequestID: sdk.String("iste"),
        OcpDate: sdk.String("itaque"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(2677),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobDelete

Deletes a job.

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
    res, err := s.Jobs.JobDelete(ctx, operations.JobDeleteRequest{
        IfMatch: sdk.String("nisi"),
        IfModifiedSince: sdk.String("itaque"),
        IfNoneMatch: sdk.String("velit"),
        IfUnmodifiedSince: sdk.String("laborum"),
        APIVersion: "non",
        ClientRequestID: sdk.String("dolor"),
        JobID: "iusto",
        OcpDate: sdk.String("sit"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(39992),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobDisable

Disables the specified job, preventing new tasks from running.

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
    res, err := s.Jobs.JobDisable(ctx, operations.JobDisableRequest{
        IfMatch: sdk.String("consequatur"),
        IfModifiedSince: sdk.String("officia"),
        IfNoneMatch: sdk.String("recusandae"),
        IfUnmodifiedSince: sdk.String("ea"),
        JobDisableParameter: shared.JobDisableParameter{
            DisableTasks: shared.JobDisableParameterDisableTasksEnumWait,
        },
        APIVersion: "voluptas",
        ClientRequestID: sdk.String("facilis"),
        JobID: "placeat",
        OcpDate: sdk.String("perspiciatis"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(709036),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobEnable

Enables the specified job, allowing new tasks to run.

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
    res, err := s.Jobs.JobEnable(ctx, operations.JobEnableRequest{
        IfMatch: sdk.String("deleniti"),
        IfModifiedSince: sdk.String("a"),
        IfNoneMatch: sdk.String("voluptate"),
        IfUnmodifiedSince: sdk.String("ullam"),
        APIVersion: "unde",
        ClientRequestID: sdk.String("necessitatibus"),
        JobID: "animi",
        OcpDate: sdk.String("impedit"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(373040),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobGet

Gets information about the specified job.

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
    res, err := s.Jobs.JobGet(ctx, operations.JobGetRequest{
        DollarExpand: sdk.String("corporis"),
        DollarSelect: sdk.String("est"),
        APIVersion: "error",
        ClientRequestID: sdk.String("esse"),
        JobID: "labore",
        OcpDate: sdk.String("veritatis"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(874400),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudJob != nil {
        // handle response
    }
}
```

## JobGetAllJobsLifetimeStatistics

Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.

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
    res, err := s.Jobs.JobGetAllJobsLifetimeStatistics(ctx, operations.JobGetAllJobsLifetimeStatisticsRequest{
        APIVersion: "consectetur",
        ClientRequestID: sdk.String("vitae"),
        OcpDate: sdk.String("inventore"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(212434),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobStatistics != nil {
        // handle response
    }
}
```

## JobList

Lists all of the jobs in the specified account.

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
    res, err := s.Jobs.JobList(ctx, operations.JobListRequest{
        DollarExpand: sdk.String("ad"),
        DollarFilter: sdk.String("qui"),
        DollarSelect: sdk.String("iste"),
        APIVersion: "ex",
        ClientRequestID: sdk.String("nemo"),
        Maxresults: sdk.Int(745233),
        OcpDate: sdk.String("libero"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(526907),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudJobListResult != nil {
        // handle response
    }
}
```

## JobListFromJobSchedule

Lists the jobs that have been created under the specified job schedule.

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
    res, err := s.Jobs.JobListFromJobSchedule(ctx, operations.JobListFromJobScheduleRequest{
        DollarExpand: sdk.String("dolorum"),
        DollarFilter: sdk.String("odio"),
        DollarSelect: sdk.String("fugit"),
        APIVersion: "alias",
        ClientRequestID: sdk.String("magni"),
        JobScheduleID: "vel",
        Maxresults: sdk.Int(64435),
        OcpDate: sdk.String("quae"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(264333),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudJobListResult != nil {
        // handle response
    }
}
```

## JobListPreparationAndReleaseTaskStatus

Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.

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
    res, err := s.Jobs.JobListPreparationAndReleaseTaskStatus(ctx, operations.JobListPreparationAndReleaseTaskStatusRequest{
        DollarFilter: sdk.String("neque"),
        DollarSelect: sdk.String("exercitationem"),
        APIVersion: "itaque",
        ClientRequestID: sdk.String("et"),
        JobID: "ipsum",
        Maxresults: sdk.Int(602229),
        OcpDate: sdk.String("nulla"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(714376),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudJobListPreparationAndReleaseTaskStatusResult != nil {
        // handle response
    }
}
```

## JobPatch

Updates the properties of a job.

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
    res, err := s.Jobs.JobPatch(ctx, operations.JobPatchRequest{
        IfMatch: sdk.String("maxime"),
        IfModifiedSince: sdk.String("quia"),
        IfNoneMatch: sdk.String("quia"),
        IfUnmodifiedSince: sdk.String("nostrum"),
        JobPatchParameter: shared.JobPatchParameter{
            Constraints: &shared.JobConstraints{
                MaxTaskRetryCount: sdk.Int(605712),
                MaxWallClockTime: sdk.String("libero"),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Wm Steuber"),
                    Value: sdk.String("placeat"),
                },
            },
            PoolInfo: &shared.PoolInformation{
                AutoPoolSpecification: &shared.AutoPoolSpecification{
                    AutoPoolIDPrefix: sdk.String("sit"),
                    KeepAlive: sdk.Bool(false),
                    Pool: &shared.PoolSpecification{
                        ApplicationPackageReferences: []shared.ApplicationPackageReference{
                            shared.ApplicationPackageReference{
                                ApplicationID: "ipsa",
                                Version: sdk.String("voluptates"),
                            },
                            shared.ApplicationPackageReference{
                                ApplicationID: "inventore",
                                Version: sdk.String("aperiam"),
                            },
                        },
                        AutoScaleEvaluationInterval: sdk.String("totam"),
                        AutoScaleFormula: sdk.String("dolore"),
                        CertificateReferences: []shared.CertificateReference{
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                StoreName: sdk.String("voluptatem"),
                                Thumbprint: "autem",
                                ThumbprintAlgorithm: "esse",
                                Visibility: sdk.String("dolores"),
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                StoreName: sdk.String("beatae"),
                                Thumbprint: "est",
                                ThumbprintAlgorithm: "facere",
                                Visibility: sdk.String("corrupti"),
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                                StoreName: sdk.String("provident"),
                                Thumbprint: "accusamus",
                                ThumbprintAlgorithm: "necessitatibus",
                                Visibility: sdk.String("tempore"),
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                                StoreName: sdk.String("ea"),
                                Thumbprint: "autem",
                                ThumbprintAlgorithm: "ipsam",
                                Visibility: sdk.String("rerum"),
                            },
                        },
                        DisplayName: sdk.String("laudantium"),
                        EnableAutoScale: sdk.Bool(false),
                        EnableInterNodeCommunication: sdk.Bool(false),
                        MaxTasksPerNode: sdk.Int(357207),
                        Metadata: []shared.MetadataItem{
                            shared.MetadataItem{
                                Name: sdk.String("Mr. Jonathon Swaniawski"),
                                Value: sdk.String("fuga"),
                            },
                            shared.MetadataItem{
                                Name: sdk.String("Steven Rath"),
                                Value: sdk.String("quibusdam"),
                            },
                            shared.MetadataItem{
                                Name: sdk.String("Mrs. Mabel Connelly"),
                                Value: sdk.String("earum"),
                            },
                            shared.MetadataItem{
                                Name: sdk.String("Delia Murray"),
                                Value: sdk.String("quis"),
                            },
                        },
                        OsFamily: sdk.String("beatae"),
                        ResizeTimeout: sdk.String("unde"),
                        StartTask: &shared.StartTask{
                            CommandLine: sdk.String("molestiae"),
                            EnvironmentSettings: []shared.EnvironmentSetting{
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Steve Fritsch"),
                                    Value: sdk.String("at"),
                                },
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Cody Rowe"),
                                    Value: sdk.String("qui"),
                                },
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Jaime McGlynn"),
                                    Value: sdk.String("enim"),
                                },
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Pearl Schinner"),
                                    Value: sdk.String("corporis"),
                                },
                            },
                            MaxTaskRetryCount: sdk.Int(298264),
                            ResourceFiles: []shared.ResourceFile{
                                shared.ResourceFile{
                                    BlobSource: sdk.String("maiores"),
                                    FilePath: sdk.String("tempore"),
                                },
                                shared.ResourceFile{
                                    BlobSource: sdk.String("aperiam"),
                                    FilePath: sdk.String("libero"),
                                },
                                shared.ResourceFile{
                                    BlobSource: sdk.String("ratione"),
                                    FilePath: sdk.String("labore"),
                                },
                                shared.ResourceFile{
                                    BlobSource: sdk.String("totam"),
                                    FilePath: sdk.String("occaecati"),
                                },
                            },
                            RunElevated: sdk.Bool(false),
                            WaitForSuccess: sdk.Bool(false),
                        },
                        TargetDedicated: sdk.Int(375994),
                        TargetOSVersion: sdk.String("quo"),
                        TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                            NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumSpread,
                        },
                        VMSize: sdk.String("minus"),
                    },
                    PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumUnmapped,
                },
                PoolID: sdk.String("nostrum"),
            },
            Priority: sdk.Int(669237),
        },
        APIVersion: "impedit",
        ClientRequestID: sdk.String("delectus"),
        JobID: "tempore",
        OcpDate: sdk.String("vero"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(141506),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobTerminate

Terminates the specified job, marking it as completed.

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
    res, err := s.Jobs.JobTerminate(ctx, operations.JobTerminateRequest{
        IfMatch: sdk.String("repellat"),
        IfModifiedSince: sdk.String("pariatur"),
        IfNoneMatch: sdk.String("nemo"),
        IfUnmodifiedSince: sdk.String("reprehenderit"),
        JobTerminateParameter: &shared.JobTerminateParameter{
            TerminateReason: sdk.String("aperiam"),
        },
        APIVersion: "odio",
        ClientRequestID: sdk.String("minima"),
        JobID: "in",
        OcpDate: sdk.String("ducimus"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(567846),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## JobUpdate

Updates the properties of a job.

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
    res, err := s.Jobs.JobUpdate(ctx, operations.JobUpdateRequest{
        IfMatch: sdk.String("dolores"),
        IfModifiedSince: sdk.String("error"),
        IfNoneMatch: sdk.String("veritatis"),
        IfUnmodifiedSince: sdk.String("ducimus"),
        JobUpdateParameter: shared.JobUpdateParameter{
            Constraints: &shared.JobConstraints{
                MaxTaskRetryCount: sdk.Int(452729),
                MaxWallClockTime: sdk.String("pariatur"),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Benny Jacobs"),
                    Value: sdk.String("officiis"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Rickey Heidenreich"),
                    Value: sdk.String("modi"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Bobbie Terry"),
                    Value: sdk.String("cum"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Lila Harvey"),
                    Value: sdk.String("nam"),
                },
            },
            PoolInfo: shared.PoolInformation{
                AutoPoolSpecification: &shared.AutoPoolSpecification{
                    AutoPoolIDPrefix: sdk.String("dicta"),
                    KeepAlive: sdk.Bool(false),
                    Pool: &shared.PoolSpecification{
                        ApplicationPackageReferences: []shared.ApplicationPackageReference{
                            shared.ApplicationPackageReference{
                                ApplicationID: "necessitatibus",
                                Version: sdk.String("nobis"),
                            },
                        },
                        AutoScaleEvaluationInterval: sdk.String("ipsa"),
                        AutoScaleFormula: sdk.String("ducimus"),
                        CertificateReferences: []shared.CertificateReference{
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                                StoreName: sdk.String("quasi"),
                                Thumbprint: "laboriosam",
                                ThumbprintAlgorithm: "pariatur",
                                Visibility: sdk.String("libero"),
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                                StoreName: sdk.String("occaecati"),
                                Thumbprint: "nemo",
                                ThumbprintAlgorithm: "aliquam",
                                Visibility: sdk.String("nostrum"),
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                StoreName: sdk.String("eligendi"),
                                Thumbprint: "sint",
                                ThumbprintAlgorithm: "enim",
                                Visibility: sdk.String("hic"),
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                                StoreName: sdk.String("quas"),
                                Thumbprint: "totam",
                                ThumbprintAlgorithm: "molestias",
                                Visibility: sdk.String("odio"),
                            },
                        },
                        DisplayName: sdk.String("eaque"),
                        EnableAutoScale: sdk.Bool(false),
                        EnableInterNodeCommunication: sdk.Bool(false),
                        MaxTasksPerNode: sdk.Int(901163),
                        Metadata: []shared.MetadataItem{
                            shared.MetadataItem{
                                Name: sdk.String("Nick Shields"),
                                Value: sdk.String("velit"),
                            },
                        },
                        OsFamily: sdk.String("doloremque"),
                        ResizeTimeout: sdk.String("delectus"),
                        StartTask: &shared.StartTask{
                            CommandLine: sdk.String("impedit"),
                            EnvironmentSettings: []shared.EnvironmentSetting{
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Sylvia Turner II"),
                                    Value: sdk.String("veniam"),
                                },
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Roger McDermott"),
                                    Value: sdk.String("possimus"),
                                },
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Danielle Waters"),
                                    Value: sdk.String("veniam"),
                                },
                            },
                            MaxTaskRetryCount: sdk.Int(164532),
                            ResourceFiles: []shared.ResourceFile{
                                shared.ResourceFile{
                                    BlobSource: sdk.String("laudantium"),
                                    FilePath: sdk.String("odit"),
                                },
                                shared.ResourceFile{
                                    BlobSource: sdk.String("pariatur"),
                                    FilePath: sdk.String("amet"),
                                },
                                shared.ResourceFile{
                                    BlobSource: sdk.String("exercitationem"),
                                    FilePath: sdk.String("ab"),
                                },
                                shared.ResourceFile{
                                    BlobSource: sdk.String("velit"),
                                    FilePath: sdk.String("facilis"),
                                },
                            },
                            RunElevated: sdk.Bool(false),
                            WaitForSuccess: sdk.Bool(false),
                        },
                        TargetDedicated: sdk.Int(731065),
                        TargetOSVersion: sdk.String("nisi"),
                        TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                            NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumUnmapped,
                        },
                        VMSize: sdk.String("quaerat"),
                    },
                    PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumJob,
                },
                PoolID: sdk.String("distinctio"),
            },
            Priority: sdk.Int(392430),
        },
        APIVersion: "quis",
        ClientRequestID: sdk.String("nisi"),
        JobID: "libero",
        OcpDate: sdk.String("minus"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(815200),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
