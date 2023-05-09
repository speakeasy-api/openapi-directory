# Authentication

## Overview

Authentication APIs

### Available Operations

* [Create](#create) - Create an auth token
* [Delete](#delete) - Delete an auth token.

## Create

<html><body> vRealize Network Insight supports token based authentication.Tokens are non-modifiable identifiers returned by the system when the user has successfully authenticated using valid credentials. Token expires after expiry time returned in the response. All API requests must provide the auth token in Authorization header in following format.<br> Authorization &#58; NetworkInsight {token} <br> If a token is invalid or expired, 401-Unauthorized error gets returned in the response of the API request. </body></html>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.Create(ctx, shared.UserCredential{
        Domain: &shared.Domain{
            DomainType: shared.DomainDomainTypeEnumLdap.ToPointer(),
            Value: sdk.String("example.com"),
        },
        Password: sdk.String("password"),
        Username: sdk.String("admin@vrni.com"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
}
```

## Delete

Deletes the auth token provided in Authorization header.
Deleting an expired or invalid token will result in 401 Unauthorized error.

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
    res, err := s.Authentication.Delete(ctx, operations.DeleteSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
