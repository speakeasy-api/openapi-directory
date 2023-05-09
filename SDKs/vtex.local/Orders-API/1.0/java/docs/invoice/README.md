# invoice

### Available Operations

* [invoiceNotification](#invoicenotification) - Order invoice notification
* [updatepartialinvoiceSendTrackingNumber](#updatepartialinvoicesendtrackingnumber) - Update order's partial invoice (send tracking number)

## invoiceNotification

Entering the [invoice in the order](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) is a required step for its [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196#order-status-details) to change to Invoiced - a sign that the order has been successfully completed. Remember that once an order is read as invoiced by the system, this status cannot be changed. 

The total value of the order will be updated after the insertion of the invoice, even when there's a [Partial invoice](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic. 

We strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided. 

When returning items, an input invoice must be sent through this call. For that, the `type` field should be filled in with `input`. 

It is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.

For marketplace integrations: once the order is invoiced, the seller should use this request to send the invoice information to the marketplace. Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.  

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

> 📘 Onboarding guide 
>
> Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceNotificationRequest;
import org.openapis.openapi.models.operations.InvoiceNotificationResponse;
import org.openapis.openapi.models.shared.InvoiceNotificationRequest;
import org.openapis.openapi.models.shared.Item1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "perferendis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InvoiceNotificationRequest req = new InvoiceNotificationRequest("ad", "natus",                 new InvoiceNotificationRequest("sed", "iste", "2019-01-31T18:25:43-05:00",                 new org.openapis.openapi.models.shared.Item1[]{{
                                                add(new Item1("dolorem", 635059, 161309) {{
                                                    description = "natus";
                                                    id = "6fea7596-eb10-4faa-a235-2c5955907aff";
                                                    price = 102044;
                                                    quantity = 652790;
                                                }}),
                                            }}, "repellat") {{
                                courier = "mollitia";
                                dispatchedDate = "occaecati";
                                embeddedInvoice = "numquam";
                                invoiceKey = "commodi";
                                invoiceUrl = "quam";
                                trackingNumber = "molestiae";
                                trackingUrl = "velit";
                            }};, "1172452900788-01");            

            InvoiceNotificationResponse res = sdk.invoice.invoiceNotification(req);

            if (res.invoiceNotification200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatepartialinvoiceSendTrackingNumber

Update a given order, adding its tracking number to its [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe).

After using this call to add a tracking number to an order, you can use the [Update order tracking status](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus) API request to add tracking events.

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatepartialinvoiceSendTrackingNumberRequest;
import org.openapis.openapi.models.operations.UpdatepartialinvoiceSendTrackingNumberResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatepartialinvoiceSendTrackingNumberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "quia") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatepartialinvoiceSendTrackingNumberRequest req = new UpdatepartialinvoiceSendTrackingNumberRequest("quis", "vitae",                 new UpdatepartialinvoiceSendTrackingNumberRequest("laborum", "animi", "enim", "odit");, "000030711", "1172452900788-01");            

            UpdatepartialinvoiceSendTrackingNumberResponse res = sdk.invoice.updatepartialinvoiceSendTrackingNumber(req);

            if (res.updatepartialinvoiceSendTrackingNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
