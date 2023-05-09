<!-- Start SDK Example Usage -->
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
    res, err := s.GiftCard.CreateGiftCard(ctx, operations.CreateGiftCardRequest{
        Accept: "corrupti",
        ContentType: "provident",
        CreateGiftCardRequest: shared.CreateGiftCardRequest{
            Caption: "rewards program",
            ExpiringDate: "2020-09-01T13:15:30Z",
            MultipleCredits: sdk.Bool(false),
            MultipleRedemptions: sdk.Bool(false),
            ProfileID: "1234",
            RelationName: "insert example here",
            RestrictedToOwner: sdk.Bool(false),
        },
        XVTEXAPIAppKey: "distinctio",
        XVTEXAPIAppToken: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->