# ontologyTags

### Available Operations

* [getGetPathwaysByOntologyTerm](#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [getGetPathwaysByParentOntologyTerm](#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [getRemoveOntologyTag](#getremoveontologytag) - removeOntologyTag
* [getSaveOntologyTag](#getsaveontologytag) - saveOntologyTag

## getGetPathwaysByOntologyTerm

getPathwaysByOntologyTerm

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetPathwaysByOntologyTermFormatEnum;
import org.openapis.openapi.models.operations.GetGetPathwaysByOntologyTermRequest;
import org.openapis.openapi.models.operations.GetGetPathwaysByOntologyTermResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetPathwaysByOntologyTermRequest req = new GetGetPathwaysByOntologyTermRequest("nihil") {{
                format = GetGetPathwaysByOntologyTermFormatEnum.DUMP;
            }};            

            GetGetPathwaysByOntologyTermResponse res = sdk.ontologyTags.getGetPathwaysByOntologyTerm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetPathwaysByParentOntologyTerm

getPathwaysByParentOntologyTerm

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetPathwaysByParentOntologyTermFormatEnum;
import org.openapis.openapi.models.operations.GetGetPathwaysByParentOntologyTermRequest;
import org.openapis.openapi.models.operations.GetGetPathwaysByParentOntologyTermResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetPathwaysByParentOntologyTermRequest req = new GetGetPathwaysByParentOntologyTermRequest("voluptatibus") {{
                format = GetGetPathwaysByParentOntologyTermFormatEnum.JSON;
            }};            

            GetGetPathwaysByParentOntologyTermResponse res = sdk.ontologyTags.getGetPathwaysByParentOntologyTerm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            GetRemoveOntologyTagRequest req = new GetRemoveOntologyTagRequest("omnis", "voluptate", "cum", "perferendis") {{
                format = GetRemoveOntologyTagFormatEnum.JSON;
            }};            

            GetRemoveOntologyTagResponse res = sdk.ontologyTags.getRemoveOntologyTag(req);

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

            GetSaveOntologyTagRequest req = new GetSaveOntologyTagRequest("reprehenderit", "ut", "maiores", "dicta", "corporis") {{
                format = GetSaveOntologyTagFormatEnum.XML;
            }};            

            GetSaveOntologyTagResponse res = sdk.ontologyTags.getSaveOntologyTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
