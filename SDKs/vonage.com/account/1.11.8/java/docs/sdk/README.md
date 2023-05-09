# SDK

## Overview

The Vonage Business Cloud Account API enables you to retrieve information about accounts.

Your application must subscribe to the Provisioning API suite to use this API.


### Available Operations

* [accountCtrlGetAccountServicesByAccountID](#accountctrlgetaccountservicesbyaccountid) - Get account data by ID
* [accountCtrlGetLocationByID](#accountctrlgetlocationbyid) - Get location data by account ID and location ID
* [accountCtrlGetLocationsByAccountID](#accountctrlgetlocationsbyaccountid) - Get account locations data by account ID

## accountCtrlGetAccountServicesByAccountID

Get account data by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDRequest;
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDResponse;
import org.openapis.openapi.models.operations.AccountCtrlGetAccountServicesByAccountIDSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCtrlGetAccountServicesByAccountIDRequest req = new AccountCtrlGetAccountServicesByAccountIDRequest(7151.9);            

            AccountCtrlGetAccountServicesByAccountIDResponse res = sdk.sdk.accountCtrlGetAccountServicesByAccountID(req, new AccountCtrlGetAccountServicesByAccountIDSecurity("quibusdam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accountHalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountCtrlGetLocationByID

Get location data by account ID and location ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCtrlGetLocationByIDRequest;
import org.openapis.openapi.models.operations.AccountCtrlGetLocationByIDResponse;
import org.openapis.openapi.models.operations.AccountCtrlGetLocationByIDSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCtrlGetLocationByIDRequest req = new AccountCtrlGetLocationByIDRequest(6027.63, 8579.46);            

            AccountCtrlGetLocationByIDResponse res = sdk.sdk.accountCtrlGetLocationByID(req, new AccountCtrlGetLocationByIDSecurity("corrupti") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.locationHalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountCtrlGetLocationsByAccountID

Get account locations data by account ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCtrlGetLocationsByAccountIDRequest;
import org.openapis.openapi.models.operations.AccountCtrlGetLocationsByAccountIDResponse;
import org.openapis.openapi.models.operations.AccountCtrlGetLocationsByAccountIDSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCtrlGetLocationsByAccountIDRequest req = new AccountCtrlGetLocationsByAccountIDRequest(8472.52);            

            AccountCtrlGetLocationsByAccountIDResponse res = sdk.sdk.accountCtrlGetLocationsByAccountID(req, new AccountCtrlGetLocationsByAccountIDSecurity("vel") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.locationsHalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
