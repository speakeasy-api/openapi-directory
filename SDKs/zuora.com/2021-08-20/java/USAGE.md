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

            DeleteAccountingCodeRequest req = new DeleteAccountingCodeRequest() {{
                pathParams = new DeleteAccountingCodePathParams() {{
                    acId = "sit";
                }};
                headers = new DeleteAccountingCodeHeaders() {{
                    zuoraEntityIds = "voluptas";
                    zuoraTrackId = "culpa";
                }};
            }};

            DeleteAccountingCodeResponse res = sdk.accountingCodes.deleteAccountingCode(req);

            if (res.commonResponseType.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->