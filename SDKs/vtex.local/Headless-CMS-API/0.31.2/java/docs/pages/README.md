# pages

### Available Operations

* [getAllContentTypes](#getallcontenttypes) - Get all Content Types
* [getCMSpage](#getcmspage) - Get CMS page
* [getPagesbyContentType](#getpagesbycontenttype) - Get all CMS pages by Content Type

## getAllContentTypes

Gets data from all Content Types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllContentTypesRequest;
import org.openapis.openapi.models.operations.GetAllContentTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllContentTypesRequest req = new GetAllContentTypesRequest("faststore");            

            GetAllContentTypesResponse res = sdk.pages.getAllContentTypes(req);

            if (res.getAllContentTypes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCMSpage

Gets all data from a given page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCMSpageRequest;
import org.openapis.openapi.models.operations.GetCMSpageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCMSpageRequest req = new GetCMSpageRequest("faststore", "plp", "5af643b5-9a6d-48f2-9b34-919dd762c908") {{
                releaseId = "6196c277c6dce15f9709a2a7";
                versionId = "e7263fc8-bc68-4052-9e25-dd5a2572d3bb";
            }};            

            GetCMSpageResponse res = sdk.pages.getCMSpage(req);

            if (res.getCMSpage200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPagesbyContentType

Gets data from all pages of a given Content Type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPagesbyContentTypeRequest;
import org.openapis.openapi.models.operations.GetPagesbyContentTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPagesbyContentTypeRequest req = new GetPagesbyContentTypeRequest("faststore", "plp") {{
                filtersField = "published";
                releaseId = "6196c277c6dce15f9709a2a7";
                versionId = "e7263fc8-bc68-4052-9e25-dd5a2572d3bb";
            }};            

            GetPagesbyContentTypeResponse res = sdk.pages.getPagesbyContentType(req);

            if (res.getPagesbyContentType200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
