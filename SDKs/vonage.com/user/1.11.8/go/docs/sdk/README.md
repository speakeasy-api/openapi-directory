# SDK

## Overview

The Vonage Business Cloud User API enables you to retrieve information about users.

Your application must subscribe to the Provisioning API suite to use this API.


### Available Operations

* [UserCtrlGetUserByID](#userctrlgetuserbyid) - Get user data by account ID and user ID
* [UserCtrlGetUsers](#userctrlgetusers) - Get account users data by account ID

## UserCtrlGetUserByID

Get user data by account ID and user ID

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
    res, err := s.SDK.UserCtrlGetUserByID(ctx, operations.UserCtrlGetUserByIDRequest{
        AccountID: "distinctio",
        UserID: 8442.66,
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

## UserCtrlGetUsers

Get account users data by account ID

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
    res, err := s.SDK.UserCtrlGetUsers(ctx, operations.UserCtrlGetUsersRequest{
        AccountID: "unde",
        Email: sdk.String("Karley_Stamm@hotmail.com"),
        FirstName: sdk.String("Luna"),
        LastName: sdk.String("Hoppe"),
        LoginName: sdk.String("iure"),
        Page: sdk.Float64(2975.34),
        PageSize: sdk.Float64(8917.73),
    }, operations.UserCtrlGetUsersSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersHalResponse != nil {
        // handle response
    }
}
```
