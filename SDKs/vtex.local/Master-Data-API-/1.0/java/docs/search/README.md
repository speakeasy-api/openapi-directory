# search

## Overview

The ```search``` API is intended to query a collection of documents.  

### Available Operations

* [searchdocuments](#searchdocuments) - Search documents

## searchdocuments

Retrieves documents' information, while choosing which fields will be returned and filtering documents by specific fields.

> The response header `REST-Content-Range` indicates the total amount of results for that specific search. For example, it may return `resources 0-100/136108`, which indicates it has returned results from 0 to 100 of a total 136108.

Below you can see some query examples and learn more about each query parameter.

> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.

## Query examples

### Simple filter

```
/dataentities/Client/search?email=my@email.com
```

### Complex filter

```
/dataentities/Client/search?_where=(firstName=Jon OR lastName=Smith) OR (createdIn between 2001-01-01 AND 2016-01-01)
```

### Date Range

```
/dataentities/Client/search?_where=createdIn between 2001-01-01 AND 2016-01-01
```

### Range numeric fields

```
/dataentities/Client/search?_where=age between 18 AND 25
```

### Partial filter

```
/dataentities/Client/search?firstName=*Maria*
```

### Filter for null values

```
/dataentities/Client/search?_where=firstName is null
```

### Filter for non-null values

```
/dataentities/Client/search?_where=firstName is not null
```

### Filter for difference
```
/dataentities/Client/search?_where=firstName<>maria
```

### Filter greater than or less than
```
/dataentities/Client/search?_where=number>5
/dataentities/Client/search?_where=date<2001-01-01
```

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
                .setSecurity(new Security("aut", "quasi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchdocumentsRequest req = new SearchdocumentsRequest("application/json", "application/json", "resources=0-10", "Client") {{
                fields = "error";
                keyword = "String to search";
                schema = "schema";
                sort = "temporibus";
                where = "firstName is not null.";
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
