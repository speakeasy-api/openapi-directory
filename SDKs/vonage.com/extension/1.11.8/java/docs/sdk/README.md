# SDK

## Overview

The Vonage Business Cloud Extension API enables you to retrieve information about extensions.

Your application must subscribe to the Provisioning API suite to use this API.


### Available Operations

* [extensionCtrlGetAccountExtensionByID](#extensionctrlgetaccountextensionbyid) - Get extension data by account ID and extension number
* [extensionCtrlGetAccountExtensions](#extensionctrlgetaccountextensions) - Get account extensions data by account ID

## extensionCtrlGetAccountExtensionByID

Get extension data by account ID and extension number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDRequest;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDResponse;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionByIDSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExtensionCtrlGetAccountExtensionByIDRequest req = new ExtensionCtrlGetAccountExtensionByIDRequest("quibusdam", 6027.63);            

            ExtensionCtrlGetAccountExtensionByIDResponse res = sdk.sdk.extensionCtrlGetAccountExtensionByID(req, new ExtensionCtrlGetAccountExtensionByIDSecurity("nulla") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.endUserRouteHalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## extensionCtrlGetAccountExtensions

Get account extensions data by account ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionsRequest;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionsResponse;
import org.openapis.openapi.models.operations.ExtensionCtrlGetAccountExtensionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExtensionCtrlGetAccountExtensionsRequest req = new ExtensionCtrlGetAccountExtensionsRequest("corrupti") {{
                email = "Henry.Mueller@hotmail.com";
                locationId = 4375.87;
                loginName = "magnam";
                page = 8917.73;
                pageSize = 567.13;
                phoneNumber = "delectus";
            }};            

            ExtensionCtrlGetAccountExtensionsResponse res = sdk.sdk.extensionCtrlGetAccountExtensions(req, new ExtensionCtrlGetAccountExtensionsSecurity("tempora") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.endUserRouteHalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
