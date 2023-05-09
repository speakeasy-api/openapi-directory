# invoice

### Available Operations

* [invoiceNotification2](#invoicenotification2) - Order invoice notification

## invoiceNotification2

Once the order is invoiced, the seller should use this request to send the invoice information to the marketplace.

We strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided.

It is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.

Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceNotification2Request;
import org.openapis.openapi.models.operations.InvoiceNotification2Response;
import org.openapis.openapi.models.shared.InvoiceNotificationRequest;
import org.openapis.openapi.models.shared.Item1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "error") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InvoiceNotification2Request req = new InvoiceNotification2Request("application/json", "application/json",                 new InvoiceNotificationRequest("123456789", "2499", "2020-07-15",                 new org.openapis.openapi.models.shared.Item1[]{{
                                                add(new Item1("67", 2499, 3) {{
                                                    itemIndex = "67";
                                                    price = 2499;
                                                    quantity = 3;
                                                }}),
                                                add(new Item1("67", 2499, 3) {{
                                                    itemIndex = "67";
                                                    price = 2499;
                                                    quantity = 3;
                                                }}),
                                                add(new Item1("67", 2499, 3) {{
                                                    itemIndex = "67";
                                                    price = 2499;
                                                    quantity = 3;
                                                }}),
                                            }}, "Output") {{
                                cfop = "6.104";
                                courier = "suscipit";
                                extraValue = 100L;
                                invoiceKey = "iure";
                                invoiceUrl = "magnam";
                                trackingNumber = "debitis";
                                trackingUrl = "ipsa";
                                volumes = 3L;
                            }};, "70caf3941s6df1");            

            InvoiceNotification2Response res = sdk.invoice.invoiceNotification2(req);

            if (res.invoiceNotification2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
