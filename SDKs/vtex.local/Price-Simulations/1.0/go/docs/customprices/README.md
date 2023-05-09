# CustomPrices

### Available Operations

* [GetVCustomPricesSessionSchema](#getvcustompricessessionschema) - Get custom prices schema
* [PostVCustomPricesSessionSchema](#postvcustompricessessionschema) - Create or Update custom prices schema

## GetVCustomPricesSessionSchema

Retrieves all custom price for all shopping scenarios

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
    res, err := s.CustomPrices.GetVCustomPricesSessionSchema(ctx, operations.GetVCustomPricesSessionSchemaRequest{
        Accept: "distinctio",
        ContentType: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestBody != nil {
        // handle response
    }
}
```

## PostVCustomPricesSessionSchema

Creates a new custom price for a shopping scenario or updates an existing one

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
    res, err := s.CustomPrices.PostVCustomPricesSessionSchema(ctx, operations.PostVCustomPricesSessionSchemaRequest{
        Accept: "unde",
        ContentType: "nulla",
        RequestBody: &operations.PostVCustomPricesSessionSchemaRequestBody{
            Fields: []PostVCustomPricesSessionSchemaRequestBodyFields{
                operations.PostVCustomPricesSessionSchemaRequestBodyFields{
                    Name: "Ben Mueller",
                    Type: "iure",
                },
                operations.PostVCustomPricesSessionSchemaRequestBodyFields{
                    Name: "Raquel Bednar",
                    Type: "suscipit",
                },
                operations.PostVCustomPricesSessionSchemaRequestBodyFields{
                    Name: "Alexandra Schulist",
                    Type: "excepturi",
                },
            },
            UseEmail: sdk.Bool(false),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestBody != nil {
        // handle response
    }
}
```
