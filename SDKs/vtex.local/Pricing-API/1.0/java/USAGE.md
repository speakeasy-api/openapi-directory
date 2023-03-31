<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetrulesforapricetablePathParams;
import org.openapis.openapi.models.operations.GetrulesforapricetableHeaders;
import org.openapis.openapi.models.operations.GetrulesforapricetableRequest;
import org.openapis.openapi.models.operations.GetrulesforapricetableResponse;

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

            GetrulesforapricetableRequest req = new GetrulesforapricetableRequest() {{
                pathParams = new GetrulesforapricetablePathParams() {{
                    priceTableId = "b2c";
                }};
                headers = new GetrulesforapricetableHeaders() {{
                    accept = "application/json";
                    contentType = "corrupti";
                }};
            }};            

            GetrulesforapricetableResponse res = sdk.priceTables.getrulesforapricetable(req);

            if (res.getrulesforapricetable200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->