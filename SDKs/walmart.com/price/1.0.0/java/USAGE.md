<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.OptCapProgramInPriceRequestBody;
import org.openapis.openapi.models.operations.OptCapProgramInPriceRequest;
import org.openapis.openapi.models.operations.OptCapProgramInPriceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptCapProgramInPriceRequest req = new OptCapProgramInPriceRequest() {{
                requestBody = new OptCapProgramInPriceRequestBody() {{
                    subsidyEnrolled = false;
                    subsidyPreference = false;
                }};
                wmConsumerChannelType = "corrupti";
                wmQosCorrelationId = "provident";
                wmSecAccessToken = "distinctio";
                wmSvcName = "quibusdam";
            }}            

            OptCapProgramInPriceResponse res = sdk.prices.optCapProgramInPrice(req);

            if (res.optCapProgramInPrice200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->