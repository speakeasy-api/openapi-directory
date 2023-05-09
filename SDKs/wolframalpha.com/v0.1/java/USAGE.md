<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWolframAlphaResultsRequest;
import org.openapis.openapi.models.operations.GetWolframAlphaResultsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWolframAlphaResultsRequest req = new GetWolframAlphaResultsRequest("corrupti");            

            GetWolframAlphaResultsResponse res = sdk.getWolframAlphaResults(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->