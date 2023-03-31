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


req = operations.InvoiceNotification2Request(
    accept="application/json",
    content_type="application/json",
    invoice_notification_request=shared.InvoiceNotificationRequest(
        cfop="6.104",
        courier="corrupti",
        extra_value=100,
        invoice_key="provident",
        invoice_number="123456789",
        invoice_url="distinctio",
        invoice_value="2499",
        issued_date="2020-07-15",
        items=[
            shared.Item1(
                item_index="67",
                price=2499,
                quantity=3,
            ),
            shared.Item1(
                item_index="67",
                price=2499,
                quantity=3,
            ),
            shared.Item1(
                item_index="67",
                price=2499,
                quantity=3,
            ),
            shared.Item1(
                item_index="67",
                price=2499,
                quantity=3,
            ),
        ],
        tracking_number="unde",
        tracking_url="nulla",
        type="Output",
        volumes=3,
    ),
    order_id="70caf3941s6df1",
)
    
res = s.invoice.invoice_notification2(req)

if res.invoice_notification2_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->