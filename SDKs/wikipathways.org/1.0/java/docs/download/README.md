# download

### Available Operations

* [getGetColoredPathway](#getgetcoloredpathway) - getColoredPathwayGet a colored image version of the pathway.
* [getGetPathwayAs](#getgetpathwayas) - getPathwayAsDownload a pathway in the specified file format.
* [getGetXrefList](#getgetxreflist) - getXrefList

## getGetColoredPathway

getColoredPathwayGet a colored image version of the pathway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetColoredPathwayFormatEnum;
import org.openapis.openapi.models.operations.GetGetColoredPathwayRequest;
import org.openapis.openapi.models.operations.GetGetColoredPathwayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetColoredPathwayRequest req = new GetGetColoredPathwayRequest(                new Object[]{{
                                add("velit"),
                                add("error"),
                            }}, "quia",                 new Object[]{{
                                add("vitae"),
                                add("laborum"),
                            }}, "animi", "enim") {{
                format = GetGetColoredPathwayFormatEnum.JSON;
            }};            

            GetGetColoredPathwayResponse res = sdk.download.getGetColoredPathway(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetPathwayAs

getPathwayAsDownload a pathway in the specified file format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetPathwayAsFormatEnum;
import org.openapis.openapi.models.operations.GetGetPathwayAsRequest;
import org.openapis.openapi.models.operations.GetGetPathwayAsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetPathwayAsRequest req = new GetGetPathwayAsRequest("quo", "sequi") {{
                format = GetGetPathwayAsFormatEnum.PDF;
                revision = 368725L;
            }};            

            GetGetPathwayAsResponse res = sdk.download.getGetPathwayAs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetXrefList

getXrefList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetXrefListFormatEnum;
import org.openapis.openapi.models.operations.GetGetXrefListRequest;
import org.openapis.openapi.models.operations.GetGetXrefListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetXrefListRequest req = new GetGetXrefListRequest("id", "possimus") {{
                format = GetGetXrefListFormatEnum.JSON;
            }};            

            GetGetXrefListResponse res = sdk.download.getGetXrefList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
