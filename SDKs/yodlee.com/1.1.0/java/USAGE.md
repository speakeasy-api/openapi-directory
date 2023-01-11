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
                        accountName = "itaque";
                        accountNumber = "corrupti";
                        accountType = "voluptatem";
                        address = new AccountAddress() {{
                            address1 = "quasi";
                            address2 = "repellat";
                            address3 = "rem";
                            city = "nisi";
                            country = "nulla";
                            sourceType = "et";
                            state = "autem";
                            street = "est";
                            type = "PAYMENT";
                            zip = "laudantium";
                        }};
                        amountDue = new Money() {{
                            amount = 12.100000;
                            currency = "JPY";
                        }};
                        balance = new Money() {{
                            amount = 57.200001;
                            currency = "CHF";
                        }};
                        dueDate = "dolor";
                        frequency = "DAILY";
                        homeValue = new Money() {{
                            amount = 66.199997;
                            currency = "SGD";
                        }};
                        includeInNetWorth = "dolores";
                        memo = "sunt";
                        nickname = "perferendis";
                        valuationType = "MANUAL";
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