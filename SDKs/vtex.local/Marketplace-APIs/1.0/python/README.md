# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Marketplace-APIs/1.0/python
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


req = operations.GetProductoffersRequest(
    accept="corrupti",
    content_type="provident",
    account_name="distinctio",
    environment="quibusdam",
    product_id="unde",
)
    
res = s.matched_offers.get_productoffers(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### matched_offers

* `get_productoffers` - Get Matched Offer's Data by Product ID
* `get_sk_uoffers` - Get Matched Offer's Data by SKU ID
* `getofferslist` - Get Matched Offers List

### notification

* `inventory_notification` - Notify marketplace of inventory update
* `price_notification` - Notify marketplace of price update

### sales_channel_mapping

* `retrieve_mapping` - Get Sales Channel Mapping Data
* `upsert_mapping` - Upsert Sales Channel Mapping

### seller_commissions

* `bulk_upsert_seller_commissions` - Upsert Seller Commissions in Bulk
* `list_seller_commissions` - List Seller Commissions by seller ID
* `remove_seller_commissions` - Remove Seller Commissions by Category ID
* `retrieve_seller_commissions` - Get Seller Commissions by Category ID
* `upsert_seller_commissions` - Upsert Seller Commissions by Category ID

### seller_invite

* `accept_seller_lead` - Accept Seller Lead
* `create_seller_from_seller_lead` - Create Seller From Lead
* `create_seller_lead` - Invite Seller Lead
* `list_seller_leads` - List Seller Leads
* `remove_seller_lead` - Delete Seller Lead
* `resend_seller_lead_request` - Resend Seller Lead Invite
* `retrieve_seller_lead` - Get Seller Lead's Data by Id

### sellers

* `get_list_sellers` - List Sellers
* `get_retrieve_seller` - Get Seller data by ID
* `update_seller` - Update Seller by Seller ID
* `upsert_seller_request` - Configure Seller Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
