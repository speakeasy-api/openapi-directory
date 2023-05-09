# task

### Available Operations

* [addComment](#addcomment) - Add Comment on a Task
* [editTask](#edittask) - Update Task
* [getTask](#gettask) - Retrieve Task
* [listtasksbyassignee](#listtasksbyassignee) - List tasks
* [newTask](#newtask) - Create Task

## addComment

Adds a comment to a given task, filtering by `taskId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCommentRequest;
import org.openapis.openapi.models.operations.AddCommentResponse;
import org.openapis.openapi.models.shared.AddCommentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "error") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddCommentRequest req = new AddCommentRequest("application/json",                 new AddCommentRequest("deserunt");, "application/json", "123456abc");            

            AddCommentResponse res = sdk.task.addComment(req);

            if (res.addComment200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## editTask

Updates a given task's status, for example, filtering by `taskId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EditTaskRequest;
import org.openapis.openapi.models.operations.EditTaskResponse;
import org.openapis.openapi.models.shared.EditTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit", "iure") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            EditTaskRequest req = new EditTaskRequest("application/json", "application/json",                 new EditTaskRequest("magnam");, "123456abc");            

            EditTaskResponse res = sdk.task.editTask(req);

            if (res.editTask200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTask

Retrieves a given task, filtering by `taskId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskRequest;
import org.openapis.openapi.models.operations.GetTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "ipsa") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTaskRequest req = new GetTaskRequest("application/json", "application/json", "123456abc");            

            GetTaskResponse res = sdk.task.getTask(req);

            if (res.getTask200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listtasksbyassignee

This endpoint allows you to filter tasks. You can choose between the following filtering options: 

- **Assignees:** using `assignee.email` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?assignee.email={{person@email.com}}&status={{open}}`. 

- **Targets:** using `targetId` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?target.id={{name}}&status={{open}}`. 

- **Paged tasks:** using `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?page={{1}}&perPage={{10}}&status=;{{-Closed}}`. 

- **Context:** using `context`, `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?context={{context}}&page={{1}}&perPage={{10}}&status={{-Closed}}`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListtasksbyassigneeRequest;
import org.openapis.openapi.models.operations.ListtasksbyassigneeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus", "tempora") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListtasksbyassigneeRequest req = new ListtasksbyassigneeRequest("application/json", "application/json") {{
                assigneeEmail = "{{assigneeEmail}}";
                context = "{{context}}";
                page = "{{page}}";
                perPage = "{{desired number per page}}";
                status = "open";
                targetId = "{{targetId}}";
            }};            

            ListtasksbyassigneeResponse res = sdk.task.listtasksbyassignee(req);

            if (res.listtasksbyassignee200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newTask

Creates a new task in VTEX DO.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewTaskRequest;
import org.openapis.openapi.models.operations.NewTaskResponse;
import org.openapis.openapi.models.shared.Assignee;
import org.openapis.openapi.models.shared.Follower;
import org.openapis.openapi.models.shared.NewTaskRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit", "molestiae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            NewTaskRequest req = new NewTaskRequest("application/json", "application/json",                 new NewTaskRequest(                new Assignee("minus", "placeat", "voluptatum");, "iusto", "excepturi", "nisi", "recusandae",                 new org.openapis.openapi.models.shared.Follower[]{{
                                                add(new Follower("natus", "sed", "iste") {{
                                                    email = "Ettie.Bogisich@gmail.com";
                                                    id = "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb";
                                                    name = "Edna Mante II";
                                                }}),
                                                add(new Follower("commodi", "quam", "molestiae") {{
                                                    email = "Lexie_Howe68@gmail.com";
                                                    id = "7596eb10-faaa-4235-ac59-55907aff1a3a";
                                                    name = "Jaime O'Hara";
                                                }}),
                                                add(new Follower("enim", "accusamus", "commodi") {{
                                                    email = "Linda.Cronin@gmail.com";
                                                    id = "aa52c3f5-ad01-49da-9ffe-78f097b0074f";
                                                    name = "Stacy Gulgowski MD";
                                                }}),
                                                add(new Follower("labore", "delectus", "eum") {{
                                                    email = "Anissa_Emmerich56@hotmail.com";
                                                    id = "d488e1e9-1e45-40ad-aabd-44269802d502";
                                                    name = "Marshall Glover";
                                                }}),
                                            }}, "non", "eligendi", "sint", "aliquid",                 new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target("deserunt", "nisi", "vel") {{
                                                    id = "e9a3efa7-7dfb-414c-966a-e395efb9ba88";
                                                    type = "sapiente";
                                                    url = "amet";
                                                }}),
                                                add(new Target("nemo", "quasi", "iure") {{
                                                    id = "997074ba-4469-4b6e-a141-959890afa563";
                                                    type = "necessitatibus";
                                                    url = "odit";
                                                }}),
                                                add(new Target("ab", "maiores", "quidem") {{
                                                    id = "fe4c8b71-1e5b-47fd-aed0-28921cddc692";
                                                    type = "ea";
                                                    url = "accusantium";
                                                }}),
                                            }}););            

            NewTaskResponse res = sdk.task.newTask(req);

            if (res.newTask200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
