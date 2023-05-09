# Profiles

### Available Operations

* [CreateClientProfile](#createclientprofile) - Create client profile
* [DeleteClientProfile](#deleteclientprofile) - Delete client profile
* [GetProfile](#getprofile) - Get profile
* [GetProfileByVersion](#getprofilebyversion) - Get profile by version
* [GetUnmaskedProfile](#getunmaskedprofile) - Get unmasked profile
* [GetUnmaskedProfileByVersion](#getunmaskedprofilebyversion) - Get unmasked profile by version
* [UpdateClientProfile](#updateclientprofile) - Updates client profile

## CreateClientProfile

Creates new client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> The `id` field returned by this request is the `profileId` used to retrieve information on a specific profile later.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

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
    res, err := s.Profiles.CreateClientProfile(ctx, operations.CreateClientProfileRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Profile: &shared.Profile{
            BirthDate: sdk.String("1925-11-17"),
            Document: "12345678900",
            DocumentType: "CPF",
            Email: "john.doe@example.com",
            FirstName: "John",
            LastName: "Doe",
        },
        TTL: sdk.Int64(365),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClientProfile201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteClientProfile

Deletes a client profile by `profileId`.

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
    res, err := s.Profiles.DeleteClientProfile(ctx, operations.DeleteClientProfileRequest{
        Accept: "application/json",
        ContentType: "application/json",
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

## GetProfile

Retrieves the information of a specific client, by its `profileId`.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile.

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
    res, err := s.Profiles.GetProfile(ctx, operations.GetProfileRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProfile200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetProfileByVersion

Retrieves the information of a specific version of a client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile by version.

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
    res, err := s.Profiles.GetProfileByVersion(ctx, operations.GetProfileByVersionRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
        ProfileVersionID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProfileByVersion200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetUnmaskedProfile

Retrieves unmasked information of a specific client, by its `profileId`.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

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
    res, err := s.Profiles.GetUnmaskedProfile(ctx, operations.GetUnmaskedProfileRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
        Reason: "data-validation",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUnmaskedProfile200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetUnmaskedProfileByVersion

Retrieves unmasked information of a specific version of a client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

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
    res, err := s.Profiles.GetUnmaskedProfileByVersion(ctx, operations.GetUnmaskedProfileByVersionRequest{
        Accept: "application/json",
        ContentType: "application/json",
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
        ProfileVersionID: "70caf394-8534-447e-a0ca-1803c669c771",
        Reason: "data-validation",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUnmaskedProfileByVersion200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## UpdateClientProfile

Updates one or more fields of an existing client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

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
    res, err := s.Profiles.UpdateClientProfile(ctx, operations.UpdateClientProfileRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: &operations.UpdateClientProfileRequestBody{
            BirthDate: sdk.String("1925-11-17"),
            Document: sdk.String("12345678900"),
            DocumentType: sdk.String("CPF"),
            Email: sdk.String("john.doe@example.com"),
            FirstName: sdk.String("John"),
            LastName: sdk.String("Doe"),
        },
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
        TTL: sdk.Int64(365),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateClientProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
