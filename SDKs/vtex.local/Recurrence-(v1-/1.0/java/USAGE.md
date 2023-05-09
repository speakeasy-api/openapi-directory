<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddrecurrenceitemRequest;
import org.openapis.openapi.models.operations.AddrecurrenceitemResponse;
import org.openapis.openapi.models.shared.AddrecurrenceitemRequest;
import org.openapis.openapi.models.shared.Frequency;
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

            AddrecurrenceitemRequest req = new AddrecurrenceitemRequest("application/json", "application/json",                 new org.openapis.openapi.models.shared.AddrecurrenceitemRequest[]{{
                                add(new AddrecurrenceitemRequest(                new Frequency(384382, "iure");, 297534, "debitis", "ipsa", "delectus") {{
                                    frequency = new Frequency(857946, "corrupti") {{
                                        interval = 844266;
                                        periodicity = "unde";
                                    }};
                                    quantity = 847252;
                                    seller = "vel";
                                    shippingAddressId = "error";
                                    sku = "deserunt";
                                }}),
                                add(new AddrecurrenceitemRequest(                new Frequency(392785, "recusandae");, 836079, "ab", "quis", "veritatis") {{
                                    frequency = new Frequency(477665, "minus") {{
                                        interval = 272656;
                                        periodicity = "suscipit";
                                    }};
                                    quantity = 812169;
                                    seller = "voluptatum";
                                    shippingAddressId = "iusto";
                                    sku = "excepturi";
                                }}),
                                add(new AddrecurrenceitemRequest(                new Frequency(870088, "maiores");, 473608, "quod", "quod", "esse") {{
                                    frequency = new Frequency(368241, "repellendus") {{
                                        interval = 648172;
                                        periodicity = "perferendis";
                                    }};
                                    quantity = 957156;
                                    seller = "quo";
                                    shippingAddressId = "odit";
                                    sku = "at";
                                }}),
                            }}, "totam");            

            AddrecurrenceitemResponse res = sdk.miscellaneous.addrecurrenceitem(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->