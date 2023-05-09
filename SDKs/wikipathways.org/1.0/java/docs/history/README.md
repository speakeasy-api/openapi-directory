# history

### Available Operations

* [getGetCurationTagHistory](#getgetcurationtaghistory) - getCurationTagHistory
* [getGetPathwayHistory](#getgetpathwayhistory) - getPathwayHistoryGet the revision history of a pathway.
* [getGetRecentChanges](#getgetrecentchanges) - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

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

            GetGetCurationTagHistoryRequest req = new GetGetCurationTagHistoryRequest("quasi") {{
                format = GetGetCurationTagHistoryFormatEnum.DUMP;
                timestamp = "temporibus";
            }};            

            GetGetCurationTagHistoryResponse res = sdk.history.getGetCurationTagHistory(req);

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

            GetGetPathwayHistoryRequest req = new GetGetPathwayHistoryRequest("laborum", "quasi") {{
                format = GetGetPathwayHistoryFormatEnum.PDF;
            }};            

            GetGetPathwayHistoryResponse res = sdk.history.getGetPathwayHistory(req);

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

            GetGetRecentChangesRequest req = new GetGetRecentChangesRequest("voluptatibus") {{
                format = GetGetRecentChangesFormatEnum.PDF;
            }};            

            GetGetRecentChangesResponse res = sdk.history.getGetRecentChanges(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
