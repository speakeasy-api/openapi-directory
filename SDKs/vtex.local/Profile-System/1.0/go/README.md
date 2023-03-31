# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Profile-System/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateClientAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Address: &shared.Address{
            AdministrativeAreaLevel1: "RJ",
            CountryCode: "BR",
            CountryName: "Brasil",
            Locality: "Locality",
            LocalityAreaLevel1: "Locality area",
            PostalCode: "20200-000",
            Route: "51",
            StreetNumber: "999",
        },
        AlternativeKey: "email",
        ProfileID: "70caf394-8534-447e-a0ca-1803c669c771",
    }

    ctx := context.Background()
    res, err := s.Addresses.CreateClientAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClientAddress201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Addresses

* `CreateClientAddress` - Create client address
* `DeleteAddress` - Delete address
* `GetAddress` - Get address
* `GetAddressByVersion` - Get address by version
* `GetClientAddresses` - Get client addresses
* `GetUnmaskedAddress` - Get unmasked address
* `GetUnmaskedAddressByVersion` - Get unmasked address by version
* `GetUnmaskedClientAddresses` - Get unmasked client addresses
* `UpdateClientAddress` - Update client address

### Profiles

* `CreateClientProfile` - Create client profile
* `DeleteClientProfile` - Delete client profile
* `GetProfile` - Get profile
* `GetProfileByVersion` - Get profile by version
* `GetUnmaskedProfile` - Get unmasked profile
* `GetUnmaskedProfileByVersion` - Get unmasked profile by version
* `UpdateClientProfile` - Updates client profile

### Prospects

* `CreateProspect` - Create prospect
* `DeleteProspect` - Delete prospect
* `GetProspect` - Get prospect
* `GetUnmaskedProspect` - Get unmasked prospect
* `UpdateProspect` - Update prospect

### PurchaseInformation

* `CreatePurchaseInformation` - Create purchase information
* `DeletePurchaseInformation` - Delete purchase information
* `GetPurchaseInformation` - Get purchase information
* `GetUnmaskedPurchaseInformation` - Get unmasked purchase information
* `UpdatePurchaseInformation` - Update purchase information

### Schemas

* `CreateOrUpdateProfileSchema` - Create or update profile schema
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
