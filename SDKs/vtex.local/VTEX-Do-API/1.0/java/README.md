# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNoteRequest;
import org.openapis.openapi.models.operations.GetNoteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "provident") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNoteRequest req = new GetNoteRequest("application/json", "application/json", "654321cba") {{
                reason = "data-validation";
            }};            

            GetNoteResponse res = sdk.note.getNote(req);

            if (res.getNote200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [note](docs/note/README.md)

* [getNote](docs/note/README.md#getnote) - Retrieve Note
* [getNotesbyorderId](docs/note/README.md#getnotesbyorderid) - Get Notes by orderId
* [newNote](docs/note/README.md#newnote) - Create Note

### [task](docs/task/README.md)

* [addComment](docs/task/README.md#addcomment) - Add Comment on a Task
* [editTask](docs/task/README.md#edittask) - Update Task
* [getTask](docs/task/README.md#gettask) - Retrieve Task
* [listtasksbyassignee](docs/task/README.md#listtasksbyassignee) - List tasks
* [newTask](docs/task/README.md#newtask) - Create Task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
