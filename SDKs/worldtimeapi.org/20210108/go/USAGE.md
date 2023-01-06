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
    
    res, err := s.GetIP(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DateTimeJSONResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->