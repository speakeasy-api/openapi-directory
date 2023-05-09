# priceTables

### Available Operations

* [getrulesforapricetable](#getrulesforapricetable) - Get rules for a price table
* [listpricetables](#listpricetables) - List price tables
* [getallpricetablesandrules](#getallpricetablesandrules) - Get all price tables and their rules
* [putPricingPipelineCatalogPriceTableId](#putpricingpipelinecatalogpricetableid) - Update rules for a price table

## getrulesforapricetable

This method will retrieve the rules from a specific Price Table.

## Response body example

```json
{
    "tradePolicyId": "b2c",
    "rules": [{
        "id": 0,
        "context": {
            "categories": {},
            "brands": {
                "2000009": "Whiskas"
            },
            "stockStatuses": null,
            "internalCategories": null,
            "markupRange": null,
            "dateRange": null
        },
        "percentualModifier": 15
    }]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetrulesforapricetableRequest;
import org.openapis.openapi.models.operations.GetrulesforapricetableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam", "unde") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetrulesforapricetableRequest req = new GetrulesforapricetableRequest("application/json", "nulla", "b2c");            

            GetrulesforapricetableResponse res = sdk.priceTables.getrulesforapricetable(req);

            if (res.getrulesforapricetable200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listpricetables

This method will list all price tables.

## Response body example

```json
[
    "1",
    "2",
    "3",
    "b2c",
    "b2b",
    "gold"
]
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListpricetablesRequest;
import org.openapis.openapi.models.operations.ListpricetablesResponse;
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

            ListpricetablesRequest req = new ListpricetablesRequest("application/json", "vel");            

            ListpricetablesResponse res = sdk.priceTables.listpricetables(req);

            if (res.listpricetables200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getallpricetablesandrules

This method will retrieve all price tables and their rules.

## Response body example

```json
[
    {
        "tradePolicyId": "2",
        "rules": [
            {
                "id": 0,
                "context": {
                    "categories": {},
                    "brands": {},
                    "stockStatuses": null,
                    "internalCategories": null,
                    "markupRange": null,
                    "dateRange": null
                },
                "percentualModifier": 20
            }
        ]
    },
    {
        "tradePolicyId": "b2c",
        "rules": [
            {
                "id": 0,
                "context": {
                    "categories": {},
                    "brands": {
                        "2000009": "Whiskas"
                    },
                    "stockStatuses": null,
                    "internalCategories": null,
                    "markupRange": null,
                    "dateRange": null
                },
                "percentualModifier": 15
            }
        ]
    }
]
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetallpricetablesandrulesRequest;
import org.openapis.openapi.models.operations.GetallpricetablesandrulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error", "deserunt") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetallpricetablesandrulesRequest req = new GetallpricetablesandrulesRequest("application/json", "suscipit");            

            GetallpricetablesandrulesResponse res = sdk.priceTables.getallpricetablesandrules(req);

            if (res.getallpricetablesandrules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPricingPipelineCatalogPriceTableId

This method will update the rules from a specific Price Table. It will delete all the rules from the requested Price Table and create new rules based on the content of the request.

## Request body example

```json
{
    "rules": [
          {
               "id": 1,
               "context": {
                    "categories": {
                         "Category ID": "1",
                         "Category Name": "Alimentação"
                    },
                    "brands": {
                         "Brand ID": "2000002",
                         "Brand Name": "Whiskas"
                    },
                    "markupRange": {
                         "from": 0,
                         "to": 200
                    },
                    "dateRange": {
                         "from": "2022-01-23T19:00:00.000Z",
                         "to": "2023-10-26T00:00:00.000Z"
                    }
               },
               "percentualModifier": 0
          }
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPricingPipelineCatalogPriceTableIdRequest;
import org.openapis.openapi.models.operations.PutPricingPipelineCatalogPriceTableIdRequestBody;
import org.openapis.openapi.models.operations.PutPricingPipelineCatalogPriceTableIdRequestBodyRules;
import org.openapis.openapi.models.operations.PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext;
import org.openapis.openapi.models.operations.PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange;
import org.openapis.openapi.models.operations.PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange;
import org.openapis.openapi.models.operations.PutPricingPipelineCatalogPriceTableIdResponse;
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

            PutPricingPipelineCatalogPriceTableIdRequest req = new PutPricingPipelineCatalogPriceTableIdRequest("application/json", "debitis", "ipsa") {{
                requestBody = new PutPricingPipelineCatalogPriceTableIdRequestBody(                new org.openapis.openapi.models.operations.PutPricingPipelineCatalogPriceTableIdRequestBodyRules[]{{
                                    add(new PutPricingPipelineCatalogPriceTableIdRequestBodyRules(                new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext(                new java.util.HashMap<String, String>() {{
                                                                        put("nam", "421");
                                                                    }},                 new java.util.HashMap<String, String>() {{
                                                                        put("occaecati", "209");
                                                                        put("fugit", "209");
                                                                        put("deleniti", "209");
                                                                    }},                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z");,                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(944669L, 200L);) {{
                                                        internalCategories = new java.util.HashMap<String, Object>() {{
                                                            put("totam", "beatae");
                                                            put("commodi", "molestiae");
                                                            put("modi", "qui");
                                                            put("impedit", "cum");
                                                        }};
                                                        stockStatuses = new java.util.HashMap<String, Object>() {{
                                                            put("ipsum", "excepturi");
                                                            put("aspernatur", "perferendis");
                                                        }};
                                                    }};, 324141L, 6176.36) {{
                                        context = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext(                new java.util.HashMap<String, String>() {{
                                                            put("quo", "421");
                                                            put("odit", "421");
                                                            put("at", "421");
                                                            put("at", "421");
                                                        }},                 new java.util.HashMap<String, String>() {{
                                                            put("molestiae", "209");
                                                            put("quod", "209");
                                                            put("quod", "209");
                                                            put("esse", "209");
                                                        }},                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z");,                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(520478L, 200L);) {{
                                            brands = new java.util.HashMap<String, String>() {{
                                                put("suscipit", "421");
                                                put("molestiae", "421");
                                            }};
                                            categories = new java.util.HashMap<String, String>() {{
                                                put("placeat", "209");
                                                put("voluptatum", "209");
                                                put("iusto", "209");
                                                put("excepturi", "209");
                                            }};
                                            dateRange = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z") {{
                                                from = "2019-10-23T19:00:00.000Z";
                                                to = "2019-10-26T00:00:00.000Z";
                                            }};
                                            internalCategories = new java.util.HashMap<String, Object>() {{
                                                put("recusandae", "temporibus");
                                                put("ab", "quis");
                                            }};
                                            markupRange = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(648172L, 200L) {{
                                                from = 87129L;
                                                to = 200L;
                                            }};
                                            stockStatuses = new java.util.HashMap<String, Object>() {{
                                                put("ipsam", "repellendus");
                                            }};
                                        }};
                                        id = 780529L;
                                        percentualModifier = 6788.8;
                                    }}),
                                    add(new PutPricingPipelineCatalogPriceTableIdRequestBodyRules(                new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext(                new java.util.HashMap<String, String>() {{
                                                                        put("nemo", "421");
                                                                        put("minima", "421");
                                                                        put("excepturi", "421");
                                                                    }},                 new java.util.HashMap<String, String>() {{
                                                                        put("iure", "209");
                                                                    }},                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z");,                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(634274L, 200L);) {{
                                                        internalCategories = new java.util.HashMap<String, Object>() {{
                                                            put("sapiente", "architecto");
                                                            put("mollitia", "dolorem");
                                                            put("culpa", "consequuntur");
                                                            put("repellat", "mollitia");
                                                        }};
                                                        stockStatuses = new java.util.HashMap<String, Object>() {{
                                                            put("numquam", "commodi");
                                                            put("quam", "molestiae");
                                                            put("velit", "error");
                                                        }};
                                                    }};, 158969L, 3380.07) {{
                                        context = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext(                new java.util.HashMap<String, String>() {{
                                                            put("est", "421");
                                                            put("mollitia", "421");
                                                            put("laborum", "421");
                                                            put("dolores", "421");
                                                        }},                 new java.util.HashMap<String, String>() {{
                                                            put("corporis", "209");
                                                        }},                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z");,                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(128926L, 200L);) {{
                                            brands = new java.util.HashMap<String, String>() {{
                                                put("iste", "421");
                                            }};
                                            categories = new java.util.HashMap<String, String>() {{
                                                put("natus", "209");
                                            }};
                                            dateRange = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z") {{
                                                from = "2019-10-23T19:00:00.000Z";
                                                to = "2019-10-26T00:00:00.000Z";
                                            }};
                                            internalCategories = new java.util.HashMap<String, Object>() {{
                                                put("hic", "saepe");
                                                put("fuga", "in");
                                            }};
                                            markupRange = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(613064L, 200L) {{
                                                from = 359508L;
                                                to = 200L;
                                            }};
                                            stockStatuses = new java.util.HashMap<String, Object>() {{
                                                put("saepe", "quidem");
                                                put("architecto", "ipsa");
                                            }};
                                        }};
                                        id = 750686L;
                                        percentualModifier = 3154.28;
                                    }}),
                                    add(new PutPricingPipelineCatalogPriceTableIdRequestBodyRules(                new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext(                new java.util.HashMap<String, String>() {{
                                                                        put("doloremque", "421");
                                                                    }},                 new java.util.HashMap<String, String>() {{
                                                                        put("ut", "209");
                                                                        put("maiores", "209");
                                                                    }},                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z");,                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(120196L, 200L);) {{
                                                        internalCategories = new java.util.HashMap<String, Object>() {{
                                                            put("dolore", "iusto");
                                                            put("dicta", "harum");
                                                        }};
                                                        stockStatuses = new java.util.HashMap<String, Object>() {{
                                                            put("accusamus", "commodi");
                                                            put("repudiandae", "quae");
                                                        }};
                                                    }};, 216822L, 6924.72) {{
                                        context = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext(                new java.util.HashMap<String, String>() {{
                                                            put("laborum", "421");
                                                            put("quasi", "421");
                                                            put("reiciendis", "421");
                                                            put("voluptatibus", "421");
                                                        }},                 new java.util.HashMap<String, String>() {{
                                                            put("nihil", "209");
                                                            put("praesentium", "209");
                                                            put("voluptatibus", "209");
                                                            put("ipsa", "209");
                                                        }},                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z");,                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(604846L, 200L);) {{
                                            brands = new java.util.HashMap<String, String>() {{
                                                put("laborum", "421");
                                            }};
                                            categories = new java.util.HashMap<String, String>() {{
                                                put("enim", "209");
                                                put("odit", "209");
                                                put("quo", "209");
                                            }};
                                            dateRange = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z") {{
                                                from = "2019-10-23T19:00:00.000Z";
                                                to = "2019-10-26T00:00:00.000Z";
                                            }};
                                            internalCategories = new java.util.HashMap<String, Object>() {{
                                                put("tenetur", "ipsam");
                                            }};
                                            markupRange = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(820994L, 200L) {{
                                                from = 662527L;
                                                to = 200L;
                                            }};
                                            stockStatuses = new java.util.HashMap<String, Object>() {{
                                                put("quasi", "error");
                                            }};
                                        }};
                                        id = 451159L;
                                        percentualModifier = 7392.64;
                                    }}),
                                    add(new PutPricingPipelineCatalogPriceTableIdRequestBodyRules(                new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext(                new java.util.HashMap<String, String>() {{
                                                                        put("tempore", "421");
                                                                        put("labore", "421");
                                                                        put("delectus", "421");
                                                                    }},                 new java.util.HashMap<String, String>() {{
                                                                        put("non", "209");
                                                                        put("eligendi", "209");
                                                                    }},                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z");,                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(576157L, 200L);) {{
                                                        internalCategories = new java.util.HashMap<String, Object>() {{
                                                            put("provident", "necessitatibus");
                                                            put("sint", "officia");
                                                        }};
                                                        stockStatuses = new java.util.HashMap<String, Object>() {{
                                                            put("debitis", "a");
                                                        }};
                                                    }};, 680056L, 4471.25) {{
                                        context = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContext(                new java.util.HashMap<String, String>() {{
                                                            put("perferendis", "421");
                                                            put("magni", "421");
                                                            put("assumenda", "421");
                                                        }},                 new java.util.HashMap<String, String>() {{
                                                            put("alias", "209");
                                                            put("fugit", "209");
                                                        }},                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z");,                 new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(677817L, 200L);) {{
                                            brands = new java.util.HashMap<String, String>() {{
                                                put("excepturi", "421");
                                                put("pariatur", "421");
                                                put("modi", "421");
                                            }};
                                            categories = new java.util.HashMap<String, String>() {{
                                                put("rem", "209");
                                                put("voluptates", "209");
                                                put("quasi", "209");
                                            }};
                                            dateRange = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextDateRange("2019-10-23T19:00:00.000Z", "2019-10-26T00:00:00.000Z") {{
                                                from = "2019-10-23T19:00:00.000Z";
                                                to = "2019-10-26T00:00:00.000Z";
                                            }};
                                            internalCategories = new java.util.HashMap<String, Object>() {{
                                                put("sint", "veritatis");
                                                put("itaque", "incidunt");
                                                put("enim", "consequatur");
                                                put("est", "quibusdam");
                                            }};
                                            markupRange = new PutPricingPipelineCatalogPriceTableIdRequestBodyRulesContextMarkupRange(647174L, 200L) {{
                                                from = 131797L;
                                                to = 200L;
                                            }};
                                            stockStatuses = new java.util.HashMap<String, Object>() {{
                                                put("quibusdam", "labore");
                                                put("modi", "qui");
                                                put("aliquid", "cupiditate");
                                            }};
                                        }};
                                        id = 569618L;
                                        percentualModifier = 2700.08;
                                    }}),
                                }});;
            }};            

            PutPricingPipelineCatalogPriceTableIdResponse res = sdk.priceTables.putPricingPipelineCatalogPriceTableId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
