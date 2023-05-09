# notification

### Available Operations

* [inventoryNotification](#inventorynotification) - Notify marketplace of inventory update
* [priceNotification](#pricenotification) - Notify marketplace of price update

## inventoryNotification

This endpoint is used by *sellers* to notify marketplaces that the inventory level has changed for one of their SKUs. 

There is no request body in this call, indicating the new inventory level, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the inventory level of an SKU (`skuId`). 

*Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated inventory  information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InventoryNotificationRequest;
import org.openapis.openapi.models.operations.InventoryNotificationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis", "deserunt") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InventoryNotificationRequest req = new InventoryNotificationRequest("perferendis", "ipsam", "repellendus", "sapiente", "quo", "odit");            

            InventoryNotificationResponse res = sdk.notification.inventoryNotification(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## priceNotification

This endpoint is used by *sellers* to notify marketplaces that the price has changed for one of their SKUs. 

There is no request body in this call, indicating the new price value, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the price of an SKU (`skuId`). 

*Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated price information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PriceNotificationRequest;
import org.openapis.openapi.models.operations.PriceNotificationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "at") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PriceNotificationRequest req = new PriceNotificationRequest("maiores", "molestiae", "quod", "quod", "esse", "totam");            

            PriceNotificationResponse res = sdk.notification.priceNotification(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
