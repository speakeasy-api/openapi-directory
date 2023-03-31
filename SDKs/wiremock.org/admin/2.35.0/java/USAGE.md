<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAdminRequestsUnmatchedNearMissesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAdminRequestsUnmatchedNearMissesResponse res = sdk.nearMisses.getAdminRequestsUnmatchedNearMisses();

            if (res.getAdminRequestsUnmatchedNearMisses200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->