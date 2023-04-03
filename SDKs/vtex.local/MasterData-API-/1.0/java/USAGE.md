<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.RetrieveattachmentRequest;
import org.openapis.openapi.models.operations.RetrieveattachmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetrieveattachmentRequest req = new RetrieveattachmentRequest() {{
                acronym = "corrupti";
                field = "provident";
                fileName = "distinctio";
                id = "quibusdam";
            }}            

            RetrieveattachmentResponse res = sdk.attachments.retrieveattachment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->