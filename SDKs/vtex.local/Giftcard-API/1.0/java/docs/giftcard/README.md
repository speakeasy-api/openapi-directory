# giftCard

### Available Operations

* [createGiftCard](#creategiftcard) - Create GiftCard
* [getGiftCardbyID](#getgiftcardbyid) - Get GiftCard by ID
* [getGiftCardusingJSON](#getgiftcardusingjson) - Get GiftCard using JSON

## createGiftCard

Creates a GiftCard for a specific user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGiftCardRequest;
import org.openapis.openapi.models.operations.CreateGiftCardResponse;
import org.openapis.openapi.models.shared.CreateGiftCardRequest;
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

            CreateGiftCardRequest req = new CreateGiftCardRequest("vel", "error",                 new CreateGiftCardRequest("rewards program", "2020-09-01T13:15:30Z", "1234", "insert example here") {{
                                multipleCredits = false;
                                multipleRedemptions = false;
                                restrictedToOwner = false;
                            }};, "deserunt", "suscipit");            

            CreateGiftCardResponse res = sdk.giftCard.createGiftCard(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGiftCardbyID

Returns associated data for a specified giftcardId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGiftCardbyIDRequest;
import org.openapis.openapi.models.operations.GetGiftCardbyIDResponse;
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

            GetGiftCardbyIDRequest req = new GetGiftCardbyIDRequest("debitis", "ipsa", "delectus");            

            GetGiftCardbyIDResponse res = sdk.giftCard.getGiftCardbyID(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGiftCardusingJSON

Returns the giftcards based on the cart data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGiftCardusingJSONRequest;
import org.openapis.openapi.models.operations.GetGiftCardusingJSONResponse;
import org.openapis.openapi.models.shared.Cart;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.GetGiftCardusingJSONRequest;
import org.openapis.openapi.models.shared.Item;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora", "suscipit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGiftCardusingJSONRequest req = new GetGiftCardusingJSONRequest("molestiae", "minus",                 new GetGiftCardusingJSONRequest(                new Cart(812169, 5288.95,                 new org.openapis.openapi.models.shared.Item[]{{
                                                                add(new Item("esse", "ipsum", 568434, "aspernatur", 18789, "ad") {{
                                                                    id = "96ed151a-05df-4c2d-9f7c-c78ca1ba928f";
                                                                    name = "Everett Breitenberg";
                                                                    price = 264555;
                                                                    productId = "qui";
                                                                    quantity = 774234;
                                                                    refId = "cum";
                                                                }}),
                                                                add(new Item("consequuntur", "repellat", 653108, "occaecati", 253291, "commodi") {{
                                                                    id = "929396fe-a759-46eb-90fa-aa2352c59559";
                                                                    name = "Charlene Nicolas";
                                                                    price = 102044;
                                                                    productId = "mollitia";
                                                                    quantity = 208876;
                                                                    refId = "culpa";
                                                                }}),
                                                            }}, 466311, "molestiae", "velit", 623510, 158969);,                 new Client("quis", "vitae", "laborum"););) {{
                restRange = "animi";
            }};            

            GetGiftCardusingJSONResponse res = sdk.giftCard.getGiftCardusingJSON(req);

            if (res.response2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
