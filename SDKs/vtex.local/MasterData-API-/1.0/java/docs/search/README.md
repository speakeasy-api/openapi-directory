# search

## Overview

The `search` API is intended to query a collection of documents.	

### Available Operations

* [searchdocuments](#searchdocuments) - Search documents

## searchdocuments

Search documents by the query parameters described below.

> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchdocumentsRequest;
import org.openapis.openapi.models.operations.SearchdocumentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit", "ut") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchdocumentsRequest req = new SearchdocumentsRequest("maiores", "dicta", "corporis", "dolore") {{
                fields = "iusto";
                keyword = "dicta";
                schema = "harum";
                sort = "enim";
                where = "accusamus";
            }};            

            SearchdocumentsResponse res = sdk.search.searchdocuments(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
