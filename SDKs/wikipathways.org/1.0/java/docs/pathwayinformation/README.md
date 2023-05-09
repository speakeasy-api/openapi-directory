# pathwayInformation

### Available Operations

* [getGetCurationTags](#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetOntologyTermsByPathway](#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [getGetPathway](#getgetpathway) - getPathway
* [getGetPathwayInfo](#getgetpathwayinfo) - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

## getGetCurationTags

getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetCurationTagsFormatEnum;
import org.openapis.openapi.models.operations.GetGetCurationTagsRequest;
import org.openapis.openapi.models.operations.GetGetCurationTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetCurationTagsRequest req = new GetGetCurationTagsRequest("dicta") {{
                format = GetGetCurationTagsFormatEnum.JPG;
            }};            

            GetGetCurationTagsResponse res = sdk.pathwayInformation.getGetCurationTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetOntologyTermsByPathway

getOntologyTermsByPathway

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetOntologyTermsByPathwayFormatEnum;
import org.openapis.openapi.models.operations.GetGetOntologyTermsByPathwayRequest;
import org.openapis.openapi.models.operations.GetGetOntologyTermsByPathwayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetOntologyTermsByPathwayRequest req = new GetGetOntologyTermsByPathwayRequest("enim") {{
                format = GetGetOntologyTermsByPathwayFormatEnum.PDF;
            }};            

            GetGetOntologyTermsByPathwayResponse res = sdk.pathwayInformation.getGetOntologyTermsByPathway(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetPathway

getPathway

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetPathwayFormatEnum;
import org.openapis.openapi.models.operations.GetGetPathwayRequest;
import org.openapis.openapi.models.operations.GetGetPathwayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetPathwayRequest req = new GetGetPathwayRequest("commodi") {{
                format = GetGetPathwayFormatEnum.PDF;
                revision = 64147L;
            }};            

            GetGetPathwayResponse res = sdk.pathwayInformation.getGetPathway(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetPathwayInfo

getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetPathwayInfoFormatEnum;
import org.openapis.openapi.models.operations.GetGetPathwayInfoRequest;
import org.openapis.openapi.models.operations.GetGetPathwayInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetPathwayInfoRequest req = new GetGetPathwayInfoRequest("ipsum") {{
                format = GetGetPathwayInfoFormatEnum.JPG;
            }};            

            GetGetPathwayInfoResponse res = sdk.pathwayInformation.getGetPathwayInfo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
