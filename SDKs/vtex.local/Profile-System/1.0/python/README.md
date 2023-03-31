# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Profile-System/1.0/python
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


req = operations.CreateClientAddressRequest(
    accept="application/json",
    content_type="application/json",
    address=shared.Address(
        administrative_area_level1="RJ",
        country_code="BR",
        country_name="Brasil",
        locality="Locality",
        locality_area_level1="Locality area",
        postal_code="20200-000",
        route="51",
        street_number="999",
    ),
    alternative_key="email",
    profile_id="70caf394-8534-447e-a0ca-1803c669c771",
)
    
res = s.addresses.create_client_address(req)

if res.create_client_address_201_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### addresses

* `create_client_address` - Create client address
* `delete_address` - Delete address
* `get_address` - Get address
* `get_address_by_version` - Get address by version
* `get_client_addresses` - Get client addresses
* `get_unmasked_address` - Get unmasked address
* `get_unmasked_address_by_version` - Get unmasked address by version
* `get_unmasked_client_addresses` - Get unmasked client addresses
* `update_client_address` - Update client address

### profiles

* `create_client_profile` - Create client profile
* `delete_client_profile` - Delete client profile
* `get_profile` - Get profile
* `get_profile_by_version` - Get profile by version
* `get_unmasked_profile` - Get unmasked profile
* `get_unmasked_profile_by_version` - Get unmasked profile by version
* `update_client_profile` - Updates client profile

### prospects

* `create_prospect` - Create prospect
* `delete_prospect` - Delete prospect
* `get_prospect` - Get prospect
* `get_unmasked_prospect` - Get unmasked prospect
* `update_prospect` - Update prospect

### purchase_information

* `create_purchase_information` - Create purchase information
* `delete_purchase_information` - Delete purchase information
* `get_purchase_information` - Get purchase information
* `get_unmasked_purchase_information` - Get unmasked purchase information
* `update_purchase_information` - Update purchase information

### schemas

* `create_or_update_profile_schema` - Create or update profile schema
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
