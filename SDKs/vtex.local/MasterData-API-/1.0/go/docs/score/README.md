# Score

## Overview

It allows to record and remove points in the` Score2` fields.

### Available Operations

* [Deletescorebyfield](#deletescorebyfield) - Delete score by field
* [Putscorebyfield](#putscorebyfield) - Put score by field
* [Putscores](#putscores) - Put scores

## Deletescorebyfield

Allows you to remove a key from a specific field.

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
    res, err := s.Score.Deletescorebyfield(ctx, operations.DeletescorebyfieldRequest{
        Accept: "odit",
        DeletescorebyfieldRequest: shared.DeletescorebyfieldRequest{
            Key: "ea",
        },
        Acronym: "accusantium",
        FieldName: "ab",
        ID: "fb576b0d-5f0d-430c-9fbb-2587053202c7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Putscorebyfield

It allows to punctuate in a specific field.

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
    res, err := s.Score.Putscorebyfield(ctx, operations.PutscorebyfieldRequest{
        Accept: "dolor",
        PutscorebyfieldRequest: shared.PutscorebyfieldRequest{
            Key: "vero",
            Point: 345352,
            Until: "hic",
        },
        Acronym: "recusandae",
        FieldName: "omnis",
        ID: "b90c2890-9b3f-4e49-a8d9-cbf48633323f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Putscores

It allows punctuate in more than one field and more than one key.

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
    res, err := s.Score.Putscores(ctx, operations.PutscoresRequest{
        Accept: "excepturi",
        RequestBody: []shared.PutscoresRequest{
            shared.PutscoresRequest{
                Field: "voluptate",
                Key: "dignissimos",
                Point: 970237,
                Until: "amet",
            },
            shared.PutscoresRequest{
                Field: "dolorum",
                Key: "numquam",
                Point: 85295,
                Until: "ipsa",
            },
            shared.PutscoresRequest{
                Field: "ipsa",
                Key: "iure",
                Point: 487838,
                Until: "quaerat",
            },
        },
        Acronym: "accusamus",
        ID: "bf69280d-1ba7-47a8-9ebf-737ae4203ce5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
