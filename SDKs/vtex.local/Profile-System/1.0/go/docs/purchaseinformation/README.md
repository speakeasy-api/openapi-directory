# PurchaseInformation

### Available Operations

* [CreatePurchaseInformation](#createpurchaseinformation) - Create purchase information
* [DeletePurchaseInformation](#deletepurchaseinformation) - Delete purchase information
* [GetPurchaseInformation](#getpurchaseinformation) - Get purchase information
* [GetUnmaskedPurchaseInformation](#getunmaskedpurchaseinformation) - Get unmasked purchase information
* [UpdatePurchaseInformation](#updatepurchaseinformation) - Update purchase information

## CreatePurchaseInformation

Creates purchase information for a given client profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    res, err := s.PurchaseInformation.CreatePurchaseInformation(ctx, operations.CreatePurchaseInformationRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: sdk.String("distinctio"),
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePurchaseInformation201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeletePurchaseInformation

Deletes purchase informaiton by `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    res, err := s.PurchaseInformation.DeletePurchaseInformation(ctx, operations.DeletePurchaseInformationRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPurchaseInformation

Retrieves purchase information of a given client, by its `profileId`.

> For security and privacy reasons, this request returns masked data. For unmasked information, see Get unmasked purchase information.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    res, err := s.PurchaseInformation.GetPurchaseInformation(ctx, operations.GetPurchaseInformationRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPurchaseInformation200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetUnmaskedPurchaseInformation

Retrieves unmasked purchase information of a given client, by its `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    res, err := s.PurchaseInformation.GetUnmaskedPurchaseInformation(ctx, operations.GetUnmaskedPurchaseInformationRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUnmaskedPurchaseInformation200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdatePurchaseInformation

Updates one or more fields of existing purchase information for a given client profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    res, err := s.PurchaseInformation.UpdatePurchaseInformation(ctx, operations.UpdatePurchaseInformationRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: sdk.String("quibusdam"),
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePurchaseInformation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
