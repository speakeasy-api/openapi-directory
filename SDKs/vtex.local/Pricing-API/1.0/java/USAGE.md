<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetrulesforapricetableRequest;
import org.openapis.openapi.models.operations.GetrulesforapricetableResponse;
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

            GetrulesforapricetableRequest req = new GetrulesforapricetableRequest("application/json", "distinctio", "b2c");            

            GetrulesforapricetableResponse res = sdk.priceTables.getrulesforapricetable(req);

            if (res.getrulesforapricetable200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->