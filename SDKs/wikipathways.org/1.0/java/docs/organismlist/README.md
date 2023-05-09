# organismList

### Available Operations

* [getListOrganisms](#getlistorganisms) - listOrganisms

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
                format = GetListOrganismsFormatEnum.HTML;
            }};            

            GetListOrganismsResponse res = sdk.organismList.getListOrganisms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
