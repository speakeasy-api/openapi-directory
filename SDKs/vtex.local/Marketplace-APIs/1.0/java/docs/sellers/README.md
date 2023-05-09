# sellers

## Overview

Get sellers' data

### Available Operations

* [getListSellers](#getlistsellers) - List Sellers
* [getRetrieveSeller](#getretrieveseller) - Get Seller data by ID
* [updateSeller](#updateseller) - Update Seller by Seller ID
* [upsertSellerRequest](#upsertsellerrequest) - Configure Seller Account

## getListSellers

This endpoint lists all Sellers. This call's results can be filtered by [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data) through the `sc` query param.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListSellersRequest;
import org.openapis.openapi.models.operations.GetListSellersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "in") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetListSellersRequest req = new GetListSellersRequest("illum", "maiores", "rerum", "dicta") {{
                from = 2974.37;
                group = "cumque";
                integration = "facere";
                isActive = false;
                isBetterScope = false;
                isVtex = false;
                keyword = "ea";
                sc = "aliquid";
                sellerType = 675439L;
                sort = "accusamus";
                to = 2497.96;
            }};            

            GetListSellersResponse res = sdk.sellers.getListSellers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRetrieveSeller

Marketplace operator may call this endpoint to retrieve information about a specific seller by filtering by ID. It is also possible to filter results by sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) through the `sc` query param.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRetrieveSellerRequest;
import org.openapis.openapi.models.operations.GetRetrieveSellerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "enim") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRetrieveSellerRequest req = new GetRetrieveSellerRequest("accusamus", "delectus", "quidem", "provident", "nam") {{
                sc = "id";
            }};            

            GetRetrieveSellerResponse res = sdk.sellers.getRetrieveSeller(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSeller

This endpoint allows marketplace operators to update the information of sellers connected to their account. You can replace a path's value with another value in order to update that single information. There is no need to fill all the body params available, only the one you wish to update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSellerRequest;
import org.openapis.openapi.models.operations.UpdateSellerRequestBody;
import org.openapis.openapi.models.operations.UpdateSellerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis", "deleniti") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSellerRequest req = new UpdateSellerRequest("sapiente", "amet", "deserunt", "nisi", "vel") {{
                requestBody = new org.openapis.openapi.models.operations.UpdateSellerRequestBody[]{{
                    add(new UpdateSellerRequestBody("perferendis", "nihil", false) {{
                        operation = "omnis";
                        path = "molestiae";
                        value = false;
                    }}),
                    add(new UpdateSellerRequestBody("id", "labore", false) {{
                        operation = "magnam";
                        path = "distinctio";
                        value = false;
                    }}),
                    add(new UpdateSellerRequestBody("natus", "nobis", false) {{
                        operation = "labore";
                        path = "suscipit";
                        value = false;
                    }}),
                }};
            }};            

            UpdateSellerResponse res = sdk.sellers.updateSeller(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upsertSellerRequest

This endpoint is used by marketplace operators to configure the accounts of sellers that have already accepted the invitation to join their marketplaces. 

For marketplaces to [add sellers](https://help.vtex.com/en/tutorial/adding-a-seller--tutorials_392) without the [Seller Invite](https://help.vtex.com/en/tutorial/marketplace-invited-sellers--6rb2FkcslmDueJ689Ulb9A) feature, call this endpoint directly. 

This call includes all the information a seller needs to activate their account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpsertSellerRequestRequest;
import org.openapis.openapi.models.operations.UpsertSellerRequestResponse;
import org.openapis.openapi.models.shared.AvailableSalesChannel;
import org.openapis.openapi.models.shared.Groups;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpsertSellerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "vero") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpsertSellerRequestRequest req = new UpsertSellerRequestRequest("aspernatur", "architecto",                 new UpsertSellerRequest("magnam", "et", false,                 new org.openapis.openapi.models.shared.AvailableSalesChannel[]{{
                                                add(new AvailableSalesChannel(652103, false, "ad") {{
                                                    id = 354047;
                                                    isSelected = false;
                                                    name = "Miss Julian Marvin";
                                                }}),
                                                add(new AvailableSalesChannel(984043, false, "debitis") {{
                                                    id = 431418;
                                                    isSelected = false;
                                                    name = "Jana Connelly III";
                                                }}),
                                                add(new AvailableSalesChannel(919483, false, "ullam") {{
                                                    id = 260341;
                                                    isSelected = false;
                                                    name = "Alfredo Prosacco Sr.";
                                                }}),
                                            }}, "expedita", "nihil", "repellat", "quibusdam", "sed", "saepe", "pariatur", "accusantium", "consequuntur", false, false, false, "praesentium", "natus", "magni", 1238.2, "quo",                 new java.util.HashMap<String, Object>() {{
                                                put("pariatur", "maxime");
                                                put("ea", "excepturi");
                                                put("odit", "ea");
                                                put("accusantium", "ab");
                                            }}, 982575, "quidem", "ipsam", "voluptate") {{
                                groups = new org.openapis.openapi.models.shared.Groups[]{{
                                    add(new Groups() {{
                                        id = "b0d5f0d3-0c5f-4bb2-9870-53202c73d5fe";
                                        name = "Miss Cesar Metz";
                                    }}),
                                    add(new Groups() {{
                                        id = "8909b3fe-49a8-4d9c-bf48-633323f9b77f";
                                        name = "Mr. Lee Funk III";
                                    }}),
                                }};
                            }};, "odio", "quaerat");            

            UpsertSellerRequestResponse res = sdk.sellers.upsertSellerRequest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
