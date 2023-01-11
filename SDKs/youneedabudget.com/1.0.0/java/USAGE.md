<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    bearer = new SchemeBearer() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateAccountRequest req = new CreateAccountRequest() {{
                pathParams = new CreateAccountPathParams() {{
                    budgetId = "aut";
                }};
                request = new SaveAccountWrapper() {{
                    account = new SaveAccount() {{
                        balance = 354437709630325889;
                        name = "minima";
                        type = "otherAsset";
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