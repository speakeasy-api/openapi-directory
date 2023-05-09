# inventory

### Available Operations

* [getSupplyLots](#getsupplylots) - List supply lots
* [getinventorywithdispatchedreservations](#getinventorywithdispatchedreservations) - List inventory with dispatched reservations
* [inventoryBySku](#inventorybysku) - List inventory by SKU
* [inventoryperdock](#inventoryperdock) - List inventory per dock
* [inventoryperdockandwarehouse](#inventoryperdockandwarehouse) - List inventory per dock and warehouse
* [inventoryperwarehouse](#inventoryperwarehouse) - List inventory per warehouse
* [saveSupplyLot](#savesupplylot) - Save supply lot
* [transferSupplyLot](#transfersupplylot) - Transfer supply lot
* [updateInventoryBySkuandWarehouse](#updateinventorybyskuandwarehouse) - Update inventory by SKU and warehouse

## getSupplyLots

Returns a list of the supply lots of an SKU in a specific warehouse.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSupplyLotsRequest;
import org.openapis.openapi.models.operations.GetSupplyLotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur", "repellat") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSupplyLotsRequest req = new GetSupplyLotsRequest("application/json", "application/json; charset=utf-8", "mollitia", "occaecati");            

            GetSupplyLotsResponse res = sdk.inventory.getSupplyLots(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getinventorywithdispatchedreservations

Lists inventory with dispatched reservations. When the number of active reservations is more than 2000 the return is an error with status code 400 (BadRequest) and the message: Too many active reservations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetinventorywithdispatchedreservationsRequest;
import org.openapis.openapi.models.operations.GetinventorywithdispatchedreservationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam", "commodi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetinventorywithdispatchedreservationsRequest req = new GetinventorywithdispatchedreservationsRequest("quam", "molestiae", "velit", "error");            

            GetinventorywithdispatchedreservationsResponse res = sdk.inventory.getinventorywithdispatchedreservations(req);

            if (res.getinventorywithdispatchedreservations200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inventoryBySku

Lists your store's inventory by SKU ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InventoryBySkuRequest;
import org.openapis.openapi.models.operations.InventoryBySkuResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia", "quis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InventoryBySkuRequest req = new InventoryBySkuRequest("vitae", "laborum", "animi");            

            InventoryBySkuResponse res = sdk.inventory.inventoryBySku(req);

            if (res.inventoryBySku200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inventoryperdock

Lists inventory information per dock set up in your store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InventoryperdockRequest;
import org.openapis.openapi.models.operations.InventoryperdockResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "odit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InventoryperdockRequest req = new InventoryperdockRequest("quo", "sequi", "tenetur", "ipsam");            

            InventoryperdockResponse res = sdk.inventory.inventoryperdock(req);

            if (res.inventoryperdock200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inventoryperdockandwarehouse

Lists information of inventory per dock and warehouse.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InventoryperdockandwarehouseRequest;
import org.openapis.openapi.models.operations.InventoryperdockandwarehouseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id", "possimus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InventoryperdockandwarehouseRequest req = new InventoryperdockandwarehouseRequest("aut", "quasi", "error", "temporibus", "laborum");            

            InventoryperdockandwarehouseResponse res = sdk.inventory.inventoryperdockandwarehouse(req);

            if (res.inventoryperdockandwarehouse200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inventoryperwarehouse

Lists inventory information per warehouse on your store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InventoryperwarehouseRequest;
import org.openapis.openapi.models.operations.InventoryperwarehouseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi", "reiciendis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InventoryperwarehouseRequest req = new InventoryperwarehouseRequest("voluptatibus", "vero", "nihil", "praesentium");            

            InventoryperwarehouseResponse res = sdk.inventory.inventoryperwarehouse(req);

            if (res.inventoryperwarehouse200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveSupplyLot

Creates a new Supply Lot. A Supply Lot lets the store sell products that are not currently available in stock but whose arrival is already scheduled.

Check out our [documentation](https://help.vtex.com/en/tutorial/setting-up-future-inventory--UMSGjooqRfkRbeoh94kS4) about this feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveSupplyLotRequest;
import org.openapis.openapi.models.operations.SaveSupplyLotResponse;
import org.openapis.openapi.models.operations.SaveSupplyLotSaveSupplyLot;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus", "ipsa") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SaveSupplyLotRequest req = new SaveSupplyLotRequest("omnis", "voluptate",                 new SaveSupplyLotSaveSupplyLot("cum", false, 199.87);, "doloremque", "reprehenderit", "ut");            

            SaveSupplyLotResponse res = sdk.inventory.saveSupplyLot(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferSupplyLot

Transfers an SKU from a Supply Lot to the currently available inventory.

Check out how this transfer works in further detail by reading our [documentation](https://help.vtex.com/pt/tutorial/configurar-estoque-futuro--UMSGjooqRfkRbeoh94kS4) about this feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferSupplyLotRequest;
import org.openapis.openapi.models.operations.TransferSupplyLotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores", "dicta") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            TransferSupplyLotRequest req = new TransferSupplyLotRequest("corporis", "dolore", "iusto", "dicta", "harum");            

            TransferSupplyLotResponse res = sdk.inventory.transferSupplyLot(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInventoryBySkuandWarehouse

Updates inventory for a given SKU and warehouse.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInventoryBySkuandWarehouseRequest;
import org.openapis.openapi.models.operations.UpdateInventoryBySkuandWarehouseResponse;
import org.openapis.openapi.models.operations.UpdateInventoryBySkuandWarehouseUpdateInventoryBySkuandWarehouseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "accusamus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateInventoryBySkuandWarehouseRequest req = new UpdateInventoryBySkuandWarehouseRequest("commodi", "repudiandae",                 new UpdateInventoryBySkuandWarehouseUpdateInventoryBySkuandWarehouseRequest(64147, "ipsum", false) {{
                                dateUtcOnBalanceSystem = "null";
                            }};, "quidem", "molestias");            

            UpdateInventoryBySkuandWarehouseResponse res = sdk.inventory.updateInventoryBySkuandWarehouse(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
