# files

### Available Operations

* [fileDeleteFromComputeNode](#filedeletefromcomputenode) - Deletes the specified task file from the compute node.
* [fileDeleteFromTask](#filedeletefromtask) - Deletes the specified task file from the compute node where the task ran.
* [fileGetFromComputeNode](#filegetfromcomputenode) - Returns the content of the specified task file.
* [fileGetFromTask](#filegetfromtask) - Returns the content of the specified task file.
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

            FileDeleteFromComputeNodeRequest req = new FileDeleteFromComputeNodeRequest("dolore", "iusto", "dicta", "harum") {{
                clientRequestId = "enim";
                ocpDate = "accusamus";
                recursive = false;
                returnClientRequestId = false;
                timeout = 414263;
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

            FileDeleteFromTaskRequest req = new FileDeleteFromTaskRequest("repudiandae", "quae", "ipsum", "quidem") {{
                clientRequestId = "molestias";
                ocpDate = "excepturi";
                recursive = false;
                returnClientRequestId = false;
                timeout = 865103;
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

Returns the content of the specified task file.

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

            FileGetFromComputeNodeRequest req = new FileGetFromComputeNodeRequest("modi", "praesentium", "rem", "voluptates") {{
                ifModifiedSince = "quasi";
                ifUnmodifiedSince = "repudiandae";
                clientRequestId = "sint";
                ocpDate = "veritatis";
                ocpRange = "itaque";
                returnClientRequestId = false;
                timeout = 277718;
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

Returns the content of the specified task file.

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

            FileGetFromTaskRequest req = new FileGetFromTaskRequest("enim", "consequatur", "est", "quibusdam") {{
                ifModifiedSince = "explicabo";
                ifUnmodifiedSince = "deserunt";
                clientRequestId = "distinctio";
                ocpDate = "quibusdam";
                ocpRange = "labore";
                returnClientRequestId = false;
                timeout = 264730;
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

            FileGetNodeFilePropertiesFromComputeNodeRequest req = new FileGetNodeFilePropertiesFromComputeNodeRequest("qui", "aliquid", "cupiditate", "quos") {{
                ifModifiedSince = "perferendis";
                ifUnmodifiedSince = "magni";
                clientRequestId = "assumenda";
                ocpDate = "ipsam";
                returnClientRequestId = false;
                timeout = 4695;
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

            FileGetNodeFilePropertiesFromTaskRequest req = new FileGetNodeFilePropertiesFromTaskRequest("fugit", "dolorum", "excepturi", "tempora") {{
                ifModifiedSince = "facilis";
                ifUnmodifiedSince = "tempore";
                clientRequestId = "labore";
                ocpDate = "delectus";
                returnClientRequestId = false;
                timeout = 433288;
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

            FileListFromComputeNodeRequest req = new FileListFromComputeNodeRequest("non", "eligendi", "sint") {{
                dollarFilter = "aliquid";
                clientRequestId = "provident";
                maxresults = 896039;
                ocpDate = "sint";
                recursive = false;
                returnClientRequestId = false;
                timeout = 638921;
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

            FileListFromTaskRequest req = new FileListFromTaskRequest("dolor", "debitis", "a") {{
                dollarFilter = "dolorum";
                clientRequestId = "in";
                maxresults = 449198;
                ocpDate = "illum";
                recursive = false;
                returnClientRequestId = false;
                timeout = 978571;
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
