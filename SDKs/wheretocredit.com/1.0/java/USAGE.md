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
                        baseFareUSD = 14.200000;
                        id = "expedita";
                        segments = new openapisdk.models.shared.Segment[]() {{
                            add(new Segment() {{
                                bookingClass = "dolor";
                                carrier = "expedita";
                                departure = "1978-05-28T16:08:43Z";
                                destination = "fugit";
                                distance = 28.100000;
                                flightNumber = 8325060299420976708;
                                operatingCarrier = "dicta";
                                origin = "debitis";
                            }}),
                            add(new Segment() {{
                                bookingClass = "voluptatum";
                                carrier = "et";
                                departure = "1970-04-14T21:44:49Z";
                                destination = "dolorem";
                                distance = 50.099998;
                                flightNumber = 3287288577352441706;
                                operatingCarrier = "vitae";
                                origin = "totam";
                            }}),
                            add(new Segment() {{
                                bookingClass = "dolores";
                                carrier = "illum";
                                departure = "1975-11-02T15:36:54Z";
                                destination = "vel";
                                distance = 20.200001;
                                flightNumber = 4035568504096476779;
                                operatingCarrier = "aspernatur";
                                origin = "accusantium";
                            }}),
                        }};
                        ticketingCarrier = "totam";
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