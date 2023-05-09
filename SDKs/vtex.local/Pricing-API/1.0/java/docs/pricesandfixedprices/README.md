# pricesAndFixedPrices

### Available Operations

* [createUpdatePriceOrFixedPrice](#createupdatepriceorfixedprice) - Create or Update Base Price or Fixed Prices
* [deletePrice](#deleteprice) - Delete Price
* [deletefixedpricesonapricetableortradepolicy](#deletefixedpricesonapricetableortradepolicy) - Delete Fixed Prices on a price table or trade policy
* [getComputedPricebypricetable](#getcomputedpricebypricetable) - Get Computed Price by price table or trade policy
* [getFixedPrices](#getfixedprices) - Get Fixed Prices
* [getFixedPricesonapricetable](#getfixedpricesonapricetable) - Get Fixed Prices on a price table or trade policy
* [getPrice](#getprice) - Get Price
* [createorupdatefixedpricesonpricetableortradepolicy](#createorupdatefixedpricesonpricetableortradepolicy) - Create or Update Fixed Prices on a price table or trade policy

## createUpdatePriceOrFixedPrice

Creates or updates an SKU Base Price or Fixed Prices. The **base price** is the basic selling price of a product, it comprises the cost price and the markup wanted in the sale of the product. The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated.

 <p> You may optionally set a list price. Additionally, you may set either a cost price or a markup value. By defining either one of them, the other will be calculated to conform to the formula <code>costPrice * (1 + markup) = basePrice</code>.</p> <h2>Request body example</h2>

```json
{
    "markup": 30,
    "basePrice": 100,
    "listPrice": 35,
    "fixedPrices": [
        {
            "tradePolicyId": "1",
            "value": 31,
            "listPrice": 32,
            "minQuantity": 1,
            "dateRange": {
                "from": "2022-05-21T22:00:00Z",
                "to": "2023-05-28T22:00:00Z"
            }
        },
        {
            "tradePolicyId": "1",
            "value": 31.5,
            "listPrice": 33,
            "minQuantity": 2
        }
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUpdatePriceOrFixedPriceRequest;
import org.openapis.openapi.models.operations.CreateUpdatePriceOrFixedPriceRequestBody;
import org.openapis.openapi.models.operations.CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices;
import org.openapis.openapi.models.operations.CreateUpdatePriceOrFixedPriceRequestBodyFixedPricesDateRange;
import org.openapis.openapi.models.operations.CreateUpdatePriceOrFixedPriceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "illum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUpdatePriceOrFixedPriceRequest req = new CreateUpdatePriceOrFixedPriceRequest("application/json", "maiores", 1L) {{
                requestBody = new CreateUpdatePriceOrFixedPriceRequestBody(6994.79, 1162.02, 297437L) {{
                    costPrice = 7670.24;
                    fixedPrices = new org.openapis.openapi.models.operations.CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices[]{{
                        add(new CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices(2L, "1", 50.5) {{
                            dateRange = new CreateUpdatePriceOrFixedPriceRequestBodyFixedPricesDateRange("2021-12-30T22:00:00-03:00", "2021-12-30T22:00:00-03:00") {{
                                from = "2021-12-30T22:00:00-03:00";
                                to = "2021-12-30T22:00:00-03:00";
                            }};
                            listPrice = 50.5;
                            minQuantity = 2L;
                            tradePolicyId = "1";
                            value = 50.5;
                        }}),
                        add(new CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices(2L, "1", 50.5) {{
                            dateRange = new CreateUpdatePriceOrFixedPriceRequestBodyFixedPricesDateRange("2021-12-30T22:00:00-03:00", "2021-12-30T22:00:00-03:00") {{
                                from = "2021-12-30T22:00:00-03:00";
                                to = "2021-12-30T22:00:00-03:00";
                            }};
                            listPrice = 50.5;
                            minQuantity = 2L;
                            tradePolicyId = "1";
                            value = 50.5;
                        }}),
                        add(new CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices(2L, "1", 50.5) {{
                            dateRange = new CreateUpdatePriceOrFixedPriceRequestBodyFixedPricesDateRange("2021-12-30T22:00:00-03:00", "2021-12-30T22:00:00-03:00") {{
                                from = "2021-12-30T22:00:00-03:00";
                                to = "2021-12-30T22:00:00-03:00";
                            }};
                            listPrice = 50.5;
                            minQuantity = 2L;
                            tradePolicyId = "1";
                            value = 50.5;
                        }}),
                        add(new CreateUpdatePriceOrFixedPriceRequestBodyFixedPrices(2L, "1", 50.5) {{
                            dateRange = new CreateUpdatePriceOrFixedPriceRequestBodyFixedPricesDateRange("2021-12-30T22:00:00-03:00", "2021-12-30T22:00:00-03:00") {{
                                from = "2021-12-30T22:00:00-03:00";
                                to = "2021-12-30T22:00:00-03:00";
                            }};
                            listPrice = 50.5;
                            minQuantity = 2L;
                            tradePolicyId = "1";
                            value = 50.5;
                        }}),
                    }};
                }};;
            }};            

            CreateUpdatePriceOrFixedPriceResponse res = sdk.pricesAndFixedPrices.createUpdatePriceOrFixedPrice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePrice

Deletes the Base Price and all available Fixed Prices for an SKU in all trade policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePriceRequest;
import org.openapis.openapi.models.operations.DeletePriceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea", "aliquid") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePriceRequest req = new DeletePriceRequest("laborum", "accusamus", 1L);            

            DeletePriceResponse res = sdk.pricesAndFixedPrices.deletePrice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletefixedpricesonapricetableortradepolicy

Deletes all Fixed Prices of an SKU in a specific Price Table or Trade Policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletefixedpricesonapricetableortradepolicyRequest;
import org.openapis.openapi.models.operations.DeletefixedpricesonapricetableortradepolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non", "occaecati") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletefixedpricesonapricetableortradepolicyRequest req = new DeletefixedpricesonapricetableortradepolicyRequest("application/json", "enim", 1L, "gold");            

            DeletefixedpricesonapricetableortradepolicyResponse res = sdk.pricesAndFixedPrices.deletefixedpricesonapricetableortradepolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComputedPricebypricetable

Gets the Computed Price, which is the price after all the steps in the Pricing pipeline, for an SKU in a specific price table or trade policy. 

## Response body example

```json
{
    "tradePolicyId": "1",
    "listPrice": 30,
    "costPrice": 76.92,
    "sellingPrice": 18.9,
    "priceValidUntil": "2018-12-20T18:12:14Z"
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComputedPricebypricetableRequest;
import org.openapis.openapi.models.operations.GetComputedPricebypricetableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus", "delectus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComputedPricebypricetableRequest req = new GetComputedPricebypricetableRequest("application/json", "quidem", 3L, 1L, 1L, "gold", 2L);            

            GetComputedPricebypricetableResponse res = sdk.pricesAndFixedPrices.getComputedPricebypricetable(req);

            if (res.getcomputedprice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFixedPrices

The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated. This method retrieves an array of Fixed Prices for an SKU in a Trade Policy with Minimum Quantities.

 The default value for a Minimum Quantity is `1`. This means a Fixed Price will be valid for a SKU in a Trade Policy for orders containing the specified number of Minimum Quantity or above, unless a higher Minimum Quantity is specified.

 Fixed prices may, optionally, be scheduled. If so, these objects will contain the `dateRange` object with `from` and `to` properties, indicating the start and end time of the scheduled fixed price in the RFC3339 timestamp format (`YYYY-MM-DDT23:59:60Z`).

 Note that the 'Z', at the end, represents the UTC time (GMT+00:00). If it was in GMT-03:00, for example, it would be (`YYYY-MM-DDT23:59:60-03:00`).

 ## Response body example

```json
[
    {
        "tradePolicyId": "6",
        "value": 20.9,
        "listPrice": 22.9,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-03:00"
        }
    },
    {
        "tradePolicyId": "1",
        "value": 18.9,
        "listPrice": null,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-03:00"
        }
    }
]
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFixedPricesRequest;
import org.openapis.openapi.models.operations.GetFixedPricesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident", "nam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFixedPricesRequest req = new GetFixedPricesRequest("application/json", "id", 1L);            

            GetFixedPricesResponse res = sdk.pricesAndFixedPrices.getFixedPrices(req);

            if (res.fixedPrices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFixedPricesonapricetable

Retrieves all Fixed Prices on a price table or trade policy. 

## Response body example

```json
[
    {
        "tradePolicyId": "6",
        "value": 20.9,
        "listPrice": 22.9,
        "minQuantity": 1,
        "dateRange": {
            "from": "2021-12-30T22:00:00-03:00",
            "to": "2021-12-30T22:00:00-04:00"
        }
    },
    {
        "tradePolicyId": "1",
        "value": 18.9,
        "listPrice": null,
        "minQuantity": 1
    }
]
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFixedPricesonapricetableRequest;
import org.openapis.openapi.models.operations.GetFixedPricesonapricetableResponse;
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

            GetFixedPricesonapricetableRequest req = new GetFixedPricesonapricetableRequest("application/json", "sapiente", 1L, "gold");            

            GetFixedPricesonapricetableResponse res = sdk.pricesAndFixedPrices.getFixedPricesonapricetable(req);

            if (res.fixedPrices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPrice

Retrieves price data given a specific SKU ID. Within the `fixedPrices` object, there might be a list of prices for specific Trade Policies and Minimium Quantities of the SKU. Fixed Prices may also be scheduled.

 ## Response body example

```json
{
    "itemId": "1",
    "listPrice": 50,
    "costPrice": 90,
    "markup": 30,
    "basePrice": 117,
    "fixedPrices": [
        {
            "tradePolicyId": "1",
            "value": 50.5,
            "listPrice": 50.5,
            "minQuantity": 2,
            "dateRange": {
                "from": "2021-12-31T01:00:00Z",
                "to": "2022-12-31T01:00:00Z"
            }
        },
        {
            "tradePolicyId": "2",
            "value": 30,
            "listPrice": 50,
            "minQuantity": 2
        }
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPriceRequest;
import org.openapis.openapi.models.operations.GetPriceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "deserunt") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPriceRequest req = new GetPriceRequest("application/json", "nisi", 1L);            

            GetPriceResponse res = sdk.pricesAndFixedPrices.getPrice(req);

            if (res.getprice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createorupdatefixedpricesonpricetableortradepolicy

Creates or updates the fixed prices of an SKU for a specific price table or trade policy. You can add one or multiple fixed prices per SKU.

 ## Request body example

```json
[
  {
    "value": 50.5,
    "listPrice": 50.5,
    "minQuantity": 2,
    "dateRange": {
      "from": "2021-12-30T22:00:00-03:00",
      "to": "2021-12-30T22:00:00-04:00"
    }
  }
]
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateorupdatefixedpricesonpricetableortradepolicyRequest;
import org.openapis.openapi.models.operations.CreateorupdatefixedpricesonpricetableortradepolicyRequestBody;
import org.openapis.openapi.models.operations.CreateorupdatefixedpricesonpricetableortradepolicyRequestBodyDateRange;
import org.openapis.openapi.models.operations.CreateorupdatefixedpricesonpricetableortradepolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "natus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateorupdatefixedpricesonpricetableortradepolicyRequest req = new CreateorupdatefixedpricesonpricetableortradepolicyRequest("omnis", "molestiae", 1L, "priceTableA") {{
                requestBody = new org.openapis.openapi.models.operations.CreateorupdatefixedpricesonpricetableortradepolicyRequestBody[]{{
                    add(new CreateorupdatefixedpricesonpricetableortradepolicyRequestBody(2L, 50.5) {{
                        dateRange = new CreateorupdatefixedpricesonpricetableortradepolicyRequestBodyDateRange("2021-12-30T22:00:00-03:00", "2021-12-30T22:00:00-04:00") {{
                            from = "2021-12-30T22:00:00-03:00";
                            to = "2021-12-30T22:00:00-04:00";
                        }};
                        listPrice = 50.5;
                        minQuantity = 2L;
                        value = 50.5;
                    }}),
                }};
            }};            

            CreateorupdatefixedpricesonpricetableortradepolicyResponse res = sdk.pricesAndFixedPrices.createorupdatefixedpricesonpricetableortradepolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
