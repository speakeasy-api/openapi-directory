# pricesLegacyV1

### Available Operations

* [deletebyskuId](#deletebyskuid) - Delete Price by SKU Id
* [getallpaged](#getallpaged) - Get all paged prices
* [pricebycontext](#pricebycontext) - Get Price by context
* [pricebyskuId](#pricebyskuid) - Get Price by SKU ID
* [pricebyskuIdandtradePolicy](#pricebyskuidandtradepolicy) - Get Price by SKU ID and Trade Policy
* [saveprice](#saveprice) - Save Price

## deletebyskuId

Delete all prices from an SKU. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletebyskuIdRequest;
import org.openapis.openapi.models.operations.DeletebyskuIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore", "dolorum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletebyskuIdRequest req = new DeletebyskuIdRequest("nesciunt", "quae", "{{accountName}}", "recusandae");            

            DeletebyskuIdResponse res = sdk.pricesLegacyV1.deletebyskuId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getallpaged

Get all paged prices. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetallpagedRequest;
import org.openapis.openapi.models.operations.GetallpagedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis", "quaerat") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetallpagedRequest req = new GetallpagedRequest("molestiae", "ex", "{{accountName}}", "ut", "culpa");            

            GetallpagedResponse res = sdk.pricesLegacyV1.getallpaged(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pricebycontext

Get price by context. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PricebycontextRequest;
import org.openapis.openapi.models.operations.PricebycontextResponse;
import org.openapis.openapi.models.shared.PricebycontextRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci", "debitis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PricebycontextRequest req = new PricebycontextRequest("laudantium", "eum",                 new PricebycontextRequest(367927, 928219, 456520, "provident", "quis", "eum");, "{{accountName}}");            

            PricebycontextResponse res = sdk.pricesLegacyV1.pricebycontext(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pricebyskuId

Price by SKU ID              
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://developers.vtex.com/docs/api-reference/pricing-api)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PricebyskuIdRequest;
import org.openapis.openapi.models.operations.PricebyskuIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "provident") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PricebyskuIdRequest req = new PricebyskuIdRequest("aspernatur", "ullam", "{{accountName}}", "quasi");            

            PricebyskuIdResponse res = sdk.pricesLegacyV1.pricebyskuId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pricebyskuIdandtradePolicy

Retrieve price by SKU ID and Trade Policy. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PricebyskuIdandtradePolicyRequest;
import org.openapis.openapi.models.operations.PricebyskuIdandtradePolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi", "nostrum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PricebyskuIdandtradePolicyRequest req = new PricebyskuIdandtradePolicyRequest("mollitia", "provident", "{{accountName}}", "possimus", "animi");            

            PricebyskuIdandtradePolicyResponse res = sdk.pricesLegacyV1.pricebyskuIdandtradePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveprice

Save price. 
> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) 

> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SavepriceRequest;
import org.openapis.openapi.models.operations.SavepriceResponse;
import org.openapis.openapi.models.shared.SavepriceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex", "aliquid") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SavepriceRequest req = new SavepriceRequest("accusantium", "repellat",                 new org.openapis.openapi.models.shared.SavepriceRequest[]{{
                                add(new SavepriceRequest(266697, 976226, 564064, 889794, 956933, "cumque", "vitae") {{
                                    itemId = 351893;
                                    listPrice = 448143;
                                    price = 721407;
                                    salesChannel = 937636;
                                    sellerId = 637583;
                                    validFrom = "laborum";
                                    validTo = "placeat";
                                }}),
                                add(new SavepriceRequest(21688, 241901, 137251, 432281, 260628, "rem", "at") {{
                                    itemId = 698249;
                                    listPrice = 272229;
                                    price = 335498;
                                    salesChannel = 82057;
                                    sellerId = 147685;
                                    validFrom = "cumque";
                                    validTo = "quae";
                                }}),
                                add(new SavepriceRequest(583404, 589695, 936469, 745398, 940782, "illum", "eaque") {{
                                    itemId = 773084;
                                    listPrice = 179410;
                                    price = 958741;
                                    salesChannel = 433279;
                                    sellerId = 117320;
                                    validFrom = "minima";
                                    validTo = "beatae";
                                }}),
                                add(new SavepriceRequest(211534, 147808, 764995, 684935, 189062, "animi", "necessitatibus") {{
                                    itemId = 935833;
                                    listPrice = 596211;
                                    price = 983427;
                                    salesChannel = 891801;
                                    sellerId = 399802;
                                    validFrom = "porro";
                                    validTo = "suscipit";
                                }}),
                            }}, "{{accountName}}");            

            SavepriceResponse res = sdk.pricesLegacyV1.saveprice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
