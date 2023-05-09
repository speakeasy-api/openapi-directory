# crossSelling

### Available Operations

* [productSearchAccessories](#productsearchaccessories) - Get Product Search of Accessories
* [productSearchShowTogether](#productsearchshowtogether) - Get Product Search of Show Together
* [productSearchSimilars](#productsearchsimilars) - Get Product Search of Similars
* [productSearchSuggestions](#productsearchsuggestions) - Get Product Search of Suggestions
* [productSearchWhoBoughtAlsoBought](#productsearchwhoboughtalsobought) - Get Product Search of Who Bought Also Bought
* [productSearchWhoSawAlsoBought](#productsearchwhosawalsobought) - Get Product Search of Who Saw Also Bought
* [productSearchWhoSawAlsoSaw](#productsearchwhosawalsosaw) - Get Product Search of Who Saw Also Saw

## productSearchAccessories

Retrieves general information about the product's accessories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductSearchAccessoriesRequest;
import org.openapis.openapi.models.operations.ProductSearchAccessoriesResponse;
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

            ProductSearchAccessoriesRequest req = new ProductSearchAccessoriesRequest("application/json", "application/json", 1L);            

            ProductSearchAccessoriesResponse res = sdk.crossSelling.productSearchAccessories(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productSearchShowTogether

Retrieves general information about the products that are show together with the product in question.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductSearchShowTogetherRequest;
import org.openapis.openapi.models.operations.ProductSearchShowTogetherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "illum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProductSearchShowTogetherRequest req = new ProductSearchShowTogetherRequest("application/json", "application/json", 1L);            

            ProductSearchShowTogetherResponse res = sdk.crossSelling.productSearchShowTogether(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productSearchSimilars

Retrieves general information about related product searches.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductSearchSimilarsRequest;
import org.openapis.openapi.models.operations.ProductSearchSimilarsResponse;
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

            ProductSearchSimilarsRequest req = new ProductSearchSimilarsRequest("application/json", "application/json", 1L);            

            ProductSearchSimilarsResponse res = sdk.crossSelling.productSearchSimilars(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productSearchSuggestions

Retrieves general information about other product suggestions related to the product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductSearchSuggestionsRequest;
import org.openapis.openapi.models.operations.ProductSearchSuggestionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "suscipit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProductSearchSuggestionsRequest req = new ProductSearchSuggestionsRequest("application/json", "application/json", 1L);            

            ProductSearchSuggestionsResponse res = sdk.crossSelling.productSearchSuggestions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productSearchWhoBoughtAlsoBought

Retrieves general information about other related products that the user also bought.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductSearchWhoBoughtAlsoBoughtRequest;
import org.openapis.openapi.models.operations.ProductSearchWhoBoughtAlsoBoughtResponse;
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

            ProductSearchWhoBoughtAlsoBoughtRequest req = new ProductSearchWhoBoughtAlsoBoughtRequest("application/json", "application/json", "1");            

            ProductSearchWhoBoughtAlsoBoughtResponse res = sdk.crossSelling.productSearchWhoBoughtAlsoBought(req);

            if (res.productSearchWhoBoughtAlsoBought200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productSearchWhoSawAlsoBought

Retrieves general information about other related products that the users saw and also bought.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductSearchWhoSawAlsoBoughtRequest;
import org.openapis.openapi.models.operations.ProductSearchWhoSawAlsoBoughtResponse;
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

            ProductSearchWhoSawAlsoBoughtRequest req = new ProductSearchWhoSawAlsoBoughtRequest("application/json", "application/json", "1");            

            ProductSearchWhoSawAlsoBoughtResponse res = sdk.crossSelling.productSearchWhoSawAlsoBought(req);

            if (res.productSearchWhoSawAlsoBought200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productSearchWhoSawAlsoSaw

Retrieves general information about other related products that the users also saw.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductSearchWhoSawAlsoSawRequest;
import org.openapis.openapi.models.operations.ProductSearchWhoSawAlsoSawResponse;
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

            ProductSearchWhoSawAlsoSawRequest req = new ProductSearchWhoSawAlsoSawRequest("application/json", "application/json", 1L);            

            ProductSearchWhoSawAlsoSawResponse res = sdk.crossSelling.productSearchWhoSawAlsoSaw(req);

            if (res.productSearchWhoSawAlsoSaw200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
