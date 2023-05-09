# Addresses

### Available Operations

* [CreateClientAddress](#createclientaddress) - Create client address
* [DeleteAddress](#deleteaddress) - Delete address
* [GetAddress](#getaddress) - Get address
* [GetAddressByVersion](#getaddressbyversion) - Get address by version
* [GetClientAddresses](#getclientaddresses) - Get client addresses
* [GetUnmaskedAddress](#getunmaskedaddress) - Get unmasked address
* [GetUnmaskedAddressByVersion](#getunmaskedaddressbyversion) - Get unmasked address by version
* [GetUnmaskedClientAddresses](#getunmaskedclientaddresses) - Get unmasked client addresses
* [UpdateClientAddress](#updateclientaddress) - Update client address

## CreateClientAddress

Creates new address for a given client profile.

> The `id` field returned by this request is the `addressId` used to retrieve or update information of a specific address later.

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
    res, err := s.Addresses.CreateClientAddress(ctx, operations.CreateClientAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Address: &shared.Address{
            AdministrativeAreaLevel1: "RJ",
            CountryCode: sdk.String("BR"),
            CountryName: "Brasil",
            Locality: "Locality",
            LocalityAreaLevel1: "Locality area",
            PostalCode: "20200-000",
            Route: "51",
            StreetNumber: "999",
        },
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClientAddress201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteAddress

Deletes a client's address by `profileId` and `addressId`.

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
    res, err := s.Addresses.DeleteAddress(ctx, operations.DeleteAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AddressID: "bf82180e-cf9e-4089-9af6-ae1518555992",
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

## GetAddress

Retrieves information of a specific address of a given client, by its respectives `adderssId` and `profileId`.

> For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked address.

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
    res, err := s.Addresses.GetAddress(ctx, operations.GetAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AddressID: "bf82180e-cf9e-4089-9af6-ae1518555992",
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAddressByVersion

Retrieves information of a specific version address of a given client.

> For security and privacy reasons, this request returns masked address data by version. For unmasked information, see Get unmasked address by version.

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
    res, err := s.Addresses.GetAddressByVersion(ctx, operations.GetAddressByVersionRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AddressID: "bf82180e-cf9e-4089-9af6-ae1518555992",
        AddressVersionID: "86dfae79-1d23-43f2-a643-2fc8f1839461",
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
        Reason: "data-validation",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressByVersion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetClientAddresses

Retrieves information of all addresses of a given client, by its `profileId`.

> For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked client addresses.

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
    res, err := s.Addresses.GetClientAddresses(ctx, operations.GetClientAddressesRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClientAddresses200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetUnmaskedAddress

Retrieves unmasked information of a specific address of a given client, by its respectives `adderssId` and `profileId`.

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
    res, err := s.Addresses.GetUnmaskedAddress(ctx, operations.GetUnmaskedAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AddressID: "bf82180e-cf9e-4089-9af6-ae1518555992",
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
        Reason: "data-validation",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUnmaskedAddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUnmaskedAddressByVersion

Retrieves unmasked information of a specific address version of a given client.

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
    res, err := s.Addresses.GetUnmaskedAddressByVersion(ctx, operations.GetUnmaskedAddressByVersionRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AddressID: "bf82180e-cf9e-4089-9af6-ae1518555992",
        AddressVersionID: "86dfae79-1d23-43f2-a643-2fc8f1839461",
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
        Reason: "data-validation",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUnmaskedAddressByVersion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUnmaskedClientAddresses

Retrieves unmasked information of all addresses of a given client, by its `profileId`.

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
    res, err := s.Addresses.GetUnmaskedClientAddresses(ctx, operations.GetUnmaskedClientAddressesRequest{
        Accept: "application/json",
        ContentType: "application/json",
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUnmaskedClientAddresses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateClientAddress

Updates one or more fields of an existing address for a given client profile.

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
    res, err := s.Addresses.UpdateClientAddress(ctx, operations.UpdateClientAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RequestBody: &operations.UpdateClientAddressRequestBody{
            AdministrativeAreaLevel1: sdk.String("RJ"),
            CountryCode: sdk.String("BR"),
            CountryName: sdk.String("Brasil"),
            Locality: sdk.String("Locality"),
            LocalityAreaLevel1: sdk.String("Locality area"),
            PostalCode: sdk.String("20200-000"),
            Route: sdk.String("Brasil"),
            StreetNumber: sdk.String("Brasil"),
        },
        AddressID: "bf82180e-cf9e-4089-9af6-ae1518555992",
        AlternativeKey: sdk.String("email"),
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateClientAddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```
