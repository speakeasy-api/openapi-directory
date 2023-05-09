# polygons

### Available Operations

* [createUpdatePolygon](#createupdatepolygon) - Create/update polygon
* [deletePolygon](#deletepolygon) - Delete polygon
* [pagedPolygons](#pagedpolygons) - List paged polygons
* [polygonbyId](#polygonbyid) - List polygon by ID

## createUpdatePolygon

Creates or updates your store's polygons by geoshape coordinates and polygon name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUpdatePolygonCreateUpdatePolygonRequest;
import org.openapis.openapi.models.operations.CreateUpdatePolygonCreateUpdatePolygonRequestGeoShape;
import org.openapis.openapi.models.operations.CreateUpdatePolygonRequest;
import org.openapis.openapi.models.operations.CreateUpdatePolygonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "in") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUpdatePolygonRequest req = new CreateUpdatePolygonRequest("illum", "maiores",                 new CreateUpdatePolygonCreateUpdatePolygonRequest(                new CreateUpdatePolygonCreateUpdatePolygonRequestGeoShape(                new Double[][]{{
                                                                add(new Double[]{{
                                                                    add(2974.37),
                                                                }}),
                                                                add(new Double[]{{
                                                                    add(8137.98),
                                                                    add(4118.2),
                                                                    add(3965.06),
                                                                    add(6754.39),
                                                                }}),
                                                                add(new Double[]{{
                                                                    add(2497.96),
                                                                    add(5812.73),
                                                                    add(3132.18),
                                                                    add(8817.36),
                                                                }}),
                                                            }});, "delectus"););            

            CreateUpdatePolygonResponse res = sdk.polygons.createUpdatePolygon(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePolygon

Deletes polygon set up in your store, by polygon name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePolygonRequest;
import org.openapis.openapi.models.operations.DeletePolygonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem", "provident") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePolygonRequest req = new DeletePolygonRequest("nam", "id", "blanditiis");            

            DeletePolygonResponse res = sdk.polygons.deletePolygon(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pagedPolygons

Lists stored polygons.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PagedPolygonsRequest;
import org.openapis.openapi.models.operations.PagedPolygonsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti", "sapiente") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PagedPolygonsRequest req = new PagedPolygonsRequest("amet", "deserunt", "{{page}}", "{{perPage}}");            

            PagedPolygonsResponse res = sdk.polygons.pagedPolygons(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## polygonbyId

Lists your store's polygons by searching through polygon name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolygonbyIdRequest;
import org.openapis.openapi.models.operations.PolygonbyIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi", "vel") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PolygonbyIdRequest req = new PolygonbyIdRequest("natus", "omnis", "molestiae");            

            PolygonbyIdResponse res = sdk.polygons.polygonbyId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
