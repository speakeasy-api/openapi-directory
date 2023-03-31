<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAutocompleteSuggestionsQueryParams;
import org.openapis.openapi.models.operations.GetAutocompleteSuggestionsRequest;
import org.openapis.openapi.models.operations.GetAutocompleteSuggestionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutocompleteSuggestionsRequest req = new GetAutocompleteSuggestionsRequest() {{
                queryParams = new GetAutocompleteSuggestionsQueryParams() {{
                    locale = "corrupti";
                    query = "provident";
                }};
            }};            

            GetAutocompleteSuggestionsResponse res = sdk.autocomplete.getAutocompleteSuggestions(req);

            if (res.autocompleteSearchSuggestions.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->