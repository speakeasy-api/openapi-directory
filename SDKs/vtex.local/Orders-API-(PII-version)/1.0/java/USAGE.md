<!-- Start SDK Example Usage -->
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
                .setSecurity(new Security("corrupti", "provident") {{
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
                                courier = "quibusdam";
                                extraValue = 100L;
                                invoiceKey = "unde";
                                invoiceUrl = "nulla";
                                trackingNumber = "corrupti";
                                trackingUrl = "illum";
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
<!-- End SDK Example Usage -->