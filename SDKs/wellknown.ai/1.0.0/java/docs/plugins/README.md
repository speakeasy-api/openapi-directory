# plugins

### Available Operations

* [getProvider](#getprovider) - List all the Wellknown AI Plugins.

## getProvider

List all the Wellknown AI Plugins. Returns ai-plugin.json objects in an array

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProviderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProviderResponse res = sdk.plugins.getProvider();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
