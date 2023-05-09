# allFunctions

### Available Operations

* [getFindInteractions](#getfindinteractions) - findInteractionsFind interactions defined in WikiPathways pathways.
* [getFindPathwaysByLiterature](#getfindpathwaysbyliterature) - findPathwaysByLiterature
* [getFindPathwaysByText](#getfindpathwaysbytext) - findPathwaysByText
* [getFindPathwaysByXref](#getfindpathwaysbyxref) - findPathwaysByXref
* [getGetColoredPathway](#getgetcoloredpathway) - getColoredPathwayGet a colored image version of the pathway.
* [getGetCurationTagHistory](#getgetcurationtaghistory) - getCurationTagHistory
* [getGetCurationTags](#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetCurationTagsByName](#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetOntologyTermsByPathway](#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [getGetPathway](#getgetpathway) - getPathway
* [getGetPathwayAs](#getgetpathwayas) - getPathwayAsDownload a pathway in the specified file format.
* [getGetPathwayHistory](#getgetpathwayhistory) - getPathwayHistoryGet the revision history of a pathway.
* [getGetPathwayInfo](#getgetpathwayinfo) - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
* [getGetPathwaysByOntologyTerm](#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [getGetPathwaysByParentOntologyTerm](#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [getGetRecentChanges](#getgetrecentchanges) - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
* [getGetUserByOrcid](#getgetuserbyorcid) - getUserByOrcid
* [getGetXrefList](#getgetxreflist) - getXrefList
* [getListOrganisms](#getlistorganisms) - listOrganisms
* [getListPathways](#getlistpathways) - listPathways
* [getLogin](#getlogin) - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
* [getRemoveCurationTag](#getremovecurationtag) - removeCurationTagRemove a curation tag from a pathway.
* [getRemoveOntologyTag](#getremoveontologytag) - removeOntologyTag
* [getSaveCurationTag](#getsavecurationtag) - saveCurationTag
* [getSaveOntologyTag](#getsaveontologytag) - saveOntologyTag
* [getUpdatePathway](#getupdatepathway) - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* [postCreatePathway](#postcreatepathway) - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

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

            GetFindInteractionsRequest req = new GetFindInteractionsRequest("distinctio") {{
                format = GetFindInteractionsFormatEnum.PDF;
            }};            

            GetFindInteractionsResponse res = sdk.allFunctions.getFindInteractions(req);

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

            GetFindPathwaysByLiteratureRequest req = new GetFindPathwaysByLiteratureRequest("unde") {{
                format = GetFindPathwaysByLiteratureFormatEnum.PDF;
            }};            

            GetFindPathwaysByLiteratureResponse res = sdk.allFunctions.getFindPathwaysByLiterature(req);

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

            GetFindPathwaysByTextRequest req = new GetFindPathwaysByTextRequest("corrupti") {{
                format = GetFindPathwaysByTextFormatEnum.PDF;
                species = "vel";
            }};            

            GetFindPathwaysByTextResponse res = sdk.allFunctions.getFindPathwaysByText(req);

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
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }}) {{
                codes = new Object[]{{
                    add("debitis"),
                    add("ipsa"),
                }};
                format = GetFindPathwaysByXrefFormatEnum.PDF;
            }};            

            GetFindPathwaysByXrefResponse res = sdk.allFunctions.getFindPathwaysByXref(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                                add("suscipit"),
                                add("molestiae"),
                            }}, "minus",                 new Object[]{{
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                                add("nisi"),
                            }}, "recusandae", "temporibus") {{
                format = GetGetColoredPathwayFormatEnum.JSON;
            }};            

            GetGetColoredPathwayResponse res = sdk.allFunctions.getGetColoredPathway(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            GetGetCurationTagHistoryRequest req = new GetGetCurationTagHistoryRequest("quis") {{
                format = GetGetCurationTagHistoryFormatEnum.JSON;
                timestamp = "deserunt";
            }};            

            GetGetCurationTagHistoryResponse res = sdk.allFunctions.getGetCurationTagHistory(req);

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

            GetGetCurationTagsRequest req = new GetGetCurationTagsRequest("perferendis") {{
                format = GetGetCurationTagsFormatEnum.HTML;
            }};            

            GetGetCurationTagsResponse res = sdk.allFunctions.getGetCurationTags(req);

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

            GetGetCurationTagsByNameRequest req = new GetGetCurationTagsByNameRequest("repellendus") {{
                format = GetGetCurationTagsByNameFormatEnum.PDF;
            }};            

            GetGetCurationTagsByNameResponse res = sdk.allFunctions.getGetCurationTagsByName(req);

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

            GetGetOntologyTermsByPathwayRequest req = new GetGetOntologyTermsByPathwayRequest("quo") {{
                format = GetGetOntologyTermsByPathwayFormatEnum.JSON;
            }};            

            GetGetOntologyTermsByPathwayResponse res = sdk.allFunctions.getGetOntologyTermsByPathway(req);

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

            GetGetPathwayRequest req = new GetGetPathwayRequest("at") {{
                format = GetGetPathwayFormatEnum.PDF;
                revision = 978619L;
            }};            

            GetGetPathwayResponse res = sdk.allFunctions.getGetPathway(req);

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

            GetGetPathwayAsRequest req = new GetGetPathwayAsRequest("molestiae", "quod") {{
                format = GetGetPathwayAsFormatEnum.JPG;
                revision = 461479L;
            }};            

            GetGetPathwayAsResponse res = sdk.allFunctions.getGetPathwayAs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetPathwayHistory

getPathwayHistoryGet the revision history of a pathway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetPathwayHistoryFormatEnum;
import org.openapis.openapi.models.operations.GetGetPathwayHistoryRequest;
import org.openapis.openapi.models.operations.GetGetPathwayHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetPathwayHistoryRequest req = new GetGetPathwayHistoryRequest("totam", "porro") {{
                format = GetGetPathwayHistoryFormatEnum.JPG;
            }};            

            GetGetPathwayHistoryResponse res = sdk.allFunctions.getGetPathwayHistory(req);

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

            GetGetPathwayInfoRequest req = new GetGetPathwayInfoRequest("dicta") {{
                format = GetGetPathwayInfoFormatEnum.JPG;
            }};            

            GetGetPathwayInfoResponse res = sdk.allFunctions.getGetPathwayInfo(req);

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

            GetGetPathwaysByOntologyTermRequest req = new GetGetPathwaysByOntologyTermRequest("officia") {{
                format = GetGetPathwaysByOntologyTermFormatEnum.DUMP;
            }};            

            GetGetPathwaysByOntologyTermResponse res = sdk.allFunctions.getGetPathwaysByOntologyTerm(req);

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

            GetGetPathwaysByParentOntologyTermRequest req = new GetGetPathwaysByParentOntologyTermRequest("fugit") {{
                format = GetGetPathwaysByParentOntologyTermFormatEnum.DUMP;
            }};            

            GetGetPathwaysByParentOntologyTermResponse res = sdk.allFunctions.getGetPathwaysByParentOntologyTerm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetRecentChanges

getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetRecentChangesFormatEnum;
import org.openapis.openapi.models.operations.GetGetRecentChangesRequest;
import org.openapis.openapi.models.operations.GetGetRecentChangesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetRecentChangesRequest req = new GetGetRecentChangesRequest("hic") {{
                format = GetGetRecentChangesFormatEnum.JPG;
            }};            

            GetGetRecentChangesResponse res = sdk.allFunctions.getGetRecentChanges(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetUserByOrcid

getUserByOrcid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetUserByOrcidFormatEnum;
import org.openapis.openapi.models.operations.GetGetUserByOrcidRequest;
import org.openapis.openapi.models.operations.GetGetUserByOrcidResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetUserByOrcidRequest req = new GetGetUserByOrcidRequest("totam") {{
                format = GetGetUserByOrcidFormatEnum.JSON;
            }};            

            GetGetUserByOrcidResponse res = sdk.allFunctions.getGetUserByOrcid(req);

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

            GetGetXrefListRequest req = new GetGetXrefListRequest("commodi", "molestiae") {{
                format = GetGetXrefListFormatEnum.XML;
            }};            

            GetGetXrefListResponse res = sdk.allFunctions.getGetXrefList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListOrganisms

listOrganisms

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListOrganismsFormatEnum;
import org.openapis.openapi.models.operations.GetListOrganismsRequest;
import org.openapis.openapi.models.operations.GetListOrganismsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListOrganismsRequest req = new GetListOrganismsRequest() {{
                format = GetListOrganismsFormatEnum.XML;
            }};            

            GetListOrganismsResponse res = sdk.allFunctions.getListOrganisms(req);

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
                format = GetListPathwaysFormatEnum.JPG;
                organism = "cum";
            }};            

            GetListPathwaysResponse res = sdk.allFunctions.getListPathways(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLogin

loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoginFormatEnum;
import org.openapis.openapi.models.operations.GetLoginRequest;
import org.openapis.openapi.models.operations.GetLoginResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLoginRequest req = new GetLoginRequest("esse", "ipsum") {{
                format = GetLoginFormatEnum.DUMP;
            }};            

            GetLoginResponse res = sdk.allFunctions.getLogin(req);

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

            GetRemoveCurationTagRequest req = new GetRemoveCurationTagRequest("aspernatur", "perferendis", "ad", "natus") {{
                format = GetRemoveCurationTagFormatEnum.JSON;
            }};            

            GetRemoveCurationTagResponse res = sdk.allFunctions.getRemoveCurationTag(req);

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

            GetRemoveOntologyTagRequest req = new GetRemoveOntologyTagRequest("iste", "dolor", "natus", "laboriosam") {{
                format = GetRemoveOntologyTagFormatEnum.PDF;
            }};            

            GetRemoveOntologyTagResponse res = sdk.allFunctions.getRemoveOntologyTag(req);

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

            GetSaveCurationTagRequest req = new GetSaveCurationTagRequest("saepe", "fuga", 449950L, "corporis", "iste", "iure") {{
                format = GetSaveCurationTagFormatEnum.PDF;
            }};            

            GetSaveCurationTagResponse res = sdk.allFunctions.getSaveCurationTag(req);

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

            GetSaveOntologyTagRequest req = new GetSaveOntologyTagRequest("quidem", "architecto", "ipsa", "reiciendis", "est") {{
                format = GetSaveOntologyTagFormatEnum.DUMP;
            }};            

            GetSaveOntologyTagResponse res = sdk.allFunctions.getSaveOntologyTag(req);

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

            GetUpdatePathwayRequest req = new GetUpdatePathwayRequest("laborum", "dolores", "dolorem", "corporis", 128926L, "nobis") {{
                format = GetUpdatePathwayFormatEnum.XML;
            }};            

            GetUpdatePathwayResponse res = sdk.allFunctions.getUpdatePathway(req);

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

            PostCreatePathwayRequest req = new PostCreatePathwayRequest("omnis", "nemo", "minima") {{
                format = PostCreatePathwayFormatEnum.DUMP;
            }};            

            PostCreatePathwayResponse res = sdk.allFunctions.postCreatePathway(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
