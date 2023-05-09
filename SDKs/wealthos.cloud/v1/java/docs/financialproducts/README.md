# financialProducts

## Overview

Financial Products are the tax wrapper investment vehicles offered by the Wealth Manager (e.g. General Investment Accounts, Stocks and Shares ISAs, SIPPs, LISAs etc.). Currently WealthOS supports General Investment Accounts (GIAs). 

The Financial Products endpoint returns all financial products and their configurations setup by the Wealth Manager via the WealthOS Admin UI.

### Available Operations

* [getAllFinancialProducts](#getallfinancialproducts) - Get All Financial Products

## getAllFinancialProducts

Returns all the financial products setup for the tenant in an array

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllFinancialProductsRequest;
import org.openapis.openapi.models.operations.GetAllFinancialProductsResponse;
import org.openapis.openapi.models.operations.GetAllFinancialProductsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllFinancialProductsRequest req = new GetAllFinancialProductsRequest("modi") {{
                productTypes = "qui";
            }};            

            GetAllFinancialProductsResponse res = sdk.financialProducts.getAllFinancialProducts(req, new GetAllFinancialProductsSecurity("impedit") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getAllFinancialProducts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
