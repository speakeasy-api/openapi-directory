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
            AppKey: shared.SchemeAppKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            AppToken: shared.SchemeAppToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateGiftCardRequest{
        Headers: operations.CreateGiftCardHeaders{
            Accept: "unde",
            ContentType: "deserunt",
            XVTEXAPIAppKey: "porro",
            XVTEXAPIAppToken: "nulla",
        },
        Request: shared.CreateGiftCardRequest{
            Caption: "rewards program",
            ExpiringDate: "2020-09-01T13:15:30Z",
            MultipleCredits: false,
            MultipleRedemptions: false,
            ProfileID: "1234",
            RelationName: "insert example here",
            RestrictedToOwner: false,
        },
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