<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetFindInteractionsRequest{
        QueryParams: operations.GetFindInteractionsQueryParams{
            Format: "json",
            Query: "voluptas",
        },
    }
    
    res, err := s.AllFunctions.GetFindInteractions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->