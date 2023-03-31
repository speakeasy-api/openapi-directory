<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddrecurrenceitemPathParams;
import org.openapis.openapi.models.operations.AddrecurrenceitemHeaders;
import org.openapis.openapi.models.operations.AddrecurrenceitemRequest;
import org.openapis.openapi.models.operations.AddrecurrenceitemResponse;
import org.openapis.openapi.models.shared.AddrecurrenceitemRequest;
import org.openapis.openapi.models.shared.Frequency;

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

            AddrecurrenceitemRequest req = new AddrecurrenceitemRequest() {{
                pathParams = new AddrecurrenceitemPathParams() {{
                    recurrenceId = "corrupti";
                }};
                headers = new AddrecurrenceitemHeaders() {{
                    accept = "application/json";
                    contentType = "application/json";
                }};
                request = new org.openapis.openapi.models.shared.AddrecurrenceitemRequest[]{{
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 715190;
                            periodicity = "quibusdam";
                        }};
                        quantity = 602763;
                        seller = "nulla";
                        shippingAddressId = "corrupti";
                        sku = "illum";
                    }}),
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 423655;
                            periodicity = "error";
                        }};
                        quantity = 645894;
                        seller = "suscipit";
                        shippingAddressId = "iure";
                        sku = "magnam";
                    }}),
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 891773;
                            periodicity = "ipsa";
                        }};
                        quantity = 963663;
                        seller = "tempora";
                        shippingAddressId = "suscipit";
                        sku = "molestiae";
                    }}),
                }};
            }};            

            AddrecurrenceitemResponse res = sdk.miscellaneous.addrecurrenceitem(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->