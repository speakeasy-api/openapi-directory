<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.UpdateBankAccountSecurity;
import org.openapis.openapi.models.operations.UpdateBankAccountPathParams;
import org.openapis.openapi.models.operations.UpdateBankAccountHeaders;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccount;
import org.openapis.openapi.models.operations.UpdateBankAccountRequest;
import org.openapis.openapi.models.operations.UpdateBankAccountResponse;
import org.openapis.openapi.models.shared.SchemeAPISecretKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBankAccountRequest req = new UpdateBankAccountRequest() {{
                security = new UpdateBankAccountSecurity() {{
                    apiSecretKey = new SchemeAPISecretKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new UpdateBankAccountPathParams() {{
                    bankAccountId = "corrupti";
                }};
                headers = new UpdateBankAccountHeaders() {{
                    xApiKey = "provident";
                }};
                request = new UpdateBankAccountUpdateRequestBodyForBankAccount() {{
                    accountName = "distinctio";
                    accountStatus = "inactive";
                    defaultAccount = "no";
                    referenceVersion = 1;
                }};
            }};            

            UpdateBankAccountResponse res = sdk.bankAccounts.updateBankAccount(req);

            if (res.updateBankAccount201ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->