# Macros

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [Run](#run) - Executes a macro.

## Run

Runs a specified macro on a specified list of items ("list" variable in the macro code). The list of items can be empty if the macro doesn't use it. Additional custom parameters can be provided to the macro when necessary ("params" variable in the macro code).

 <BR>Note: Macros that support parameters can be also run from GUI (Views in Home Portal),so they should also handle the empty parameters map (e.g. by defining default values when parameters are not provided).

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Macros.Run(ctx, operations.RunRequest{
        MacroRequestDTO: shared.MacroRequestDTO{
            Async: sdk.Bool(false),
            Ids: []int64{
                277340,
                97493,
                524380,
            },
            Params: map[string]map[string]interface{}{
                "dicta": map[string]interface{}{
                    "consequuntur": "consectetur",
                    "aperiam": "cupiditate",
                },
                "reiciendis": map[string]interface{}{
                    "alias": "omnis",
                    "eos": "occaecati",
                    "iste": "magni",
                },
                "inventore": map[string]interface{}{
                    "accusamus": "voluptatibus",
                    "distinctio": "omnis",
                    "delectus": "minima",
                },
                "praesentium": map[string]interface{}{
                    "magnam": "temporibus",
                    "quos": "commodi",
                    "itaque": "commodi",
                    "totam": "earum",
                },
            },
        },
        MacroID: 267207,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
