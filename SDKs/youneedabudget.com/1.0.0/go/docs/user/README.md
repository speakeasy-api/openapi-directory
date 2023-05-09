# User

### Available Operations

* [GetUser](#getuser) - User info

## GetUser

Returns authenticated user information

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetUser(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
}
```
