# getVersions

## Overview

Search and filter all versions of suggestions, using specific criteria

### Available Operations

* [getSuggestionbyversion](#getsuggestionbyversion) - Get Version by ID
* [getVersions](#getversions) - Get all Versions

## getSuggestionbyversion

Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. 

This endpoint retrieves a specific *version* of a chosen SKU sent by the seller. Add the Seller's ID, Seller's SKU ID, and version ID in the path to detail your search.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuggestionbyversionRequest;
import org.openapis.openapi.models.operations.GetSuggestionbyversionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "nisi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSuggestionbyversionRequest req = new GetSuggestionbyversionRequest("recusandae", "temporibus", "ab", "quis", "veritatis", "deserunt");            

            GetSuggestionbyversionResponse res = sdk.getVersions.getSuggestionbyversion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVersions

Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. 

This endpoint retrieves the data of *all* previous and latest versions of a specific SKU suggestion, sent by the seller. Whenever an SKU is updated, it is important to map previous versions, to compare and identify changes. 

The response's object [latestversion] provides the information of the most recent version of that SKU suggestion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVersionsRequest;
import org.openapis.openapi.models.operations.GetVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "ipsam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVersionsRequest req = new GetVersionsRequest("repellendus", "sapiente", "quo", "odit", "at");            

            GetVersionsResponse res = sdk.getVersions.getVersions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
