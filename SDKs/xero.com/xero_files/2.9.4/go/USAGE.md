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
    
    req := operations.CreateFileAssociationRequest{
        Security: operations.CreateFileAssociationSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CreateFileAssociationPathParams{
            FileID: "at",
        },
        Headers: operations.CreateFileAssociationHeaders{
            XeroTenantID: "consequatur",
        },
        Request: &shared.Association{
            FileID: "maxime",
            ObjectGroup: "Payment",
            ObjectID: "nam",
            ObjectType: "Current",
        },
    }
    
    res, err := s.Files.CreateFileAssociation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Association != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->