# computeNodes

### Available Operations

* [computeNodeAddUser](#computenodeadduser) - Adds a user account to the specified compute node.
* [computeNodeDeleteUser](#computenodedeleteuser) - Deletes a user account from the specified compute node.
* [computeNodeDisableScheduling](#computenodedisablescheduling) - Disable task scheduling of the specified compute node.
* [computeNodeEnableScheduling](#computenodeenablescheduling) - Enable task scheduling of the specified compute node.
* [computeNodeGet](#computenodeget) - Gets information about the specified compute node.
* [computeNodeGetRemoteDesktop](#computenodegetremotedesktop) - Gets the Remote Desktop Protocol file for the specified compute node.
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

            ComputeNodeAddUserRequest req = new ComputeNodeAddUserRequest(                new ComputeNodeUser("officia", "occaecati") {{
                                expiryTime = OffsetDateTime.parse("2022-06-18T20:36:37.412Z");
                                isAdmin = false;
                            }};, "hic", "optio", "totam") {{
                clientRequestId = "beatae";
                ocpDate = "commodi";
                returnClientRequestId = false;
                timeout = 473600;
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

            ComputeNodeDeleteUserRequest req = new ComputeNodeDeleteUserRequest("modi", "qui", "impedit", "cum") {{
                clientRequestId = "esse";
                ocpDate = "ipsum";
                returnClientRequestId = false;
                timeout = 568434;
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

            ComputeNodeDisableSchedulingRequest req = new ComputeNodeDisableSchedulingRequest("aspernatur", "perferendis", "ad") {{
                nodeDisableSchedulingParameter = new NodeDisableSchedulingParameter() {{
                    nodeDisableSchedulingOption = NodeDisableSchedulingParameterNodeDisableSchedulingOptionEnum.TERMINATE;
                }};;
                clientRequestId = "sed";
                ocpDate = "iste";
                returnClientRequestId = false;
                timeout = 222321;
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

            ComputeNodeEnableSchedulingRequest req = new ComputeNodeEnableSchedulingRequest("natus", "laboriosam", "hic") {{
                clientRequestId = "saepe";
                ocpDate = "fuga";
                returnClientRequestId = false;
                timeout = 449950;
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

            ComputeNodeGetRequest req = new ComputeNodeGetRequest("corporis", "iste", "iure") {{
                dollarSelect = "saepe";
                clientRequestId = "quidem";
                ocpDate = "architecto";
                returnClientRequestId = false;
                timeout = 60225;
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

            ComputeNodeGetRemoteDesktopRequest req = new ComputeNodeGetRemoteDesktopRequest("reiciendis", "est", "mollitia") {{
                clientRequestId = "laborum";
                ocpDate = "dolores";
                returnClientRequestId = false;
                timeout = 210382;
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

            ComputeNodeListRequest req = new ComputeNodeListRequest("corporis", "explicabo") {{
                dollarFilter = "nobis";
                dollarSelect = "enim";
                clientRequestId = "omnis";
                maxresults = 363711;
                ocpDate = "minima";
                returnClientRequestId = false;
                timeout = 570197;
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

            ComputeNodeRebootRequest req = new ComputeNodeRebootRequest("accusantium", "iure", "culpa") {{
                nodeRebootParameter = new NodeRebootParameter() {{
                    nodeRebootOption = NodeRebootParameterNodeRebootOptionEnum.RETAINEDDATA;
                }};;
                clientRequestId = "sapiente";
                ocpDate = "architecto";
                returnClientRequestId = false;
                timeout = 652790;
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

            ComputeNodeReimageRequest req = new ComputeNodeReimageRequest("dolorem", "culpa", "consequuntur") {{
                nodeReimageParameter = new NodeReimageParameter() {{
                    nodeReimageOption = NodeReimageParameterNodeReimageOptionEnum.RETAINEDDATA;
                }};;
                clientRequestId = "mollitia";
                ocpDate = "occaecati";
                returnClientRequestId = false;
                timeout = 253291;
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

            ComputeNodeUpdateUserRequest req = new ComputeNodeUpdateUserRequest(                new NodeUpdateUserParameter("commodi") {{
                                expiryTime = OffsetDateTime.parse("2022-07-11T17:38:58.953Z");
                            }};, "velit", "error", "quia", "quis") {{
                clientRequestId = "vitae";
                ocpDate = "laborum";
                returnClientRequestId = false;
                timeout = 656330;
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
                                                add("odit"),
                                                add("quo"),
                                            }}) {{
                                nodeDeallocationOption = NodeRemoveParameterNodeDeallocationOptionEnum.REQUEUE;
                                resizeTimeout = "tenetur";
                            }};, "ipsam", "id") {{
                ifMatch = "possimus";
                ifModifiedSince = "aut";
                ifNoneMatch = "quasi";
                ifUnmodifiedSince = "error";
                clientRequestId = "temporibus";
                ocpDate = "laborum";
                returnClientRequestId = false;
                timeout = 96098;
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
