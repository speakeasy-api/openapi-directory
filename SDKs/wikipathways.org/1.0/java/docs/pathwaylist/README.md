# pathwayList

### Available Operations

* [getGetCurationTagsByName](#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetPathwaysByOntologyTerm](#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [getGetPathwaysByParentOntologyTerm](#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [getListPathways](#getlistpathways) - listPathways

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

            GetGetCurationTagsByNameRequest req = new GetGetCurationTagsByNameRequest("molestias") {{
                format = GetGetCurationTagsByNameFormatEnum.DUMP;
            }};            

            GetGetCurationTagsByNameResponse res = sdk.pathwayList.getGetCurationTagsByName(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            GetGetPathwaysByOntologyTermRequest req = new GetGetPathwaysByOntologyTermRequest("pariatur") {{
                format = GetGetPathwaysByOntologyTermFormatEnum.XML;
            }};            

            GetGetPathwaysByOntologyTermResponse res = sdk.pathwayList.getGetPathwaysByOntologyTerm(req);

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

            GetGetPathwaysByParentOntologyTermRequest req = new GetGetPathwaysByParentOntologyTermRequest("praesentium") {{
                format = GetGetPathwaysByParentOntologyTermFormatEnum.DUMP;
            }};            

            GetGetPathwaysByParentOntologyTermResponse res = sdk.pathwayList.getGetPathwaysByParentOntologyTerm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListPathways

listPathways

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListPathwaysFormatEnum;
import org.openapis.openapi.models.operations.GetListPathwaysRequest;
import org.openapis.openapi.models.operations.GetListPathwaysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListPathwaysRequest req = new GetListPathwaysRequest() {{
                format = GetListPathwaysFormatEnum.PDF;
                organism = "quasi";
            }};            

            GetListPathwaysResponse res = sdk.pathwayList.getListPathways(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
