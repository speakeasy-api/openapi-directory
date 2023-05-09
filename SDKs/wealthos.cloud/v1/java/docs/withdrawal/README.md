# withdrawal

## Overview

The Withdrawal endpoint allows an investor to withdraw money from one of his/her pots.

### Available Operations

* [createWithdrawal](#createwithdrawal) - Create Withdrawal

## createWithdrawal

This endpoint supports the creation of a single withdrawal from an investor's pot. A sucessful withdrawal creation will result in the creation of a withdrawal transaction and updates to holdings. The system will return the `transaction_id`, `transaction_value`, `pot_id`, `sub_transaction_type` and `transaction_status` of the withdrawal transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWithdrawalRequest;
import org.openapis.openapi.models.operations.CreateWithdrawalResponse;
import org.openapis.openapi.models.operations.CreateWithdrawalRootTypeForWithdrawal;
import org.openapis.openapi.models.operations.CreateWithdrawalRootTypeForWithdrawalSubTransactionTypeEnum;
import org.openapis.openapi.models.operations.CreateWithdrawalSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWithdrawalRequest req = new CreateWithdrawalRequest(                new CreateWithdrawalRootTypeForWithdrawal("ba-example-bank-account", "USD", "pt-example-house-pot", "8086a184-0394-4c26-871f-93f5f0642dac", CreateWithdrawalRootTypeForWithdrawalSubTransactionTypeEnum.WITHDRAWAL, "123.45");, "dignissimos");            

            CreateWithdrawalResponse res = sdk.withdrawal.createWithdrawal(req, new CreateWithdrawalSecurity("officia") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.rootTypeForWithdrawalCreationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
