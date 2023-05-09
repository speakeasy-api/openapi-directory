# Schemas

### Available Operations

* [CreateOrUpdateProfileSchema](#createorupdateprofileschema) - Create or update profile schema

## CreateOrUpdateProfileSchema

Creates or updates profile schema.

> Each account has one profile schema. Updating it with this request will substitute the previous version.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    res, err := s.Schemas.CreateOrUpdateProfileSchema(ctx, operations.CreateOrUpdateProfileSchemaRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Schema: &shared.Schema{
            Description: "This schema describes a b2c customer profile.",
            DocumentTTL: sdk.Int64(1825),
            Properties: shared.SchemaProperties{
                FieldName: &shared.SchemaPropertiesFieldName{
                    Items: map[string]interface{}{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    Pii: true,
                    Sensitive: true,
                    Type: "string",
                },
            },
            Required: []string{
                "iure",
                "magnam",
            },
            Title: "Client profile schema",
            Type: "object",
            VIndexed: []interface{}{
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            },
            VUnique: []interface{}{
                "minus",
                "placeat",
            },
            Version: sdk.Int64(1),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrUpdateProfileSchema201ApplicationJSONObject != nil {
        // handle response
    }
}
```
