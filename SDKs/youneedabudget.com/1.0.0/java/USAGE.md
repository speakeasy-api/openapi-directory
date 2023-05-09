<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountRequest;
import org.openapis.openapi.models.operations.CreateAccountResponse;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.PostAccountWrapper;
import org.openapis.openapi.models.shared.SaveAccount;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccountRequest req = new CreateAccountRequest(                new PostAccountWrapper(                new SaveAccount(592845L, "distinctio", AccountTypeEnum.PERSONAL_LOAN););, "unde");            

            CreateAccountResponse res = sdk.accounts.createAccount(req);

            if (res.accountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->