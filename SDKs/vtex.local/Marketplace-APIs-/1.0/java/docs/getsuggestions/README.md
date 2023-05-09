# getSuggestions

## Overview

Search and filter all suggestions using specific criteria

### Available Operations

* [getSuggestion](#getsuggestion) - Get SKU Suggestion by ID
* [getsuggestions](#getsuggestions) - Get all SKU suggestions

## getSuggestion

This endpoint retrieves the data of a specific SKU sent by the seller, to the marketplace. Marketplaces or external matchers can call this endpoint when they want to check the information about a single SKU. 

Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher. 

Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: 

`Approved`: score equal to or greater than 80 points. 

`Pending`: from 31 to 79 points.

`Denied`: from 0 to 30 points. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuggestionRequest;
import org.openapis.openapi.models.operations.GetSuggestionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum", "vel") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSuggestionRequest req = new GetSuggestionRequest("error", "deserunt", "suscipit", "iure", "magnam");            

            GetSuggestionResponse res = sdk.getSuggestions.getSuggestion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getsuggestions

This endpoint retrieves a list of all SKUs sent by the seller for the Marketplace's approval. Marketplace operators should use this endpoint whenever they want to check the full list of received SKUs and their  information. 

Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher. 

Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been: 

`Approved`: score equal to or greater than 80 points. 

`Pending`: from 31 to 79 points.

`Denied`: from 0 to 30 points. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetsuggestionsRequest;
import org.openapis.openapi.models.operations.GetsuggestionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "ipsa") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetsuggestionsRequest req = new GetsuggestionsRequest("delectus", "tempora", "suscipit") {{
                from = 477665;
                to = 791725;
                hasmapping = "true";
                matcherid = "placeat";
                q = "voluptatum";
                seller = "iusto";
                status = "accepted";
                type = "new";
            }};            

            GetsuggestionsResponse res = sdk.getSuggestions.getsuggestions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
