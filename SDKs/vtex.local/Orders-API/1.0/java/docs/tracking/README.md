# tracking

### Available Operations

* [updateTrackingStatus](#updatetrackingstatus) - Update order tracking status

## updateTrackingStatus

This endpoint sends a tracking event to an order that already has a tracking number registered to its invoice.

This request is not meant to send tracking number and URL to the invoice. If you wish to send tracking number and URL to an order, use the [Update order's partial invoice API request](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-). You can also learn more about [Partial invoice](https://help.vtex.com/en/tracks/partial-invoices--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenarios. 

> The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTrackingStatusRequest;
import org.openapis.openapi.models.operations.UpdateTrackingStatusResponse;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTrackingStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum", "hic") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTrackingStatusRequest req = new UpdateTrackingStatusRequest("recusandae", "omnis",                 new UpdateTrackingStatusRequest("facilis",                 new org.openapis.openapi.models.shared.Event[]{{
                                                add(new Event("rerum", "adipisci", "asperiores", "earum") {{
                                                    city = "Port Casimermouth";
                                                    date = "error";
                                                    description = "eaque";
                                                    state = "occaecati";
                                                }}),
                                                add(new Event("nobis", "libero", "delectus", "quaerat") {{
                                                    city = "New Marielle";
                                                    date = "deleniti";
                                                    description = "pariatur";
                                                    state = "provident";
                                                }}),
                                                add(new Event("ipsum", "hic", "excepturi", "cum") {{
                                                    city = "Granvilleberg";
                                                    date = "dolorem";
                                                    description = "dolor";
                                                    state = "qui";
                                                }}),
                                            }}, false);, "000030711", "1172452900788-01");            

            UpdateTrackingStatusResponse res = sdk.tracking.updateTrackingStatus(req);

            if (res.updateTrackingStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
