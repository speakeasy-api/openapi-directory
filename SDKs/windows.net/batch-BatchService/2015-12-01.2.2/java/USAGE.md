<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ApplicationGetPathParams;
import org.openapis.openapi.models.operations.ApplicationGetQueryParams;
import org.openapis.openapi.models.operations.ApplicationGetHeaders;
import org.openapis.openapi.models.operations.ApplicationGetRequest;
import org.openapis.openapi.models.operations.ApplicationGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApplicationGetRequest req = new ApplicationGetRequest() {{
                pathParams = new ApplicationGetPathParams() {{
                    applicationId = "corrupti";
                }};
                queryParams = new ApplicationGetQueryParams() {{
                    apiVersion = "provident";
                    timeout = 715190;
                }};
                headers = new ApplicationGetHeaders() {{
                    clientRequestId = "quibusdam";
                    ocpDate = "unde";
                    returnClientRequestId = false;
                }};
            }};            

            ApplicationGetResponse res = sdk.applications.applicationGet(req);

            if (res.applicationSummary.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->