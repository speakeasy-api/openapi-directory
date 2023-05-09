# User

### Available Operations

* [CreateUser](#createuser) - Create User
* [GetListUsers](#getlistusers) - Get List of Users
* [GetUser](#getuser) - Get User

## CreateUser

Allows you to create a user by providing an email (mandatory) and name (optional). The email must be in a valid format. The success response will contain the generated `userId` for that user.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.CreateUser(ctx, shared.CreateUserRequest{
        Email: "Marielle_Carroll58@hotmail.com",
        Name: "Cassandra Welch",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetListUsers

Returns a list of registered users. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.

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
    res, err := s.User.GetListUsers(ctx, operations.GetListUsersRequest{
        ContentType: "beatae",
        NumItems: sdk.Int64(414662),
        PageNumber: sdk.Int64(473600),
        Sort: sdk.String("modi"),
        SortType: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsersResponse != nil {
        // handle response
    }
}
```

## GetUser

Allows you to get a user from the database, using the `userId` as the identifier.

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
    res, err := s.User.GetUser(ctx, operations.GetUserRequest{
        ContentType: "application/json",
        UserID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```
