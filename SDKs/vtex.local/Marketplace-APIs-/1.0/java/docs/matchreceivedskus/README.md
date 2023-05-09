# matchReceivedSKUs

## Overview

Match SKU suggestions received in the marketplace

### Available Operations

* [match](#match) - Match Received SKUs individually
* [matchMultiple](#matchmultiple) - Match Multiple Received SKUs

## match

All SKUs sent from a seller to a marketplace must be reviewed and matched. Actions in the matching process are added in the request body through the [matchType] object. Match type actions include: 

1. `newproduct`: match the SKU as a new product. 

2. `itemMatch`: associate the received SKU to an existing SKU. 

3. `productMatch`: associate the received SKU to an existing product. 

4. `deny`: deny the received SKU. 

5. `pending`: the received SKU requires attention. 

6. `incomplete`: the received SKU is lacking information to be matched. 

7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched. 

Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MatchRequest;
import org.openapis.openapi.models.operations.MatchResponse;
import org.openapis.openapi.models.shared.MatchRequest;
import org.openapis.openapi.models.shared.Product;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Sku;
import org.openapis.openapi.models.shared.Specifications;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam", "commodi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            MatchRequest req = new MatchRequest("quam", "molestiae",                 new MatchRequest("velit", "error", "quia") {{
                                product = new Product(338007, 110375, "laborum", "animi", "enim");;
                                productRef = "odit";
                                sku = new Sku(                new String[]{{
                                                    add("sequi"),
                                                    add("tenetur"),
                                                    add("ipsam"),
                                                    add("id"),
                                                }}, 820994,                 new Object[]{{
                                                    add("quasi"),
                                                }}, 622846, "temporibus", "laborum", "quasi",                 new Specifications("reiciendis");, 976460, 878194, 468651);;
                                skuRef = "praesentium";
                            }};, "voluptatibus", "ipsa", "omnis", "voluptate", "cum");            

            MatchResponse res = sdk.matchReceivedSKUs.match(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## matchMultiple

This endpoint allows the user to bulk approve, deny, or associate received SKUs. In a single request, you can match up to 25 received SKUs from your sellers.

Through the `actionName` attribute you can select the operation you want to apply to the received SKU. 

Actions include: 

1. `newproduct`: match the SKU as a new product. 

2. `skuassociation`: associate the received SKU to an existing SKU. 

3. `productassociation`: associate the received SKU to an existing product. 

4. `deny`: deny the received SKU.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MatchMultipleRequest;
import org.openapis.openapi.models.operations.MatchMultipleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "doloremque") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            MatchMultipleRequest req = new MatchMultipleRequest("reprehenderit", "ut",                 new Object[][]{{
                                add(new Object[]{{
                                    add("corporis"),
                                }}),
                                add(new Object[]{{
                                    add("iusto"),
                                    add("dicta"),
                                }}),
                                add(new Object[]{{
                                    add("enim"),
                                    add("accusamus"),
                                    add("commodi"),
                                }}),
                                add(new Object[]{{
                                    add("quae"),
                                    add("ipsum"),
                                    add("quidem"),
                                    add("molestias"),
                                }}),
                            }}, "excepturi", "pariatur");            

            MatchMultipleResponse res = sdk.matchReceivedSKUs.matchMultiple(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
