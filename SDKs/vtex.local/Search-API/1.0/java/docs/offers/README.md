# offers

### Available Operations

* [getApiCatalogSystemPubProductsOffersProductId](#getapicatalogsystempubproductsoffersproductid) - Search Product offers
* [getApiCatalogSystemPubProductsOffersProductIdSkuSkuId](#getapicatalogsystempubproductsoffersproductidskuskuid) - Search SKU offers

## getApiCatalogSystemPubProductsOffersProductId

Retrieves existing offers of a specific product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiCatalogSystemPubProductsOffersProductIdRequest;
import org.openapis.openapi.models.operations.GetApiCatalogSystemPubProductsOffersProductIdResponse;
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

            GetApiCatalogSystemPubProductsOffersProductIdRequest req = new GetApiCatalogSystemPubProductsOffersProductIdRequest("application/json", "application/json", "3");            

            GetApiCatalogSystemPubProductsOffersProductIdResponse res = sdk.offers.getApiCatalogSystemPubProductsOffersProductId(req);

            if (res.getApiCatalogSystemPubProductsOffersProductId200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiCatalogSystemPubProductsOffersProductIdSkuSkuId

Retrieves existing offers of a specific SKU.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRequest;
import org.openapis.openapi.models.operations.GetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdResponse;
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

            GetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRequest req = new GetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdRequest("application/json", "application/json", "3", "5");            

            GetApiCatalogSystemPubProductsOffersProductIdSkuSkuIdResponse res = sdk.offers.getApiCatalogSystemPubProductsOffersProductIdSkuSkuId(req);

            if (res.getApiCatalogSystemPubProductsOffersProductIdSkuSkuId200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
