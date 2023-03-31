# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Orders-API/1.0/python
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


req = operations.GetWindowToChangeSellerRequest(
    accept="corrupti",
    content_type="provident",
)
    
res = s.change_seller.get_window_to_change_seller(req)

if res.get_window_to_change_seller_200_text_plain_integer is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### change_seller

* `get_window_to_change_seller` - Get window to change seller
* `update_window_to_change_seller` - Update window to change seller

### conversation

* `get_conversation` - Retrieve order conversation

### export_order_report

* `status_completed` - Export order report with status 'Completed'
* `status_in_progress` - Export order report with status 'In Progress'

### feed_v2_deprecated

* `getfeedorderstatus` - Get feed order status

### feed_v3

* `commititemfeedorderstatus` - Commit feed items
* `feed_configuration` - Create or update feed configuration
* `feed_configuration_delete` - Delete feed configuration
* `get_feed_configuration` - Get feed configuration
* `getfeedorderstatus1` - Retrieve feed items
* `test_jso_nata_expression` - Test JSONata expression

### invoice

* `invoice_notification` - Order invoice notification
* `updatepartialinvoice_send_tracking_number` - Update order's partial invoice (send tracking number)

### order_hook

* `delete_hook_configuration` - Delete hook configuration
* `get_hook_configuration` - Get hook configuration
* `hook_configuration` - Create or update hook configuration

### orders

* `add_log` - Add log in orders
* `cancel_order` - Cancel order
* `get_order` - Get order
* `list_orders` - List orders
* `register_change` - Register change on order
* `start_handling` - Start handling order

### payment

* `get_paymenttransaction` - Retrieve payment transaction
* `send_payment_notification` - Send payment notification

### tracking

* `update_tracking_status` - Update order tracking status

### user_orders

* `userorderdetails` - Retrieve user order details
* `userorderslist` - Retrieve user's orders
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
