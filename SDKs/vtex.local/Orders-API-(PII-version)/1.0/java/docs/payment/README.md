# payment

### Available Operations

* [sendPaymentNotification2](#sendpaymentnotification2) - Send payment notification

## sendPaymentNotification2

Send a payment notification of a given order, by order ID and payment ID.

> The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

> Learn more about [Transaction Details](https://help.vtex.com/en/tutorial/how-to-view-the-orders-details).


## Request body properties

| Attribute    | Type        | Description |
| --------------- |:---------:| --------------------------------------:|
| `orderId` | string | Order Id |
| `paymentId` | string | Payment ID |

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendPaymentNotification2Request;
import org.openapis.openapi.models.operations.SendPaymentNotification2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "nisi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendPaymentNotification2Request req = new SendPaymentNotification2Request("application/json", "application/json", "70caf3941s6df1", "45hsfg5jkyu1384jdsfgh654sfgj1");            

            SendPaymentNotification2Response res = sdk.payment.sendPaymentNotification2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
