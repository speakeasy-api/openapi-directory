<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetInventoryQueryParams;
import org.openapis.openapi.models.operations.GetInventoryHeaders;
import org.openapis.openapi.models.operations.GetInventoryRequest;
import org.openapis.openapi.models.operations.GetInventoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInventoryRequest req = new GetInventoryRequest() {{
                queryParams = new GetInventoryQueryParams() {{
                    shipNode = "corrupti";
                    sku = "provident";
                }};
                headers = new GetInventoryHeaders() {{
                    wmConsumerChannelType = "distinctio";
                    wmQosCorrelationId = "quibusdam";
                    wmSecAccessToken = "unde";
                    wmSvcName = "nulla";
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