<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DELETEAccountingCodeRequest;
import org.openapis.openapi.models.operations.DELETEAccountingCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DELETEAccountingCodeRequest req = new DELETEAccountingCodeRequest() {{
                zuoraEntityIds = "corrupti";
                zuoraTrackId = "provident";
                acId = "distinctio";
            }}            

            DELETEAccountingCodeResponse res = sdk.accountingCodes.deleteAccountingCode(req);

            if (res.commonResponseType.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->