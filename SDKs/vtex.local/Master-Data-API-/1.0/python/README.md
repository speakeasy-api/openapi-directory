# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Master-Data-API-/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        app_key="YOUR_API_KEY_HERE",
        app_token="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateNewCustomerAddressRequest(
    accept="application/json",
    content_type="application/json",
    schema="schema",
    create_update_address_requests=shared.CreateUpdateAddressRequests(
        address_name="My house",
        address_type="residential",
        city="Rio de Janeiro",
        complement="3rd floor",
        country="BRA",
        neighborhood="Botafogo",
        number="300",
        postal_code="12345-000",
        receiver_name="Clark Kent.",
        reference="Grey building",
        state="Rio de Janeiro",
        street="Praia de Botafogo",
        user_id="7e03m794-a33a-11e9-84rt6-0adfa64s5a8e",
    ),
)
    
res = s.addresses.create_new_customer_address(req)

if res.document_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### addresses

* `create_new_customer_address` - Create new customer address
* `delete_customer_address` - Delete customer address
* `update_customer_address` - Update customer address

### clusters

* `validatedocumentbyclusters` - Validate document by clusters

### customer_profiles

* `create_new_customer_profilev2` - Create new customer profile
* `delete_customer_profile` - Delete customer profile
* `update_customer_profile` - Update customer profile

### documents

* `createnewdocument` - Create new document
* `createorupdatepartialdocument` - Create partial document
* `deletedocument` - Delete document
* `getdocument` - Get document
* `updateentiredocument` - Update entire document
* `updatepartialdocument` - Update partial document

### indices

* `deleteindexbyname` - Delete index by name
* `getindexbyname` - Get index by name
* `getindices` - Get indices
* `putindices` - Put indices

### schemas

* `deleteschemabyname` - Delete schema by name
* `getschemabyname` - Get schema by name
* `getschemas` - Get schemas
* `saveschemabyname` - Save schema by name

### scroll

* `scrolldocuments` - Scroll documents

### search

* `searchdocuments` - Search documents

### versions

* `getversion` - Get version
* `listversions` - List versions
* `putversion` - Put version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
