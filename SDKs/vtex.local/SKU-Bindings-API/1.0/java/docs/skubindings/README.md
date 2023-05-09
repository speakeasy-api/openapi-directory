# skuBindings

### Available Operations

* [activateSKUBinding](#activateskubinding) - Activate SKU Binding
* [bindtoanothersku](#bindtoanothersku) - Bind a seller's SKU to another SKU
* [changeNotification](#changenotification) - Change Notification with SKU ID
* [deactivateSKUBinding](#deactivateskubinding) - Deactivate SKU Binding
* [deleteSKUsellerassociation](#deleteskusellerassociation) - Remove a seller's SKU Binding
* [getSKUseller](#getskuseller) - Get details of a seller's SKU
* [getallbySellerId](#getallbysellerid) - Get all SKU Bindings by Seller ID
* [getbySkuId](#getbyskuid) - Get SKU Bindings by SKU ID
* [getpagedadmin](#getpagedadmin) - Get SKU Bindings information
* [getpagedbySellerId](#getpagedbysellerid) - Get paged SKU Bindings by Seller ID
* [insertSKUBinding](#insertskubinding) - Insert SKU Binding
* [postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId](#postskubindingpvtskusellerchangenotificationselleridsellerskuid) - Change Notification with Seller ID and Seller SKU ID

## activateSKUBinding

Changes the status of an SKU Binding to active, setting `isActive` to `true`.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/activate/{sellerId}/{skuSellerId}`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateSKUBindingRequest;
import org.openapis.openapi.models.operations.ActivateSKUBindingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "nulla") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivateSKUBindingRequest req = new ActivateSKUBindingRequest("corrupti", "illum", "vtxkfj7352", "71");            

            ActivateSKUBindingResponse res = sdk.skuBindings.activateSKUBinding(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bindtoanothersku

Associates a seller's SKU to another marketplace SKU.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.

## Request body example

```json
{
    "StockKeepingUnitId": 1
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BindtoanotherskuRequest;
import org.openapis.openapi.models.operations.BindtoanotherskuRequestBody;
import org.openapis.openapi.models.operations.BindtoanotherskuResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "error") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            BindtoanotherskuRequest req = new BindtoanotherskuRequest("deserunt", "suscipit", "101", "1") {{
                requestBody = new BindtoanotherskuRequestBody(1);;
            }};            

            BindtoanotherskuResponse res = sdk.skuBindings.bindtoanothersku(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeNotification

The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.

With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.

The body of the request should be empty.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{skuId}`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeNotificationRequest;
import org.openapis.openapi.models.operations.ChangeNotificationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "magnam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ChangeNotificationRequest req = new ChangeNotificationRequest("debitis", "ipsa", "10");            

            ChangeNotificationResponse res = sdk.skuBindings.changeNotification(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deactivateSKUBinding

Changes the status of an SKU Binding to inactive, setting `isActive` to `false`.

  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeactivateSKUBindingRequest;
import org.openapis.openapi.models.operations.DeactivateSKUBindingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus", "tempora") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeactivateSKUBindingRequest req = new DeactivateSKUBindingRequest("suscipit", "molestiae", "vtxkfj7352", "71");            

            DeactivateSKUBindingResponse res = sdk.skuBindings.deactivateSKUBinding(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSKUsellerassociation

Remove a seller's SKU binding, given the Seller ID and the SKU ID in the seller's store.

  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/remove/{sellerId}/{sellerSkuId}`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSKUsellerassociationRequest;
import org.openapis.openapi.models.operations.DeleteSKUsellerassociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus", "placeat") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSKUsellerassociationRequest req = new DeleteSKUsellerassociationRequest("voluptatum", "iusto", "vtxkfj7352", "71");            

            DeleteSKUsellerassociationResponse res = sdk.skuBindings.deleteSKUsellerassociation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSKUseller

Retrieves the details of a seller's SKU given a seller ID and the SKU ID in the seller's store. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.

## Response body example

```json
{
    "IsPersisted": true,
    "IsRemoved": false,
    "SkuSellerId": 102,
    "UpdateDate": "2021-04-12T20:06:59.413Z",
    "RequestedUpdateDate": null,
    "SellerStockKeepingUnitId": "71",
    "SellerId": "vtxkfj7352",
    "StockKeepingUnitId": 1,
    "IsActive": true
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSKUsellerRequest;
import org.openapis.openapi.models.operations.GetSKUsellerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "nisi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSKUsellerRequest req = new GetSKUsellerRequest("recusandae", "temporibus", "101", "1");            

            GetSKUsellerResponse res = sdk.skuBindings.getSKUseller(req);

            if (res.getSKUseller200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getallbySellerId

Retrieves a list of SKU Bindings given a specific Seller ID. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/list/bysellerId/{sellerId}`.

## Response body example

```json
[
    {
        "SellerStockKeepingUnitId": "24",
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null,
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 121,
        "IsActive": true
    }
]
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetallbySellerIdRequest;
import org.openapis.openapi.models.operations.GetallbySellerIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab", "quis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetallbySellerIdRequest req = new GetallbySellerIdRequest("veritatis", "deserunt", "vtxkfj7352");            

            GetallbySellerIdResponse res = sdk.skuBindings.getallbySellerId(req);

            if (res.getallbySellerId200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getbySkuId

Retrieves SKU Bindings details by SKU ID.

## Response body example

```json
[
    {
        "Id": 48,
        "SellerId": "cosmetics1",
        "StockKeepingUnitId": 1,
        "SellerSkuId": "42",
        "IsActive": true,
        "LastUpdateDate": "2020-10-21T19:13:00.657",
        "SalesPolicy": 0
    }
]
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetbySkuIdRequest;
import org.openapis.openapi.models.operations.GetbySkuIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "ipsam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetbySkuIdRequest req = new GetbySkuIdRequest("repellendus", "sapiente", "1");            

            GetbySkuIdResponse res = sdk.skuBindings.getbySkuId(req);

            if (res.getbySkuId200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getpagedadmin

Retrieves SKU Bindings administrative information using optional query params `sellerId`, `skuId`, `sellerSkuId` and `IsActive` to filter results and `size` to restrict the amount of results. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/admin`.

## Response body example

```json
[
    {
        "IsPersisted": true,
        "IsRemoved": false,
        "SkuSellerId": 1,
        "UpdateDate": "2019-12-04T01:56:00.673Z",
        "RequestedUpdateDate": null,
        "SellerStockKeepingUnitId": "12",
        "SellerId": "cosmetics1",
        "StockKeepingUnitId": 25,
        "IsActive": true
    }
]
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetpagedadminRequest;
import org.openapis.openapi.models.operations.GetpagedadminResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo", "odit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetpagedadminRequest req = new GetpagedadminRequest("at", "at") {{
                isActive = true;
                sellerId = "vtxkfj7352";
                sellerSkuId = "71";
                size = "1";
                skuId = "1";
            }};            

            GetpagedadminResponse res = sdk.skuBindings.getpagedadmin(req);

            if (res.getpagedadmin200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getpagedbySellerId

Retrieves a paged list of SKU Bindings given a specific Seller ID. 

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/paged/sellerid/{sellerId}`.

## Response body example

```json
[
    {
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 121,
        "SellerStockKeepingUnitId": "24",
        "IsActive": true,
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null
    },
    {
        "SellerId": "vtxkfj7352",
        "StockKeepingUnitId": 14,
        "SellerStockKeepingUnitId": "60",
        "IsActive": true,
        "FreightCommissionPercentage": null,
        "ProductCommissionPercentage": null
    }
]
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetpagedbySellerIdRequest;
import org.openapis.openapi.models.operations.GetpagedbySellerIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores", "molestiae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetpagedbySellerIdRequest req = new GetpagedbySellerIdRequest("quod", "quod", "1", "vtxkfj7352", "2");            

            GetpagedbySellerIdResponse res = sdk.skuBindings.getpagedbySellerId(req);

            if (res.getpagedbySellerId200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## insertSKUBinding

Creates an SKU Binding, associating a seller's SKU with a marketplace's SKU.

 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/insertion`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InsertSKUBindingRequest;
import org.openapis.openapi.models.operations.InsertSKUBindingRequestBody;
import org.openapis.openapi.models.operations.InsertSKUBindingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "totam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InsertSKUBindingRequest req = new InsertSKUBindingRequest("porro", "dolorum",                 new InsertSKUBindingRequestBody(false, "dicta", "nam", 639921););            

            InsertSKUBindingResponse res = sdk.skuBindings.insertSKUBinding(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId

The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.

With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.

There are two information expected by the marketplace in this request: the `sellerId`, which identifies the seller, and the `sellerSkuId`, which identifies the binding of the seller with the SKU.

Both information are passed through the request URL. The body of the request should be empty.
 > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}`.

## Example

Let's say your seller has the ID `123` in the marketplace and you want to inform the marketplace that has been a change in the SKU with ID `700`.

In this case, you would have to replace the `sellerId` parameter with the value `123` and the `skuId` parameter with the value `700`. The URL of the request would be the following.

```
https://{{accountName}}.vtexcommercestable.com.br/api/sku-binding/pvt/skuseller/changenotification/123/700
```

## Response codes

The following response codes are possible for this request.
* 200: the SKU whose ID was informed in the URL already exists in the marketplace and was found. The marketplace can now proceed with a fulfillment simulation in order to get updated information about this SKU's inventory and price.
* 403: Failure in the authentication.
* 404: the SKU was not found in the marketplace. The body of the response, in this case, should follow this format: "Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`. This means that the seller can now proceed with sending an offer to the marketplace in order to suggest that this SKU is sold there.
* 429: Failure due to too many requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRequest;
import org.openapis.openapi.models.operations.PostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "fugit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRequest req = new PostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRequest("deleniti", "hic", "101", "1");            

            PostSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdResponse res = sdk.skuBindings.postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
