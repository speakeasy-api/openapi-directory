# Pools

### Available Operations

* [PoolAdd](#pooladd) - Adds a pool to the specified account.
* [PoolDelete](#pooldelete) - Deletes a pool from the specified account.
* [PoolDisableAutoScale](#pooldisableautoscale) - Disables automatic scaling for a pool.
* [PoolEnableAutoScale](#poolenableautoscale) - Enables automatic scaling for a pool.
* [PoolEvaluateAutoScale](#poolevaluateautoscale) - Gets the result of evaluating an automatic scaling formula on the pool.
* [PoolExists](#poolexists) - Gets basic properties of a pool.
* [PoolGet](#poolget) - Gets information about the specified pool.
* [PoolGetAllPoolsLifetimeStatistics](#poolgetallpoolslifetimestatistics) - Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
* [PoolList](#poollist) - Lists all of the pools in the specified account.
* [PoolListPoolUsageMetrics](#poollistpoolusagemetrics) - Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
* [PoolPatch](#poolpatch) - Updates the properties of a pool.
* [PoolResize](#poolresize) - Changes the number of compute nodes that are assigned to a pool.
* [PoolStopResize](#poolstopresize) - Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
* [PoolUpdateProperties](#poolupdateproperties) - Updates the properties of a pool.
* [PoolUpgradeOS](#poolupgradeos) - Upgrades the operating system of the specified pool.

## PoolAdd

Adds a pool to the specified account.

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
    res, err := s.Pools.PoolAdd(ctx, operations.PoolAddRequest{
        PoolAddParameter: shared.PoolAddParameter{
            ApplicationPackageReferences: []shared.ApplicationPackageReference{
                shared.ApplicationPackageReference{
                    ApplicationID: "aliquam",
                    Version: sdk.String("quisquam"),
                },
                shared.ApplicationPackageReference{
                    ApplicationID: "provident",
                    Version: sdk.String("laudantium"),
                },
                shared.ApplicationPackageReference{
                    ApplicationID: "repudiandae",
                    Version: sdk.String("consequatur"),
                },
                shared.ApplicationPackageReference{
                    ApplicationID: "maxime",
                    Version: sdk.String("aspernatur"),
                },
            },
            AutoScaleEvaluationInterval: sdk.String("nam"),
            AutoScaleFormula: sdk.String("expedita"),
            CertificateReferences: []shared.CertificateReference{
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                    StoreName: sdk.String("repudiandae"),
                    Thumbprint: "rerum",
                    ThumbprintAlgorithm: "dignissimos",
                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                        shared.CertificateReferenceVisibilityEnumUnmapped,
                        shared.CertificateReferenceVisibilityEnumRemoteuser,
                    },
                },
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                    StoreName: sdk.String("iure"),
                    Thumbprint: "dolorem",
                    ThumbprintAlgorithm: "commodi",
                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                        shared.CertificateReferenceVisibilityEnumTask,
                        shared.CertificateReferenceVisibilityEnumStarttask,
                        shared.CertificateReferenceVisibilityEnumStarttask,
                        shared.CertificateReferenceVisibilityEnumTask,
                    },
                },
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                    StoreName: sdk.String("amet"),
                    Thumbprint: "illum",
                    ThumbprintAlgorithm: "praesentium",
                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                        shared.CertificateReferenceVisibilityEnumRemoteuser,
                        shared.CertificateReferenceVisibilityEnumStarttask,
                        shared.CertificateReferenceVisibilityEnumStarttask,
                    },
                },
            },
            CloudServiceConfiguration: &shared.CloudServiceConfiguration{
                CurrentOSVersion: sdk.String("dicta"),
                OsFamily: "laudantium",
                TargetOSVersion: sdk.String("doloremque"),
            },
            DisplayName: sdk.String("earum"),
            EnableAutoScale: sdk.Bool(false),
            EnableInterNodeCommunication: sdk.Bool(false),
            ID: "739ae9e0-57eb-4809-a281-0331f3981d4c",
            MaxTasksPerNode: sdk.Int(456704),
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Ms. Luz Jenkins"),
                    Value: sdk.String("velit"),
                },
            },
            ResizeTimeout: sdk.String("porro"),
            StartTask: &shared.StartTask{
                CommandLine: sdk.String("provident"),
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Cody Feil"),
                        Value: sdk.String("temporibus"),
                    },
                },
                MaxTaskRetryCount: sdk.Int(639622),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("tenetur"),
                        FileMode: sdk.String("aspernatur"),
                        FilePath: sdk.String("quo"),
                    },
                },
                RunElevated: sdk.Bool(false),
                WaitForSuccess: sdk.Bool(false),
            },
            TargetDedicated: sdk.Int(931077),
            TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumUnmapped,
            },
            VirtualMachineConfiguration: &shared.VirtualMachineConfiguration{
                ImageReference: shared.ImageReference{
                    Offer: "laborum",
                    Publisher: "dignissimos",
                    Sku: "vero",
                    Version: sdk.String("qui"),
                },
                NodeAgentSKUID: "consectetur",
                WindowsConfiguration: &shared.WindowsConfiguration{
                    EnableAutomaticUpdates: sdk.Bool(false),
                },
            },
            VMSize: "repellat",
        },
        APIVersion: "explicabo",
        ClientRequestID: sdk.String("explicabo"),
        OcpDate: sdk.String("exercitationem"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(471457),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PoolDelete

Deletes a pool from the specified account.

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
    res, err := s.Pools.PoolDelete(ctx, operations.PoolDeleteRequest{
        IfMatch: sdk.String("non"),
        IfModifiedSince: sdk.String("ab"),
        IfNoneMatch: sdk.String("illo"),
        IfUnmodifiedSince: sdk.String("hic"),
        APIVersion: "deserunt",
        ClientRequestID: sdk.String("delectus"),
        OcpDate: sdk.String("non"),
        PoolID: "distinctio",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(450224),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PoolDisableAutoScale

Disables automatic scaling for a pool.

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
    res, err := s.Pools.PoolDisableAutoScale(ctx, operations.PoolDisableAutoScaleRequest{
        APIVersion: "exercitationem",
        ClientRequestID: sdk.String("labore"),
        OcpDate: sdk.String("numquam"),
        PoolID: "repudiandae",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(265303),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PoolEnableAutoScale

Enables automatic scaling for a pool.

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
    res, err := s.Pools.PoolEnableAutoScale(ctx, operations.PoolEnableAutoScaleRequest{
        IfMatch: sdk.String("in"),
        IfModifiedSince: sdk.String("explicabo"),
        IfNoneMatch: sdk.String("accusamus"),
        IfUnmodifiedSince: sdk.String("rem"),
        PoolEnableAutoScaleParameter: shared.PoolEnableAutoScaleParameter{
            AutoScaleEvaluationInterval: sdk.String("aperiam"),
            AutoScaleFormula: sdk.String("odit"),
        },
        APIVersion: "deleniti",
        ClientRequestID: sdk.String("enim"),
        OcpDate: sdk.String("voluptate"),
        PoolID: "similique",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(326118),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PoolEvaluateAutoScale

Gets the result of evaluating an automatic scaling formula on the pool.

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
    res, err := s.Pools.PoolEvaluateAutoScale(ctx, operations.PoolEvaluateAutoScaleRequest{
        PoolEvaluateAutoScaleParameter: shared.PoolEvaluateAutoScaleParameter{
            AutoScaleFormula: "libero",
        },
        APIVersion: "magnam",
        ClientRequestID: sdk.String("sit"),
        OcpDate: sdk.String("modi"),
        PoolID: "eum",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(199529),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AutoScaleRun != nil {
        // handle response
    }
}
```

## PoolExists

Gets basic properties of a pool.

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
    res, err := s.Pools.PoolExists(ctx, operations.PoolExistsRequest{
        IfMatch: sdk.String("mollitia"),
        IfModifiedSince: sdk.String("dignissimos"),
        IfNoneMatch: sdk.String("fugiat"),
        IfUnmodifiedSince: sdk.String("nostrum"),
        APIVersion: "molestiae",
        ClientRequestID: sdk.String("veniam"),
        OcpDate: sdk.String("reiciendis"),
        PoolID: "ab",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(265632),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PoolGet

Gets information about the specified pool.

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
    res, err := s.Pools.PoolGet(ctx, operations.PoolGetRequest{
        DollarExpand: sdk.String("aut"),
        DollarSelect: sdk.String("aut"),
        IfMatch: sdk.String("eveniet"),
        IfModifiedSince: sdk.String("odio"),
        IfNoneMatch: sdk.String("commodi"),
        IfUnmodifiedSince: sdk.String("numquam"),
        APIVersion: "dolorum",
        ClientRequestID: sdk.String("possimus"),
        OcpDate: sdk.String("voluptate"),
        PoolID: "consectetur",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(200637),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudPool != nil {
        // handle response
    }
}
```

## PoolGetAllPoolsLifetimeStatistics

Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.

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
    res, err := s.Pools.PoolGetAllPoolsLifetimeStatistics(ctx, operations.PoolGetAllPoolsLifetimeStatisticsRequest{
        APIVersion: "quaerat",
        ClientRequestID: sdk.String("itaque"),
        OcpDate: sdk.String("minus"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(122662),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PoolStatistics != nil {
        // handle response
    }
}
```

## PoolList

Lists all of the pools in the specified account.

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
    res, err := s.Pools.PoolList(ctx, operations.PoolListRequest{
        DollarExpand: sdk.String("distinctio"),
        DollarFilter: sdk.String("iusto"),
        DollarSelect: sdk.String("quas"),
        APIVersion: "et",
        ClientRequestID: sdk.String("facilis"),
        Maxresults: sdk.Int(229276),
        OcpDate: sdk.String("autem"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(685415),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudPoolListResult != nil {
        // handle response
    }
}
```

## PoolListPoolUsageMetrics

Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Pools.PoolListPoolUsageMetrics(ctx, operations.PoolListPoolUsageMetricsRequest{
        DollarFilter: sdk.String("alias"),
        APIVersion: "rem",
        ClientRequestID: sdk.String("aut"),
        Endtime: types.MustTimeFromString("2021-12-23T19:23:38.876Z"),
        Maxresults: sdk.Int(832239),
        OcpDate: sdk.String("veritatis"),
        ReturnClientRequestID: sdk.Bool(false),
        Starttime: types.MustTimeFromString("2022-12-13T08:34:42.745Z"),
        Timeout: sdk.Int(904827),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PoolListPoolUsageMetricsResult != nil {
        // handle response
    }
}
```

## PoolPatch

Updates the properties of a pool.

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
    res, err := s.Pools.PoolPatch(ctx, operations.PoolPatchRequest{
        IfMatch: sdk.String("delectus"),
        IfModifiedSince: sdk.String("mollitia"),
        IfNoneMatch: sdk.String("nulla"),
        IfUnmodifiedSince: sdk.String("officia"),
        PoolPatchParameter: shared.PoolPatchParameter{
            ApplicationPackageReferences: []shared.ApplicationPackageReference{
                shared.ApplicationPackageReference{
                    ApplicationID: "voluptatem",
                    Version: sdk.String("alias"),
                },
            },
            CertificateReferences: []shared.CertificateReference{
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                    StoreName: sdk.String("voluptatem"),
                    Thumbprint: "incidunt",
                    ThumbprintAlgorithm: "qui",
                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                        shared.CertificateReferenceVisibilityEnumUnmapped,
                    },
                },
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                    StoreName: sdk.String("explicabo"),
                    Thumbprint: "beatae",
                    ThumbprintAlgorithm: "aliquid",
                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                        shared.CertificateReferenceVisibilityEnumUnmapped,
                        shared.CertificateReferenceVisibilityEnumUnmapped,
                    },
                },
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                    StoreName: sdk.String("officia"),
                    Thumbprint: "libero",
                    ThumbprintAlgorithm: "totam",
                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                        shared.CertificateReferenceVisibilityEnumTask,
                    },
                },
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                    StoreName: sdk.String("impedit"),
                    Thumbprint: "ducimus",
                    ThumbprintAlgorithm: "odit",
                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                        shared.CertificateReferenceVisibilityEnumUnmapped,
                    },
                },
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Cameron Mosciski III"),
                    Value: sdk.String("rerum"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Pat Fritsch"),
                    Value: sdk.String("ullam"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Willie Wiza PhD"),
                    Value: sdk.String("architecto"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Jill Rosenbaum MD"),
                    Value: sdk.String("reiciendis"),
                },
            },
            StartTask: &shared.StartTask{
                CommandLine: sdk.String("a"),
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Olga Hermiston"),
                        Value: sdk.String("itaque"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Joel Cruickshank"),
                        Value: sdk.String("doloribus"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Gregg Torp"),
                        Value: sdk.String("ab"),
                    },
                },
                MaxTaskRetryCount: sdk.Int(573444),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("esse"),
                        FileMode: sdk.String("iure"),
                        FilePath: sdk.String("odio"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("nesciunt"),
                        FileMode: sdk.String("debitis"),
                        FilePath: sdk.String("vel"),
                    },
                },
                RunElevated: sdk.Bool(false),
                WaitForSuccess: sdk.Bool(false),
            },
        },
        APIVersion: "neque",
        ClientRequestID: sdk.String("corporis"),
        OcpDate: sdk.String("voluptas"),
        PoolID: "consequuntur",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(641133),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PoolResize

Changes the number of compute nodes that are assigned to a pool.

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
    res, err := s.Pools.PoolResize(ctx, operations.PoolResizeRequest{
        IfMatch: sdk.String("reprehenderit"),
        IfModifiedSince: sdk.String("distinctio"),
        IfNoneMatch: sdk.String("eius"),
        IfUnmodifiedSince: sdk.String("ipsa"),
        PoolResizeParameter: shared.PoolResizeParameter{
            NodeDeallocationOption: shared.PoolResizeParameterNodeDeallocationOptionEnumTaskcompletion.ToPointer(),
            ResizeTimeout: sdk.String("maiores"),
            TargetDedicated: 35160,
        },
        APIVersion: "veniam",
        ClientRequestID: sdk.String("saepe"),
        OcpDate: sdk.String("neque"),
        PoolID: "facere",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(307173),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PoolStopResize

Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.

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
    res, err := s.Pools.PoolStopResize(ctx, operations.PoolStopResizeRequest{
        IfMatch: sdk.String("quos"),
        IfModifiedSince: sdk.String("doloribus"),
        IfNoneMatch: sdk.String("fugiat"),
        IfUnmodifiedSince: sdk.String("est"),
        APIVersion: "delectus",
        ClientRequestID: sdk.String("velit"),
        OcpDate: sdk.String("vitae"),
        PoolID: "nesciunt",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(630832),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PoolUpdateProperties

Updates the properties of a pool.

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
    res, err := s.Pools.PoolUpdateProperties(ctx, operations.PoolUpdatePropertiesRequest{
        PoolUpdatePropertiesParameter: shared.PoolUpdatePropertiesParameter{
            ApplicationPackageReferences: []shared.ApplicationPackageReference{
                shared.ApplicationPackageReference{
                    ApplicationID: "repellat",
                    Version: sdk.String("nemo"),
                },
            },
            CertificateReferences: []shared.CertificateReference{
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                    StoreName: sdk.String("unde"),
                    Thumbprint: "incidunt",
                    ThumbprintAlgorithm: "explicabo",
                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                        shared.CertificateReferenceVisibilityEnumRemoteuser,
                        shared.CertificateReferenceVisibilityEnumUnmapped,
                    },
                },
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                    StoreName: sdk.String("quidem"),
                    Thumbprint: "nesciunt",
                    ThumbprintAlgorithm: "commodi",
                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                        shared.CertificateReferenceVisibilityEnumStarttask,
                        shared.CertificateReferenceVisibilityEnumTask,
                        shared.CertificateReferenceVisibilityEnumUnmapped,
                        shared.CertificateReferenceVisibilityEnumRemoteuser,
                    },
                },
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                    StoreName: sdk.String("ut"),
                    Thumbprint: "numquam",
                    ThumbprintAlgorithm: "tenetur",
                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                        shared.CertificateReferenceVisibilityEnumRemoteuser,
                    },
                },
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                    StoreName: sdk.String("minima"),
                    Thumbprint: "ex",
                    ThumbprintAlgorithm: "minus",
                    Visibility: []shared.CertificateReferenceVisibilityEnum{
                        shared.CertificateReferenceVisibilityEnumStarttask,
                    },
                },
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Adrienne Ernser"),
                    Value: sdk.String("minima"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Lois Hyatt"),
                    Value: sdk.String("adipisci"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Rodney Heller"),
                    Value: sdk.String("impedit"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Renee Nader"),
                    Value: sdk.String("deserunt"),
                },
            },
            StartTask: &shared.StartTask{
                CommandLine: sdk.String("modi"),
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Bradford Wilkinson"),
                        Value: sdk.String("doloribus"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Miss Frankie Braun DDS"),
                        Value: sdk.String("necessitatibus"),
                    },
                },
                MaxTaskRetryCount: sdk.Int(155978),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("vel"),
                        FileMode: sdk.String("perspiciatis"),
                        FilePath: sdk.String("debitis"),
                    },
                },
                RunElevated: sdk.Bool(false),
                WaitForSuccess: sdk.Bool(false),
            },
        },
        APIVersion: "ullam",
        ClientRequestID: sdk.String("architecto"),
        OcpDate: sdk.String("accusantium"),
        PoolID: "perferendis",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(82876),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PoolUpgradeOS

Upgrades the operating system of the specified pool.

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
    res, err := s.Pools.PoolUpgradeOS(ctx, operations.PoolUpgradeOSRequest{
        IfMatch: sdk.String("provident"),
        IfModifiedSince: sdk.String("cumque"),
        IfNoneMatch: sdk.String("iure"),
        IfUnmodifiedSince: sdk.String("quibusdam"),
        PoolUpgradeOSParameter: shared.PoolUpgradeOSParameter{
            TargetOSVersion: "quod",
        },
        APIVersion: "nemo",
        ClientRequestID: sdk.String("recusandae"),
        OcpDate: sdk.String("velit"),
        PoolID: "magnam",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(493591),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
