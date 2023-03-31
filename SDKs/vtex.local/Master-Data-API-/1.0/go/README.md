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

    req := operations.CreateNewCustomerAddressRequest{
        Accept: "application/json",
        ContentType: "application/json",
        Schema: "schema",
        CreateUpdateAddressRequests: shared.CreateUpdateAddressRequests{
            AddressName: "My house",
            AddressType: "residential",
            City: "Rio de Janeiro",
            Complement: "3rd floor",
            Country: "BRA",
            Neighborhood: "Botafogo",
            Number: "300",
            PostalCode: "12345-000",
            ReceiverName: "Clark Kent.",
            Reference: "Grey building",
            State: "Rio de Janeiro",
            Street: "Praia de Botafogo",
            UserID: "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e",
        },
    }

    ctx := context.Background()
    res, err := s.Addresses.CreateNewCustomerAddress(ctx, req)
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


### Addresses

* `CreateNewCustomerAddress` - Create new customer address
* `DeleteCustomerAddress` - Delete customer address
* `UpdateCustomerAddress` - Update customer address

### Clusters

* `Validatedocumentbyclusters` - Validate document by clusters

### CustomerProfiles

* `CreateNewCustomerProfilev2` - Create new customer profile
* `DeleteCustomerProfile` - Delete customer profile
* `UpdateCustomerProfile` - Update customer profile

### Documents

* `Createnewdocument` - Create new document
* `Createorupdatepartialdocument` - Create partial document
* `Deletedocument` - Delete document
* `Getdocument` - Get document
* `Updateentiredocument` - Update entire document
* `Updatepartialdocument` - Update partial document

### Indices

* `Deleteindexbyname` - Delete index by name
* `Getindexbyname` - Get index by name
* `Getindices` - Get indices
* `Putindices` - Put indices

### Schemas

* `Deleteschemabyname` - Delete schema by name
* `Getschemabyname` - Get schema by name
* `Getschemas` - Get schemas
* `Saveschemabyname` - Save schema by name

### Scroll

* `Scrolldocuments` - Scroll documents

### Search

* `Searchdocuments` - Search documents

### Versions

* `Getversion` - Get version
* `Listversions` - List versions
* `Putversion` - Put version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
