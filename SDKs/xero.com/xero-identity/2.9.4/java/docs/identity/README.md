# identity

### Available Operations

* [deleteConnection](#deleteconnection) - Deletes a connection for this user (i.e. disconnect a tenant)
* [getConnections](#getconnections) - Retrieves the connections for this user

## deleteConnection

Override the base server url that include version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectionRequest;
import org.openapis.openapi.models.operations.DeleteConnectionResponse;
import org.openapis.openapi.models.operations.DeleteConnectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConnectionRequest req = new DeleteConnectionRequest("05dfc2dd-f7cc-478c-a1ba-928fc816742c");            

            DeleteConnectionResponse res = sdk.identity.deleteConnection(req, new DeleteConnectionSecurity("cum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnections

Override the base server url that include version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectionsRequest;
import org.openapis.openapi.models.operations.GetConnectionsResponse;
import org.openapis.openapi.models.operations.GetConnectionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConnectionsRequest req = new GetConnectionsRequest() {{
                authEventId = "73920592-9396-4fea-b596-eb10faaa2352";
            }};            

            GetConnectionsResponse res = sdk.identity.getConnections(req, new GetConnectionsSecurity("nobis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.connections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
