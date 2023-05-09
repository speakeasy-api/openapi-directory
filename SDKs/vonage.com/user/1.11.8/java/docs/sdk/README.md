# SDK

## Overview

The Vonage Business Cloud User API enables you to retrieve information about users.

Your application must subscribe to the Provisioning API suite to use this API.


### Available Operations

* [userCtrlGetUserByID](#userctrlgetuserbyid) - Get user data by account ID and user ID
* [userCtrlGetUsers](#userctrlgetusers) - Get account users data by account ID

## userCtrlGetUserByID

Get user data by account ID and user ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCtrlGetUserByIDRequest;
import org.openapis.openapi.models.operations.UserCtrlGetUserByIDResponse;
import org.openapis.openapi.models.operations.UserCtrlGetUserByIDSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserCtrlGetUserByIDRequest req = new UserCtrlGetUserByIDRequest("quibusdam", 6027.63);            

            UserCtrlGetUserByIDResponse res = sdk.sdk.userCtrlGetUserByID(req, new UserCtrlGetUserByIDSecurity("nulla") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.userHalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userCtrlGetUsers

Get account users data by account ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserCtrlGetUsersRequest;
import org.openapis.openapi.models.operations.UserCtrlGetUsersResponse;
import org.openapis.openapi.models.operations.UserCtrlGetUsersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserCtrlGetUsersRequest req = new UserCtrlGetUsersRequest("corrupti") {{
                email = "Henry.Mueller@hotmail.com";
                firstName = "Hunter";
                lastName = "Gulgowski";
                loginName = "debitis";
                page = 567.13;
                pageSize = 9636.63;
            }};            

            UserCtrlGetUsersResponse res = sdk.sdk.userCtrlGetUsers(req, new UserCtrlGetUsersSecurity("tempora") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.usersHalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
