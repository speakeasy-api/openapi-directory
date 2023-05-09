# scheduledTransactions

## Overview

The scheduled transactions for a budget

### Available Operations

* [getScheduledTransactionById](#getscheduledtransactionbyid) - Single scheduled transaction
* [getScheduledTransactions](#getscheduledtransactions) - List scheduled transactions

## getScheduledTransactionById

Returns a single scheduled transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScheduledTransactionByIdRequest;
import org.openapis.openapi.models.operations.GetScheduledTransactionByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetScheduledTransactionByIdRequest req = new GetScheduledTransactionByIdRequest("id", "quis");            

            GetScheduledTransactionByIdResponse res = sdk.scheduledTransactions.getScheduledTransactionById(req);

            if (res.scheduledTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScheduledTransactions

Returns all scheduled transactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScheduledTransactionsRequest;
import org.openapis.openapi.models.operations.GetScheduledTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetScheduledTransactionsRequest req = new GetScheduledTransactionsRequest("error") {{
                lastKnowledgeOfServer = 76486L;
            }};            

            GetScheduledTransactionsResponse res = sdk.scheduledTransactions.getScheduledTransactions(req);

            if (res.scheduledTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
