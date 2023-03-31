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