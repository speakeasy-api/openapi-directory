# Prospects

### Available Operations

* [CreateProspect](#createprospect) - Create prospect
* [DeleteProspect](#deleteprospect) - Delete prospect
* [GetProspect](#getprospect) - Get prospect
* [GetUnmaskedProspect](#getunmaskedprospect) - Get unmasked prospect
* [UpdateProspect](#updateprospect) - Update prospect

## CreateProspect

Creates new prospect.

> The `id` field returned by this request is the `prospectId` used to retrieve information on a specific prospect later.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Prospects.CreateProspect(ctx, operations.CreateProspectRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProspect201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteProspect

Deletes a prospect by `prospectId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Prospects.DeleteProspect(ctx, operations.DeleteProspectRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProspectID: "51clk394-8534-447e-a0ca-1803p669c987",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetProspect

Retrieves the information of a specific prospect, by its `prospectId`.

> For security and privacy reasons, this request returns masked prospect data. For unmasked information, see Get unmasked prospect.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Prospects.GetProspect(ctx, operations.GetProspectRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProspectID: "51clk394-8534-447e-a0ca-1803p669c987",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProspect200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetUnmaskedProspect

Retrieves unmasked information of a specific prospect, by its `prospectId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Prospects.GetUnmaskedProspect(ctx, operations.GetUnmaskedProspectRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProspectID: "51clk394-8534-447e-a0ca-1803p669c987",
        Reason: "data-validation",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUnmaskedProspect200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## UpdateProspect

Updates one or more fields of an existing prospect.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Prospects.UpdateProspect(ctx, operations.UpdateProspectRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: sdk.String("provident"),
        ProspectID: "51clk394-8534-447e-a0ca-1803p669c987",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProspect200ApplicationJSONObject != nil {
        // handle response
    }
}
```
