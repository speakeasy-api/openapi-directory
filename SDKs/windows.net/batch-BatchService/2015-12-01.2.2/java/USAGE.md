<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ApplicationGetRequest;
import org.openapis.openapi.models.operations.ApplicationGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApplicationGetRequest req = new ApplicationGetRequest() {{
                apiVersion = "corrupti";
                applicationId = "provident";
                clientRequestId = "distinctio";
                ocpDate = "quibusdam";
                returnClientRequestId = false;
                timeout = 602763;
            }}            

            ApplicationGetResponse res = sdk.applications.applicationGet(req);

            if (res.applicationSummary.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->