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
import org.openapis.openapi.models.operations.GetInventoryRequest;
import org.openapis.openapi.models.operations.GetInventoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInventoryRequest req = new GetInventoryRequest("corrupti", "provident", "distinctio", "quibusdam") {{
                wmConsumerChannelType = "unde";
                shipNode = "nulla";
            }};            

            GetInventoryResponse res = sdk.inventory.getInventory(req);

            if (res.getInventory200ApplicationJSONObject != null) {
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


### [inventory](docs/inventory/README.md)

* [getInventory](docs/inventory/README.md#getinventory) - Inventory
* [getMultiNodeInventoryForAllSkuAndAllShipNodes](docs/inventory/README.md#getmultinodeinventoryforallskuandallshipnodes) - Multiple Item Inventory for All Ship Nodes
* [getMultiNodeInventoryForSkuAndAllShipnodes](docs/inventory/README.md#getmultinodeinventoryforskuandallshipnodes) - Single Item Inventory by Ship Node
* [getWFSInventory](docs/inventory/README.md#getwfsinventory) - WFS Inventory
* [updateBulkInventory](docs/inventory/README.md#updatebulkinventory) - Bulk Item Inventory Update
* [updateInventoryForAnItemJson](docs/inventory/README.md#updateinventoryforanitemjson) - Update inventory
* [updateInventoryForAnItemRaw](docs/inventory/README.md#updateinventoryforanitemraw) - Update inventory
* [updateMultiNodeInventory](docs/inventory/README.md#updatemultinodeinventory) - Update Item Inventory per Ship Node
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
