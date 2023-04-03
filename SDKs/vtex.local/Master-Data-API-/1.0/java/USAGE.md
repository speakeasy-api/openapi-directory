<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateNewCustomerAddressRequest;
import org.openapis.openapi.models.operations.CreateNewCustomerAddressResponse;
import org.openapis.openapi.models.shared.CreateUpdateAddressRequests;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNewCustomerAddressRequest req = new CreateNewCustomerAddressRequest() {{
                accept = "application/json";
                contentType = "application/json";
                schema = "schema";
                createUpdateAddressRequests = new CreateUpdateAddressRequests() {{
                    addressName = "My house";
                    addressType = "residential";
                    city = "Rio de Janeiro";
                    complement = "3rd floor";
                    country = "BRA";
                    neighborhood = "Botafogo";
                    number = "300";
                    postalCode = "12345-000";
                    receiverName = "Clark Kent.";
                    reference = "Grey building";
                    state = "Rio de Janeiro";
                    street = "Praia de Botafogo";
                    userId = "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e";
                }};
            }}            

            CreateNewCustomerAddressResponse res = sdk.addresses.createNewCustomerAddress(req);

            if (res.documentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->