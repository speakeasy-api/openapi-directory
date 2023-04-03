<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AffiliationByIdRequest;
import org.openapis.openapi.models.operations.AffiliationByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AffiliationByIdRequest req = new AffiliationByIdRequest() {{
                accept = "application/json";
                contentType = "application/json";
                xPROVIDERAPIAppKey = "{{X-PROVIDER-API-AppKey}}";
                xPROVIDERAPIAppToken = "{{X-PROVIDER-API-AppToken}}";
                affiliationId = "e046d326-5421-45ab-95ae-f13d37f260b5";
            }}            

            AffiliationByIdResponse res = sdk.configuration.affiliationById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->