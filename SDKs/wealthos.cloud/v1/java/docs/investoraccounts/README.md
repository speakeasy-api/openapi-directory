# investorAccounts

## Overview

An investor account is designed to manage a group of pots attached to a single financial product. A user can maintain multiple accounts for a given financial product if the product regulations support this setup.

### Available Operations

* [getAllinvestorAccounts](#getallinvestoraccounts) - Retrieve all the investor accounts
* [getinvestorAccount](#getinvestoraccount) - Retrieve existing investor account from account id

## getAllinvestorAccounts

Retrieve all the investor accounts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllinvestorAccountsRequest;
import org.openapis.openapi.models.operations.GetAllinvestorAccountsResponse;
import org.openapis.openapi.models.operations.GetAllinvestorAccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllinvestorAccountsRequest req = new GetAllinvestorAccountsRequest("voluptates") {{
                accountId = "quasi";
                financialProductId = "repudiandae";
                investorId = "sint";
                pageNumber = "veritatis";
                pageSize = "itaque";
                status = "incidunt";
            }};            

            GetAllinvestorAccountsResponse res = sdk.investorAccounts.getAllinvestorAccounts(req, new GetAllinvestorAccountsSecurity("enim") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getAllinvestorAccounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getinvestorAccount

Retrieve existing investor account from account id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetinvestorAccountRequest;
import org.openapis.openapi.models.operations.GetinvestorAccountResponse;
import org.openapis.openapi.models.operations.GetinvestorAccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetinvestorAccountRequest req = new GetinvestorAccountRequest("consequatur", "est");            

            GetinvestorAccountResponse res = sdk.investorAccounts.getinvestorAccount(req, new GetinvestorAccountSecurity("quibusdam") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getinvestorAccount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
