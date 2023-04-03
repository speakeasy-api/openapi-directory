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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### invoice

* `invoiceNotification2` - Order invoice notification

### orders

* `cancelOrder2` - Cancel order
* `getOrder2` - Get order
* `listOrders2` - List orders
* `startHandling2` - Start handling order

### payment

* `sendPaymentNotification2` - Send payment notification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
