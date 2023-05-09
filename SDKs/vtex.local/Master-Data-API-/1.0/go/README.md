# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Master-Data-API-/1.0/go
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
    res, err := s.Addresses.CreateNewCustomerAddress(ctx, operations.CreateNewCustomerAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Schema: sdk.String("schema"),
        CreateUpdateAddressRequests: shared.CreateUpdateAddressRequests{
            AddressName: sdk.String("My house"),
            AddressType: sdk.String("residential"),
            City: sdk.String("Rio de Janeiro"),
            Complement: sdk.String("3rd floor"),
            Country: sdk.String("BRA"),
            Neighborhood: sdk.String("Botafogo"),
            Number: sdk.String("300"),
            PostalCode: sdk.String("12345-000"),
            ReceiverName: sdk.String("Clark Kent."),
            Reference: sdk.String("Grey building"),
            State: sdk.String("Rio de Janeiro"),
            Street: sdk.String("Praia de Botafogo"),
            UserID: sdk.String("7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Addresses](docs/addresses/README.md)

* [CreateNewCustomerAddress](docs/addresses/README.md#createnewcustomeraddress) - Create new customer address
* [DeleteCustomerAddress](docs/addresses/README.md#deletecustomeraddress) - Delete customer address
* [UpdateCustomerAddress](docs/addresses/README.md#updatecustomeraddress) - Update customer address

### [Clusters](docs/clusters/README.md)

* [Validatedocumentbyclusters](docs/clusters/README.md#validatedocumentbyclusters) - Validate document by clusters

### [CustomerProfiles](docs/customerprofiles/README.md)

* [CreateNewCustomerProfilev2](docs/customerprofiles/README.md#createnewcustomerprofilev2) - Create new customer profile
* [DeleteCustomerProfile](docs/customerprofiles/README.md#deletecustomerprofile) - Delete customer profile
* [UpdateCustomerProfile](docs/customerprofiles/README.md#updatecustomerprofile) - Update customer profile

### [Documents](docs/documents/README.md)

* [Createnewdocument](docs/documents/README.md#createnewdocument) - Create new document
* [Createorupdatepartialdocument](docs/documents/README.md#createorupdatepartialdocument) - Create partial document
* [Deletedocument](docs/documents/README.md#deletedocument) - Delete document
* [Getdocument](docs/documents/README.md#getdocument) - Get document
* [Updateentiredocument](docs/documents/README.md#updateentiredocument) - Update entire document
* [Updatepartialdocument](docs/documents/README.md#updatepartialdocument) - Update partial document

### [Indices](docs/indices/README.md)

* [Deleteindexbyname](docs/indices/README.md#deleteindexbyname) - Delete index by name
* [Getindexbyname](docs/indices/README.md#getindexbyname) - Get index by name
* [Getindices](docs/indices/README.md#getindices) - Get indices
* [Putindices](docs/indices/README.md#putindices) - Put indices

### [Schemas](docs/schemas/README.md)

* [Deleteschemabyname](docs/schemas/README.md#deleteschemabyname) - Delete schema by name
* [Getschemabyname](docs/schemas/README.md#getschemabyname) - Get schema by name
* [Getschemas](docs/schemas/README.md#getschemas) - Get schemas
* [Saveschemabyname](docs/schemas/README.md#saveschemabyname) - Save schema by name

### [Scroll](docs/scroll/README.md)

* [Scrolldocuments](docs/scroll/README.md#scrolldocuments) - Scroll documents

### [Search](docs/search/README.md)

* [Searchdocuments](docs/search/README.md#searchdocuments) - Search documents

### [Versions](docs/versions/README.md)

* [Getversion](docs/versions/README.md#getversion) - Get version
* [Listversions](docs/versions/README.md#listversions) - List versions
* [Putversion](docs/versions/README.md#putversion) - Put version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
