# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Pricing-API/1.0/python
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


req = operations.GetrulesforapricetableRequest(
    accept="application/json",
    content_type="corrupti",
    price_table_id="b2c",
)
    
res = s.price_tables.getrulesforapricetable(req)

if res.getrulesforapricetable_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### price_tables

* `getrulesforapricetable` - Get rules for a price table
* `listpricetables` - List price tables
* `getallpricetablesandrules` - Get all price tables and their rules
* `put_pricing_pipeline_catalog_price_table_id_` - Update rules for a price table

### prices_and_fixed_prices

* `create_update_price_or_fixed_price` - Create or Update Base Price or Fixed Prices
* `delete_price` - Delete Price
* `deletefixedpricesonapricetableortradepolicy` - Delete Fixed Prices on a price table or trade policy
* `get_computed_pricebypricetable` - Get Computed Price by price table or trade policy
* `get_fixed_prices` - Get Fixed Prices
* `get_fixed_pricesonapricetable` - Get Fixed Prices on a price table or trade policy
* `get_price` - Get Price
* `createorupdatefixedpricesonpricetableortradepolicy` - Create or Update Fixed Prices on a price table or trade policy

### pricing_configuration

* `get_pricing_config` - Get Pricing Configuration
* `get_pricingv2_status` - Get Pricing v2 Status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
