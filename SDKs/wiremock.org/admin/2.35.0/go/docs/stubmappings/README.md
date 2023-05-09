# StubMappings

## Overview

Operations on stub mappings

User documentation
<http://wiremock.org/docs/stubbing/>
### Available Operations

* [DeleteAdminMappings](#deleteadminmappings) - Delete all stub mappings
* [DeleteAdminMappingsStubMappingID](#deleteadminmappingsstubmappingid) - Delete a stub mapping
* [GetAdminMappings](#getadminmappings) - Get all stub mappings
* [GetAdminMappingsStubMappingID](#getadminmappingsstubmappingid) - Get stub mapping by ID
* [PostAdminMappings](#postadminmappings) - Create a new stub mapping
* [PostAdminMappingsFindByMetadata](#postadminmappingsfindbymetadata) - Find stubs by matching on their metadata
* [PostAdminMappingsImport](#postadminmappingsimport) - Import stub mappings
* [PostAdminMappingsRemoveByMetadata](#postadminmappingsremovebymetadata) - Delete stub mappings matching metadata
* [PostAdminMappingsReset](#postadminmappingsreset) - Reset stub mappings
* [PostAdminMappingsSave](#postadminmappingssave) - Persist stub mappings
* [PutAdminMappingsStubMappingID](#putadminmappingsstubmappingid) - Update a stub mapping

## DeleteAdminMappings

Delete all stub mappings

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
    res, err := s.StubMappings.DeleteAdminMappings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAdminMappingsStubMappingID

Delete a stub mapping

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
    res, err := s.StubMappings.DeleteAdminMappingsStubMappingID(ctx, operations.DeleteAdminMappingsStubMappingIDRequest{
        StubMappingID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAdminMappings

Get all stub mappings

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
    res, err := s.StubMappings.GetAdminMappings(ctx, operations.GetAdminMappingsRequest{
        Limit: sdk.Int64(944120),
        Offset: sdk.Int64(928082),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAdminMappings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAdminMappingsStubMappingID

Get stub mapping by ID

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
    res, err := s.StubMappings.GetAdminMappingsStubMappingID(ctx, operations.GetAdminMappingsStubMappingIDRequest{
        StubMappingID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAdminMappingsStubMappingID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAdminMappings

Create a new stub mapping

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
    res, err := s.StubMappings.PostAdminMappings(ctx, operations.PostAdminMappingsRequestBody{
        ID: sdk.String("b90c2890-9b3f-4e49-a8d9-cbf48633323f"),
        Metadata: map[string]interface{}{
            "cum": "voluptate",
            "dignissimos": "reiciendis",
            "amet": "dolorum",
        },
        Name: sdk.String("Ms. Christine Beer"),
        NewScenarioState: sdk.String("quaerat"),
        Persistent: sdk.Bool(false),
        PostServeActions: map[string]interface{}{
            "quidem": "voluptatibus",
            "voluptas": "natus",
            "eos": "atque",
            "sit": "fugiat",
        },
        Priority: sdk.Int64(67249),
        Request: &operations.PostAdminMappingsRequestBodyRequest{
            BasicAuthCredentials: &operations.PostAdminMappingsRequestBodyRequestBasicAuthCredentials{
                Password: "soluta",
                Username: "Marietta_Kris",
            },
            BodyPatterns: []map[string]interface{}{
                map[string]interface{}{
                    "necessitatibus": "distinctio",
                    "asperiores": "nihil",
                    "ipsum": "voluptate",
                },
                map[string]interface{}{
                    "saepe": "eius",
                    "aspernatur": "perferendis",
                    "amet": "optio",
                },
                map[string]interface{}{
                    "ad": "saepe",
                    "suscipit": "deserunt",
                    "provident": "minima",
                    "repellendus": "totam",
                },
            },
            Cookies: map[string]interface{}{
                "alias": "at",
                "quaerat": "tempora",
                "vel": "quod",
            },
            Headers: map[string]interface{}{
                "qui": "dolorum",
                "a": "esse",
                "harum": "iusto",
                "ipsum": "quisquam",
            },
            Method: sdk.String("tenetur"),
            QueryParameters: map[string]interface{}{
                "tempore": "accusamus",
            },
            URL: sdk.String("numquam"),
            URLPath: sdk.String("enim"),
            URLPathPattern: sdk.String("dolorem"),
            URLPattern: sdk.String("sapiente"),
        },
        RequiredScenarioState: sdk.String("totam"),
        Response: &operations.PostAdminMappingsRequestBodyResponse{
            AdditionalProxyRequestHeaders: map[string]interface{}{
                "sit": "expedita",
                "neque": "sed",
            },
            Base64Body: sdk.String("vel"),
            Body: sdk.String("libero"),
            BodyFileName: sdk.String("voluptas"),
            DelayDistribution: &operations.PostAdminMappingsRequestBodyResponseDelayDistribution{},
            Fault: operations.PostAdminMappingsRequestBodyResponseFaultEnumMalformedResponseChunk.ToPointer(),
            FixedDelayMilliseconds: sdk.Int64(463575),
            FromConfiguredStub: sdk.Bool(false),
            Headers: map[string]interface{}{
                "incidunt": "qui",
            },
            JSONBody: map[string]interface{}{
                "maxime": "pariatur",
                "soluta": "dicta",
                "laborum": "totam",
            },
            ProxyBaseURL: sdk.String("incidunt"),
            Status: sdk.Int64(132068),
            StatusMessage: sdk.String("dolores"),
            TransformerParameters: map[string]interface{}{
                "facilis": "aliquid",
                "quam": "molestias",
                "temporibus": "qui",
            },
            Transformers: []string{
                "fugit",
            },
        },
        ScenarioName: sdk.String("magni"),
        UUID: sdk.String("715bf0cb-b1e3-41b8-b90f-3443a1108e0a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAdminMappings201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAdminMappingsFindByMetadata

Find stubs by matching on their metadata

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
    res, err := s.StubMappings.PostAdminMappingsFindByMetadata(ctx, operations.PostAdminMappingsFindByMetadataRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAdminMappingsFindByMetadata200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAdminMappingsImport

Import given stub mappings to the backing store

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
    res, err := s.StubMappings.PostAdminMappingsImport(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAdminMappingsRemoveByMetadata

Delete stub mappings matching metadata

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
    res, err := s.StubMappings.PostAdminMappingsRemoveByMetadata(ctx, operations.PostAdminMappingsRemoveByMetadataRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAdminMappingsReset

Restores stub mappings to the defaults defined back in the backing store

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
    res, err := s.StubMappings.PostAdminMappingsReset(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAdminMappingsSave

Save all persistent stub mappings to the backing store

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
    res, err := s.StubMappings.PostAdminMappingsSave(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutAdminMappingsStubMappingID

Update a stub mapping

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
    res, err := s.StubMappings.PutAdminMappingsStubMappingID(ctx, operations.PutAdminMappingsStubMappingIDRequest{
        RequestBody: &operations.PutAdminMappingsStubMappingIDRequestBody{
            ID: sdk.String("dcf4b921-879f-4ce9-93f7-3ef7fbc7abd7"),
            Metadata: map[string]interface{}{
                "quibusdam": "illum",
                "sequi": "natus",
            },
            Name: sdk.String("Richard Wiza"),
            NewScenarioState: sdk.String("fugit"),
            Persistent: sdk.Bool(false),
            PostServeActions: map[string]interface{}{
                "maiores": "doloribus",
                "iusto": "eligendi",
                "ducimus": "alias",
                "officia": "tempora",
            },
            Priority: sdk.Int64(368584),
            Request: &operations.PutAdminMappingsStubMappingIDRequestBodyRequest{
                BasicAuthCredentials: &operations.PutAdminMappingsStubMappingIDRequestBodyRequestBasicAuthCredentials{
                    Password: "ea",
                    Username: "Brielle.Keebler18",
                },
                BodyPatterns: []map[string]interface{}{
                    map[string]interface{}{
                        "dicta": "dolor",
                        "maiores": "quasi",
                        "ex": "nulla",
                    },
                    map[string]interface{}{
                        "voluptatibus": "nostrum",
                        "sapiente": "quisquam",
                        "saepe": "ea",
                    },
                },
                Cookies: map[string]interface{}{
                    "corporis": "veniam",
                    "aliquid": "inventore",
                    "magnam": "ea",
                    "quo": "consectetur",
                },
                Headers: map[string]interface{}{
                    "aspernatur": "minima",
                    "eaque": "a",
                    "libero": "aut",
                    "aut": "deleniti",
                },
                Method: sdk.String("impedit"),
                QueryParameters: map[string]interface{}{
                    "fugit": "accusamus",
                    "inventore": "non",
                },
                URL: sdk.String("et"),
                URLPath: sdk.String("dolorum"),
                URLPathPattern: sdk.String("laborum"),
                URLPattern: sdk.String("placeat"),
            },
            RequiredScenarioState: sdk.String("velit"),
            Response: &operations.PutAdminMappingsStubMappingIDRequestBodyResponse{
                AdditionalProxyRequestHeaders: map[string]interface{}{
                    "autem": "nobis",
                    "quas": "assumenda",
                },
                Base64Body: sdk.String("nulla"),
                Body: sdk.String("voluptas"),
                BodyFileName: sdk.String("libero"),
                DelayDistribution: &operations.PutAdminMappingsStubMappingIDRequestBodyResponseDelayDistribution{},
                Fault: operations.PutAdminMappingsStubMappingIDRequestBodyResponseFaultEnumConnectionResetByPeer.ToPointer(),
                FixedDelayMilliseconds: sdk.Int64(270328),
                FromConfiguredStub: sdk.Bool(false),
                Headers: map[string]interface{}{
                    "explicabo": "provident",
                    "ipsa": "molestiae",
                },
                JSONBody: map[string]interface{}{
                    "odio": "eius",
                    "esse": "esse",
                },
                ProxyBaseURL: sdk.String("rem"),
                Status: sdk.Int64(683282),
                StatusMessage: sdk.String("reprehenderit"),
                TransformerParameters: map[string]interface{}{
                    "fugiat": "ut",
                    "eum": "suscipit",
                    "assumenda": "eos",
                },
                Transformers: []string{
                    "quisquam",
                    "veritatis",
                    "ipsa",
                },
            },
            ScenarioName: sdk.String("id"),
            UUID: sdk.String("b3cdca42-5190-44e5-a3c7-e0bc7178e479"),
        },
        StubMappingID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAdminMappingsStubMappingID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
