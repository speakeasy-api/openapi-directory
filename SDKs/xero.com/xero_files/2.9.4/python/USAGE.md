<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateFileAssociationRequest(
    association=shared.Association(
        file_id="89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        object_group="Overpayment",
        object_id="05dfc2dd-f7cc-478c-a1ba-928fc816742c",
        object_type="Current",
    ),
    file_id="4ff1e5cc-9835-40d5-bb18-09fdb118db9c",
    xero_tenant_id="esse",
)
    
res = s.files.create_file_association(req, operations.CreateFileAssociationSecurity(
    o_auth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.association is not None:
    # handle response
```
<!-- End SDK Example Usage -->