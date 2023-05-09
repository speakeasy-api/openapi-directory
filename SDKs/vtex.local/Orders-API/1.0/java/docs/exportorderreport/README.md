# exportOrderReport

### Available Operations

* [statusCompleted](#statuscompleted) - Export order report with status 'Completed'
* [statusInProgress](#statusinprogress) - Export order report with status 'In Progress'

## statusCompleted

Retrieves a list of all order reports that are `completed`, by `accountName`. Be aware that the scope of the export log is per user. 

> This endpoint is for VTEX internal use, and it is not meant to be used by clients.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StatusCompletedRequest;
import org.openapis.openapi.models.operations.StatusCompletedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora", "suscipit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            StatusCompletedRequest req = new StatusCompletedRequest("molestiae", "minus");            

            StatusCompletedResponse res = sdk.exportOrderReport.statusCompleted(req);

            if (res.exportCompletedResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## statusInProgress

Retrieves a list of all order reports that are `in progress`, by `accountName`. Be aware that the scope of the export log is per user. 

> This endpoint is for VTEX internal use, and it is not meant to be used by clients.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StatusInProgressRequest;
import org.openapis.openapi.models.operations.StatusInProgressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat", "voluptatum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            StatusInProgressRequest req = new StatusInProgressRequest("iusto", "excepturi");            

            StatusInProgressResponse res = sdk.exportOrderReport.statusInProgress(req);

            if (res.exportInProgressResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
