# writeCreateUpdateDelete

### Available Operations

* [getRemoveOntologyTag](#getremoveontologytag) - removeOntologyTag
* [getSaveCurationTag](#getsavecurationtag) - saveCurationTag
* [getSaveOntologyTag](#getsaveontologytag) - saveOntologyTag
* [getUpdatePathway](#getupdatepathway) - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* [postCreatePathway](#postcreatepathway) - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

## getRemoveOntologyTag

removeOntologyTag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRemoveOntologyTagFormatEnum;
import org.openapis.openapi.models.operations.GetRemoveOntologyTagRequest;
import org.openapis.openapi.models.operations.GetRemoveOntologyTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRemoveOntologyTagRequest req = new GetRemoveOntologyTagRequest("excepturi", "tempora", "facilis", "tempore") {{
                format = GetRemoveOntologyTagFormatEnum.XML;
            }};            

            GetRemoveOntologyTagResponse res = sdk.writeCreateUpdateDelete.getRemoveOntologyTag(req);

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

            GetSaveCurationTagRequest req = new GetSaveCurationTagRequest("delectus", "eum", 248753L, "eligendi", "sint", "aliquid") {{
                format = GetSaveCurationTagFormatEnum.DUMP;
            }};            

            GetSaveCurationTagResponse res = sdk.writeCreateUpdateDelete.getSaveCurationTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSaveOntologyTag

saveOntologyTag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSaveOntologyTagFormatEnum;
import org.openapis.openapi.models.operations.GetSaveOntologyTagRequest;
import org.openapis.openapi.models.operations.GetSaveOntologyTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSaveOntologyTagRequest req = new GetSaveOntologyTagRequest("necessitatibus", "sint", "officia", "dolor", "debitis") {{
                format = GetSaveOntologyTagFormatEnum.PDF;
            }};            

            GetSaveOntologyTagResponse res = sdk.writeCreateUpdateDelete.getSaveOntologyTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdatePathway

updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUpdatePathwayFormatEnum;
import org.openapis.openapi.models.operations.GetUpdatePathwayRequest;
import org.openapis.openapi.models.operations.GetUpdatePathwayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUpdatePathwayRequest req = new GetUpdatePathwayRequest("dolorum", "in", "in", "illum", 978571L, "rerum") {{
                format = GetUpdatePathwayFormatEnum.JSON;
            }};            

            GetUpdatePathwayResponse res = sdk.writeCreateUpdateDelete.getUpdatePathway(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreatePathway

createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCreatePathwayFormatEnum;
import org.openapis.openapi.models.operations.PostCreatePathwayRequest;
import org.openapis.openapi.models.operations.PostCreatePathwayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCreatePathwayRequest req = new PostCreatePathwayRequest("magnam", "cumque", "facere") {{
                format = PostCreatePathwayFormatEnum.HTML;
            }};            

            PostCreatePathwayResponse res = sdk.writeCreateUpdateDelete.postCreatePathway(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
