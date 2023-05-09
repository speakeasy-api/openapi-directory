# pickupPoints

### Available Operations

* [createUpdatePickupPoint](#createupdatepickuppoint) - Create/Update Pickup Point
* [delete](#delete) - Delete Pickup Point
* [getById](#getbyid) - List Pickup Point By ID
* [getpaged](#getpaged) - List paged Pickup Points
* [listAllPickupPpoints](#listallpickupppoints) - List all pickup points

## createUpdatePickupPoint

Creates or updates [pickup points](https://help.vtex.com/en/subcategory/pickup-points--1c5Btie9ou2Gg2iUo0ggqM#) in your store by Pickup Point ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUpdatePickupPointRequest;
import org.openapis.openapi.models.operations.CreateUpdatePickupPointRequestBody;
import org.openapis.openapi.models.operations.CreateUpdatePickupPointRequestBodyAddress;
import org.openapis.openapi.models.operations.CreateUpdatePickupPointRequestBodyAddressCountry;
import org.openapis.openapi.models.operations.CreateUpdatePickupPointRequestBodyAddressLocation;
import org.openapis.openapi.models.operations.CreateUpdatePickupPointRequestBodyBusinessHour;
import org.openapis.openapi.models.operations.CreateUpdatePickupPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "pariatur") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUpdatePickupPointRequest req = new CreateUpdatePickupPointRequest("modi", "praesentium",                 new CreateUpdatePickupPointRequestBody(                new CreateUpdatePickupPointRequestBodyAddress("Rio de Janeiro", "3rd floor",                 new CreateUpdatePickupPointRequestBodyAddressCountry("BRA", "Brasil");,                 new CreateUpdatePickupPointRequestBodyAddressLocation(-22.974477767944336, -43.18672561645508);, "Botafogo", "200", "rem", "Grey building", "RJ", "Praia de botafogo.");,                 new org.openapis.openapi.models.operations.CreateUpdatePickupPointRequestBodyBusinessHour[]{{
                                                add(new CreateUpdatePickupPointRequestBodyBusinessHour("veritatis", 929297, "incidunt") {{
                                                    closingTime = "quasi";
                                                    dayOfWeek = 921158;
                                                    openingTime = "sint";
                                                }}),
                                                add(new CreateUpdatePickupPointRequestBodyBusinessHour("quibusdam", 131797, "deserunt") {{
                                                    closingTime = "enim";
                                                    dayOfWeek = 9356;
                                                    openingTime = "est";
                                                }}),
                                                add(new CreateUpdatePickupPointRequestBodyBusinessHour("modi", 183191, "aliquid") {{
                                                    closingTime = "distinctio";
                                                    dayOfWeek = 841386;
                                                    openingTime = "labore";
                                                }}),
                                                add(new CreateUpdatePickupPointRequestBodyBusinessHour("magni", 828940, "ipsam") {{
                                                    closingTime = "cupiditate";
                                                    dayOfWeek = 552822;
                                                    openingTime = "perferendis";
                                                }}),
                                            }}, "Pickup your items in our store.", "alias", "123456789", "Bring your ID in order to pickup your order.", false, "Pickup store.",                 new String[]{{
                                                add("dolorum"),
                                            }}) {{
                                isThirdPartyPickup = false;
                            }};, "123456789");            

            CreateUpdatePickupPointResponse res = sdk.pickupPoints.createUpdatePickupPoint(req);

            if (res.createUpdate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete

Deletes a given pickup point for your store, by pickup point ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRequest;
import org.openapis.openapi.models.operations.DeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "tempora") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRequest req = new DeleteRequest("facilis", "tempore", "labore");            

            DeleteResponse res = sdk.pickupPoints.delete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById

Lists your store's pickup points while searching by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetByIdRequest;
import org.openapis.openapi.models.operations.GetByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus", "eum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetByIdRequest req = new GetByIdRequest("non", "eligendi", "sint");            

            GetByIdResponse res = sdk.pickupPoints.getById(req);

            if (res.getById != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getpaged

Lists paged pickup points in your store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetpagedRequest;
import org.openapis.openapi.models.operations.GetpagedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid", "provident") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetpagedRequest req = new GetpagedRequest("necessitatibus", "sint", "officia", "{{pageNumber}}", "{{pageSize}}");            

            GetpagedResponse res = sdk.pickupPoints.getpaged(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAllPickupPpoints

Lists all of your store's pickup points.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAllPickupPpointsRequest;
import org.openapis.openapi.models.operations.ListAllPickupPpointsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor", "debitis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAllPickupPpointsRequest req = new ListAllPickupPpointsRequest("a", "dolorum");            

            ListAllPickupPpointsResponse res = sdk.pickupPoints.listAllPickupPpoints(req);

            if (res.listAllPickupPpoints200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
