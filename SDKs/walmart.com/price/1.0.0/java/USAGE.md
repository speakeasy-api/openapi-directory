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
                    basicScheme = new SchemeBasicScheme() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            OptCapProgramInPriceRequest req = new OptCapProgramInPriceRequest() {{
                headers = new OptCapProgramInPriceHeaders() {{
                    authorization = "sit";
                    wmCONSUMERCHANNELTYPE = "voluptas";
                    wmQOSCORRELATIONID = "culpa";
                    wmSECACCESSTOKEN = "expedita";
                    wmSVCNAME = "consequuntur";
                }};
                request = new OptCapProgramInPriceRequestBody() {{
                    subsidyEnrolled = false;
                    subsidyPreference = true;
                }};
            }};

            OptCapProgramInPriceResponse res = sdk.prices.optCapProgramInPrice(req);

            if (res.optCapProgramInPrice200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->