<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVCustomPricesSessionSchemaRequest;
import org.openapis.openapi.models.operations.GetVCustomPricesSessionSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVCustomPricesSessionSchemaRequest req = new GetVCustomPricesSessionSchemaRequest("corrupti", "provident");            

            GetVCustomPricesSessionSchemaResponse res = sdk.customPrices.getVCustomPricesSessionSchema(req);

            if (res.requestBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->