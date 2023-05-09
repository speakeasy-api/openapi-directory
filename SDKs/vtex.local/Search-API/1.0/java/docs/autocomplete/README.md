# autocomplete

### Available Operations

* [autoComplete](#autocomplete) - Product Search Autocomplete

## autoComplete

Retrieves product's information related to the searched string.
`{{searchString}} is the part of string the user is looking for.
E.g.: `ref` | `refrig` | `refrigerator`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutoCompleteRequest;
import org.openapis.openapi.models.operations.AutoCompleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quibusdam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AutoCompleteRequest req = new AutoCompleteRequest("application/json", "application/json", "jeans");            

            AutoCompleteResponse res = sdk.autocomplete.autoComplete(req);

            if (res.theRootSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
