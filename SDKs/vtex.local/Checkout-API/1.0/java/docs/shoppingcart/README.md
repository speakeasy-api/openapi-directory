# shoppingCart

### Available Operations

* [addCoupons](#addcoupons) - Add coupons to the cart
* [cartSimulation](#cartsimulation) - Cart simulation
* [createANewCart](#createanewcart) - Get current or create a new cart
* [getCartInformationById](#getcartinformationbyid) - Get cart information by ID
* [getCartInstallments](#getcartinstallments) - Cart installments
* [ignoreProfileData](#ignoreprofiledata) - Ignore profile data
* [items](#items) - Add cart items
* [itemsUpdate](#itemsupdate) - Update cart items
* [priceChange](#pricechange) - Change price
* [removeAllItems](#removeallitems) - Remove all items
* [removeallpersonaldata](#removeallpersonaldata) - Remove all personal data

## addCoupons

Use this request to add coupons to a given shopping cart.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCouponsRequest;
import org.openapis.openapi.models.operations.AddCouponsRequestBody;
import org.openapis.openapi.models.operations.AddCouponsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam", "molestias") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddCouponsRequest req = new AddCouponsRequest("temporibus", "qui",                 new AddCouponsRequestBody() {{
                                text = "neque";
                            }};, "fugit");            

            AddCouponsResponse res = sdk.shoppingCart.addCoupons(req);

            if (res.addCoupons200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cartSimulation

This endpoint is used to simulate a cart in VTEX Checkout.

It receives an **SKU ID**, the **quantity** of items in the cart and the ID of the **Seller**.

It sends back all information about the cart, such as the selling price of each item, rates and benefits data, payment and logistics info.

This is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.

**Important**: The fields (`sku id`, `quantity`, `seller`, `country`, `postalCode` and `geoCoordinates`) are just examples of content that you can simulate in your cart. You can add more fields to the request as per your need. Access the [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) guide to check the available fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CartSimulationRequest;
import org.openapis.openapi.models.operations.CartSimulationRequestBody;
import org.openapis.openapi.models.operations.CartSimulationRequestBodyItems;
import org.openapis.openapi.models.operations.CartSimulationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni", "odio") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CartSimulationRequest req = new CartSimulationRequest("sunt", "ullam") {{
                requestBody = new CartSimulationRequestBody() {{
                    country = "BRA";
                    geoCoordinates = new Double[]{{
                        add(-47.924747467041016),
                        add(-47.924747467041016),
                        add(-47.924747467041016),
                    }};
                    items = new org.openapis.openapi.models.operations.CartSimulationRequestBodyItems[]{{
                        add(new CartSimulationRequestBodyItems() {{
                            id = "1";
                            quantity = 1;
                            seller = "1";
                        }}),
                        add(new CartSimulationRequestBodyItems() {{
                            id = "1";
                            quantity = 1;
                            seller = "1";
                        }}),
                        add(new CartSimulationRequestBodyItems() {{
                            id = "1";
                            quantity = 1;
                            seller = "1";
                        }}),
                        add(new CartSimulationRequestBodyItems() {{
                            id = "1";
                            quantity = 1;
                            seller = "1";
                        }}),
                    }};
                    postalCode = "12345-000";
                }};;
                rnbBehavior = 30452L;
                sc = 1L;
            }};            

            CartSimulationResponse res = sdk.shoppingCart.cartSimulation(req);

            if (res.cartSimulation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createANewCart

You can use this request to get your current shopping cart information (`orderFormId`) or to create a new cart.

**Important**: To create a new empty shopping cart you need to send this request with the query param `forceNewCart=true`.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` obtained in response is the identification code of the newly created cart.

> This request has a time out of 45 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateANewCartRequest;
import org.openapis.openapi.models.operations.CreateANewCartResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque", "soluta") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateANewCartRequest req = new CreateANewCartRequest("nobis", "et") {{
                forceNewCart = false;
            }};            

            CreateANewCartResponse res = sdk.shoppingCart.createANewCart(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCartInformationById

Use this request to get all information associated to a given shopping  cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCartInformationByIdRequest;
import org.openapis.openapi.models.operations.GetCartInformationByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "ipsum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCartInformationByIdRequest req = new GetCartInformationByIdRequest("veritatis", "nobis", "quos") {{
                refreshOutdatedData = false;
            }};            

            GetCartInformationByIdResponse res = sdk.shoppingCart.getCartInformationById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCartInstallments

Retrieves possible amount of installments and respective values for a given cart with a given payment method.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

This endpoint can be used to get the installment options for only one payment method at a time.

This endpoint should be called only after the selected `orderForm` already has a `paymentData`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCartInstallmentsRequest;
import org.openapis.openapi.models.operations.GetCartInstallmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore", "cupiditate") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCartInstallmentsRequest req = new GetCartInstallmentsRequest("aperiam", "delectus", "dolorem", 292147L);            

            GetCartInstallmentsResponse res = sdk.shoppingCart.getCartInstallments(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ignoreProfileData

When a shopper provides an email address at Checkout, the platform tries to retrieve existing profile information for that email and add it to the shopping cart information. Use this request if you want to change this behavior for a given cart, meaning profile information will not be included in the order automattically.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

Note that this request will only work if you have not sent the `clientProfileData` to the cart yet. Sending it to a cart that already has a `clientProfileData` should return a status `403 Forbidden` error, with an `Access denied` message.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IgnoreProfileDataRequest;
import org.openapis.openapi.models.operations.IgnoreProfileDataRequestBody;
import org.openapis.openapi.models.operations.IgnoreProfileDataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "adipisci") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IgnoreProfileDataRequest req = new IgnoreProfileDataRequest("dolorum", "architecto",                 new IgnoreProfileDataRequestBody() {{
                                ignoreProfileData = false;
                            }};, "quae");            

            IgnoreProfileDataResponse res = sdk.shoppingCart.ignoreProfileData(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## items

Use this request to add a new item to the shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemsRequest;
import org.openapis.openapi.models.operations.ItemsRequestBody;
import org.openapis.openapi.models.operations.ItemsRequestBodyOrderItems;
import org.openapis.openapi.models.operations.ItemsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "quas") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ItemsRequest req = new ItemsRequest("itaque", "consequatur",                 new ItemsRequestBody() {{
                                orderItems = new org.openapis.openapi.models.operations.ItemsRequestBodyOrderItems[]{{
                                    add(new ItemsRequestBodyOrderItems("2005", 785153L, 3, "1") {{
                                        id = "2005";
                                        index = 833038L;
                                        price = 1099L;
                                        quantity = 3;
                                        seller = "1";
                                    }}),
                                    add(new ItemsRequestBodyOrderItems("2005", 281730L, 3, "1") {{
                                        id = "2005";
                                        index = 984330L;
                                        price = 1099L;
                                        quantity = 3;
                                        seller = "1";
                                    }}),
                                    add(new ItemsRequestBodyOrderItems("2005", 586410L, 3, "1") {{
                                        id = "2005";
                                        index = 703495L;
                                        price = 1099L;
                                        quantity = 3;
                                        seller = "1";
                                    }}),
                                }};
                            }};, "qui") {{
                allowedOutdatedData = new Object[]{{
                    add("laudantium"),
                }};
            }};            

            ItemsResponse res = sdk.shoppingCart.items(req);

            if (res.items200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## itemsUpdate

You can use this request to:

1. Change the quantity of one or more items in a specific cart.
2. Remove an item from the cart (by sending the `quantity` value = `0` in the request body).

**Important**: To remove all items from the cart at the same time, use the [Remove all items](https://developers.vtex.com/vtex-rest-api/reference/removeallitems) endpoint.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 45 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ItemsUpdateRequest;
import org.openapis.openapi.models.operations.ItemsUpdateRequestBody;
import org.openapis.openapi.models.operations.ItemsUpdateRequestBodyOrderItems;
import org.openapis.openapi.models.operations.ItemsUpdateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio", "occaecati") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ItemsUpdateRequest req = new ItemsUpdateRequest("voluptatibus", "quisquam",                 new ItemsUpdateRequestBody() {{
                                orderItems = new org.openapis.openapi.models.operations.ItemsUpdateRequestBodyOrderItems[]{{
                                    add(new ItemsUpdateRequestBodyOrderItems(338159L, 3) {{
                                        index = 606476L;
                                        quantity = 3;
                                    }}),
                                    add(new ItemsUpdateRequestBodyOrderItems(961571L, 3) {{
                                        index = 218403L;
                                        quantity = 3;
                                    }}),
                                    add(new ItemsUpdateRequestBodyOrderItems(231701L, 3) {{
                                        index = 455169L;
                                        quantity = 3;
                                    }}),
                                    add(new ItemsUpdateRequestBodyOrderItems(949319L, 3) {{
                                        index = 878870L;
                                        quantity = 3;
                                    }}),
                                }};
                            }};, "dignissimos") {{
                allowedOutdatedData = new Object[]{{
                    add("distinctio"),
                    add("quod"),
                    add("odio"),
                    add("similique"),
                }};
            }};            

            ItemsUpdateResponse res = sdk.shoppingCart.itemsUpdate(req);

            if (res.itemsUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## priceChange

This request changes the price of an SKU in a cart. You can also perform type of bulk price change with the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#itemsupdate)

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

You need to inform which cart you are referring to, by sending its `orderFormId`; and what is the item whose price you want to change, by sending its `itemIndex`.

You also need to pass the new price value in the body.

Remember that, to use this endpoint, the feature of *manual price* must be active. To check if it's active, use the [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration) endpoint. To make it active, use the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) endpoint, making the `allowManualPrice` field `true`.

> Whenever you use this request to change the price of an item, all items in that cart with the same SKU are affected by this change. This applies even to items that share the SKU but have been separated into different objects in the `items` array due to customizations or attachments, for example.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PriceChangeRequest;
import org.openapis.openapi.models.operations.PriceChangeResponse;
import org.openapis.openapi.models.shared.PriceChangeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis", "vero") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PriceChangeRequest req = new PriceChangeRequest("ducimus", "dolore",                 new PriceChangeRequest(844550);, "illum", "sequi");            

            PriceChangeResponse res = sdk.shoppingCart.priceChange(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeAllItems

This request removes all items from a given cart, leaving it empty.

You must send an empty JSON in the body of the request.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

**Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAllItemsRequest;
import org.openapis.openapi.models.operations.RemoveAllItemsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus", "impedit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveAllItemsRequest req = new RemoveAllItemsRequest("aut", "voluptatibus", "exercitationem") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("fugit", "porro");
                    put("maiores", "doloribus");
                    put("iusto", "eligendi");
                    put("ducimus", "alias");
                }};
            }};            

            RemoveAllItemsResponse res = sdk.shoppingCart.removeAllItems(req);

            if (res.removeAllItems200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeallpersonaldata

This call removes all user information, making a cart anonymous while leaving the items.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information about it. Hence, the `orderFormId` is the identification code of a given cart.

This call works by creating a new orderForm, setting a new cookie, and returning a redirect 302 to the cart URL (`/checkout/#/orderform`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveallpersonaldataRequest;
import org.openapis.openapi.models.operations.RemoveallpersonaldataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia", "tempora") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveallpersonaldataRequest req = new RemoveallpersonaldataRequest("ipsam", "ea", "aspernatur");            

            RemoveallpersonaldataResponse res = sdk.shoppingCart.removeallpersonaldata(req);

            if (res.removeallpersonaldata200TextPlainObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
