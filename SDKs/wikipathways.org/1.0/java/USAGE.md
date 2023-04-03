<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetFindInteractionsFormatEnum;
import org.openapis.openapi.models.operations.GetFindInteractionsRequest;
import org.openapis.openapi.models.operations.GetFindInteractionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFindInteractionsRequest req = new GetFindInteractionsRequest() {{
                format = "dump";
                query = "provident";
            }}            

            GetFindInteractionsResponse res = sdk.allFunctions.getFindInteractions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->