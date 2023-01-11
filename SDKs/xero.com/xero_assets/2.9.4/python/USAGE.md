<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateAssetRequest(
    security=operations.CreateAssetSecurity(
        o_auth2=shared.SchemeOAuth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    headers=operations.CreateAssetHeaders(
        xero_tenant_id="dolorem",
    ),
    request=shared.Asset(
        accounting_book_value=73.099998,
        asset_id="tempora",
        asset_name="est",
        asset_number="debitis",
        asset_status="Draft",
        asset_type_id="soluta",
        book_depreciation_detail="fugit",
        book_depreciation_setting="magni",
        can_rollback=False,
        disposal_date="1998-01-20",
        disposal_price=38.200001,
        is_delete_enabled_for_date=False,
        purchase_date="1972-02-09",
        purchase_price=66.199997,
        serial_number="ipsam",
        warranty_expiry_date="veniam",
    ),
)
    
res = s.asset.create_asset(req)

if res.asset is not None:
    # handle response
```
<!-- End SDK Example Usage -->