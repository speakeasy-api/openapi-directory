# fees

## Overview

<!-- <div class="warning" style='padding:0.1em; background-color:#FEEFB3; color:#9F6000;'>
    <span>
        <p style='margin-top:0.9em;margin-bottom:0.9em;margin-left:1em; text-align:left'>
            <b>ⓘ</b> This feature is currently in BETA mode
        </p>
    </span>
</div>

The Fees endpoints allow a wealth manager to manage fees in terms of creating and charging an external fee or retrieving information on fee configurations setup in the system for recurring fee computations. -->

The Fees endpoint allows a wealth manager to charge an externally calculated or derived fee from an investor's pot.

### Available Operations

* [createFee](#createfee) - Create Fee

## createFee

This endpoint supports the creation of a single fee deduction from an investor's pot. A sucessful fee creation will result in the creation of a fee transaction and updates to holdings. The system will return the `transaction_id` of the fee transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFeeRequest;
import org.openapis.openapi.models.operations.CreateFeeResponse;
import org.openapis.openapi.models.operations.CreateFeeRootTypeForFee;
import org.openapis.openapi.models.operations.CreateFeeRootTypeForFeeSubTransactionTypeEnum;
import org.openapis.openapi.models.operations.CreateFeeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFeeRequest req = new CreateFeeRequest(                new CreateFeeRootTypeForFee("USD", "pt-example-house-pot", "d151a05d-fc2d-4df7-8c78-ca1ba928fc81", CreateFeeRootTypeForFeeSubTransactionTypeEnum.CUSTODY_FEES, "123.45");, "commodi");            

            CreateFeeResponse res = sdk.fees.createFee(req, new CreateFeeSecurity("molestiae") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.rootTypeForFeeCreationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
