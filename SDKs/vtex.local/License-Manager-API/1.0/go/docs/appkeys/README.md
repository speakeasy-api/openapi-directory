# AppKeys

### Available Operations

* [Createnewappkey](#createnewappkey) - Create new appkey
* [Getappkeysfromaccount](#getappkeysfromaccount) - Get appKeys from account
* [Updateappkey](#updateappkey) - Update appkey

## Createnewappkey

Creates a new pair of `appKey` and `appToken`.

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
    res, err := s.AppKeys.Createnewappkey(ctx, shared.CreatenewappkeyRequest{
        Label: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatenewappkeyResponse != nil {
        // handle response
    }
}
```

## Getappkeysfromaccount

Gets all application keys from an account.

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
    res, err := s.AppKeys.Getappkeysfromaccount(ctx, operations.GetappkeysfromaccountRequest{
        ContentType: "application/json",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getappkeysfromaccounts != nil {
        // handle response
    }
}
```

## Updateappkey

Activates or deactivates an `appKey` by its ID.

### Example Usage

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
    res, err := s.AppKeys.Updateappkey(ctx, operations.UpdateappkeyRequest{
        UpdateappkeyRequest: shared.UpdateappkeyRequest{
            IsActive: false,
        },
        ID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
