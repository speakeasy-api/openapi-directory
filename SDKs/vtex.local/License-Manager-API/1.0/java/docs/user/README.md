# user

### Available Operations

* [createUser](#createuser) - Create User
* [getListUsers](#getlistusers) - Get List of Users
* [getUser](#getuser) - Get User

## createUser

Allows you to create a user by providing an email (mandatory) and name (optional). The email must be in a valid format. The success response will contain the generated `userId` for that user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserResponse;
import org.openapis.openapi.models.shared.CreateUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "quo") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateUserRequest req = new CreateUserRequest("odit", "at");            

            CreateUserResponse res = sdk.user.createUser(req);

            if (res.createUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListUsers

Returns a list of registered users. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListUsersRequest;
import org.openapis.openapi.models.operations.GetListUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "maiores") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetListUsersRequest req = new GetListUsersRequest("molestiae") {{
                numItems = 799159L;
                pageNumber = 800911L;
                sort = "esse";
                sortType = "totam";
            }};            

            GetListUsersResponse res = sdk.user.getListUsers(req);

            if (res.listUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUser

Allows you to get a user from the database, using the `userId` as the identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequest;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro", "dolorum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserRequest req = new GetUserRequest("application/json", "dicta");            

            GetUserResponse res = sdk.user.getUser(req);

            if (res.getUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
