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