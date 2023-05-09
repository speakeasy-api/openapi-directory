# system

## Overview

Global operations

### Available Operations

* [postAdminReset](#postadminreset) - Reset mappings and request journal
* [postAdminSettings](#postadminsettings) - Update global settings
* [postAdminShutdown](#postadminshutdown) - Shutdown the WireMock server

## postAdminReset

Reset mappings to the default state and reset the request journal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminResetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminResetResponse res = sdk.system.postAdminReset();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminSettings

Update global settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminSettingsRequestBodyLogNormal;
import org.openapis.openapi.models.operations.PostAdminSettingsRequestBodyLogNormalTypeEnum;
import org.openapis.openapi.models.operations.PostAdminSettingsRequestBodyUniform;
import org.openapis.openapi.models.operations.PostAdminSettingsRequestBodyUniformTypeEnum;
import org.openapis.openapi.models.operations.PostAdminSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new PostAdminSettingsRequestBodyUniform() {{
                fixedDelay = 4420.15;
                lower = 695626L;
                type = PostAdminSettingsRequestBodyUniformTypeEnum.UNIFORM;
                upper = 852635L;
            }}            

            PostAdminSettingsResponse res = sdk.system.postAdminSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminShutdown

Shutdown the WireMock server

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminShutdownResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminShutdownResponse res = sdk.system.postAdminShutdown();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
