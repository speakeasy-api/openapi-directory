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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetNotePathParams;
import org.openapis.openapi.models.operations.GetNoteQueryParams;
import org.openapis.openapi.models.operations.GetNoteHeaders;
import org.openapis.openapi.models.operations.GetNoteRequest;
import org.openapis.openapi.models.operations.GetNoteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = new SchemeAppKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    appToken = new SchemeAppToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetNoteRequest req = new GetNoteRequest() {{
                pathParams = new GetNotePathParams() {{
                    noteId = "654321cba";
                }};
                queryParams = new GetNoteQueryParams() {{
                    reason = "data-validation";
                }};
                headers = new GetNoteHeaders() {{
                    accept = "application/json";
                    contentType = "application/json";
                }};
            }};            

            GetNoteResponse res = sdk.note.getNote(req);

            if (res.getNote200ApplicationJSONAny.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### note

* `getNote` - Retrieve Note
* `getNotesbyorderId` - Get Notes by orderId
* `newNote` - Create Note

### task

* `addComment` - Add Comment on a Task
* `editTask` - Update Task
* `getTask` - Retrieve Task
* `listtasksbyassignee` - List tasks
* `newTask` - Create Task
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
