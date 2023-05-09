# scenarios

## Overview

Scenarios support modelling of stateful behaviour

User documentation
<http://wiremock.org/docs/stateful-behaviour/>
### Available Operations

* [getAdminScenarios](#getadminscenarios) - Get all scenarios
* [postAdminScenariosReset](#postadminscenariosreset) - Reset the state of all scenarios

## getAdminScenarios

Get all scenarios

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdminScenariosResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdminScenariosResponse res = sdk.scenarios.getAdminScenarios();

            if (res.getAdminScenarios200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminScenariosReset

Reset the state of all scenarios

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminScenariosResetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminScenariosResetResponse res = sdk.scenarios.postAdminScenariosReset();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
