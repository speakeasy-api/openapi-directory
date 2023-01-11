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

            GetInventoryRequest req = new GetInventoryRequest() {{
                queryParams = new GetInventoryQueryParams() {{
                    shipNode = "sit";
                    sku = "voluptas";
                }};
                headers = new GetInventoryHeaders() {{
                    authorization = "culpa";
                    wmCONSUMERCHANNELTYPE = "expedita";
                    wmQOSCORRELATIONID = "consequuntur";
                    wmSECACCESSTOKEN = "dolor";
                    wmSVCNAME = "expedita";
                }};
            }};

            GetInventoryResponse res = sdk.inventory.getInventory(req);

            if (res.getInventory200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->