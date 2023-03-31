# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Promotions-/1.0/python
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


req = operations.CalculatediscountsandtaxesBundlesRequest(
    accept="corrupti",
    calculatediscountsandtaxes_bundles_request=shared.CalculatediscountsandtaxesBundlesRequest(
        is_shopping_cart=False,
        items=[
            shared.Item(
                id="distinctio",
                index=844266,
                is_gift=False,
                logistics_infos=[
                    "nulla",
                    "corrupti",
                    "illum",
                ],
                measurement_unit="vel",
                params=[
                    shared.Param(
                        name="deserunt",
                        value="suscipit",
                    ),
                    shared.Param(
                        name="iure",
                        value="magnam",
                    ),
                    shared.Param(
                        name="debitis",
                        value="ipsa",
                    ),
                ],
                price_sheet=[
                    "tempora",
                    "suscipit",
                    "molestiae",
                    "minus",
                ],
                price_tags=[
                    "voluptatum",
                    "iusto",
                    "excepturi",
                    "nisi",
                ],
                product_specifications=[
                    "temporibus",
                    "ab",
                    "quis",
                    "veritatis",
                ],
                quantity=648172,
                seller_id="perferendis",
                unit_multiplier=368241,
            ),
            shared.Item(
                id="repellendus",
                index=957156,
                is_gift=False,
                logistics_infos=[
                    "odit",
                    "at",
                    "at",
                    "maiores",
                ],
                measurement_unit="molestiae",
                params=[
                    shared.Param(
                        name="quod",
                        value="esse",
                    ),
                    shared.Param(
                        name="totam",
                        value="porro",
                    ),
                    shared.Param(
                        name="dolorum",
                        value="dicta",
                    ),
                    shared.Param(
                        name="nam",
                        value="officia",
                    ),
                ],
                price_sheet=[
                    "fugit",
                    "deleniti",
                    "hic",
                ],
                price_tags=[
                    "totam",
                    "beatae",
                    "commodi",
                    "molestiae",
                ],
                product_specifications=[
                    "qui",
                    "impedit",
                ],
                quantity=736918,
                seller_id="esse",
                unit_multiplier=216550,
            ),
            shared.Item(
                id="excepturi",
                index=135218,
                is_gift=False,
                logistics_infos=[
                    "ad",
                ],
                measurement_unit="natus",
                params=[
                    shared.Param(
                        name="iste",
                        value="dolor",
                    ),
                ],
                price_sheet=[
                    "laboriosam",
                    "hic",
                    "saepe",
                ],
                price_tags=[
                    "in",
                    "corporis",
                    "iste",
                ],
                product_specifications=[
                    "saepe",
                    "quidem",
                ],
                quantity=99280,
                seller_id="ipsa",
                unit_multiplier=969810,
            ),
        ],
        origin="est",
        params=[
            shared.Param(
                name="laborum",
                value="dolores",
            ),
            shared.Param(
                name="dolorem",
                value="corporis",
            ),
            shared.Param(
                name="explicabo",
                value="nobis",
            ),
        ],
        profile_id="enim",
        sales_channel="omnis",
    ),
    content_type="nemo",
)
    
res = s.bundles.calculatediscountsandtaxes_bundles_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bundles

* `calculatediscountsandtaxes_bundles_` - Calculate discounts and taxes (Bundles)

### campaign_audiences

* `getcampaignaudiences` - Get all campaign audiences
* `getcampaignconfiguration` - Get campaign audience configuration
* `setcampaignconfiguration` - Create campaign audience

### coupons

* `archivebycouponcode` - Archive coupon by coupon code
* `getall` - Get all coupons
* `getarchivedbycouponcode` - Get archived coupon by coupon code
* `getbycouponcode` - Get coupon by coupon code
* `getusage` - Get coupon usage
* `massive_generation` - Coupon Massive Generation
* `unarchivebycouponcode` - Unarchive coupon by coupon code
* `update` - Update coupon
* `post_api_rnb_pvt_coupon_` - Create coupon
* `post_api_rnb_pvt_multiple_coupons` - Create multiple coupons

### notifications

* `usagenotification` - Usage notification

### prices_legacy_v1

* `deletebysku_id` - Delete Price by SKU Id
* `getallpaged` - Get all paged prices
* `pricebycontext` - Get Price by context
* `pricebysku_id` - Get Price by SKU ID
* `pricebysku_idandtrade_policy` - Get Price by SKU ID and Trade Policy
* `saveprice` - Save Price

### promotions_and_taxes

* `archive_promotion` - Archive Promotion or Tax
* `create_or_update_calculator_configuration` - Create or Update Promotion or Tax
* `get_all_benefits` - Get All Promotions
* `get_all_taxes` - Get All Taxes
* `get_archived_promotions` - List Archived Promotions
* `get_archived_taxes` - List Archived Taxes
* `get_calculator_configuration_by_id` - Get Promotion or Tax by ID
* `unarchive_promotion` - Unarchive Promotion or Tax
* `post_api_rnb_pvt_import_calculator_configuration` - Create Multiple SKU Promotion
* `put_api_rnb_pvt_import_calculator_configuration_promotion_id_` - Update Multiple SKU Promotion
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
