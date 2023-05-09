# Recordings

## Overview

Stub mapping record and snapshot functions

User documentation
<http://wiremock.org/docs/record-playback/>
### Available Operations

* [GetAdminRecordingsStatus](#getadminrecordingsstatus) - Get recording status
* [PostAdminRecordingsSnapshot](#postadminrecordingssnapshot) - Take a snapshot recording
* [PostAdminRecordingsStart](#postadminrecordingsstart) - Start recording
* [PostAdminRecordingsStop](#postadminrecordingsstop) - Stop recording

## GetAdminRecordingsStatus

Get recording status

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Recordings.GetAdminRecordingsStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAdminRecordingsStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAdminRecordingsSnapshot

Take a snapshot recording

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
    res, err := s.Recordings.PostAdminRecordingsSnapshot(ctx, operations.PostAdminRecordingsSnapshotRequestBody{
        CaptureHeaders: map[string]PostAdminRecordingsSnapshotRequestBodyCaptureHeaders{
            "dolor": operations.PostAdminRecordingsSnapshotRequestBodyCaptureHeaders{
                CaseInsensitive: sdk.Bool(false),
            },
            "natus": operations.PostAdminRecordingsSnapshotRequestBodyCaptureHeaders{
                CaseInsensitive: sdk.Bool(false),
            },
            "laboriosam": operations.PostAdminRecordingsSnapshotRequestBodyCaptureHeaders{
                CaseInsensitive: sdk.Bool(false),
            },
        },
        ExtractBodyCriteria: &operations.PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria{
            BinarySizeThreshold: sdk.String("18.2 GB"),
            TextSizeThreshold: sdk.String("18.2 GB"),
        },
        Filters: &operations.PostAdminRecordingsSnapshotRequestBodyFilters{
            BasicAuthCredentials: &operations.PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials{
                Password: "hic",
                Username: "Steve.Parker",
            },
            BodyPatterns: []map[string]interface{}{
                map[string]interface{}{
                    "saepe": "quidem",
                    "architecto": "ipsa",
                },
                map[string]interface{}{
                    "est": "mollitia",
                    "laborum": "dolores",
                    "dolorem": "corporis",
                    "explicabo": "nobis",
                },
                map[string]interface{}{
                    "omnis": "nemo",
                    "minima": "excepturi",
                },
            },
            Cookies: map[string]interface{}{
                "iure": "culpa",
            },
            Headers: map[string]interface{}{
                "sapiente": "architecto",
                "mollitia": "dolorem",
                "culpa": "consequuntur",
                "repellat": "mollitia",
            },
            Ids: []string{
                "numquam",
                "commodi",
                "quam",
            },
            Method: sdk.String("molestiae"),
            QueryParameters: map[string]interface{}{
                "error": "quia",
            },
            URL: sdk.String("quis"),
            URLPath: sdk.String("vitae"),
            URLPathPattern: sdk.String("laborum"),
            URLPattern: sdk.String("animi"),
        },
        Persist: sdk.Bool(false),
        RepeatsAsScenarios: sdk.Bool(false),
        RequestBodyPattern: &operations.PostAdminRecordingsSnapshotRequestBodyRequestBodyPattern{},
        TransformerParameters: map[string]interface{}{
            "odit": "quo",
            "sequi": "tenetur",
        },
        Transformers: []string{
            "id",
            "possimus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAdminRecordingsSnapshot200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAdminRecordingsStart

Begin recording stub mappings

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
    res, err := s.Recordings.PostAdminRecordingsStart(ctx, operations.PostAdminRecordingsStartRequestBody{
        CaptureHeaders: map[string]PostAdminRecordingsStartRequestBodyCaptureHeaders{
            "quasi": operations.PostAdminRecordingsStartRequestBodyCaptureHeaders{
                CaseInsensitive: sdk.Bool(false),
            },
        },
        ExtractBodyCriteria: &operations.PostAdminRecordingsStartRequestBodyExtractBodyCriteria{
            BinarySizeThreshold: sdk.String("18.2 GB"),
            TextSizeThreshold: sdk.String("18.2 GB"),
        },
        Filters: &operations.PostAdminRecordingsStartRequestBodyFilters{
            BasicAuthCredentials: &operations.PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials{
                Password: "error",
                Username: "Rodrigo97",
            },
            BodyPatterns: []map[string]interface{}{
                map[string]interface{}{
                    "nihil": "praesentium",
                    "voluptatibus": "ipsa",
                    "omnis": "voluptate",
                    "cum": "perferendis",
                },
                map[string]interface{}{
                    "reprehenderit": "ut",
                },
                map[string]interface{}{
                    "dicta": "corporis",
                    "dolore": "iusto",
                    "dicta": "harum",
                    "enim": "accusamus",
                },
                map[string]interface{}{
                    "repudiandae": "quae",
                    "ipsum": "quidem",
                },
            },
            Cookies: map[string]interface{}{
                "excepturi": "pariatur",
                "modi": "praesentium",
                "rem": "voluptates",
            },
            Headers: map[string]interface{}{
                "repudiandae": "sint",
            },
            Method: sdk.String("veritatis"),
            QueryParameters: map[string]interface{}{
                "incidunt": "enim",
                "consequatur": "est",
                "quibusdam": "explicabo",
                "deserunt": "distinctio",
            },
            URL: sdk.String("quibusdam"),
            URLPath: sdk.String("labore"),
            URLPathPattern: sdk.String("modi"),
            URLPattern: sdk.String("qui"),
        },
        Persist: sdk.Bool(false),
        RepeatsAsScenarios: sdk.Bool(false),
        RequestBodyPattern: &operations.PostAdminRecordingsStartRequestBodyRequestBodyPattern{},
        TargetBaseURL: sdk.String("http://example.mocklab.io"),
        TransformerParameters: map[string]interface{}{
            "cupiditate": "quos",
            "perferendis": "magni",
        },
        Transformers: []string{
            "ipsam",
            "alias",
            "fugit",
            "dolorum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAdminRecordingsStop

End recording of stub mappings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Recordings.PostAdminRecordingsStop(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAdminRecordingsStop200ApplicationJSONObject != nil {
        // handle response
    }
}
```
