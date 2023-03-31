# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Checkout-API/1.0/python
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


req = operations.AddClientPreferencesRequest(
    accept="corrupti",
    content_type="provident",
    request_body=operations.AddClientPreferencesRequestBody(
        locale="distinctio",
        optin_news_letter=False,
    ),
    order_form_id="quibusdam",
)
    
res = s.cart_attachments.add_client_preferences(req)

if res.add_client_preferences_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### cart_attachments

* `add_client_preferences` - Add client preferences
* `add_client_profile` - Add client profile
* `add_marketing_data` - Add marketing data
* `add_merchant_context_data` - Add merchant context data
* `add_payment_data` - Add payment data
* `add_shipping_address` - Add shipping address and select delivery option
* `get_client_profile_by_email` - Get client profile by email

### configuration

* `clearorder_form_messages` - Clear orderForm messages
* `get_window_to_change_seller` - Get window to change seller
* `getorder_formconfiguration` - Get orderForm configuration
* `update_window_to_change_seller` - Update window to change seller
* `updateorder_formconfiguration` - Update orderForm configuration

### custom_data

* `removesinglecustomfieldvalue` - Remove single custom field value
* `set_multiple_custom_field_values` - Set multiple custom field values
* `set_single_custom_field_value` - Set single custom field value

### fulfillment

* `get_address_by_postal_code` - Get address by postal code
* `list_pickup_ppoints_by_location` - List pickup points by location

### order_placement

* `place_order` - Place order
* `place_order_from_existing_order_form` - Place order from an existing cart
* `process_order` - Process order

### region

* `get_sellers_by_region` - Get sellers by region or address

### shopping_cart

* `add_coupons` - Add coupons to the cart
* `cart_simulation` - Cart simulation
* `create_a_new_cart` - Get current or create a new cart
* `get_cart_information_by_id` - Get cart information by ID
* `get_cart_installments` - Cart installments
* `ignore_profile_data` - Ignore profile data
* `items` - Add cart items
* `items_update` - Update cart items
* `price_change` - Change price
* `remove_all_items` - Remove all items
* `removeallpersonaldata` - Remove all personal data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
