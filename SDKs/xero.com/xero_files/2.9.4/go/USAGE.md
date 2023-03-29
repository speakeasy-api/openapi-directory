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
        Security: operations.CreateFileAssociationSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CreateFileAssociationPathParams{
            FileID: "4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
        },
        Headers: operations.CreateFileAssociationHeaders{
            XeroTenantID: "unde",
        },
        Request: &shared.Association{
            FileID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
            ObjectGroup: "Account",
            ObjectID: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
            ObjectType: "ManJournal",
        },
    }

    ctx := context.Background()
    res, err := s.Files.CreateFileAssociation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Association != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->