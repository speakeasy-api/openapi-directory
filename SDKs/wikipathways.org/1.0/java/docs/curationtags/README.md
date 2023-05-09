# curationTags

### Available Operations

* [getGetCurationTagHistory](#getgetcurationtaghistory) - getCurationTagHistory
* [getGetCurationTags](#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetCurationTagsByName](#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetOntologyTermsByPathway](#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [getSaveCurationTag](#getsavecurationtag) - saveCurationTag

## getGetCurationTagHistory

getCurationTagHistory

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetCurationTagHistoryFormatEnum;
import org.openapis.openapi.models.operations.GetGetCurationTagHistoryRequest;
import org.openapis.openapi.models.operations.GetGetCurationTagHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetCurationTagHistoryRequest req = new GetGetCurationTagHistoryRequest("accusantium") {{
                format = GetGetCurationTagHistoryFormatEnum.HTML;
                timestamp = "culpa";
            }};            

            GetGetCurationTagHistoryResponse res = sdk.curationTags.getGetCurationTagHistory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            GetGetCurationTagsRequest req = new GetGetCurationTagsRequest("doloribus") {{
                format = GetGetCurationTagsFormatEnum.PDF;
            }};            

            GetGetCurationTagsResponse res = sdk.curationTags.getGetCurationTags(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetCurationTagsByName

getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetCurationTagsByNameFormatEnum;
import org.openapis.openapi.models.operations.GetGetCurationTagsByNameRequest;
import org.openapis.openapi.models.operations.GetGetCurationTagsByNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetCurationTagsByNameRequest req = new GetGetCurationTagsByNameRequest("architecto") {{
                format = GetGetCurationTagsByNameFormatEnum.DUMP;
            }};            

            GetGetCurationTagsByNameResponse res = sdk.curationTags.getGetCurationTagsByName(req);

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

            GetGetOntologyTermsByPathwayRequest req = new GetGetOntologyTermsByPathwayRequest("dolorem") {{
                format = GetGetOntologyTermsByPathwayFormatEnum.DUMP;
            }};            

            GetGetOntologyTermsByPathwayResponse res = sdk.curationTags.getGetOntologyTermsByPathway(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSaveCurationTag

saveCurationTag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSaveCurationTagFormatEnum;
import org.openapis.openapi.models.operations.GetSaveCurationTagRequest;
import org.openapis.openapi.models.operations.GetSaveCurationTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSaveCurationTagRequest req = new GetSaveCurationTagRequest("consequuntur", "repellat", 653108L, "occaecati", "numquam", "commodi") {{
                format = GetSaveCurationTagFormatEnum.HTML;
            }};            

            GetSaveCurationTagResponse res = sdk.curationTags.getSaveCurationTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
