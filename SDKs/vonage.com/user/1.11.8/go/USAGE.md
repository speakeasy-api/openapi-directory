<!-- Start SDK Example Usage -->
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
    res, err := s.UserCtrlGetUserByID(ctx, operations.UserCtrlGetUserByIDRequest{
        AccountID: "corrupti",
        UserID: 5928.45,
    }, operations.UserCtrlGetUserByIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserHalResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->