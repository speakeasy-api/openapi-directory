# search

### Available Operations

* [getFindInteractions](#getfindinteractions) - findInteractionsFind interactions defined in WikiPathways pathways.
* [getFindPathwaysByLiterature](#getfindpathwaysbyliterature) - findPathwaysByLiterature
* [getFindPathwaysByText](#getfindpathwaysbytext) - findPathwaysByText
* [getFindPathwaysByXref](#getfindpathwaysbyxref) - findPathwaysByXref
* [getRemoveCurationTag](#getremovecurationtag) - removeCurationTagRemove a curation tag from a pathway.

## getFindInteractions

findInteractionsFind interactions defined in WikiPathways pathways.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFindInteractionsFormatEnum;
import org.openapis.openapi.models.operations.GetFindInteractionsRequest;
import org.openapis.openapi.models.operations.GetFindInteractionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFindInteractionsRequest req = new GetFindInteractionsRequest("repudiandae") {{
                format = GetFindInteractionsFormatEnum.DUMP;
            }};            

            GetFindInteractionsResponse res = sdk.search.getFindInteractions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFindPathwaysByLiterature

findPathwaysByLiterature

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFindPathwaysByLiteratureFormatEnum;
import org.openapis.openapi.models.operations.GetFindPathwaysByLiteratureRequest;
import org.openapis.openapi.models.operations.GetFindPathwaysByLiteratureResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFindPathwaysByLiteratureRequest req = new GetFindPathwaysByLiteratureRequest("veritatis") {{
                format = GetFindPathwaysByLiteratureFormatEnum.PDF;
            }};            

            GetFindPathwaysByLiteratureResponse res = sdk.search.getFindPathwaysByLiterature(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFindPathwaysByText

findPathwaysByText

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFindPathwaysByTextFormatEnum;
import org.openapis.openapi.models.operations.GetFindPathwaysByTextRequest;
import org.openapis.openapi.models.operations.GetFindPathwaysByTextResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFindPathwaysByTextRequest req = new GetFindPathwaysByTextRequest("incidunt") {{
                format = GetFindPathwaysByTextFormatEnum.XML;
                species = "consequatur";
            }};            

            GetFindPathwaysByTextResponse res = sdk.search.getFindPathwaysByText(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFindPathwaysByXref

findPathwaysByXref

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFindPathwaysByXrefFormatEnum;
import org.openapis.openapi.models.operations.GetFindPathwaysByXrefRequest;
import org.openapis.openapi.models.operations.GetFindPathwaysByXrefResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFindPathwaysByXrefRequest req = new GetFindPathwaysByXrefRequest(                new Object[]{{
                                add("quibusdam"),
                                add("explicabo"),
                                add("deserunt"),
                            }}) {{
                codes = new Object[]{{
                    add("quibusdam"),
                    add("labore"),
                    add("modi"),
                }};
                format = GetFindPathwaysByXrefFormatEnum.XML;
            }};            

            GetFindPathwaysByXrefResponse res = sdk.search.getFindPathwaysByXref(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoveCurationTag

removeCurationTagRemove a curation tag from a pathway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRemoveCurationTagFormatEnum;
import org.openapis.openapi.models.operations.GetRemoveCurationTagRequest;
import org.openapis.openapi.models.operations.GetRemoveCurationTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRemoveCurationTagRequest req = new GetRemoveCurationTagRequest("aliquid", "cupiditate", "quos", "perferendis") {{
                format = GetRemoveCurationTagFormatEnum.JSON;
            }};            

            GetRemoveCurationTagResponse res = sdk.search.getRemoveCurationTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
