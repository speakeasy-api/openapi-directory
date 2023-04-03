<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAccountRequest;
import org.openapis.openapi.models.operations.CreateAccountResponse;
import org.openapis.openapi.models.shared.PostAccountWrapper;
import org.openapis.openapi.models.shared.SaveAccount;
import org.openapis.openapi.models.shared.AccountTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccountRequest req = new CreateAccountRequest() {{
                postAccountWrapper = new PostAccountWrapper() {{
                    account = new SaveAccount() {{
                        balance = 548814;
                        name = "provident";
                        type = "studentLoan";
                    }};
                }};
                budgetId = "quibusdam";
            }}            

            CreateAccountResponse res = sdk.accounts.createAccount(req);

            if (res.accountResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->