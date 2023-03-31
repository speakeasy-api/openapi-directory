<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DELETEAccountingCodePathParams;
import org.openapis.openapi.models.operations.DELETEAccountingCodeHeaders;
import org.openapis.openapi.models.operations.DELETEAccountingCodeRequest;
import org.openapis.openapi.models.operations.DELETEAccountingCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DELETEAccountingCodeRequest req = new DELETEAccountingCodeRequest() {{
                pathParams = new DELETEAccountingCodePathParams() {{
                    acId = "corrupti";
                }};
                headers = new DELETEAccountingCodeHeaders() {{
                    zuoraEntityIds = "provident";
                    zuoraTrackId = "distinctio";
                }};
            }};            

            DELETEAccountingCodeResponse res = sdk.accountingCodes.deleteAccountingCode(req);

            if (res.commonResponseType.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->