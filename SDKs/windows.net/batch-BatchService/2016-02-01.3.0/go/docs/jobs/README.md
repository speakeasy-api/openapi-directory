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
                    Name: sdk.String("Cameron Reinger"),
                    Value: sdk.String("enim"),
                },
                shared.EnvironmentSetting{
                    Name: sdk.String("Estelle Jakubowski"),
                    Value: sdk.String("ut"),
                },
                shared.EnvironmentSetting{
                    Name: sdk.String("Lula Bartell"),
                    Value: sdk.String("aliquid"),
                },
                shared.EnvironmentSetting{
                    Name: sdk.String("Miss Nora Moen"),
                    Value: sdk.String("culpa"),
                },
            },
            Constraints: &shared.JobConstraints{
                MaxTaskRetryCount: sdk.Int(29634),
                MaxWallClockTime: sdk.String("sapiente"),
            },
            DisplayName: sdk.String("officiis"),
            ID: "1ade008e-6f8c-45f3-90d8-cdb5a3418143",
            JobManagerTask: &shared.JobManagerTask{
                CommandLine: sdk.String("consequatur"),
                Constraints: &shared.TaskConstraints{
                    MaxTaskRetryCount: sdk.Int(100014),
                    MaxWallClockTime: sdk.String("sit"),
                    RetentionTime: sdk.String("modi"),
                },
                DisplayName: sdk.String("fugit"),
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Eric Fadel"),
                        Value: sdk.String("consequuntur"),
                    },
                },
                ID: sdk.String("08ece7e2-53b6-4684-91c6-c6e205e16dea"),
                KillJobOnCompletion: sdk.Bool(false),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("sequi"),
                        FileMode: sdk.String("doloribus"),
                        FilePath: sdk.String("repudiandae"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("optio"),
                        FileMode: sdk.String("occaecati"),
                        FilePath: sdk.String("nemo"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("voluptate"),
                        FileMode: sdk.String("blanditiis"),
                        FilePath: sdk.String("officia"),
                    },
                },
                RunElevated: sdk.Bool(false),
                RunExclusive: sdk.Bool(false),
            },
            JobPreparationTask: &shared.JobPreparationTask{
                CommandLine: sdk.String("voluptas"),
                Constraints: &shared.TaskConstraints{
                    MaxTaskRetryCount: sdk.Int(254025),
                    MaxWallClockTime: sdk.String("nemo"),
                    RetentionTime: sdk.String("quos"),
                },
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Caroline Dooley"),
                        Value: sdk.String("incidunt"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Mrs. Hilda Stark"),
                        Value: sdk.String("consectetur"),
                    },
                },
                ID: sdk.String("09fb0929-921a-4efb-9f58-c4d86e68e4be"),
                RerunOnNodeRebootAfterSuccess: sdk.Bool(false),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("ipsam"),
                        FileMode: sdk.String("vel"),
                        FilePath: sdk.String("alias"),
                    },
                },
                RunElevated: sdk.Bool(false),
                WaitForSuccess: sdk.Bool(false),
            },
            JobReleaseTask: &shared.JobReleaseTask{
                CommandLine: sdk.String("quasi"),
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Lloyd Mayer"),
                        Value: sdk.String("esse"),
                    },
                },
                ID: sdk.String("57a59ecf-ef66-4ef1-8aa3-383c2beb4773"),
                MaxWallClockTime: sdk.String("dignissimos"),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("quo"),
                        FileMode: sdk.String("deleniti"),
                        FilePath: sdk.String("quibusdam"),
                    },
                },
                RetentionTime: sdk.String("iure"),
                RunElevated: sdk.Bool(false),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Cecil Gutkowski DDS"),
                    Value: sdk.String("libero"),
                },
            },
            PoolInfo: shared.PoolInformation{
                AutoPoolSpecification: &shared.AutoPoolSpecification{
                    AutoPoolIDPrefix: sdk.String("architecto"),
                    KeepAlive: sdk.Bool(false),
                    Pool: &shared.PoolSpecification{
                        ApplicationPackageReferences: []shared.ApplicationPackageReference{
                            shared.ApplicationPackageReference{
                                ApplicationID: "quia",
                                Version: sdk.String("porro"),
                            },
                            shared.ApplicationPackageReference{
                                ApplicationID: "aliquam",
                                Version: sdk.String("velit"),
                            },
                            shared.ApplicationPackageReference{
                                ApplicationID: "illo",
                                Version: sdk.String("accusantium"),
                            },
                            shared.ApplicationPackageReference{
                                ApplicationID: "vel",
                                Version: sdk.String("ea"),
                            },
                        },
                        AutoScaleEvaluationInterval: sdk.String("beatae"),
                        AutoScaleFormula: sdk.String("vero"),
                        CertificateReferences: []shared.CertificateReference{
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                                StoreName: sdk.String("velit"),
                                Thumbprint: "ut",
                                ThumbprintAlgorithm: "perspiciatis",
                                Visibility: []shared.CertificateReferenceVisibilityEnum{
                                    shared.CertificateReferenceVisibilityEnumStarttask,
                                    shared.CertificateReferenceVisibilityEnumUnmapped,
                                    shared.CertificateReferenceVisibilityEnumUnmapped,
                                    shared.CertificateReferenceVisibilityEnumRemoteuser,
                                },
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                StoreName: sdk.String("alias"),
                                Thumbprint: "nisi",
                                ThumbprintAlgorithm: "itaque",
                                Visibility: []shared.CertificateReferenceVisibilityEnum{
                                    shared.CertificateReferenceVisibilityEnumRemoteuser,
                                },
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                                StoreName: sdk.String("dolor"),
                                Thumbprint: "iusto",
                                ThumbprintAlgorithm: "sit",
                                Visibility: []shared.CertificateReferenceVisibilityEnum{
                                    shared.CertificateReferenceVisibilityEnumStarttask,
                                },
                            },
                        },
                        CloudServiceConfiguration: &shared.CloudServiceConfiguration{
                            CurrentOSVersion: sdk.String("officia"),
                            OsFamily: "recusandae",
                            TargetOSVersion: sdk.String("ea"),
                        },
                        DisplayName: sdk.String("quidem"),
                        EnableAutoScale: sdk.Bool(false),
                        EnableInterNodeCommunication: sdk.Bool(false),
                        MaxTasksPerNode: sdk.Int(377406),
                        Metadata: []shared.MetadataItem{
                            shared.MetadataItem{
                                Name: sdk.String("Freddie Quitzon"),
                                Value: sdk.String("voluptate"),
                            },
                            shared.MetadataItem{
                                Name: sdk.String("Lindsey Treutel"),
                                Value: sdk.String("ipsam"),
                            },
                            shared.MetadataItem{
                                Name: sdk.String("Jodi Mueller"),
                                Value: sdk.String("veritatis"),
                            },
                        },
                        ResizeTimeout: sdk.String("vero"),
                        StartTask: &shared.StartTask{
                            CommandLine: sdk.String("consectetur"),
                            EnvironmentSettings: []shared.EnvironmentSetting{
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Florence Hand"),
                                    Value: sdk.String("ex"),
                                },
                            },
                            MaxTaskRetryCount: sdk.Int(367626),
                            ResourceFiles: []shared.ResourceFile{
                                shared.ResourceFile{
                                    BlobSource: sdk.String("libero"),
                                    FileMode: sdk.String("rem"),
                                    FilePath: sdk.String("dolorum"),
                                },
                                shared.ResourceFile{
                                    BlobSource: sdk.String("odio"),
                                    FileMode: sdk.String("fugit"),
                                    FilePath: sdk.String("alias"),
                                },
                                shared.ResourceFile{
                                    BlobSource: sdk.String("magni"),
                                    FileMode: sdk.String("vel"),
                                    FilePath: sdk.String("quae"),
                                },
                            },
                            RunElevated: sdk.Bool(false),
                            WaitForSuccess: sdk.Bool(false),
                        },
                        TargetDedicated: sdk.Int(63553),
                        TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                            NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumSpread,
                        },
                        VirtualMachineConfiguration: &shared.VirtualMachineConfiguration{
                            ImageReference: shared.ImageReference{
                                Offer: "neque",
                                Publisher: "exercitationem",
                                Sku: "itaque",
                                Version: sdk.String("et"),
                            },
                            NodeAgentSKUID: "ipsum",
                            WindowsConfiguration: &shared.WindowsConfiguration{
                                EnableAutomaticUpdates: sdk.Bool(false),
                            },
                        },
                        VMSize: sdk.String("unde"),
                    },
                    PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumUnmapped,
                },
                PoolID: sdk.String("distinctio"),
            },
            Priority: sdk.Int(802894),
            UsesTaskDependencies: sdk.Bool(false),
        },
        APIVersion: "quia",
        ClientRequestID: sdk.String("quia"),
        OcpDate: sdk.String("nostrum"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(605712),
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
        IfMatch: sdk.String("libero"),
        IfModifiedSince: sdk.String("dicta"),
        IfNoneMatch: sdk.String("id"),
        IfUnmodifiedSince: sdk.String("libero"),
        APIVersion: "fugiat",
        ClientRequestID: sdk.String("officia"),
        JobID: "quos",
        OcpDate: sdk.String("placeat"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(25756),
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
        IfMatch: sdk.String("iusto"),
        IfModifiedSince: sdk.String("ipsa"),
        IfNoneMatch: sdk.String("voluptates"),
        IfUnmodifiedSince: sdk.String("inventore"),
        JobDisableParameter: shared.JobDisableParameter{
            DisableTasks: shared.JobDisableParameterDisableTasksEnumRequeue,
        },
        APIVersion: "totam",
        ClientRequestID: sdk.String("dolore"),
        JobID: "eligendi",
        OcpDate: sdk.String("distinctio"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(32273),
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
        IfMatch: sdk.String("autem"),
        IfModifiedSince: sdk.String("esse"),
        IfNoneMatch: sdk.String("dolores"),
        IfUnmodifiedSince: sdk.String("assumenda"),
        APIVersion: "beatae",
        ClientRequestID: sdk.String("est"),
        JobID: "facere",
        OcpDate: sdk.String("corrupti"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(473143),
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
        DollarExpand: sdk.String("provident"),
        DollarSelect: sdk.String("accusamus"),
        APIVersion: "necessitatibus",
        ClientRequestID: sdk.String("tempore"),
        JobID: "sint",
        OcpDate: sdk.String("ea"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(421819),
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
        APIVersion: "ipsam",
        ClientRequestID: sdk.String("rerum"),
        OcpDate: sdk.String("laudantium"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(357207),
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
        DollarExpand: sdk.String("officiis"),
        DollarFilter: sdk.String("voluptatibus"),
        DollarSelect: sdk.String("cum"),
        APIVersion: "at",
        ClientRequestID: sdk.String("alias"),
        Maxresults: sdk.Int(156653),
        OcpDate: sdk.String("quidem"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(684126),
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
        DollarExpand: sdk.String("repudiandae"),
        DollarFilter: sdk.String("accusantium"),
        DollarSelect: sdk.String("expedita"),
        APIVersion: "officiis",
        ClientRequestID: sdk.String("eos"),
        JobScheduleID: "quibusdam",
        Maxresults: sdk.Int(483518),
        OcpDate: sdk.String("praesentium"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(140316),
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
        DollarFilter: sdk.String("explicabo"),
        DollarSelect: sdk.String("corporis"),
        APIVersion: "error",
        ClientRequestID: sdk.String("earum"),
        JobID: "adipisci",
        Maxresults: sdk.Int(923306),
        OcpDate: sdk.String("similique"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(282837),
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
        IfMatch: sdk.String("quidem"),
        IfModifiedSince: sdk.String("quis"),
        IfNoneMatch: sdk.String("beatae"),
        IfUnmodifiedSince: sdk.String("unde"),
        JobPatchParameter: shared.JobPatchParameter{
            Constraints: &shared.JobConstraints{
                MaxTaskRetryCount: sdk.Int(476946),
                MaxWallClockTime: sdk.String("delectus"),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Elaine Gerhold"),
                    Value: sdk.String("officia"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Kara Tromp"),
                    Value: sdk.String("expedita"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Terrance Hansen"),
                    Value: sdk.String("neque"),
                },
            },
            PoolInfo: &shared.PoolInformation{
                AutoPoolSpecification: &shared.AutoPoolSpecification{
                    AutoPoolIDPrefix: sdk.String("in"),
                    KeepAlive: sdk.Bool(false),
                    Pool: &shared.PoolSpecification{
                        ApplicationPackageReferences: []shared.ApplicationPackageReference{
                            shared.ApplicationPackageReference{
                                ApplicationID: "eum",
                                Version: sdk.String("modi"),
                            },
                            shared.ApplicationPackageReference{
                                ApplicationID: "corporis",
                                Version: sdk.String("magnam"),
                            },
                            shared.ApplicationPackageReference{
                                ApplicationID: "voluptates",
                                Version: sdk.String("maiores"),
                            },
                            shared.ApplicationPackageReference{
                                ApplicationID: "tempore",
                                Version: sdk.String("aperiam"),
                            },
                        },
                        AutoScaleEvaluationInterval: sdk.String("libero"),
                        AutoScaleFormula: sdk.String("ratione"),
                        CertificateReferences: []shared.CertificateReference{
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                                StoreName: sdk.String("occaecati"),
                                Thumbprint: "voluptas",
                                ThumbprintAlgorithm: "quo",
                                Visibility: []shared.CertificateReferenceVisibilityEnum{
                                    shared.CertificateReferenceVisibilityEnumUnmapped,
                                },
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                StoreName: sdk.String("nostrum"),
                                Thumbprint: "est",
                                ThumbprintAlgorithm: "impedit",
                                Visibility: []shared.CertificateReferenceVisibilityEnum{
                                    shared.CertificateReferenceVisibilityEnumRemoteuser,
                                    shared.CertificateReferenceVisibilityEnumUnmapped,
                                    shared.CertificateReferenceVisibilityEnumStarttask,
                                    shared.CertificateReferenceVisibilityEnumUnmapped,
                                },
                            },
                        },
                        CloudServiceConfiguration: &shared.CloudServiceConfiguration{
                            CurrentOSVersion: sdk.String("pariatur"),
                            OsFamily: "nemo",
                            TargetOSVersion: sdk.String("reprehenderit"),
                        },
                        DisplayName: sdk.String("aperiam"),
                        EnableAutoScale: sdk.Bool(false),
                        EnableInterNodeCommunication: sdk.Bool(false),
                        MaxTasksPerNode: sdk.Int(486410),
                        Metadata: []shared.MetadataItem{
                            shared.MetadataItem{
                                Name: sdk.String("Dora Mante"),
                                Value: sdk.String("veritatis"),
                            },
                            shared.MetadataItem{
                                Name: sdk.String("Colleen Streich"),
                                Value: sdk.String("optio"),
                            },
                        },
                        ResizeTimeout: sdk.String("ex"),
                        StartTask: &shared.StartTask{
                            CommandLine: sdk.String("quaerat"),
                            EnvironmentSettings: []shared.EnvironmentSetting{
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Clark Predovic"),
                                    Value: sdk.String("dolorem"),
                                },
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Melissa Mayer"),
                                    Value: sdk.String("repudiandae"),
                                },
                            },
                            MaxTaskRetryCount: sdk.Int(741232),
                            ResourceFiles: []shared.ResourceFile{
                                shared.ResourceFile{
                                    BlobSource: sdk.String("earum"),
                                    FileMode: sdk.String("veniam"),
                                    FilePath: sdk.String("animi"),
                                },
                            },
                            RunElevated: sdk.Bool(false),
                            WaitForSuccess: sdk.Bool(false),
                        },
                        TargetDedicated: sdk.Int(175372),
                        TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                            NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumUnmapped,
                        },
                        VirtualMachineConfiguration: &shared.VirtualMachineConfiguration{
                            ImageReference: shared.ImageReference{
                                Offer: "dicta",
                                Publisher: "consequuntur",
                                Sku: "necessitatibus",
                                Version: sdk.String("nobis"),
                            },
                            NodeAgentSKUID: "ipsa",
                            WindowsConfiguration: &shared.WindowsConfiguration{
                                EnableAutomaticUpdates: sdk.Bool(false),
                            },
                        },
                        VMSize: sdk.String("ducimus"),
                    },
                    PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumUnmapped,
                },
                PoolID: sdk.String("veritatis"),
            },
            Priority: sdk.Int(96450),
        },
        APIVersion: "laboriosam",
        ClientRequestID: sdk.String("pariatur"),
        JobID: "libero",
        OcpDate: sdk.String("excepturi"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(578210),
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
        IfMatch: sdk.String("nemo"),
        IfModifiedSince: sdk.String("aliquam"),
        IfNoneMatch: sdk.String("nostrum"),
        IfUnmodifiedSince: sdk.String("doloribus"),
        JobTerminateParameter: &shared.JobTerminateParameter{
            TerminateReason: sdk.String("eligendi"),
        },
        APIVersion: "sint",
        ClientRequestID: sdk.String("enim"),
        JobID: "hic",
        OcpDate: sdk.String("animi"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(559774),
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
        IfMatch: sdk.String("totam"),
        IfModifiedSince: sdk.String("molestias"),
        IfNoneMatch: sdk.String("odio"),
        IfUnmodifiedSince: sdk.String("eaque"),
        JobUpdateParameter: shared.JobUpdateParameter{
            Constraints: &shared.JobConstraints{
                MaxTaskRetryCount: sdk.Int(901163),
                MaxWallClockTime: sdk.String("architecto"),
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Kristopher Reynolds"),
                    Value: sdk.String("doloremque"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Edmund Robel"),
                    Value: sdk.String("saepe"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Anthony Hayes"),
                    Value: sdk.String("architecto"),
                },
            },
            PoolInfo: shared.PoolInformation{
                AutoPoolSpecification: &shared.AutoPoolSpecification{
                    AutoPoolIDPrefix: sdk.String("cupiditate"),
                    KeepAlive: sdk.Bool(false),
                    Pool: &shared.PoolSpecification{
                        ApplicationPackageReferences: []shared.ApplicationPackageReference{
                            shared.ApplicationPackageReference{
                                ApplicationID: "eligendi",
                                Version: sdk.String("possimus"),
                            },
                            shared.ApplicationPackageReference{
                                ApplicationID: "non",
                                Version: sdk.String("magnam"),
                            },
                        },
                        AutoScaleEvaluationInterval: sdk.String("itaque"),
                        AutoScaleFormula: sdk.String("sed"),
                        CertificateReferences: []shared.CertificateReference{
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                                StoreName: sdk.String("consequuntur"),
                                Thumbprint: "facere",
                                ThumbprintAlgorithm: "laudantium",
                                Visibility: []shared.CertificateReferenceVisibilityEnum{
                                    shared.CertificateReferenceVisibilityEnumUnmapped,
                                },
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                                StoreName: sdk.String("exercitationem"),
                                Thumbprint: "ab",
                                ThumbprintAlgorithm: "velit",
                                Visibility: []shared.CertificateReferenceVisibilityEnum{
                                    shared.CertificateReferenceVisibilityEnumRemoteuser,
                                    shared.CertificateReferenceVisibilityEnumTask,
                                    shared.CertificateReferenceVisibilityEnumUnmapped,
                                },
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                                StoreName: sdk.String("blanditiis"),
                                Thumbprint: "distinctio",
                                ThumbprintAlgorithm: "nisi",
                                Visibility: []shared.CertificateReferenceVisibilityEnum{
                                    shared.CertificateReferenceVisibilityEnumTask,
                                    shared.CertificateReferenceVisibilityEnumRemoteuser,
                                },
                            },
                            shared.CertificateReference{
                                StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                                StoreName: sdk.String("facere"),
                                Thumbprint: "facilis",
                                ThumbprintAlgorithm: "ipsum",
                                Visibility: []shared.CertificateReferenceVisibilityEnum{
                                    shared.CertificateReferenceVisibilityEnumUnmapped,
                                    shared.CertificateReferenceVisibilityEnumUnmapped,
                                },
                            },
                        },
                        CloudServiceConfiguration: &shared.CloudServiceConfiguration{
                            CurrentOSVersion: sdk.String("consequuntur"),
                            OsFamily: "debitis",
                            TargetOSVersion: sdk.String("labore"),
                        },
                        DisplayName: sdk.String("rerum"),
                        EnableAutoScale: sdk.Bool(false),
                        EnableInterNodeCommunication: sdk.Bool(false),
                        MaxTasksPerNode: sdk.Int(179795),
                        Metadata: []shared.MetadataItem{
                            shared.MetadataItem{
                                Name: sdk.String("Rita Kshlerin"),
                                Value: sdk.String("eligendi"),
                            },
                            shared.MetadataItem{
                                Name: sdk.String("Fredrick Towne"),
                                Value: sdk.String("dicta"),
                            },
                        },
                        ResizeTimeout: sdk.String("error"),
                        StartTask: &shared.StartTask{
                            CommandLine: sdk.String("porro"),
                            EnvironmentSettings: []shared.EnvironmentSetting{
                                shared.EnvironmentSetting{
                                    Name: sdk.String("Joy Stehr"),
                                    Value: sdk.String("enim"),
                                },
                            },
                            MaxTaskRetryCount: sdk.Int(965090),
                            ResourceFiles: []shared.ResourceFile{
                                shared.ResourceFile{
                                    BlobSource: sdk.String("dignissimos"),
                                    FileMode: sdk.String("libero"),
                                    FilePath: sdk.String("illo"),
                                },
                                shared.ResourceFile{
                                    BlobSource: sdk.String("ab"),
                                    FileMode: sdk.String("incidunt"),
                                    FilePath: sdk.String("accusamus"),
                                },
                            },
                            RunElevated: sdk.Bool(false),
                            WaitForSuccess: sdk.Bool(false),
                        },
                        TargetDedicated: sdk.Int(902581),
                        TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                            NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumUnmapped,
                        },
                        VirtualMachineConfiguration: &shared.VirtualMachineConfiguration{
                            ImageReference: shared.ImageReference{
                                Offer: "veniam",
                                Publisher: "eos",
                                Sku: "reiciendis",
                                Version: sdk.String("earum"),
                            },
                            NodeAgentSKUID: "reprehenderit",
                            WindowsConfiguration: &shared.WindowsConfiguration{
                                EnableAutomaticUpdates: sdk.Bool(false),
                            },
                        },
                        VMSize: sdk.String("praesentium"),
                    },
                    PoolLifetimeOption: shared.AutoPoolSpecificationPoolLifetimeOptionEnumJob,
                },
                PoolID: sdk.String("repellat"),
            },
            Priority: sdk.Int(789770),
        },
        APIVersion: "sequi",
        ClientRequestID: sdk.String("nihil"),
        JobID: "deleniti",
        OcpDate: sdk.String("illo"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(290248),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
