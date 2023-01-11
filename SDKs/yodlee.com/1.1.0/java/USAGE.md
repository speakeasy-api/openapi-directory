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

            CreateManualAccountRequest req = new CreateManualAccountRequest() {{
                request = new CreateAccountRequest() {{
                    account = new CreateAccountInfo() {{
                        accountName = "sit";
                        accountNumber = "voluptas";
                        accountType = "culpa";
                        address = new AccountAddress() {{
                            address1 = "expedita";
                            address2 = "consequuntur";
                            address3 = "dolor";
                            city = "expedita";
                            country = "voluptas";
                            sourceType = "fugit";
                            state = "et";
                            street = "nihil";
                            type = "UNKNOWN";
                            zip = "dicta";
                        }};
                        amountDue = new Money() {{
                            amount = 48.099998;
                            currency = "AUD";
                        }};
                        balance = new Money() {{
                            amount = 11.100000;
                            currency = "CHF";
                        }};
                        dueDate = "voluptate";
                        frequency = "FIRST_DAY_MONTHLY";
                        homeValue = new Money() {{
                            amount = 68.099998;
                            currency = "HKD";
                        }};
                        includeInNetWorth = "illum";
                        memo = "debitis";
                        nickname = "vel";
                        valuationType = "SYSTEM";
                    }};
                }};
            }};

            CreateManualAccountResponse res = sdk.accounts.createManualAccount(req);

            if (res.createdAccountResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->