<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAllContentTypesRequest;
import org.openapis.openapi.models.operations.GetAllContentTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllContentTypesRequest req = new GetAllContentTypesRequest() {{
                builderId = "faststore";
            }}            

            GetAllContentTypesResponse res = sdk.pages.getAllContentTypes(req);

            if (res.getAllContentTypes200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->