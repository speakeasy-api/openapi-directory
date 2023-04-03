<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAudioUseCanonicalEnum;
import org.openapis.openapi.models.operations.GetAudioRequest;
import org.openapis.openapi.models.operations.GetAudioResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAudioRequest req = new GetAudioRequest() {{
                limit = 548814;
                useCanonical = "true";
                word = "distinctio";
            }}            

            GetAudioResponse res = sdk.word.getAudio(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->