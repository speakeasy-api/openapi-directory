# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/SKU-Bindings-API/1.0/python
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


req = operations.ActivateSKUBindingRequest(
    accept="corrupti",
    content_type="provident",
    seller_id="vtxkfj7352",
    sku_seller_id="71",
)
    
res = s.sku_bindings.activate_sku_binding(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### sku_bindings

* `activate_sku_binding` - Activate SKU Binding
* `bindtoanothersku` - Bind a seller's SKU to another SKU
* `change_notification` - Change Notification with SKU ID
* `deactivate_sku_binding` - Deactivate SKU Binding
* `delete_sk_usellerassociation` - Remove a seller's SKU Binding
* `get_sk_useller` - Get details of a seller's SKU
* `getallby_seller_id` - Get all SKU Bindings by Seller ID
* `getby_sku_id` - Get SKU Bindings by SKU ID
* `getpagedadmin` - Get SKU Bindings information
* `getpagedby_seller_id` - Get paged SKU Bindings by Seller ID
* `insert_sku_binding` - Insert SKU Binding
* `post_sku_binding_pvt_skuseller_changenotification_seller_id_seller_sku_id_` - Change Notification with Seller ID and Seller SKU ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
