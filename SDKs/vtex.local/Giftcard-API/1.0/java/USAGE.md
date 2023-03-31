<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateGiftCardHeaders;
import org.openapis.openapi.models.operations.CreateGiftCardRequest;
import org.openapis.openapi.models.operations.CreateGiftCardResponse;
import org.openapis.openapi.models.shared.CreateGiftCardRequest;

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

            CreateGiftCardRequest req = new CreateGiftCardRequest() {{
                headers = new CreateGiftCardHeaders() {{
                    accept = "corrupti";
                    contentType = "provident";
                    xVTEXAPIAppKey = "distinctio";
                    xVTEXAPIAppToken = "quibusdam";
                }};
                request = new CreateGiftCardRequest() {{
                    caption = "rewards program";
                    expiringDate = "2020-09-01T13:15:30Z";
                    multipleCredits = false;
                    multipleRedemptions = false;
                    profileId = "1234";
                    relationName = "insert example here";
                    restrictedToOwner = false;
                }};
            }};            

            CreateGiftCardResponse res = sdk.giftCard.createGiftCard(req);

            if (res.response.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->