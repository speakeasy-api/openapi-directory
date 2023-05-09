# OrganismList

### Available Operations

* [GetListOrganisms](#getlistorganisms) - listOrganisms

## GetListOrganisms

listOrganisms

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
    res, err := s.OrganismList.GetListOrganisms(ctx, operations.GetListOrganismsRequest{
        Format: operations.GetListOrganismsFormatEnumJpg.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
