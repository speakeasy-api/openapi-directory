<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddrecurrenceitemRequest;
import org.openapis.openapi.models.operations.AddrecurrenceitemResponse;
import org.openapis.openapi.models.shared.AddrecurrenceitemRequest;
import org.openapis.openapi.models.shared.Frequency;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddrecurrenceitemRequest req = new AddrecurrenceitemRequest() {{
                accept = "application/json";
                contentType = "application/json";
                requestBody = new org.openapis.openapi.models.shared.AddrecurrenceitemRequest[]{{
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 592845;
                            periodicity = "distinctio";
                        }};
                        quantity = 844266;
                        seller = "unde";
                        shippingAddressId = "nulla";
                        sku = "corrupti";
                    }}),
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 847252;
                            periodicity = "vel";
                        }};
                        quantity = 623564;
                        seller = "deserunt";
                        shippingAddressId = "suscipit";
                        sku = "iure";
                    }}),
                    add(new AddrecurrenceitemRequest() {{
                        frequency = new Frequency() {{
                            interval = 297534;
                            periodicity = "debitis";
                        }};
                        quantity = 56713;
                        seller = "delectus";
                        shippingAddressId = "tempora";
                        sku = "suscipit";
                    }}),
                }};
                recurrenceId = "molestiae";
            }}            

            AddrecurrenceitemResponse res = sdk.miscellaneous.addrecurrenceitem(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->