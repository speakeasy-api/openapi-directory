<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetreportstatusbyIDPathParams;
import org.openapis.openapi.models.operations.GetreportstatusbyIDHeaders;
import org.openapis.openapi.models.operations.GetreportstatusbyIDRequest;
import org.openapis.openapi.models.operations.GetreportstatusbyIDResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = new SchemeAppKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    appToken = new SchemeAppToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetreportstatusbyIDRequest req = new GetreportstatusbyIDRequest() {{
                pathParams = new GetreportstatusbyIDPathParams() {{
                    reportId = "corrupti";
                }};
                headers = new GetreportstatusbyIDHeaders() {{
                    accept = "provident";
                    contentType = "distinctio";
                }};
            }};            

            GetreportstatusbyIDResponse res = sdk.report.getreportstatusbyID(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->