# matchedOffers

### Available Operations

* [getProductoffers](#getproductoffers) - Get Matched Offer's Data by Product ID
* [getSKUoffers](#getskuoffers) - Get Matched Offer's Data by SKU ID
* [getofferslist](#getofferslist) - Get Matched Offers List

## getProductoffers

Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

This endpoint retrieves the available offers for a speciic Product ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog. 

The call returns a list of offers for that ID, that contain the following data: 

- Seller that sells the SKU 

- Correspondent SKU ID 

- SKU's price value 

- Inventory level 

- Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductoffersRequest;
import org.openapis.openapi.models.operations.GetProductoffersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum", "vel") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProductoffersRequest req = new GetProductoffersRequest("error", "deserunt", "suscipit", "iure", "magnam");            

            GetProductoffersResponse res = sdk.matchedOffers.getProductoffers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSKUoffers

Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

This endpoint retrieves the available offers for a speciic SKU ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog. 

The call returns a list of offers for that ID, that contain the following data: 

- Seller that sells the SKU 

- Correspondent SKU ID 

- SKU's price value 

- Inventory level 

- Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSKUoffersRequest;
import org.openapis.openapi.models.operations.GetSKUoffersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "ipsa") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSKUoffersRequest req = new GetSKUoffersRequest("delectus", "tempora", "suscipit", "molestiae", "minus", "placeat");            

            GetSKUoffersResponse res = sdk.matchedOffers.getSKUoffers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getofferslist

Offers are seller's products and SKUs that were sent to the marketplace, and already have their price and inventory level configured. 

 This endpoint retrieves the available offers in a marketplace. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace, and are currently in its catalog. 

It is possible to filter the search through the following parameters: 

- rows 
- sort 

- start 

- fq

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetofferslistRequest;
import org.openapis.openapi.models.operations.GetofferslistResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum", "iusto") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetofferslistRequest req = new GetofferslistRequest("excepturi", "nisi", "recusandae", "temporibus") {{
                fq = "skuId:172";
                rows = 71036L;
                sort = "availability,desc";
                start = 337396L;
            }};            

            GetofferslistResponse res = sdk.matchedOffers.getofferslist(req);

            if (res.getMatchedOffersResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
