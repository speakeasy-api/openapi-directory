<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBankAccountRequest;
import org.openapis.openapi.models.operations.UpdateBankAccountResponse;
import org.openapis.openapi.models.operations.UpdateBankAccountSecurity;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccount;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBankAccountRequest req = new UpdateBankAccountRequest(                new UpdateBankAccountUpdateRequestBodyForBankAccount(1L) {{
                                accountName = "corrupti";
                                accountStatus = UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum.INACTIVE;
                                defaultAccount = UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum.NO;
                            }};, "quibusdam", "unde");            

            UpdateBankAccountResponse res = sdk.bankAccounts.updateBankAccount(req, new UpdateBankAccountSecurity("nulla") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateBankAccount201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->