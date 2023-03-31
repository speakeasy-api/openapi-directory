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
import org.openapis.openapi.models.operations.ActivateSKUBindingPathParams;
import org.openapis.openapi.models.operations.ActivateSKUBindingHeaders;
import org.openapis.openapi.models.operations.ActivateSKUBindingRequest;
import org.openapis.openapi.models.operations.ActivateSKUBindingResponse;

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

            ActivateSKUBindingRequest req = new ActivateSKUBindingRequest() {{
                pathParams = new ActivateSKUBindingPathParams() {{
                    sellerId = "vtxkfj7352";
                    skuSellerId = "71";
                }};
                headers = new ActivateSKUBindingHeaders() {{
                    accept = "corrupti";
                    contentType = "provident";
                }};
            }};            

            ActivateSKUBindingResponse res = sdk.skuBindings.activateSKUBinding(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### skuBindings

* `activateSKUBinding` - Activate SKU Binding
* `bindtoanothersku` - Bind a seller's SKU to another SKU
* `changeNotification` - Change Notification with SKU ID
* `deactivateSKUBinding` - Deactivate SKU Binding
* `deleteSKUsellerassociation` - Remove a seller's SKU Binding
* `getSKUseller` - Get details of a seller's SKU
* `getallbySellerId` - Get all SKU Bindings by Seller ID
* `getbySkuId` - Get SKU Bindings by SKU ID
* `getpagedadmin` - Get SKU Bindings information
* `getpagedbySellerId` - Get paged SKU Bindings by Seller ID
* `insertSKUBinding` - Insert SKU Binding
* `postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId` - Change Notification with Seller ID and Seller SKU ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
