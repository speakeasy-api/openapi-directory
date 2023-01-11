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

            UpdateBankAccountRequest req = new UpdateBankAccountRequest() {{
                security = new UpdateBankAccountSecurity() {{
                    apiSecretKey = new SchemeApiSecretKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new UpdateBankAccountPathParams() {{
                    bankAccountId = "sit";
                }};
                headers = new UpdateBankAccountHeaders() {{
                    xApiKey = "voluptas";
                }};
                request = "culpa";
            }};

            UpdateBankAccountResponse res = sdk.bankAccounts.updateBankAccount(req);

            if (res.updateBankAccount201ApplicationJSONAny.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->