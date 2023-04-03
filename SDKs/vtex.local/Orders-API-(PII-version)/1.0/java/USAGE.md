<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.InvoiceNotification2Request;
import org.openapis.openapi.models.operations.InvoiceNotification2Response;
import org.openapis.openapi.models.shared.InvoiceNotificationRequest;
import org.openapis.openapi.models.shared.Item1;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InvoiceNotification2Request req = new InvoiceNotification2Request() {{
                accept = "application/json";
                contentType = "application/json";
                invoiceNotificationRequest = new InvoiceNotificationRequest() {{
                    cfop = "6.104";
                    courier = "corrupti";
                    extraValue = 100;
                    invoiceKey = "provident";
                    invoiceNumber = "123456789";
                    invoiceUrl = "distinctio";
                    invoiceValue = "2499";
                    issuedDate = "2020-07-15";
                    items = new org.openapis.openapi.models.shared.Item1[]{{
                        add(new Item1() {{
                            itemIndex = "67";
                            price = 2499;
                            quantity = 3;
                        }}),
                        add(new Item1() {{
                            itemIndex = "67";
                            price = 2499;
                            quantity = 3;
                        }}),
                        add(new Item1() {{
                            itemIndex = "67";
                            price = 2499;
                            quantity = 3;
                        }}),
                        add(new Item1() {{
                            itemIndex = "67";
                            price = 2499;
                            quantity = 3;
                        }}),
                    }};
                    trackingNumber = "unde";
                    trackingUrl = "nulla";
                    type = "Output";
                    volumes = 3;
                }};
                orderId = "70caf3941s6df1";
            }}            

            InvoiceNotification2Response res = sdk.invoice.invoiceNotification2(req);

            if (res.invoiceNotification2200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->