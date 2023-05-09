# files

### Available Operations

* [fileDeleteFromComputeNode](#filedeletefromcomputenode) - Deletes the specified task file from the compute node.
* [fileDeleteFromTask](#filedeletefromtask) - Deletes the specified task file from the compute node where the task ran.
* [fileGetFromComputeNode](#filegetfromcomputenode) - Gets the content of the specified task file.
* [fileGetFromTask](#filegetfromtask) - Gets the content of the specified task file.
* [fileGetNodeFilePropertiesFromComputeNode](#filegetnodefilepropertiesfromcomputenode) - Gets the properties of the specified compute node file.
* [fileGetNodeFilePropertiesFromTask](#filegetnodefilepropertiesfromtask) - Gets the properties of the specified task file.
* [fileListFromComputeNode](#filelistfromcomputenode) - Lists all of the files in task directories on the specified compute node.
* [fileListFromTask](#filelistfromtask) - Lists the files in a task's directory on its compute node.

## fileDeleteFromComputeNode

Deletes the specified task file from the compute node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileDeleteFromComputeNodeRequest;
import org.openapis.openapi.models.operations.FileDeleteFromComputeNodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileDeleteFromComputeNodeRequest req = new FileDeleteFromComputeNodeRequest("reiciendis", "voluptatibus", "vero", "nihil") {{
                clientRequestId = "praesentium";
                ocpDate = "voluptatibus";
                recursive = false;
                returnClientRequestId = false;
                timeout = 55714;
            }};            

            FileDeleteFromComputeNodeResponse res = sdk.files.fileDeleteFromComputeNode(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileDeleteFromTask

Deletes the specified task file from the compute node where the task ran.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileDeleteFromTaskRequest;
import org.openapis.openapi.models.operations.FileDeleteFromTaskResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileDeleteFromTaskRequest req = new FileDeleteFromTaskRequest("omnis", "voluptate", "cum", "perferendis") {{
                clientRequestId = "doloremque";
                ocpDate = "reprehenderit";
                recursive = false;
                returnClientRequestId = false;
                timeout = 282807;
            }};            

            FileDeleteFromTaskResponse res = sdk.files.fileDeleteFromTask(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileGetFromComputeNode

Gets the content of the specified task file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileGetFromComputeNodeRequest;
import org.openapis.openapi.models.operations.FileGetFromComputeNodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileGetFromComputeNodeRequest req = new FileGetFromComputeNodeRequest("maiores", "dicta", "corporis", "dolore") {{
                ifModifiedSince = "iusto";
                ifUnmodifiedSince = "dicta";
                clientRequestId = "harum";
                ocpDate = "enim";
                ocpRange = "accusamus";
                returnClientRequestId = false;
                timeout = 414263;
            }};            

            FileGetFromComputeNodeResponse res = sdk.files.fileGetFromComputeNode(req);

            if (res.fileGetFromComputeNode200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileGetFromTask

Gets the content of the specified task file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileGetFromTaskRequest;
import org.openapis.openapi.models.operations.FileGetFromTaskResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileGetFromTaskRequest req = new FileGetFromTaskRequest("repudiandae", "quae", "ipsum", "quidem") {{
                ifModifiedSince = "molestias";
                ifUnmodifiedSince = "excepturi";
                clientRequestId = "pariatur";
                ocpDate = "modi";
                ocpRange = "praesentium";
                returnClientRequestId = false;
                timeout = 523248;
            }};            

            FileGetFromTaskResponse res = sdk.files.fileGetFromTask(req);

            if (res.fileGetFromTask200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileGetNodeFilePropertiesFromComputeNode

Gets the properties of the specified compute node file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileGetNodeFilePropertiesFromComputeNodeRequest;
import org.openapis.openapi.models.operations.FileGetNodeFilePropertiesFromComputeNodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileGetNodeFilePropertiesFromComputeNodeRequest req = new FileGetNodeFilePropertiesFromComputeNodeRequest("voluptates", "quasi", "repudiandae", "sint") {{
                ifModifiedSince = "veritatis";
                ifUnmodifiedSince = "itaque";
                clientRequestId = "incidunt";
                ocpDate = "enim";
                returnClientRequestId = false;
                timeout = 9356;
            }};            

            FileGetNodeFilePropertiesFromComputeNodeResponse res = sdk.files.fileGetNodeFilePropertiesFromComputeNode(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileGetNodeFilePropertiesFromTask

Gets the properties of the specified task file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileGetNodeFilePropertiesFromTaskRequest;
import org.openapis.openapi.models.operations.FileGetNodeFilePropertiesFromTaskResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileGetNodeFilePropertiesFromTaskRequest req = new FileGetNodeFilePropertiesFromTaskRequest("est", "quibusdam", "explicabo", "deserunt") {{
                ifModifiedSince = "distinctio";
                ifUnmodifiedSince = "quibusdam";
                clientRequestId = "labore";
                ocpDate = "modi";
                returnClientRequestId = false;
                timeout = 183191;
            }};            

            FileGetNodeFilePropertiesFromTaskResponse res = sdk.files.fileGetNodeFilePropertiesFromTask(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileListFromComputeNode

Lists all of the files in task directories on the specified compute node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileListFromComputeNodeRequest;
import org.openapis.openapi.models.operations.FileListFromComputeNodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileListFromComputeNodeRequest req = new FileListFromComputeNodeRequest("aliquid", "cupiditate", "quos") {{
                dollarFilter = "perferendis";
                clientRequestId = "magni";
                maxresults = 828940;
                ocpDate = "ipsam";
                recursive = false;
                returnClientRequestId = false;
                timeout = 4695;
            }};            

            FileListFromComputeNodeResponse res = sdk.files.fileListFromComputeNode(req);

            if (res.nodeFileListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileListFromTask

Lists the files in a task's directory on its compute node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileListFromTaskRequest;
import org.openapis.openapi.models.operations.FileListFromTaskResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileListFromTaskRequest req = new FileListFromTaskRequest("fugit", "dolorum", "excepturi") {{
                dollarFilter = "tempora";
                clientRequestId = "facilis";
                maxresults = 735194;
                ocpDate = "labore";
                recursive = false;
                returnClientRequestId = false;
                timeout = 962189;
            }};            

            FileListFromTaskResponse res = sdk.files.fileListFromTask(req);

            if (res.nodeFileListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
