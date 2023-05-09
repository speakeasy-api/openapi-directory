# warehouses

### Available Operations

* [activateWarehouse](#activatewarehouse) - Activate warehouse
* [allWarehouses](#allwarehouses) - List all warehouses
* [createUpdateWarehouse](#createupdatewarehouse) - Create/update warehouse
* [deactivateWarehouse](#deactivatewarehouse) - Deactivate warehouse
* [removeWarehouse](#removewarehouse) - Remove warehouse
* [warehouseById](#warehousebyid) - List warehouse by ID

## activateWarehouse

Activates a given warehouse, by warehouse ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateWarehouseRequest;
import org.openapis.openapi.models.operations.ActivateWarehouseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed", "officiis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivateWarehouseRequest req = new ActivateWarehouseRequest("veniam", "quae", "dolore");            

            ActivateWarehouseResponse res = sdk.warehouses.activateWarehouse(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## allWarehouses

Lists information about all warehouses set up in your store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllWarehousesRequest;
import org.openapis.openapi.models.operations.AllWarehousesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "libero") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllWarehousesRequest req = new AllWarehousesRequest("ut", "cumque");            

            AllWarehousesResponse res = sdk.warehouses.allWarehouses(req);

            if (res.allWarehouses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUpdateWarehouse

Creates or updates your store's warehouses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUpdateWarehouseCreateUpdateWarehouseRequest;
import org.openapis.openapi.models.operations.CreateUpdateWarehouseCreateUpdateWarehouseRequestWarehouseDock;
import org.openapis.openapi.models.operations.CreateUpdateWarehouseRequest;
import org.openapis.openapi.models.operations.CreateUpdateWarehouseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia", "beatae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUpdateWarehouseRequest req = new CreateUpdateWarehouseRequest("porro", "cumque",                 new CreateUpdateWarehouseCreateUpdateWarehouseRequest("distinctio", "numquam",                 new org.openapis.openapi.models.operations.CreateUpdateWarehouseCreateUpdateWarehouseRequestWarehouseDock[]{{
                                                add(new CreateUpdateWarehouseCreateUpdateWarehouseRequestWarehouseDock("distinctio", "fugiat", "nulla", "totam", "praesentium", "officiis") {{
                                                    cost = "amet";
                                                    costToDisplay = "culpa";
                                                    dockId = "facilis";
                                                    name = "Josh Rutherford DVM";
                                                    time = "fuga";
                                                    translateDays = "est";
                                                }}),
                                            }}););            

            CreateUpdateWarehouseResponse res = sdk.warehouses.createUpdateWarehouse(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deactivateWarehouse

Deactivates a given warehouse by warehouse ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeactivateWarehouseRequest;
import org.openapis.openapi.models.operations.DeactivateWarehouseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "vitae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeactivateWarehouseRequest req = new DeactivateWarehouseRequest("delectus", "laboriosam", "minus");            

            DeactivateWarehouseResponse res = sdk.warehouses.deactivateWarehouse(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeWarehouse

Deletes given warehouse by warehouse ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveWarehouseRequest;
import org.openapis.openapi.models.operations.RemoveWarehouseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "quas") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveWarehouseRequest req = new RemoveWarehouseRequest("sed", "veniam", "sed");            

            RemoveWarehouseResponse res = sdk.warehouses.removeWarehouse(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## warehouseById

Lists the information of a given warehouse, searching by warehouse ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WarehouseByIdRequest;
import org.openapis.openapi.models.operations.WarehouseByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam", "reprehenderit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            WarehouseByIdRequest req = new WarehouseByIdRequest("voluptate", "reprehenderit", "et");            

            WarehouseByIdResponse res = sdk.warehouses.warehouseById(req);

            if (res.warehouseById200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
