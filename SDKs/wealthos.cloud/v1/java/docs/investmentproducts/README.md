# investmentProducts

## Overview

Investment products  (e.g. mutual funds, ETFs, stocks etc.) are bought and sold by the investor (or by the wealth manager on the investor’s behalf). 

The Investment Products endpoint returns all the investment products that are offered by the wealth manager, as well as the current market price. The wealth manager must specify the universe of supported investment products via the WealthOS Admin UI. 

### Available Operations

* [getConfiguredInvestmentProductPrices](#getconfiguredinvestmentproductprices) - Get Current Prices of all Investment Products
* [getConfiguredInvestmentProducts](#getconfiguredinvestmentproducts) - Get Configured Investment Products
* [getInvestmentProduct](#getinvestmentproduct) - Get details of a given Investment Product
* [getInvestmentProductPrice](#getinvestmentproductprice) - Get Current Price of an Investment Product

## getConfiguredInvestmentProductPrices

Returns current prices of all the investment products configured for this tenancy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfiguredInvestmentProductPricesRequest;
import org.openapis.openapi.models.operations.GetConfiguredInvestmentProductPricesResponse;
import org.openapis.openapi.models.operations.GetConfiguredInvestmentProductPricesSecurity;
import org.openapis.openapi.models.operations.GetConfiguredInvestmentProductPricesStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConfiguredInvestmentProductPricesRequest req = new GetConfiguredInvestmentProductPricesRequest("iusto") {{
                pageNumber = "dicta";
                pageSize = "harum";
                status = GetConfiguredInvestmentProductPricesStatusEnum.ACTIVE;
            }};            

            GetConfiguredInvestmentProductPricesResponse res = sdk.investmentProducts.getConfiguredInvestmentProductPrices(req, new GetConfiguredInvestmentProductPricesSecurity("accusamus") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConfiguredInvestmentProductPrices200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfiguredInvestmentProducts

Returns all the investment products configured for this tenancy. Request can be filtered by status to return all `active` or `inactive` investment products

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfiguredInvestmentProductsRequest;
import org.openapis.openapi.models.operations.GetConfiguredInvestmentProductsResponse;
import org.openapis.openapi.models.operations.GetConfiguredInvestmentProductsSecurity;
import org.openapis.openapi.models.operations.GetConfiguredInvestmentProductsStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConfiguredInvestmentProductsRequest req = new GetConfiguredInvestmentProductsRequest("commodi") {{
                pageNumber = "repudiandae";
                pageSize = "quae";
                status = GetConfiguredInvestmentProductsStatusEnum.ACTIVE;
            }};            

            GetConfiguredInvestmentProductsResponse res = sdk.investmentProducts.getConfiguredInvestmentProducts(req, new GetConfiguredInvestmentProductsSecurity("quidem") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConfiguredInvestmentProducts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInvestmentProduct

Returns the requested investment product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvestmentProductCategoryIDEnum;
import org.openapis.openapi.models.operations.GetInvestmentProductRequest;
import org.openapis.openapi.models.operations.GetInvestmentProductResponse;
import org.openapis.openapi.models.operations.GetInvestmentProductSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInvestmentProductRequest req = new GetInvestmentProductRequest(GetInvestmentProductCategoryIDEnum.FUNDS, "molestias", "excepturi");            

            GetInvestmentProductResponse res = sdk.investmentProducts.getInvestmentProduct(req, new GetInvestmentProductSecurity("pariatur") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getInvestmentProduct200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInvestmentProductPrice

Returns current price of the requested investment product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvestmentProductPriceCategoryIDEnum;
import org.openapis.openapi.models.operations.GetInvestmentProductPriceRequest;
import org.openapis.openapi.models.operations.GetInvestmentProductPriceResponse;
import org.openapis.openapi.models.operations.GetInvestmentProductPriceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInvestmentProductPriceRequest req = new GetInvestmentProductPriceRequest(GetInvestmentProductPriceCategoryIDEnum.FUNDS, "modi", "praesentium");            

            GetInvestmentProductPriceResponse res = sdk.investmentProducts.getInvestmentProductPrice(req, new GetInvestmentProductPriceSecurity("rem") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getInvestmentProductPrice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
