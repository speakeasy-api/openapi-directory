<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddClientPreferencesPathParams;
import org.openapis.openapi.models.operations.AddClientPreferencesHeaders;
import org.openapis.openapi.models.operations.AddClientPreferencesRequestBody;
import org.openapis.openapi.models.operations.AddClientPreferencesRequest;
import org.openapis.openapi.models.operations.AddClientPreferencesResponse;

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

            AddClientPreferencesRequest req = new AddClientPreferencesRequest() {{
                pathParams = new AddClientPreferencesPathParams() {{
                    orderFormId = "corrupti";
                }};
                headers = new AddClientPreferencesHeaders() {{
                    accept = "provident";
                    contentType = "distinctio";
                }};
                request = new AddClientPreferencesRequestBody() {{
                    locale = "quibusdam";
                    optinNewsLetter = false;
                }};
            }};            

            AddClientPreferencesResponse res = sdk.cartAttachments.addClientPreferences(req);

            if (res.addClientPreferences200ApplicationJSONAny.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->