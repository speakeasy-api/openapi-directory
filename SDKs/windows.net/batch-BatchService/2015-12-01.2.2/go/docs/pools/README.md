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
                    ApplicationID: "ipsum",
                    Version: sdk.String("ad"),
                },
                shared.ApplicationPackageReference{
                    ApplicationID: "voluptatibus",
                    Version: sdk.String("voluptatibus"),
                },
                shared.ApplicationPackageReference{
                    ApplicationID: "consequuntur",
                    Version: sdk.String("debitis"),
                },
            },
            AutoScaleEvaluationInterval: sdk.String("labore"),
            AutoScaleFormula: sdk.String("rerum"),
            CertificateReferences: []shared.CertificateReference{
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumLocalmachine.ToPointer(),
                    StoreName: sdk.String("nostrum"),
                    Thumbprint: "neque",
                    ThumbprintAlgorithm: "iusto",
                    Visibility: sdk.String("est"),
                },
            },
            DisplayName: sdk.String("rem"),
            EnableAutoScale: sdk.Bool(false),
            EnableInterNodeCommunication: sdk.Bool(false),
            ID: "cd9e7319-c177-4d52-9f77-b114eeb52ff7",
            MaxTasksPerNode: sdk.Int(506312),
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Devin Donnelly"),
                    Value: sdk.String("illo"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Nadine Gutmann"),
                    Value: sdk.String("laudantium"),
                },
            },
            OsFamily: "repudiandae",
            ResizeTimeout: sdk.String("consequatur"),
            StartTask: &shared.StartTask{
                CommandLine: sdk.String("maxime"),
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Rudolph Macejkovic"),
                        Value: sdk.String("rerum"),
                    },
                },
                MaxTaskRetryCount: sdk.Int(492361),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("vero"),
                        FilePath: sdk.String("similique"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("repellendus"),
                        FilePath: sdk.String("iure"),
                    },
                },
                RunElevated: sdk.Bool(false),
                WaitForSuccess: sdk.Bool(false),
            },
            TargetDedicated: sdk.Int(213835),
            TargetOSVersion: sdk.String("commodi"),
            TaskSchedulingPolicy: &shared.TaskSchedulingPolicy{
                NodeFillType: shared.TaskSchedulingPolicyNodeFillTypeEnumUnmapped,
            },
            VMSize: "commodi",
        },
        APIVersion: "aut",
        ClientRequestID: sdk.String("voluptatem"),
        OcpDate: sdk.String("ad"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(60995),
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
        IfMatch: sdk.String("amet"),
        IfModifiedSince: sdk.String("illum"),
        IfNoneMatch: sdk.String("praesentium"),
        IfUnmodifiedSince: sdk.String("quidem"),
        APIVersion: "cum",
        ClientRequestID: sdk.String("amet"),
        OcpDate: sdk.String("quasi"),
        PoolID: "dicta",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(514922),
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
        APIVersion: "doloremque",
        ClientRequestID: sdk.String("earum"),
        OcpDate: sdk.String("iusto"),
        PoolID: "amet",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(587967),
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
        IfMatch: sdk.String("dolorum"),
        IfModifiedSince: sdk.String("necessitatibus"),
        IfNoneMatch: sdk.String("provident"),
        IfUnmodifiedSince: sdk.String("repudiandae"),
        PoolEnableAutoScaleParameter: shared.PoolEnableAutoScaleParameter{
            AutoScaleEvaluationInterval: sdk.String("consequatur"),
            AutoScaleFormula: sdk.String("nemo"),
        },
        APIVersion: "molestiae",
        ClientRequestID: sdk.String("itaque"),
        OcpDate: sdk.String("facilis"),
        PoolID: "corrupti",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(43975),
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
            AutoScaleFormula: "sint",
        },
        APIVersion: "accusamus",
        ClientRequestID: sdk.String("eos"),
        OcpDate: sdk.String("totam"),
        PoolID: "dicta",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(30661),
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
        DollarSelect: sdk.String("velit"),
        IfMatch: sdk.String("dolor"),
        IfModifiedSince: sdk.String("sunt"),
        IfNoneMatch: sdk.String("a"),
        IfUnmodifiedSince: sdk.String("dolor"),
        APIVersion: "occaecati",
        ClientRequestID: sdk.String("atque"),
        OcpDate: sdk.String("beatae"),
        PoolID: "at",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(287544),
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
        DollarExpand: sdk.String("minus"),
        DollarSelect: sdk.String("esse"),
        IfMatch: sdk.String("voluptatem"),
        IfModifiedSince: sdk.String("perferendis"),
        IfNoneMatch: sdk.String("rerum"),
        IfUnmodifiedSince: sdk.String("ea"),
        APIVersion: "aperiam",
        ClientRequestID: sdk.String("dignissimos"),
        OcpDate: sdk.String("repellat"),
        PoolID: "velit",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(784115),
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
        APIVersion: "provident",
        ClientRequestID: sdk.String("consectetur"),
        OcpDate: sdk.String("eligendi"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(490110),
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
        DollarExpand: sdk.String("consectetur"),
        DollarFilter: sdk.String("soluta"),
        DollarSelect: sdk.String("natus"),
        APIVersion: "temporibus",
        ClientRequestID: sdk.String("officia"),
        Maxresults: sdk.Int(228857),
        OcpDate: sdk.String("tenetur"),
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(133949),
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
        DollarFilter: sdk.String("quo"),
        APIVersion: "itaque",
        ClientRequestID: sdk.String("illum"),
        Endtime: types.MustTimeFromString("2022-01-07T23:50:35.437Z"),
        Maxresults: sdk.Int(876285),
        OcpDate: sdk.String("qui"),
        ReturnClientRequestID: sdk.Bool(false),
        Starttime: types.MustTimeFromString("2022-01-02T12:39:28.881Z"),
        Timeout: sdk.Int(128696),
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
        IfMatch: sdk.String("explicabo"),
        IfModifiedSince: sdk.String("exercitationem"),
        IfNoneMatch: sdk.String("nihil"),
        IfUnmodifiedSince: sdk.String("non"),
        PoolPatchParameter: shared.PoolPatchParameter{
            ApplicationPackageReferences: []shared.ApplicationPackageReference{
                shared.ApplicationPackageReference{
                    ApplicationID: "illo",
                    Version: sdk.String("hic"),
                },
            },
            CertificateReferences: []shared.CertificateReference{
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumUnmapped.ToPointer(),
                    StoreName: sdk.String("non"),
                    Thumbprint: "distinctio",
                    ThumbprintAlgorithm: "in",
                    Visibility: sdk.String("exercitationem"),
                },
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                    StoreName: sdk.String("numquam"),
                    Thumbprint: "repudiandae",
                    ThumbprintAlgorithm: "modi",
                    Visibility: sdk.String("in"),
                },
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                    StoreName: sdk.String("accusamus"),
                    Thumbprint: "rem",
                    ThumbprintAlgorithm: "aperiam",
                    Visibility: sdk.String("odit"),
                },
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Colleen Murazik"),
                    Value: sdk.String("magnam"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Emma Keeling"),
                    Value: sdk.String("dignissimos"),
                },
                shared.MetadataItem{
                    Name: sdk.String("Dean Krajcik"),
                    Value: sdk.String("ab"),
                },
            },
            StartTask: &shared.StartTask{
                CommandLine: sdk.String("modi"),
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Olive Kub"),
                        Value: sdk.String("dolorum"),
                    },
                },
                MaxTaskRetryCount: sdk.Int(823718),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("consectetur"),
                        FilePath: sdk.String("nesciunt"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("quaerat"),
                        FilePath: sdk.String("itaque"),
                    },
                },
                RunElevated: sdk.Bool(false),
                WaitForSuccess: sdk.Bool(false),
            },
        },
        APIVersion: "minus",
        ClientRequestID: sdk.String("sunt"),
        OcpDate: sdk.String("distinctio"),
        PoolID: "iusto",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(558051),
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
        IfMatch: sdk.String("et"),
        IfModifiedSince: sdk.String("facilis"),
        IfNoneMatch: sdk.String("amet"),
        IfUnmodifiedSince: sdk.String("autem"),
        PoolResizeParameter: shared.PoolResizeParameter{
            NodeDeallocationOption: shared.PoolResizeParameterNodeDeallocationOptionEnumTaskcompletion.ToPointer(),
            ResizeTimeout: sdk.String("alias"),
            TargetDedicated: 526413,
        },
        APIVersion: "aut",
        ClientRequestID: sdk.String("quos"),
        OcpDate: sdk.String("laudantium"),
        PoolID: "repellendus",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(83291),
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
        IfMatch: sdk.String("quae"),
        IfModifiedSince: sdk.String("eaque"),
        IfNoneMatch: sdk.String("saepe"),
        IfUnmodifiedSince: sdk.String("delectus"),
        APIVersion: "mollitia",
        ClientRequestID: sdk.String("nulla"),
        OcpDate: sdk.String("officia"),
        PoolID: "sed",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(30208),
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
                    ApplicationID: "eveniet",
                    Version: sdk.String("hic"),
                },
            },
            CertificateReferences: []shared.CertificateReference{
                shared.CertificateReference{
                    StoreLocation: shared.CertificateReferenceStoreLocationEnumCurrentuser.ToPointer(),
                    StoreName: sdk.String("qui"),
                    Thumbprint: "qui",
                    ThumbprintAlgorithm: "necessitatibus",
                    Visibility: sdk.String("harum"),
                },
            },
            Metadata: []shared.MetadataItem{
                shared.MetadataItem{
                    Name: sdk.String("Beth Gleason"),
                    Value: sdk.String("molestias"),
                },
            },
            StartTask: &shared.StartTask{
                CommandLine: sdk.String("officia"),
                EnvironmentSettings: []shared.EnvironmentSetting{
                    shared.EnvironmentSetting{
                        Name: sdk.String("Johnny Jacobi"),
                        Value: sdk.String("ducimus"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Thelma Wisoky"),
                        Value: sdk.String("laborum"),
                    },
                    shared.EnvironmentSetting{
                        Name: sdk.String("Sheldon Baumbach"),
                        Value: sdk.String("recusandae"),
                    },
                },
                MaxTaskRetryCount: sdk.Int(913285),
                ResourceFiles: []shared.ResourceFile{
                    shared.ResourceFile{
                        BlobSource: sdk.String("rem"),
                        FilePath: sdk.String("quia"),
                    },
                    shared.ResourceFile{
                        BlobSource: sdk.String("ullam"),
                        FilePath: sdk.String("quisquam"),
                    },
                },
                RunElevated: sdk.Bool(false),
                WaitForSuccess: sdk.Bool(false),
            },
        },
        APIVersion: "dicta",
        ClientRequestID: sdk.String("voluptatibus"),
        OcpDate: sdk.String("eligendi"),
        PoolID: "quae",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(885022),
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
        IfMatch: sdk.String("architecto"),
        IfModifiedSince: sdk.String("architecto"),
        IfNoneMatch: sdk.String("enim"),
        IfUnmodifiedSince: sdk.String("optio"),
        PoolUpgradeOSParameter: shared.PoolUpgradeOSParameter{
            TargetOSVersion: "rem",
        },
        APIVersion: "perferendis",
        ClientRequestID: sdk.String("facilis"),
        OcpDate: sdk.String("reiciendis"),
        PoolID: "a",
        ReturnClientRequestID: sdk.Bool(false),
        Timeout: sdk.Int(615058),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
