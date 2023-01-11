<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateFileAssociationRequest(
    security=operations.CreateFileAssociationSecurity(
        o_auth2=shared.SchemeOAuth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CreateFileAssociationPathParams(
        file_id="at",
    ),
    headers=operations.CreateFileAssociationHeaders(
        xero_tenant_id="consequatur",
    ),
    request=shared.Association(
        file_id="maxime",
        object_group="Payment",
        object_id="nam",
        object_type="Current",
    ),
)
    
res = s.files.create_file_association(req)

if res.association is not None:
    # handle response
```
<!-- End SDK Example Usage -->