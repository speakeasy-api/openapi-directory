<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.UpdateBankAccountSecurity;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccount;
import org.openapis.openapi.models.operations.UpdateBankAccountRequest;
import org.openapis.openapi.models.operations.UpdateBankAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBankAccountRequest req = new UpdateBankAccountRequest() {{
                requestBody = new UpdateBankAccountUpdateRequestBodyForBankAccount() {{
                    accountName = "corrupti";
                    accountStatus = "inactive";
                    defaultAccount = "no";
                    referenceVersion = 1;
                }};
                bankAccountId = "quibusdam";
                xApiKey = "unde";
            }}            

            UpdateBankAccountResponse res = sdk.bankAccounts.updateBankAccount(req, new UpdateBankAccountSecurity() {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateBankAccount201ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->