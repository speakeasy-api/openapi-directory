<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateGiftCardRequest{
        Accept: "corrupti",
        ContentType: "provident",
        CreateGiftCardRequest: shared.CreateGiftCardRequest{
            Caption: "rewards program",
            ExpiringDate: "2020-09-01T13:15:30Z",
            MultipleCredits: false,
            MultipleRedemptions: false,
            ProfileID: "1234",
            RelationName: "insert example here",
            RestrictedToOwner: false,
        },
        XVTEXAPIAppKey: "distinctio",
        XVTEXAPIAppToken: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.GiftCard.CreateGiftCard(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->