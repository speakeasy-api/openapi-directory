<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateClientAddressPathParams;
import org.openapis.openapi.models.operations.CreateClientAddressQueryParams;
import org.openapis.openapi.models.operations.CreateClientAddressHeaders;
import org.openapis.openapi.models.operations.CreateClientAddressRequest;
import org.openapis.openapi.models.operations.CreateClientAddressResponse;
import org.openapis.openapi.models.shared.Address;

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

            CreateClientAddressRequest req = new CreateClientAddressRequest() {{
                pathParams = new CreateClientAddressPathParams() {{
                    profileId = "70caf394-8534-447e-a0ca-1803c669c771";
                }};
                queryParams = new CreateClientAddressQueryParams() {{
                    alternativeKey = "email";
                }};
                headers = new CreateClientAddressHeaders() {{
                    accept = "application/json";
                    contentType = "application/json";
                }};
                request = new Address() {{
                    administrativeAreaLevel1 = "RJ";
                    countryCode = "BR";
                    countryName = "Brasil";
                    locality = "Locality";
                    localityAreaLevel1 = "Locality area";
                    postalCode = "20200-000";
                    route = "51";
                    streetNumber = "999";
                }};
            }};            

            CreateClientAddressResponse res = sdk.addresses.createClientAddress(req);

            if (res.createClientAddress201ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->