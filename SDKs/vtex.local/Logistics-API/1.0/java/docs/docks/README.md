# docks

### Available Operations

* [activateDock](#activatedock) - Activate dock
* [allDocks](#alldocks) - List all  docks
* [createUpdateDock](#createupdatedock) - Create/update dock
* [deactivateDock](#deactivatedock) - Deactivate dock
* [dock](#dock) - Delete dock
* [dockById](#dockbyid) - List dock by ID

## activateDock

Activates dock through dock ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateDockRequest;
import org.openapis.openapi.models.operations.ActivateDockResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla", "corrupti") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivateDockRequest req = new ActivateDockRequest("illum", "vel", "error");            

            ActivateDockResponse res = sdk.docks.activateDock(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## allDocks

Informs a list of all docks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllDocksRequest;
import org.openapis.openapi.models.operations.AllDocksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "suscipit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllDocksRequest req = new AllDocksRequest("iure", "magnam");            

            AllDocksResponse res = sdk.docks.allDocks(req);

            if (res.allDocks200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUpdateDock

Creates or updates docks to be used in your logistic operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUpdateDockCreateUpdateDockRequest;
import org.openapis.openapi.models.operations.CreateUpdateDockCreateUpdateDockRequestAddress1;
import org.openapis.openapi.models.operations.CreateUpdateDockCreateUpdateDockRequestAddress1Country;
import org.openapis.openapi.models.operations.CreateUpdateDockRequest;
import org.openapis.openapi.models.operations.CreateUpdateDockResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "ipsa") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUpdateDockRequest req = new CreateUpdateDockRequest("delectus", "tempora",                 new CreateUpdateDockCreateUpdateDockRequest(                new CreateUpdateDockCreateUpdateDockRequestAddress1("suscipit", "molestiae",                 new Double[][]{{
                                                                add(new Double[]{{
                                                                    add(5288.95),
                                                                    add(4799.77),
                                                                    add(5680.45),
                                                                    add(3927.85),
                                                                }}),
                                                                add(new Double[]{{
                                                                    add(8360.79),
                                                                    add(710.36),
                                                                    add(3373.96),
                                                                    add(871.29),
                                                                }}),
                                                                add(new Double[]{{
                                                                    add(202.18),
                                                                    add(3682.41),
                                                                    add(8326.2),
                                                                }}),
                                                                add(new Double[]{{
                                                                    add(7781.57),
                                                                    add(1403.5),
                                                                    add(8700.13),
                                                                    add(8700.88),
                                                                }}),
                                                            }},                 new CreateUpdateDockCreateUpdateDockRequestAddress1Country("maiores", "molestiae");, "quod", "quod", "esse", "totam", "porro");, "dolorum",                 new String[]{{
                                                add("nam"),
                                            }}, "officia", "occaecati", 143353, "deleniti",                 new String[]{{
                                                add("optio"),
                                                add("totam"),
                                                add("beatae"),
                                                add("commodi"),
                                            }}, "molestiae", "modi"););            

            CreateUpdateDockResponse res = sdk.docks.createUpdateDock(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deactivateDock

Deactivate dock by dock ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeactivateDockRequest;
import org.openapis.openapi.models.operations.DeactivateDockResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui", "impedit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeactivateDockRequest req = new DeactivateDockRequest("cum", "esse", "ipsum");            

            DeactivateDockResponse res = sdk.docks.deactivateDock(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dock

Deletes dock by dock ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DockRequest;
import org.openapis.openapi.models.operations.DockResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "aspernatur") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DockRequest req = new DockRequest("perferendis", "ad", "natus");            

            DockResponse res = sdk.docks.dock(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dockById

Informs a given dock's information, searching by dock ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DockByIdRequest;
import org.openapis.openapi.models.operations.DockByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed", "iste") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DockByIdRequest req = new DockByIdRequest("dolor", "natus", "laboriosam");            

            DockByIdResponse res = sdk.docks.dockById(req);

            if (res.dockById200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
