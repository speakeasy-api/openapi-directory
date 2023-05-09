# account

## Overview

Information about your account calls quota

### Available Operations

* [account](#account) - Information about your account calls quota

## account

Always returns JSON

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountResponse res = sdk.account.account();

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
