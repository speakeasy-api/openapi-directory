# autocomplete

### Available Operations

* [getAutocompleteSuggestions](#getautocompletesuggestions) - Get list of suggested terms and attributes similar to the search term
* [getTopSearches](#gettopsearches) - Get list of the 10 most searched terms

## getAutocompleteSuggestions

Lists the suggested terms and attributes similar to the search term.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutocompleteSuggestionsRequest;
import org.openapis.openapi.models.operations.GetAutocompleteSuggestionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutocompleteSuggestionsRequest req = new GetAutocompleteSuggestionsRequest() {{
                locale = "distinctio";
                query = "quibusdam";
            }};            

            GetAutocompleteSuggestionsResponse res = sdk.autocomplete.getAutocompleteSuggestions(req);

            if (res.autocompleteSearchSuggestions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTopSearches

Lists the 10 most searched terms.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTopSearchesRequest;
import org.openapis.openapi.models.operations.GetTopSearchesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTopSearchesRequest req = new GetTopSearchesRequest() {{
                locale = "unde";
            }};            

            GetTopSearchesResponse res = sdk.autocomplete.getTopSearches(req);

            if (res.topSearches != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
