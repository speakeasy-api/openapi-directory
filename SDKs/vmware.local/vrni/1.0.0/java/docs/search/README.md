# search

## Overview

Search APIs

### Available Operations

* [searchEntities](#searchentities) - Search entities

## searchEntities

Using search API you can search vRealize Network Insight entities by specifying entity type and filter expression.
A filter expression is a predicate expression (similar to SQL where clause) used to define the search criteria.
Please refer to API Guide on details of how to construct filter expression. A successful search request will return a
list of entity ids that matches the search criteria.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchEntitiesResponse;
import org.openapis.openapi.models.operations.SearchEntitiesSecurity;
import org.openapis.openapi.models.shared.AllEntityTypeEnum;
import org.openapis.openapi.models.shared.SearchRequest;
import org.openapis.openapi.models.shared.SortByClause;
import org.openapis.openapi.models.shared.SortByClauseOrderEnum;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchRequest req = new SearchRequest() {{
                cursor = "consectetur";
                entityType = AllEntityTypeEnum.DISTRIBUTED_VIRTUAL_PORTGROUP;
                filter = "aspernatur";
                size = 325310;
                sortBy = new SortByClause() {{
                    field = "eaque";
                    order = SortByClauseOrderEnum.DESC;
                }};;
                timeRange = new TimeRange() {{
                    endTime = 725595L;
                    startTime = 13948L;
                }};;
            }};            

            SearchEntitiesResponse res = sdk.search.searchEntities(req, new SearchEntitiesSecurity("aut") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.pagedListResponseWithTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
