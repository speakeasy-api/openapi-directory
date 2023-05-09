# Roles

### Available Operations

* [GetListRoles](#getlistroles) - Get List of Roles
* [GetRolesbyUser](#getrolesbyuser) - Get Roles by User/appKey
* [PutRolesinUser](#putrolesinuser) - Put Roles in User/appKey
* [RemoveRolefromUser](#removerolefromuser) - Remove Role from User/appKey

## GetListRoles

Returns a list of available roles. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Roles.GetListRoles(ctx, operations.GetListRolesRequest{
        ContentType: "perferendis",
        NumItems: sdk.Int64(368241),
        PageNumber: sdk.Int64(832620),
        Sort: sdk.String("sapiente"),
        SortType: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRolesResponse != nil {
        // handle response
    }
}
```

## GetRolesbyUser

Gets roles of a particular user or application key.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Roles.GetRolesbyUser(ctx, operations.GetRolesbyUserRequest{
        ContentType: "application/json",
        UserID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRolesbyUser200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## PutRolesinUser

Allows you to add roles to a particular user or application key by specifying the list of roles' IDs on the request's body.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Roles.PutRolesinUser(ctx, operations.PutRolesinUserRequest{
        RequestBody: []int{
            870088,
            978619,
            473608,
            799159,
        },
        UserID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveRolefromUser

Allows you to remove a role from a specific user or application key. This method only allows the removal of one role per request. The role's ID must be specified on the request path, not on the request body.

> Note that a successful response returns a `204` response with an empty body. A deletion on a role or user that does not exist will also return a `204`. Thus, this method should not be used to verify the existence of a specific user or role.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Roles.RemoveRolefromUser(ctx, operations.RemoveRolefromUserRequest{
        ContentType: "application/json",
        RoleID: "esse",
        UserID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
