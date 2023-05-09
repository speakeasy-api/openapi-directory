# customPrices

### Available Operations

* [getVCustomPricesSessionSchema](#getvcustompricessessionschema) - Get custom prices schema
* [postVCustomPricesSessionSchema](#postvcustompricessessionschema) - Create or Update custom prices schema

## getVCustomPricesSessionSchema

Retrieves all custom price for all shopping scenarios

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVCustomPricesSessionSchemaRequest;
import org.openapis.openapi.models.operations.GetVCustomPricesSessionSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVCustomPricesSessionSchemaRequest req = new GetVCustomPricesSessionSchemaRequest("distinctio", "quibusdam");            

            GetVCustomPricesSessionSchemaResponse res = sdk.customPrices.getVCustomPricesSessionSchema(req);

            if (res.requestBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVCustomPricesSessionSchema

Creates a new custom price for a shopping scenario or updates an existing one

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVCustomPricesSessionSchemaRequest;
import org.openapis.openapi.models.operations.PostVCustomPricesSessionSchemaRequestBody;
import org.openapis.openapi.models.operations.PostVCustomPricesSessionSchemaRequestBodyFields;
import org.openapis.openapi.models.operations.PostVCustomPricesSessionSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVCustomPricesSessionSchemaRequest req = new PostVCustomPricesSessionSchemaRequest("unde", "nulla") {{
                requestBody = new PostVCustomPricesSessionSchemaRequestBody(                new org.openapis.openapi.models.operations.PostVCustomPricesSessionSchemaRequestBodyFields[]{{
                                    add(new PostVCustomPricesSessionSchemaRequestBodyFields("magnam", "debitis") {{
                                        name = "Ben Mueller";
                                        type = "iure";
                                    }}),
                                    add(new PostVCustomPricesSessionSchemaRequestBodyFields("placeat", "voluptatum") {{
                                        name = "Lucia Goldner";
                                        type = "minus";
                                    }}),
                                    add(new PostVCustomPricesSessionSchemaRequestBodyFields("quis", "veritatis") {{
                                        name = "Miriam Huel";
                                        type = "ab";
                                    }}),
                                }}) {{
                    useEmail = false;
                }};;
            }};            

            PostVCustomPricesSessionSchemaResponse res = sdk.customPrices.postVCustomPricesSessionSchema(req);

            if (res.requestBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
