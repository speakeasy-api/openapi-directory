<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            ApplicationGetRequest req = new ApplicationGetRequest() {{
                pathParams = new ApplicationGetPathParams() {{
                    applicationId = "facilis";
                }};
                queryParams = new ApplicationGetQueryParams() {{
                    apiVersion = "officia";
                    timeout = 4670964478827353330;
                }};
                headers = new ApplicationGetHeaders() {{
                    clientRequestId = "magni";
                    ocpDate = "saepe";
                    returnClientRequestId = true;
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