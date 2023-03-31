<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAccountPathParams;
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
                    bearer = new SchemeBearer() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateAccountRequest req = new CreateAccountRequest() {{
                pathParams = new CreateAccountPathParams() {{
                    budgetId = "corrupti";
                }};
                request = new PostAccountWrapper() {{
                    account = new SaveAccount() {{
                        balance = 592845;
                        name = "distinctio";
                        type = "personalLoan";
                    }};
                }};
            }};            

            CreateAccountResponse res = sdk.accounts.createAccount(req);

            if (res.accountResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->