# NearMisses

## Overview

Near misses allow querying of received requests or request patterns according to similarity

User documentation
<http://wiremock.org/docs/verifying/#near-misses>
### Available Operations

* [GetAdminRequestsUnmatchedNearMisses](#getadminrequestsunmatchednearmisses) - Retrieve near-misses for all unmatched requests
* [PostAdminNearMissesRequest](#postadminnearmissesrequest) - Find near misses matching specific request
* [PostAdminNearMissesRequestPattern](#postadminnearmissesrequestpattern) - Find near misses matching request pattern

## GetAdminRequestsUnmatchedNearMisses

Retrieve near-misses for all unmatched requests

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
    res, err := s.NearMisses.GetAdminRequestsUnmatchedNearMisses(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAdminRequestsUnmatchedNearMisses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAdminNearMissesRequest

Find at most 3 near misses for closest stub mappings to the specified request

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
    res, err := s.NearMisses.PostAdminNearMissesRequest(ctx, operations.PostAdminNearMissesRequestRequestBody{
        AbsoluteURL: sdk.String("http://localhost:56738/received-request/2"),
        Body: sdk.String("Hello world"),
        Cookies: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Headers: map[string]interface{}{
            "vel": "error",
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
        Method: sdk.String("GET"),
        URL: sdk.String("/received-request/2"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAdminNearMissesRequest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAdminNearMissesRequestPattern

Find at most 3 near misses for closest logged requests to the specified request pattern

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
    res, err := s.NearMisses.PostAdminNearMissesRequestPattern(ctx, operations.PostAdminNearMissesRequestPatternRequestBody{
        BasicAuthCredentials: &operations.PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials{
            Password: "delectus",
            Username: "Donny_Hoppe",
        },
        BodyPatterns: []map[string]interface{}{
            map[string]interface{}{
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
            },
            map[string]interface{}{
                "veritatis": "deserunt",
                "perferendis": "ipsam",
            },
            map[string]interface{}{
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
            map[string]interface{}{
                "esse": "totam",
                "porro": "dolorum",
                "dicta": "nam",
                "officia": "occaecati",
            },
        },
        Cookies: map[string]interface{}{
            "deleniti": "hic",
        },
        Headers: map[string]interface{}{
            "totam": "beatae",
            "commodi": "molestiae",
            "modi": "qui",
            "impedit": "cum",
        },
        Method: sdk.String("esse"),
        QueryParameters: map[string]interface{}{
            "excepturi": "aspernatur",
        },
        URL: sdk.String("perferendis"),
        URLPath: sdk.String("ad"),
        URLPathPattern: sdk.String("natus"),
        URLPattern: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAdminNearMissesRequestPattern200ApplicationJSONObject != nil {
        // handle response
    }
}
```
