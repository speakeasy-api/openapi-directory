# UserManagement

### Available Operations

* [GetGetUserByOrcid](#getgetuserbyorcid) - getUserByOrcid
* [GetLogin](#getlogin) - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

## GetGetUserByOrcid

getUserByOrcid

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
    res, err := s.UserManagement.GetGetUserByOrcid(ctx, operations.GetGetUserByOrcidRequest{
        Format: operations.GetGetUserByOrcidFormatEnumPdf.ToPointer(),
        Orcid: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetLogin

loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

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
    res, err := s.UserManagement.GetLogin(ctx, operations.GetLoginRequest{
        Format: operations.GetLoginFormatEnumJpg.ToPointer(),
        Name: "Valerie Runolfsson",
        Pass: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
