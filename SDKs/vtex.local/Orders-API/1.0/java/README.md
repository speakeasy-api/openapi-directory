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
import org.openapis.openapi.models.operations.GetWindowToChangeSellerHeaders;
import org.openapis.openapi.models.operations.GetWindowToChangeSellerRequest;
import org.openapis.openapi.models.operations.GetWindowToChangeSellerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = new SchemeAppKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    appToken = new SchemeAppToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetWindowToChangeSellerRequest req = new GetWindowToChangeSellerRequest() {{
                headers = new GetWindowToChangeSellerHeaders() {{
                    accept = "corrupti";
                    contentType = "provident";
                }};
            }};            

            GetWindowToChangeSellerResponse res = sdk.changeSeller.getWindowToChangeSeller(req);

            if (res.getWindowToChangeSeller200TextPlainInteger.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### changeSeller

* `getWindowToChangeSeller` - Get window to change seller
* `updateWindowToChangeSeller` - Update window to change seller

### conversation

* `getConversation` - Retrieve order conversation

### exportOrderReport

* `statusCompleted` - Export order report with status 'Completed'
* `statusInProgress` - Export order report with status 'In Progress'

### feedV2Deprecated

* `getfeedorderstatus` - Get feed order status

### feedV3

* `commititemfeedorderstatus` - Commit feed items
* `feedConfiguration` - Create or update feed configuration
* `feedConfigurationDelete` - Delete feed configuration
* `getFeedConfiguration` - Get feed configuration
* `getfeedorderstatus1` - Retrieve feed items
* `testJSONataExpression` - Test JSONata expression

### invoice

* `invoiceNotification` - Order invoice notification
* `updatepartialinvoiceSendTrackingNumber` - Update order's partial invoice (send tracking number)

### orderHook

* `deleteHookConfiguration` - Delete hook configuration
* `getHookConfiguration` - Get hook configuration
* `hookConfiguration` - Create or update hook configuration

### orders

* `addLog` - Add log in orders
* `cancelOrder` - Cancel order
* `getOrder` - Get order
* `listOrders` - List orders
* `registerChange` - Register change on order
* `startHandling` - Start handling order

### payment

* `getPaymenttransaction` - Retrieve payment transaction
* `sendPaymentNotification` - Send payment notification

### tracking

* `updateTrackingStatus` - Update order tracking status

### userOrders

* `userorderdetails` - Retrieve user order details
* `userorderslist` - Retrieve user's orders
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
