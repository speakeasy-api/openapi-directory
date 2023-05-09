# indices

## Overview

Create alternative keys for data entities.

### Available Operations

* [deleteindexbyname](#deleteindexbyname) - Delete index by name
* [getindexbyname](#getindexbyname) - Get index by name
* [getindices](#getindices) - Get indices
* [putindices](#putindices) - Put indices

## deleteindexbyname

Delete an index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteindexbynameRequest;
import org.openapis.openapi.models.operations.DeleteindexbynameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa", "consequuntur") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteindexbynameRequest req = new DeleteindexbynameRequest("application/json", "Client", "{{index_name}}");            

            DeleteindexbynameResponse res = sdk.indices.deleteindexbyname(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getindexbyname

Returns an index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetindexbynameRequest;
import org.openapis.openapi.models.operations.GetindexbynameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat", "mollitia") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetindexbynameRequest req = new GetindexbynameRequest("application/json", "Client", "{{index_name}}");            

            GetindexbynameResponse res = sdk.indices.getindexbyname(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getindices

Returns the list of indices by data entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetindicesRequest;
import org.openapis.openapi.models.operations.GetindicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "numquam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetindicesRequest req = new GetindicesRequest("application/json", "Client");            

            GetindicesResponse res = sdk.indices.getindices(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putindices

Create an index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutindicesRequest;
import org.openapis.openapi.models.operations.PutindicesResponse;
import org.openapis.openapi.models.shared.PutindicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "quam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutindicesRequest req = new PutindicesRequest(                new PutindicesRequest("molestiae", false, "velit");, "Client");            

            PutindicesResponse res = sdk.indices.putindices(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
