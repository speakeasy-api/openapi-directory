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
    s := sdk.New()

    req := operations.CreateFileAssociationRequest{
        Association: &shared.Association{
            FileID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
            ObjectGroup: "Overpayment",
            ObjectID: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
            ObjectType: "Current",
        },
        FileID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        XeroTenantID: "esse",
    }

    ctx := context.Background()
    res, err := s.Files.CreateFileAssociation(ctx, req, operations.CreateFileAssociationSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Association != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->