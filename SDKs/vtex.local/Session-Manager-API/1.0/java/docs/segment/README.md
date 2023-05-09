# segment

### Available Operations

* [getSegment](#getsegment) - Get Segment

## getSegment

You can add certain public fields in the query string and the system will attempt to fulfill it. Values such as `cultureInfo` and `utm` are overwriteable, just keep in mind such changes will not be reflected in the client's session.

If you wish to change the value on the session (and thus be reflected on the segment without special query strings), then use the PATCH request to session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSegmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSegmentResponse res = sdk.segment.getSegment();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
