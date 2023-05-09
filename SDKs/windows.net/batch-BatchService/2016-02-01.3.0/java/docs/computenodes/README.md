# computeNodes

### Available Operations

* [computeNodeAddUser](#computenodeadduser) - Adds a user account to the specified compute node.
* [computeNodeDeleteUser](#computenodedeleteuser) - Deletes a user account from the specified compute node.
* [computeNodeDisableScheduling](#computenodedisablescheduling) - Disable task scheduling of the specified compute node.
* [computeNodeEnableScheduling](#computenodeenablescheduling) - Enable task scheduling of the specified compute node.
* [computeNodeGet](#computenodeget) - Gets information about the specified compute node.
* [computeNodeGetRemoteDesktop](#computenodegetremotedesktop) - Gets the Remote Desktop Protocol file for the specified compute node.
* [computeNodeGetRemoteLoginSettings](#computenodegetremoteloginsettings) - Gets the settings required for remote login to a compute node.
* [computeNodeList](#computenodelist) - Lists the compute nodes in the specified pool.
* [computeNodeReboot](#computenodereboot) - Restarts the specified compute node.
* [computeNodeReimage](#computenodereimage) - Reinstalls the operating system on the specified compute node.
* [computeNodeUpdateUser](#computenodeupdateuser) - Updates the password or expiration time of a user account on the specified compute node.
* [poolRemoveNodes](#poolremovenodes) - Removes compute nodes from the specified pool.

## computeNodeAddUser

Adds a user account to the specified compute node.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeAddUserRequest;
import org.openapis.openapi.models.operations.ComputeNodeAddUserResponse;
import org.openapis.openapi.models.shared.ComputeNodeUser;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeAddUserRequest req = new ComputeNodeAddUserRequest(                new ComputeNodeUser("beatae") {{
                                expiryTime = OffsetDateTime.parse("2022-07-12T03:15:36.542Z");
                                isAdmin = false;
                                password = "modi";
                                sshPublicKey = "qui";
                            }};, "impedit", "cum", "esse") {{
                clientRequestId = "ipsum";
                ocpDate = "excepturi";
                returnClientRequestId = false;
                timeout = 135218;
            }};            

            ComputeNodeAddUserResponse res = sdk.computeNodes.computeNodeAddUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeDeleteUser

Deletes a user account from the specified compute node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeDeleteUserRequest;
import org.openapis.openapi.models.operations.ComputeNodeDeleteUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeDeleteUserRequest req = new ComputeNodeDeleteUserRequest("perferendis", "ad", "natus", "sed") {{
                clientRequestId = "iste";
                ocpDate = "dolor";
                returnClientRequestId = false;
                timeout = 616934;
            }};            

            ComputeNodeDeleteUserResponse res = sdk.computeNodes.computeNodeDeleteUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeDisableScheduling

Disable task scheduling of the specified compute node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeDisableSchedulingRequest;
import org.openapis.openapi.models.operations.ComputeNodeDisableSchedulingResponse;
import org.openapis.openapi.models.shared.NodeDisableSchedulingParameter;
import org.openapis.openapi.models.shared.NodeDisableSchedulingParameterNodeDisableSchedulingOptionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeDisableSchedulingRequest req = new ComputeNodeDisableSchedulingRequest("laboriosam", "hic", "saepe") {{
                nodeDisableSchedulingParameter = new NodeDisableSchedulingParameter() {{
                    nodeDisableSchedulingOption = NodeDisableSchedulingParameterNodeDisableSchedulingOptionEnum.TASKCOMPLETION;
                }};;
                clientRequestId = "in";
                ocpDate = "corporis";
                returnClientRequestId = false;
                timeout = 613064;
            }};            

            ComputeNodeDisableSchedulingResponse res = sdk.computeNodes.computeNodeDisableScheduling(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeEnableScheduling

Enable task scheduling of the specified compute node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeEnableSchedulingRequest;
import org.openapis.openapi.models.operations.ComputeNodeEnableSchedulingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeEnableSchedulingRequest req = new ComputeNodeEnableSchedulingRequest("iure", "saepe", "quidem") {{
                clientRequestId = "architecto";
                ocpDate = "ipsa";
                returnClientRequestId = false;
                timeout = 969810;
            }};            

            ComputeNodeEnableSchedulingResponse res = sdk.computeNodes.computeNodeEnableScheduling(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeGet

Gets information about the specified compute node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGetRequest;
import org.openapis.openapi.models.operations.ComputeNodeGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGetRequest req = new ComputeNodeGetRequest("est", "mollitia", "laborum") {{
                dollarSelect = "dolores";
                clientRequestId = "dolorem";
                ocpDate = "corporis";
                returnClientRequestId = false;
                timeout = 128926;
            }};            

            ComputeNodeGetResponse res = sdk.computeNodes.computeNodeGet(req);

            if (res.computeNode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeGetRemoteDesktop

Gets the Remote Desktop Protocol file for the specified compute node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGetRemoteDesktopRequest;
import org.openapis.openapi.models.operations.ComputeNodeGetRemoteDesktopResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGetRemoteDesktopRequest req = new ComputeNodeGetRemoteDesktopRequest("nobis", "enim", "omnis") {{
                clientRequestId = "nemo";
                ocpDate = "minima";
                returnClientRequestId = false;
                timeout = 570197;
            }};            

            ComputeNodeGetRemoteDesktopResponse res = sdk.computeNodes.computeNodeGetRemoteDesktop(req);

            if (res.computeNodeGetRemoteDesktop200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeGetRemoteLoginSettings

Gets the settings required for remote login to a compute node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeGetRemoteLoginSettingsRequest;
import org.openapis.openapi.models.operations.ComputeNodeGetRemoteLoginSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeGetRemoteLoginSettingsRequest req = new ComputeNodeGetRemoteLoginSettingsRequest("accusantium", "iure", "culpa") {{
                clientRequestId = "doloribus";
                ocpDate = "sapiente";
                returnClientRequestId = false;
                timeout = 102044;
            }};            

            ComputeNodeGetRemoteLoginSettingsResponse res = sdk.computeNodes.computeNodeGetRemoteLoginSettings(req);

            if (res.computeNodeGetRemoteLoginSettingsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeList

Lists the compute nodes in the specified pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeListRequest;
import org.openapis.openapi.models.operations.ComputeNodeListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeListRequest req = new ComputeNodeListRequest("mollitia", "dolorem") {{
                dollarFilter = "culpa";
                dollarSelect = "consequuntur";
                clientRequestId = "repellat";
                maxresults = 653108;
                ocpDate = "occaecati";
                returnClientRequestId = false;
                timeout = 253291;
            }};            

            ComputeNodeListResponse res = sdk.computeNodes.computeNodeList(req);

            if (res.computeNodeListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeReboot

Restarts the specified compute node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeRebootRequest;
import org.openapis.openapi.models.operations.ComputeNodeRebootResponse;
import org.openapis.openapi.models.shared.NodeRebootParameter;
import org.openapis.openapi.models.shared.NodeRebootParameterNodeRebootOptionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeRebootRequest req = new ComputeNodeRebootRequest("commodi", "quam", "molestiae") {{
                nodeRebootParameter = new NodeRebootParameter() {{
                    nodeRebootOption = NodeRebootParameterNodeRebootOptionEnum.REQUEUE;
                }};;
                clientRequestId = "error";
                ocpDate = "quia";
                returnClientRequestId = false;
                timeout = 338007;
            }};            

            ComputeNodeRebootResponse res = sdk.computeNodes.computeNodeReboot(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeReimage

Reinstalls the operating system on the specified compute node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeReimageRequest;
import org.openapis.openapi.models.operations.ComputeNodeReimageResponse;
import org.openapis.openapi.models.shared.NodeReimageParameter;
import org.openapis.openapi.models.shared.NodeReimageParameterNodeReimageOptionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeReimageRequest req = new ComputeNodeReimageRequest("vitae", "laborum", "animi") {{
                nodeReimageParameter = new NodeReimageParameter() {{
                    nodeReimageOption = NodeReimageParameterNodeReimageOptionEnum.TERMINATE;
                }};;
                clientRequestId = "odit";
                ocpDate = "quo";
                returnClientRequestId = false;
                timeout = 196582;
            }};            

            ComputeNodeReimageResponse res = sdk.computeNodes.computeNodeReimage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNodeUpdateUser

Updates the password or expiration time of a user account on the specified compute node.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNodeUpdateUserRequest;
import org.openapis.openapi.models.operations.ComputeNodeUpdateUserResponse;
import org.openapis.openapi.models.shared.NodeUpdateUserParameter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNodeUpdateUserRequest req = new ComputeNodeUpdateUserRequest(                new NodeUpdateUserParameter() {{
                                expiryTime = OffsetDateTime.parse("2021-11-23T05:54:08.890Z");
                                password = "id";
                                sshPublicKey = "possimus";
                            }};, "aut", "quasi", "error", "temporibus") {{
                clientRequestId = "laborum";
                ocpDate = "quasi";
                returnClientRequestId = false;
                timeout = 971945;
            }};            

            ComputeNodeUpdateUserResponse res = sdk.computeNodes.computeNodeUpdateUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## poolRemoveNodes

Removes compute nodes from the specified pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PoolRemoveNodesRequest;
import org.openapis.openapi.models.operations.PoolRemoveNodesResponse;
import org.openapis.openapi.models.shared.NodeRemoveParameter;
import org.openapis.openapi.models.shared.NodeRemoveParameterNodeDeallocationOptionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PoolRemoveNodesRequest req = new PoolRemoveNodesRequest(                new NodeRemoveParameter(                new String[]{{
                                                add("vero"),
                                                add("nihil"),
                                                add("praesentium"),
                                                add("voluptatibus"),
                                            }}) {{
                                nodeDeallocationOption = NodeRemoveParameterNodeDeallocationOptionEnum.REQUEUE;
                                resizeTimeout = "omnis";
                            }};, "voluptate", "cum") {{
                ifMatch = "perferendis";
                ifModifiedSince = "doloremque";
                ifNoneMatch = "reprehenderit";
                ifUnmodifiedSince = "ut";
                clientRequestId = "maiores";
                ocpDate = "dicta";
                returnClientRequestId = false;
                timeout = 359444;
            }};            

            PoolRemoveNodesResponse res = sdk.computeNodes.poolRemoveNodes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
