# Requests

## Overview

Logged requests and responses received by the mock service

User documentation
<http://wiremock.org/docs/verifying/>
### Available Operations

* [DeleteAdminRequests](#deleteadminrequests) - Delete all requests in journal
* [DeleteAdminRequestsRequestID](#deleteadminrequestsrequestid) - Delete request by ID
* [GetAdminRequests](#getadminrequests) - Get all requests in journal
* [GetAdminRequestsUnmatched](#getadminrequestsunmatched) - Find unmatched requests
* [GetAdminRequestsRequestID](#getadminrequestsrequestid) - Get request by ID
* [PostAdminRequestsCount](#postadminrequestscount) - Count requests by criteria
* [PostAdminRequestsFind](#postadminrequestsfind) - Find requests by criteria
* [PostAdminRequestsRemove](#postadminrequestsremove) - Remove requests by criteria
* [PostAdminRequestsRemoveByMetadata](#postadminrequestsremovebymetadata) - Delete requests mappings matching metadata
* [~~PostAdminRequestsReset~~](#postadminrequestsreset) - Empty the request journal :warning: **Deprecated**

## DeleteAdminRequests

Delete all requests in journal

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
    res, err := s.Requests.DeleteAdminRequests(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAdminRequestsRequestID

Delete request by ID

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
    res, err := s.Requests.DeleteAdminRequestsRequestID(ctx, operations.DeleteAdminRequestsRequestIDRequest{
        RequestID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAdminRequests

Get all requests in journal

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
    res, err := s.Requests.GetAdminRequests(ctx, operations.GetAdminRequestsRequest{
        Limit: sdk.String("tempora"),
        Since: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAdminRequestsUnmatched

Get details of logged requests that weren't matched by any stub mapping

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
    res, err := s.Requests.GetAdminRequestsUnmatched(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAdminRequestsRequestID

Get request by ID

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
    res, err := s.Requests.GetAdminRequestsRequestID(ctx, operations.GetAdminRequestsRequestIDRequest{
        RequestID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAdminRequestsCount

Count requests logged in the journal matching the specified criteria

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
    res, err := s.Requests.PostAdminRequestsCount(ctx, operations.PostAdminRequestsCountRequestBody{
        BasicAuthCredentials: &operations.PostAdminRequestsCountRequestBodyBasicAuthCredentials{
            Password: "labore",
            Username: "Vilma75",
        },
        BodyPatterns: []map[string]interface{}{
            map[string]interface{}{
                "provident": "necessitatibus",
                "sint": "officia",
            },
            map[string]interface{}{
                "debitis": "a",
            },
            map[string]interface{}{
                "in": "in",
                "illum": "maiores",
                "rerum": "dicta",
            },
        },
        Cookies: map[string]interface{}{
            "cumque": "facere",
            "ea": "aliquid",
        },
        Headers: map[string]interface{}{
            "accusamus": "non",
            "occaecati": "enim",
            "accusamus": "delectus",
        },
        Method: sdk.String("quidem"),
        QueryParameters: map[string]interface{}{
            "nam": "id",
            "blanditiis": "deleniti",
            "sapiente": "amet",
        },
        URL: sdk.String("deserunt"),
        URLPath: sdk.String("nisi"),
        URLPathPattern: sdk.String("vel"),
        URLPattern: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAdminRequestsCount200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAdminRequestsFind

Retrieve details of requests logged in the journal matching the specified criteria

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
    res, err := s.Requests.PostAdminRequestsFind(ctx, operations.PostAdminRequestsFindRequestBody{
        BasicAuthCredentials: &operations.PostAdminRequestsFindRequestBodyBasicAuthCredentials{
            Password: "omnis",
            Username: "Jarred.Aufderhar",
        },
        BodyPatterns: []map[string]interface{}{
            map[string]interface{}{
                "labore": "labore",
                "suscipit": "natus",
                "nobis": "eum",
            },
            map[string]interface{}{
                "aspernatur": "architecto",
                "magnam": "et",
                "excepturi": "ullam",
                "provident": "quos",
            },
            map[string]interface{}{
                "accusantium": "mollitia",
                "reiciendis": "mollitia",
                "ad": "eum",
            },
        },
        Cookies: map[string]interface{}{
            "necessitatibus": "odit",
        },
        Headers: map[string]interface{}{
            "quasi": "iure",
            "doloribus": "debitis",
        },
        Method: sdk.String("eius"),
        QueryParameters: map[string]interface{}{
            "deleniti": "facilis",
            "in": "architecto",
            "architecto": "repudiandae",
            "ullam": "expedita",
        },
        URL: sdk.String("nihil"),
        URLPath: sdk.String("repellat"),
        URLPathPattern: sdk.String("quibusdam"),
        URLPattern: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAdminRequestsRemove

Removed requests logged in the journal matching the specified criteria

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
    res, err := s.Requests.PostAdminRequestsRemove(ctx, operations.PostAdminRequestsRemoveRequestBody{
        BasicAuthCredentials: &operations.PostAdminRequestsRemoveRequestBodyBasicAuthCredentials{
            Password: "saepe",
            Username: "Sanford50",
        },
        BodyPatterns: []map[string]interface{}{
            map[string]interface{}{
                "sunt": "quo",
            },
            map[string]interface{}{
                "pariatur": "maxime",
                "ea": "excepturi",
                "odit": "ea",
                "accusantium": "ab",
            },
            map[string]interface{}{
                "quidem": "ipsam",
                "voluptate": "autem",
                "nam": "eaque",
                "pariatur": "nemo",
            },
        },
        Cookies: map[string]interface{}{
            "perferendis": "fugiat",
            "amet": "aut",
            "cumque": "corporis",
            "hic": "libero",
        },
        Headers: map[string]interface{}{
            "dolores": "quis",
            "totam": "dignissimos",
            "eaque": "quis",
        },
        Method: sdk.String("nesciunt"),
        QueryParameters: map[string]interface{}{
            "perferendis": "dolores",
        },
        URL: sdk.String("minus"),
        URLPath: sdk.String("quam"),
        URLPathPattern: sdk.String("dolor"),
        URLPattern: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAdminRequestsRemoveByMetadata

Delete requests mappings matching metadata

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
    res, err := s.Requests.PostAdminRequestsRemoveByMetadata(ctx, operations.PostAdminRequestsRemoveByMetadataRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~PostAdminRequestsReset~~

Empty the request journal

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Requests.PostAdminRequestsReset(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
