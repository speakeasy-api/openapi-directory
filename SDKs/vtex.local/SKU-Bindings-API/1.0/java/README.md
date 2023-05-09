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
import org.openapis.openapi.models.operations.ActivateSKUBindingRequest;
import org.openapis.openapi.models.operations.ActivateSKUBindingResponse;
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

            ActivateSKUBindingRequest req = new ActivateSKUBindingRequest("distinctio", "quibusdam", "vtxkfj7352", "71");            

            ActivateSKUBindingResponse res = sdk.skuBindings.activateSKUBinding(req);

            if (res.statusCode == 200) {
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


### [skuBindings](docs/skubindings/README.md)

* [activateSKUBinding](docs/skubindings/README.md#activateskubinding) - Activate SKU Binding
* [bindtoanothersku](docs/skubindings/README.md#bindtoanothersku) - Bind a seller's SKU to another SKU
* [changeNotification](docs/skubindings/README.md#changenotification) - Change Notification with SKU ID
* [deactivateSKUBinding](docs/skubindings/README.md#deactivateskubinding) - Deactivate SKU Binding
* [deleteSKUsellerassociation](docs/skubindings/README.md#deleteskusellerassociation) - Remove a seller's SKU Binding
* [getSKUseller](docs/skubindings/README.md#getskuseller) - Get details of a seller's SKU
* [getallbySellerId](docs/skubindings/README.md#getallbysellerid) - Get all SKU Bindings by Seller ID
* [getbySkuId](docs/skubindings/README.md#getbyskuid) - Get SKU Bindings by SKU ID
* [getpagedadmin](docs/skubindings/README.md#getpagedadmin) - Get SKU Bindings information
* [getpagedbySellerId](docs/skubindings/README.md#getpagedbysellerid) - Get paged SKU Bindings by Seller ID
* [insertSKUBinding](docs/skubindings/README.md#insertskubinding) - Insert SKU Binding
* [postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId](docs/skubindings/README.md#postskubindingpvtskusellerchangenotificationselleridsellerskuid) - Change Notification with Seller ID and Seller SKU ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
