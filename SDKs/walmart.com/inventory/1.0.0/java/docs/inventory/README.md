# inventory

### Available Operations

* [getInventory](#getinventory) - Inventory
* [getMultiNodeInventoryForAllSkuAndAllShipNodes](#getmultinodeinventoryforallskuandallshipnodes) - Multiple Item Inventory for All Ship Nodes
* [getMultiNodeInventoryForSkuAndAllShipnodes](#getmultinodeinventoryforskuandallshipnodes) - Single Item Inventory by Ship Node
* [getWFSInventory](#getwfsinventory) - WFS Inventory
* [updateBulkInventory](#updatebulkinventory) - Bulk Item Inventory Update
* [updateInventoryForAnItemJson](#updateinventoryforanitemjson) - Update inventory
* [updateInventoryForAnItemRaw](#updateinventoryforanitemraw) - Update inventory
* [updateMultiNodeInventory](#updatemultinodeinventory) - Update Item Inventory per Ship Node

## getInventory

You can use this API to get the inventory for a given item.

### Example Usage

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

            GetInventoryRequest req = new GetInventoryRequest("corrupti", "illum", "vel", "error") {{
                wmConsumerChannelType = "deserunt";
                shipNode = "suscipit";
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

## getMultiNodeInventoryForAllSkuAndAllShipNodes

This API will retrieve the inventory count for all of a seller's items across all ship nodes by item to ship node mapping. Inventory can be zero or non-zero. Please note that NextCursor value changes and it needs to be passed on from the previous call to next call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest;
import org.openapis.openapi.models.operations.GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest req = new GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest("iure", "magnam", "debitis") {{
                wmConsumerChannelType = "ipsa";
                limit = "delectus";
                nextCursor = "tempora";
            }};            

            GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse res = sdk.inventory.getMultiNodeInventoryForAllSkuAndAllShipNodes(req);

            if (res.getMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMultiNodeInventoryForSkuAndAllShipnodes

This API will retrieve the inventory count for an item across all ship nodes or one specific ship node. You can specify the ship node for which you want to fetch the inventory

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMultiNodeInventoryForSkuAndAllShipnodesRequest;
import org.openapis.openapi.models.operations.GetMultiNodeInventoryForSkuAndAllShipnodesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMultiNodeInventoryForSkuAndAllShipnodesRequest req = new GetMultiNodeInventoryForSkuAndAllShipnodesRequest("suscipit", "molestiae", "minus", "placeat") {{
                wmConsumerChannelType = "voluptatum";
                shipNode = "iusto";
            }};            

            GetMultiNodeInventoryForSkuAndAllShipnodesResponse res = sdk.inventory.getMultiNodeInventoryForSkuAndAllShipnodes(req);

            if (res.getMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWFSInventory

You can use this API to get the current Available to Sell inventory quantities for all WFS items in your catalog. You can also query specific SKUs or filter to only items updated after a specific date in order to reduce the response size.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWFSInventoryRequest;
import org.openapis.openapi.models.operations.GetWFSInventoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWFSInventoryRequest req = new GetWFSInventoryRequest("excepturi", "nisi", "recusandae") {{
                wmConsumerChannelType = "temporibus";
                fromModifiedDate = "ab";
                limit = "quis";
                offset = "veritatis";
                sku = "deserunt";
                toModifiedDate = "perferendis";
            }};            

            GetWFSInventoryResponse res = sdk.inventory.getWFSInventory(req);

            if (res.getWFSInventory200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBulkInventory

Updates inventory for items in bulk. 
Seller Can either use feed type "inventory" or "MP_INVENTORY" 
* Inventory spec 1.4 feed type: inventory 
* Inventory spec 1.5 feed type: MP_INVENTORY 

Please Note: Multi Node Inventory Update Feed (feedType=MP_INVENTORY) only supports JSON Request and Responses. Refer to "MultiNode_Bulk_Inventory_Update_Request.json" for the corresponding request sample 
 
Refer to the <a href="https://developer.walmart.com/doc/us/us-mp/us-mp-inventory/">guide section</a> for more detailed guide around each of the feed types 

 Refer to the throttling limits before uploading the Feed Files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBulkInventoryFeedTypeEnum;
import org.openapis.openapi.models.operations.UpdateBulkInventoryRequest;
import org.openapis.openapi.models.operations.UpdateBulkInventoryRequestBody;
import org.openapis.openapi.models.operations.UpdateBulkInventoryRequestBodyFile;
import org.openapis.openapi.models.operations.UpdateBulkInventoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBulkInventoryRequest req = new UpdateBulkInventoryRequest("ipsam", "repellendus", "sapiente", UpdateBulkInventoryFeedTypeEnum.MP_INVENTORY) {{
                requestBody = new UpdateBulkInventoryRequestBody(                new UpdateBulkInventoryRequestBodyFile("odit".getBytes(), "at"););;
                wmConsumerChannelType = "at";
                shipNode = "maiores";
            }};            

            UpdateBulkInventoryResponse res = sdk.inventory.updateBulkInventory(req);

            if (res.updateBulkInventory200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInventoryForAnItemJson

Updates the inventory for a given item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInventoryForAnItemApplicationJSON;
import org.openapis.openapi.models.operations.UpdateInventoryForAnItemApplicationJSONQuantity;
import org.openapis.openapi.models.operations.UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum;
import org.openapis.openapi.models.operations.UpdateInventoryForAnItemJsonRequest;
import org.openapis.openapi.models.operations.UpdateInventoryForAnItemJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateInventoryForAnItemJsonRequest req = new UpdateInventoryForAnItemJsonRequest(                new UpdateInventoryForAnItemApplicationJSON(                new UpdateInventoryForAnItemApplicationJSONQuantity(4736.08, UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum.EACH);, "quod");, "quod", "esse", "totam", "porro") {{
                wmConsumerChannelType = "dolorum";
                shipNode = "dicta";
            }};            

            UpdateInventoryForAnItemJsonResponse res = sdk.inventory.updateInventoryForAnItemJson(req);

            if (res.updateInventoryForAnItemJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInventoryForAnItemRaw

Updates the inventory for a given item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInventoryForAnItemApplicationXML;
import org.openapis.openapi.models.operations.UpdateInventoryForAnItemApplicationXMLQuantity;
import org.openapis.openapi.models.operations.UpdateInventoryForAnItemApplicationXMLQuantityUnitEnum;
import org.openapis.openapi.models.operations.UpdateInventoryForAnItemRawRequest;
import org.openapis.openapi.models.operations.UpdateInventoryForAnItemRawResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateInventoryForAnItemRawRequest req = new UpdateInventoryForAnItemRawRequest("nam".getBytes(), "officia", "occaecati", "fugit", "deleniti") {{
                wmConsumerChannelType = "hic";
                shipNode = "optio";
            }};            

            UpdateInventoryForAnItemRawResponse res = sdk.inventory.updateInventoryForAnItemRaw(req);

            if (res.updateInventoryForAnItemRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMultiNodeInventory

This API will update the inventory for an item across one or more fulfillment centers, known as ship nodes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMultiNodeInventoryRequest;
import org.openapis.openapi.models.operations.UpdateMultiNodeInventoryRequestBody;
import org.openapis.openapi.models.operations.UpdateMultiNodeInventoryRequestBodyInventories;
import org.openapis.openapi.models.operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodes;
import org.openapis.openapi.models.operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty;
import org.openapis.openapi.models.operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum;
import org.openapis.openapi.models.operations.UpdateMultiNodeInventoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMultiNodeInventoryRequest req = new UpdateMultiNodeInventoryRequest(                new UpdateMultiNodeInventoryRequestBody(                new UpdateMultiNodeInventoryRequestBodyInventories(                new org.openapis.openapi.models.operations.UpdateMultiNodeInventoryRequestBodyInventoriesNodes[]{{
                                                                add(new UpdateMultiNodeInventoryRequestBodyInventoriesNodes(                new UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty(2645.55, UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum.EACH);, "qui") {{
                                                                    inputQty = new UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty(4146.62, UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum.EACH) {{
                                                                        amount = 1059.07;
                                                                        unit = UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum.EACH;
                                                                    }};
                                                                    shipNode = "molestiae";
                                                                }}),
                                                                add(new UpdateMultiNodeInventoryRequestBodyInventoriesNodes(                new UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty(2165.5, UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum.EACH);, "excepturi") {{
                                                                    inputQty = new UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty(7369.18, UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum.EACH) {{
                                                                        amount = 7742.34;
                                                                        unit = UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum.EACH;
                                                                    }};
                                                                    shipNode = "esse";
                                                                }}),
                                                                add(new UpdateMultiNodeInventoryRequestBodyInventoriesNodes(                new UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty(6176.36, UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum.EACH);, "sed") {{
                                                                    inputQty = new UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty(187.89, UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum.EACH) {{
                                                                        amount = 1352.18;
                                                                        unit = UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum.EACH;
                                                                    }};
                                                                    shipNode = "ad";
                                                                }}),
                                                            }}););, "iste", "dolor", "natus", "laboriosam") {{
                wmConsumerChannelType = "hic";
            }};            

            UpdateMultiNodeInventoryResponse res = sdk.inventory.updateMultiNodeInventory(req);

            if (res.updateMultiNodeInventory200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
