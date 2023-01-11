<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            PostApi10CalculateRequest req = new PostApi10CalculateRequest() {{
                request = new openapisdk.models.shared.Itinerary[]() {{
                    add(new Itinerary() {{
                        baseFareUSD = 96.199997;
                        id = "magni";
                        segments = new openapisdk.models.shared.Segment[]() {{
                            add(new Segment() {{
                                bookingClass = "odio";
                                carrier = "aliquid";
                                departure = "2006-04-07T14:48:51Z";
                                destination = "et";
                                distance = 29.200001;
                                flightNumber = 3410956505538461485;
                                operatingCarrier = "illum";
                                origin = "aut";
                            }}),
                        }};
                        ticketingCarrier = "quo";
                    }}),
                }};
            }};

            PostApi10CalculateResponse res = sdk.calculate.postApi10Calculate(req);

            if (res.calculateResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->