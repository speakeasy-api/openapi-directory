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
                    shipNode = "molestiae";
                    sku = "numquam";
                }};
                headers = new GetInventoryHeaders() {{
                    authorization = "aut";
                    wmCONSUMERCHANNELTYPE = "consequatur";
                    wmQOSCORRELATIONID = "dolores";
                    wmSECACCESSTOKEN = "et";
                    wmSVCNAME = "quos";
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