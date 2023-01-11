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
                    applicationId = "sit";
                }};
                queryParams = new ApplicationGetQueryParams() {{
                    apiVersion = "voluptas";
                    timeout = 6050128673802995827;
                }};
                headers = new ApplicationGetHeaders() {{
                    clientRequestId = "expedita";
                    ocpDate = "consequuntur";
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