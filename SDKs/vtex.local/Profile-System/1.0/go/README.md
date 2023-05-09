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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Addresses](docs/addresses/README.md)

* [CreateClientAddress](docs/addresses/README.md#createclientaddress) - Create client address
* [DeleteAddress](docs/addresses/README.md#deleteaddress) - Delete address
* [GetAddress](docs/addresses/README.md#getaddress) - Get address
* [GetAddressByVersion](docs/addresses/README.md#getaddressbyversion) - Get address by version
* [GetClientAddresses](docs/addresses/README.md#getclientaddresses) - Get client addresses
* [GetUnmaskedAddress](docs/addresses/README.md#getunmaskedaddress) - Get unmasked address
* [GetUnmaskedAddressByVersion](docs/addresses/README.md#getunmaskedaddressbyversion) - Get unmasked address by version
* [GetUnmaskedClientAddresses](docs/addresses/README.md#getunmaskedclientaddresses) - Get unmasked client addresses
* [UpdateClientAddress](docs/addresses/README.md#updateclientaddress) - Update client address

### [Profiles](docs/profiles/README.md)

* [CreateClientProfile](docs/profiles/README.md#createclientprofile) - Create client profile
* [DeleteClientProfile](docs/profiles/README.md#deleteclientprofile) - Delete client profile
* [GetProfile](docs/profiles/README.md#getprofile) - Get profile
* [GetProfileByVersion](docs/profiles/README.md#getprofilebyversion) - Get profile by version
* [GetUnmaskedProfile](docs/profiles/README.md#getunmaskedprofile) - Get unmasked profile
* [GetUnmaskedProfileByVersion](docs/profiles/README.md#getunmaskedprofilebyversion) - Get unmasked profile by version
* [UpdateClientProfile](docs/profiles/README.md#updateclientprofile) - Updates client profile

### [Prospects](docs/prospects/README.md)

* [CreateProspect](docs/prospects/README.md#createprospect) - Create prospect
* [DeleteProspect](docs/prospects/README.md#deleteprospect) - Delete prospect
* [GetProspect](docs/prospects/README.md#getprospect) - Get prospect
* [GetUnmaskedProspect](docs/prospects/README.md#getunmaskedprospect) - Get unmasked prospect
* [UpdateProspect](docs/prospects/README.md#updateprospect) - Update prospect

### [PurchaseInformation](docs/purchaseinformation/README.md)

* [CreatePurchaseInformation](docs/purchaseinformation/README.md#createpurchaseinformation) - Create purchase information
* [DeletePurchaseInformation](docs/purchaseinformation/README.md#deletepurchaseinformation) - Delete purchase information
* [GetPurchaseInformation](docs/purchaseinformation/README.md#getpurchaseinformation) - Get purchase information
* [GetUnmaskedPurchaseInformation](docs/purchaseinformation/README.md#getunmaskedpurchaseinformation) - Get unmasked purchase information
* [UpdatePurchaseInformation](docs/purchaseinformation/README.md#updatepurchaseinformation) - Update purchase information

### [Schemas](docs/schemas/README.md)

* [CreateOrUpdateProfileSchema](docs/schemas/README.md#createorupdateprofileschema) - Create or update profile schema
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
