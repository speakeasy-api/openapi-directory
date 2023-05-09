# infrastructure

## Overview

Infra APIs

### Available Operations

* [getNode](#getnode) - Show node details
* [listNodes](#listnodes) - List nodes

## getNode

Get details of infrastructure nodes. Only admin users can get this information. The proxy id is
required for adding a data source for selecting appropriate proxy node to add the data source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNodeRequest;
import org.openapis.openapi.models.operations.GetNodeResponse;
import org.openapis.openapi.models.operations.GetNodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNodeRequest req = new GetNodeRequest("ex");            

            GetNodeResponse res = sdk.infrastructure.getNode(req, new GetNodeSecurity("nulla") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.node != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNodes

Get list of infrastructure nodes. Only admin users can retrieve this information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNodesResponse;
import org.openapis.openapi.models.operations.ListNodesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListNodesResponse res = sdk.infrastructure.listNodes(new ListNodesSecurity("excepturi") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.nodeListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
