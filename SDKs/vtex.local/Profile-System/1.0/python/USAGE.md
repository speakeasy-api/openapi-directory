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