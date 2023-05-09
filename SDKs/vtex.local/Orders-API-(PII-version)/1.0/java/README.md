# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [invoice](docs/invoice/README.md)

* [invoiceNotification2](docs/invoice/README.md#invoicenotification2) - Order invoice notification

### [orders](docs/orders/README.md)

* [cancelOrder2](docs/orders/README.md#cancelorder2) - Cancel order
* [getOrder2](docs/orders/README.md#getorder2) - Get order
* [listOrders2](docs/orders/README.md#listorders2) - List orders
* [startHandling2](docs/orders/README.md#starthandling2) - Start handling order

### [payment](docs/payment/README.md)

* [sendPaymentNotification2](docs/payment/README.md#sendpaymentnotification2) - Send payment notification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
