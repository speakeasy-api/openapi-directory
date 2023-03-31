# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Marketplace-APIs-/1.0/python
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


req = operations.GetSuggestionRequest(
    accept="corrupti",
    content_type="provident",
    account_name="distinctio",
    seller_id="quibusdam",
    seller_sku_id="unde",
)
    
res = s.get_suggestions.get_suggestion(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### get_suggestions

* `get_suggestion` - Get SKU Suggestion by ID
* `getsuggestions` - Get all SKU suggestions

### get_versions

* `get_suggestionbyversion` - Get Version by ID
* `get_versions` - Get all Versions

### manage_suggestions

* `delete_suggestion` - Delete SKU Suggestion
* `save_suggestion` - Send SKU Suggestion

### match_received_sk_us

* `match` - Match Received SKUs individually
* `match_multiple` - Match Multiple Received SKUs

### sku_approval_settings

* `getaccountconfig` - Get Account's Approval Settings
* `getauto_approvevaluefromconfig` - Get autoApprove Status in Account Settings
* `getselleraccountconfig` - Get Seller's Approval Settings
* `putselleraccountconfig` - Save Seller's Approval Settings
* `saveaccountconfig` - Save Account's Approval Settings
* `saveautoapproveforaccount` - Activate autoApprove in Marketplace's Account
* `saveautoapproveforaccountseller` - Activate autoApprove Setting for a Seller
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
