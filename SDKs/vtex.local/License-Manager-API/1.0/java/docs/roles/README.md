# roles

### Available Operations

* [getListRoles](#getlistroles) - Get List of Roles
* [getRolesbyUser](#getrolesbyuser) - Get Roles by User/appKey
* [putRolesinUser](#putrolesinuser) - Put Roles in User/appKey
* [removeRolefromUser](#removerolefromuser) - Remove Role from User/appKey

## getListRoles

Returns a list of available roles. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListRolesRequest;
import org.openapis.openapi.models.operations.GetListRolesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "magnam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetListRolesRequest req = new GetListRolesRequest("debitis") {{
                numItems = 56713L;
                pageNumber = 963663L;
                sort = "tempora";
                sortType = "suscipit";
            }};            

            GetListRolesResponse res = sdk.roles.getListRoles(req);

            if (res.listRolesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRolesbyUser

Gets roles of a particular user or application key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRolesbyUserRequest;
import org.openapis.openapi.models.operations.GetRolesbyUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae", "minus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRolesbyUserRequest req = new GetRolesbyUserRequest("application/json", "placeat");            

            GetRolesbyUserResponse res = sdk.roles.getRolesbyUser(req);

            if (res.getRolesbyUser200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRolesinUser

Allows you to add roles to a particular user or application key by specifying the list of roles' IDs on the request's body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRolesinUserRequest;
import org.openapis.openapi.models.operations.PutRolesinUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum", "iusto") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRolesinUserRequest req = new PutRolesinUserRequest(                new Integer[]{{
                                add(392785),
                                add(925597),
                                add(836079),
                            }}, "ab");            

            PutRolesinUserResponse res = sdk.roles.putRolesinUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeRolefromUser

Allows you to remove a role from a specific user or application key. This method only allows the removal of one role per request. The role's ID must be specified on the request path, not on the request body.

> Note that a successful response returns a `204` response with an empty body. A deletion on a role or user that does not exist will also return a `204`. Thus, this method should not be used to verify the existence of a specific user or role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveRolefromUserRequest;
import org.openapis.openapi.models.operations.RemoveRolefromUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis", "veritatis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveRolefromUserRequest req = new RemoveRolefromUserRequest("application/json", "deserunt", "perferendis");            

            RemoveRolefromUserResponse res = sdk.roles.removeRolefromUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
