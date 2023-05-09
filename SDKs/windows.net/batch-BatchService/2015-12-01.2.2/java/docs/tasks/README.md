# tasks

### Available Operations

* [taskAdd](#taskadd) - Adds a task to the specified job.
* [taskDelete](#taskdelete) - Deletes a task from the specified job.
* [taskGet](#taskget) - Gets information about the specified task.
* [taskList](#tasklist) - Lists all of the tasks that are associated with the specified job.
* [taskListSubtasks](#tasklistsubtasks) - Lists all of the subtasks that are associated with the specified multi-instance task.
* [taskTerminate](#taskterminate) - Terminates the specified task.
* [taskUpdate](#taskupdate) - Updates the properties of the specified task.

## taskAdd

Adds a task to the specified job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskAddRequest;
import org.openapis.openapi.models.operations.TaskAddResponse;
import org.openapis.openapi.models.shared.AffinityInformation;
import org.openapis.openapi.models.shared.EnvironmentSetting;
import org.openapis.openapi.models.shared.MultiInstanceSettings;
import org.openapis.openapi.models.shared.ResourceFile;
import org.openapis.openapi.models.shared.TaskAddParameter;
import org.openapis.openapi.models.shared.TaskConstraints;
import org.openapis.openapi.models.shared.TaskDependencies;
import org.openapis.openapi.models.shared.TaskIdRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskAddRequest req = new TaskAddRequest(                new TaskAddParameter("rem", "aut") {{
                                affinityInfo = new AffinityInformation() {{
                                    affinityId = "quos";
                                }};;
                                constraints = new TaskConstraints() {{
                                    maxTaskRetryCount = 511222;
                                    maxWallClockTime = "repellendus";
                                    retentionTime = "veritatis";
                                }};;
                                dependsOn = new TaskDependencies() {{
                                    taskIdRanges = new org.openapis.openapi.models.shared.TaskIdRange[]{{
                                        add(new TaskIdRange(965517, 651228) {{
                                            end = 51075;
                                            start = 904827;
                                        }}),
                                    }};
                                    taskIds = new String[]{{
                                        add("officia"),
                                        add("sed"),
                                        add("voluptatem"),
                                        add("alias"),
                                    }};
                                }};;
                                displayName = "eveniet";
                                environmentSettings = new org.openapis.openapi.models.shared.EnvironmentSetting[]{{
                                    add(new EnvironmentSetting() {{
                                        name = "Eva Denesik";
                                        value = "harum";
                                    }}),
                                    add(new EnvironmentSetting() {{
                                        name = "Doris Jacobi";
                                        value = "voluptatibus";
                                    }}),
                                    add(new EnvironmentSetting() {{
                                        name = "Luke Renner";
                                        value = "aliquid";
                                    }}),
                                    add(new EnvironmentSetting() {{
                                        name = "Krista Kuphal";
                                        value = "reiciendis";
                                    }}),
                                }};
                                multiInstanceSettings = new MultiInstanceSettings(997918) {{
                                    commonResourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                        add(new ResourceFile() {{
                                            blobSource = "laborum";
                                            filePath = "natus";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "accusamus";
                                            filePath = "doloremque";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "nisi";
                                            filePath = "rerum";
                                        }}),
                                        add(new ResourceFile() {{
                                            blobSource = "recusandae";
                                            filePath = "voluptates";
                                        }}),
                                    }};
                                    coordinationCommandLine = "non";
                                }};;
                                resourceFiles = new org.openapis.openapi.models.shared.ResourceFile[]{{
                                    add(new ResourceFile() {{
                                        blobSource = "quia";
                                        filePath = "ullam";
                                    }}),
                                    add(new ResourceFile() {{
                                        blobSource = "quisquam";
                                        filePath = "dicta";
                                    }}),
                                    add(new ResourceFile() {{
                                        blobSource = "voluptatibus";
                                        filePath = "eligendi";
                                    }}),
                                }};
                                runElevated = false;
                            }};, "quae", "officiis") {{
                clientRequestId = "architecto";
                ocpDate = "architecto";
                returnClientRequestId = false;
                timeout = 317898;
            }};            

            TaskAddResponse res = sdk.tasks.taskAdd(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskDelete

Deletes a task from the specified job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskDeleteRequest;
import org.openapis.openapi.models.operations.TaskDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskDeleteRequest req = new TaskDeleteRequest("optio", "rem", "perferendis") {{
                ifMatch = "facilis";
                ifModifiedSince = "reiciendis";
                ifNoneMatch = "a";
                ifUnmodifiedSince = "iste";
                clientRequestId = "dicta";
                ocpDate = "quos";
                returnClientRequestId = false;
                timeout = 356315;
            }};            

            TaskDeleteResponse res = sdk.tasks.taskDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskGet

Gets information about the specified task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskGetRequest;
import org.openapis.openapi.models.operations.TaskGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskGetRequest req = new TaskGetRequest("dolore", "modi", "itaque") {{
                dollarExpand = "maxime";
                dollarSelect = "modi";
                ifMatch = "consequuntur";
                ifModifiedSince = "assumenda";
                ifNoneMatch = "vero";
                ifUnmodifiedSince = "doloribus";
                clientRequestId = "impedit";
                ocpDate = "porro";
                returnClientRequestId = false;
                timeout = 883819;
            }};            

            TaskGetResponse res = sdk.tasks.taskGet(req);

            if (res.cloudTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskList

Lists all of the tasks that are associated with the specified job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskListRequest;
import org.openapis.openapi.models.operations.TaskListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskListRequest req = new TaskListRequest("totam", "reiciendis") {{
                dollarExpand = "ab";
                dollarFilter = "sint";
                dollarSelect = "nihil";
                clientRequestId = "esse";
                maxresults = 438256;
                ocpDate = "odio";
                returnClientRequestId = false;
                timeout = 202796;
            }};            

            TaskListResponse res = sdk.tasks.taskList(req);

            if (res.cloudTaskListResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskListSubtasks

Lists all of the subtasks that are associated with the specified multi-instance task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskListSubtasksRequest;
import org.openapis.openapi.models.operations.TaskListSubtasksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskListSubtasksRequest req = new TaskListSubtasksRequest("debitis", "vel", "neque") {{
                dollarSelect = "corporis";
                clientRequestId = "voluptas";
                ocpDate = "consequuntur";
                returnClientRequestId = false;
                timeout = 641133;
            }};            

            TaskListSubtasksResponse res = sdk.tasks.taskListSubtasks(req);

            if (res.cloudTaskListSubtasksResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskTerminate

Terminates the specified task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskTerminateRequest;
import org.openapis.openapi.models.operations.TaskTerminateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskTerminateRequest req = new TaskTerminateRequest("reprehenderit", "distinctio", "eius") {{
                ifMatch = "ipsa";
                ifModifiedSince = "rem";
                ifNoneMatch = "maiores";
                ifUnmodifiedSince = "accusantium";
                clientRequestId = "veniam";
                ocpDate = "saepe";
                returnClientRequestId = false;
                timeout = 206063;
            }};            

            TaskTerminateResponse res = sdk.tasks.taskTerminate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskUpdate

Updates the properties of the specified task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskUpdateRequest;
import org.openapis.openapi.models.operations.TaskUpdateResponse;
import org.openapis.openapi.models.shared.TaskConstraints;
import org.openapis.openapi.models.shared.TaskUpdateParameter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskUpdateRequest req = new TaskUpdateRequest(                new TaskUpdateParameter() {{
                                constraints = new TaskConstraints() {{
                                    maxTaskRetryCount = 816365;
                                    maxWallClockTime = "aliquam";
                                    retentionTime = "quos";
                                }};;
                            }};, "doloribus", "fugiat", "est") {{
                ifMatch = "delectus";
                ifModifiedSince = "velit";
                ifNoneMatch = "vitae";
                ifUnmodifiedSince = "nesciunt";
                clientRequestId = "similique";
                ocpDate = "illo";
                returnClientRequestId = false;
                timeout = 997995;
            }};            

            TaskUpdateResponse res = sdk.tasks.taskUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
