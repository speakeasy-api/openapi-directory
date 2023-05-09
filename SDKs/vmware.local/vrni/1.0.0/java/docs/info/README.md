# info

## Overview

Info APIs

### Available Operations

* [getVersion](#getversion) - Show version info

## getVersion

Show version info

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVersionResponse;
import org.openapis.openapi.models.operations.GetVersionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVersionResponse res = sdk.info.getVersion(new GetVersionSecurity("quasi") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.versionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
