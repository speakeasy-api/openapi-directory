<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClientAddressRequest;
import org.openapis.openapi.models.operations.CreateClientAddressResponse;
import org.openapis.openapi.models.shared.Address;
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

            CreateClientAddressRequest req = new CreateClientAddressRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771") {{
                address = new Address("RJ", "Brasil", "Locality", "Locality area", "20200-000", "51", "999") {{
                    countryCode = "BR";
                }};;
                alternativeKey = "email";
            }};            

            CreateClientAddressResponse res = sdk.addresses.createClientAddress(req);

            if (res.createClientAddress201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->