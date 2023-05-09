# testMethods

## Overview

Test methods are used for easier testing of connectivity, keys and tokens. Since they are not tied to a speific functionality you can use them freely


### Available Operations

* [getBEGreeting](#getbegreeting) - Wealth Manager Greeting for BE

## getBEGreeting

Wealth Manager Greeting for BE

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBEGreetingResponse;
import org.openapis.openapi.models.operations.GetBEGreetingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBEGreetingResponse res = sdk.testMethods.getBEGreeting(new GetBEGreetingSecurity("ipsa") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getBEGreeting200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
