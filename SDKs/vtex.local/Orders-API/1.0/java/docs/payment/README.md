# payment

### Available Operations

* [getPaymenttransaction](#getpaymenttransaction) - Retrieve payment transaction
* [sendPaymentNotification](#sendpaymentnotification) - Send payment notification

## getPaymenttransaction

Retrieves transaction details by order ID. All events in the transaction will be registered in this call's response body. 

In scenarios of [order changes](https://developers.vtex.com/vtex-rest-api/reference/registerchange), it is possible to insert a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). The total value of the order will be updated after the insertion of the invoice, even when there is a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymenttransactionRequest;
import org.openapis.openapi.models.operations.GetPaymenttransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt", "eos") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPaymenttransactionRequest req = new GetPaymenttransactionRequest("perferendis", "dolores", "1172452900788-01");            

            GetPaymenttransactionResponse res = sdk.payment.getPaymenttransaction(req);

            if (res.getPaymenttransaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendPaymentNotification

Send a payment notification of a given order, by order ID.

> The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendPaymentNotificationRequest;
import org.openapis.openapi.models.operations.SendPaymentNotificationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus", "quam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendPaymentNotificationRequest req = new SendPaymentNotificationRequest("dolor", "vero", "1172452900788-01", "F5C1A4E20D3B4E07B7E871F5B5BC9F91");            

            SendPaymentNotificationResponse res = sdk.payment.sendPaymentNotification(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
