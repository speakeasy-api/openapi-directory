<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGiftCardRequest;
import org.openapis.openapi.models.operations.CreateGiftCardResponse;
import org.openapis.openapi.models.shared.CreateGiftCardRequest;
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

            CreateGiftCardRequest req = new CreateGiftCardRequest("distinctio", "quibusdam",                 new CreateGiftCardRequest("rewards program", "2020-09-01T13:15:30Z", "1234", "insert example here") {{
                                multipleCredits = false;
                                multipleRedemptions = false;
                                restrictedToOwner = false;
                            }};, "unde", "nulla");            

            CreateGiftCardResponse res = sdk.giftCard.createGiftCard(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->