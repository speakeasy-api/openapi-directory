# Schemas

### Available Operations

* [Deleteschemabyname](#deleteschemabyname) - Delete schema by name
* [Getschemabyname](#getschemabyname) - Get schema by name
* [Getschemas](#getschemas) - Get schemas
* [Saveschemabyname](#saveschemabyname) - Save schema by name

## Deleteschemabyname

Deletes an existing schema for a given data entity.

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
    res, err := s.Schemas.Deleteschemabyname(ctx, operations.DeleteschemabynameRequest{
        ContentType: "application/json",
        DataEntityName: "Client",
        SchemaName: "{{schema}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getschemabyname

Returns an existing schema for a given data entity.

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
    res, err := s.Schemas.Getschemabyname(ctx, operations.GetschemabynameRequest{
        ContentType: "application/json",
        DataEntityName: "Client",
        SchemaName: "{{schema}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Getschemas

Return the schemas saved.

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
    res, err := s.Schemas.Getschemas(ctx, operations.GetschemasRequest{
        ContentType: "application/json",
        DataEntityName: "Client",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Saveschemabyname

Creates or edits a data entity schema. Learn more about [Master Data schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle)

> Note that if you send a `schemaName` that does not exist for that data entity, this request will create it.

This request can also be used to [create or edit Master Data v2 triggers](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2).

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Schemas.Saveschemabyname(ctx, operations.SaveschemabynameRequest{
        SaveschemabynameRequest: shared.SaveschemabynameRequest{
            Properties: shared.Properties{
                Name: shared.Name{
                    Type: "impedit",
                },
            },
        },
        DataEntityName: "Client",
        SchemaName: "{{schema}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
