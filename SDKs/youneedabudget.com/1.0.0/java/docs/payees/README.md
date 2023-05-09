# payees

## Overview

The payees for a budget

### Available Operations

* [getPayeeById](#getpayeebyid) - Single payee
* [getPayees](#getpayees) - List payees

## getPayeeById

Returns a single payee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayeeByIdRequest;
import org.openapis.openapi.models.operations.GetPayeeByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPayeeByIdRequest req = new GetPayeeByIdRequest("in", "adipisci");            

            GetPayeeByIdResponse res = sdk.payees.getPayeeById(req);

            if (res.payeeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayees

Returns all payees

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayeesRequest;
import org.openapis.openapi.models.operations.GetPayeesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPayeesRequest req = new GetPayeesRequest("occaecati") {{
                lastKnowledgeOfServer = 160230L;
            }};            

            GetPayeesResponse res = sdk.payees.getPayees(req);

            if (res.payeesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
