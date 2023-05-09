# bundles

### Available Operations

* [calculatediscountsandtaxesBundles](#calculatediscountsandtaxesbundles) - Calculate discounts and taxes (Bundles)

## calculatediscountsandtaxesBundles

Calculate discounts and taxes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalculatediscountsandtaxesBundlesRequest;
import org.openapis.openapi.models.operations.CalculatediscountsandtaxesBundlesResponse;
import org.openapis.openapi.models.shared.CalculatediscountsandtaxesBundlesRequest;
import org.openapis.openapi.models.shared.Item;
import org.openapis.openapi.models.shared.Param;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum", "iusto") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CalculatediscountsandtaxesBundlesRequest req = new CalculatediscountsandtaxesBundlesRequest("ipsum",                 new CalculatediscountsandtaxesBundlesRequest(false,                 new org.openapis.openapi.models.shared.Item[]{{
                                                add(new Item("quisquam", 876506, false,                 new String[]{{
                                                                    add("quis"),
                                                                    add("ipsum"),
                                                                    add("delectus"),
                                                                }}, "voluptate",                 new org.openapis.openapi.models.shared.Param[]{{
                                                                    add(new Param("odio", "similique") {{
                                                                        name = "Roman Kulas";
                                                                        value = "quod";
                                                                    }}),
                                                                }},                 new String[]{{
                                                                    add("vero"),
                                                                    add("ducimus"),
                                                                    add("dolore"),
                                                                }},                 new String[]{{
                                                                    add("illum"),
                                                                    add("sequi"),
                                                                    add("natus"),
                                                                    add("impedit"),
                                                                }},                 new String[]{{
                                                                    add("voluptatibus"),
                                                                }}, 347233, "nulla", 148141) {{
                                                    id = "f3be453f-870b-4326-b5a7-3429cdb1a842";
                                                    index = 174909;
                                                    isGift = false;
                                                    logisticsInfos = new String[]{{
                                                        add("facilis"),
                                                        add("aliquid"),
                                                        add("quam"),
                                                    }};
                                                    measurementUnit = "molestias";
                                                    params = new org.openapis.openapi.models.shared.Param[]{{
                                                        add(new Param("ullam", "nam") {{
                                                            name = "Gladys Considine";
                                                            value = "sunt";
                                                        }}),
                                                        add(new Param("saepe", "ipsum") {{
                                                            name = "George Runolfsdottir";
                                                            value = "et";
                                                        }}),
                                                        add(new Param("delectus", "dolorem") {{
                                                            name = "Gayle Lueilwitz";
                                                            value = "aperiam";
                                                        }}),
                                                        add(new Param("quas", "itaque") {{
                                                            name = "Clara Fisher Jr.";
                                                            value = "aut";
                                                        }}),
                                                    }};
                                                    priceSheet = new String[]{{
                                                        add("est"),
                                                    }};
                                                    priceTags = new String[]{{
                                                        add("porro"),
                                                        add("doloribus"),
                                                        add("ut"),
                                                        add("facilis"),
                                                    }};
                                                    productSpecifications = new String[]{{
                                                        add("qui"),
                                                        add("quae"),
                                                        add("laudantium"),
                                                    }};
                                                    quantity = 485628;
                                                    sellerId = "occaecati";
                                                    unitMultiplier = 977496;
                                                }}),
                                                add(new Item("assumenda", 860552, false,                 new String[]{{
                                                                    add("libero"),
                                                                    add("quasi"),
                                                                }}, "tempora",                 new org.openapis.openapi.models.shared.Param[]{{
                                                                    add(new Param("eius", "esse") {{
                                                                        name = "Ramona Bednar";
                                                                        value = "odio";
                                                                    }}),
                                                                    add(new Param("ut", "eum") {{
                                                                        name = "Hilda Paucek";
                                                                        value = "fugiat";
                                                                    }}),
                                                                }},                 new String[]{{
                                                                    add("assumenda"),
                                                                    add("eos"),
                                                                }},                 new String[]{{
                                                                    add("quisquam"),
                                                                    add("veritatis"),
                                                                    add("ipsa"),
                                                                }},                 new String[]{{
                                                                    add("quidem"),
                                                                    add("neque"),
                                                                    add("quo"),
                                                                }}, 847276, "quo", 681359) {{
                                                    id = "cff7c70a-4562-46d4-b681-3f16d9f5fce6";
                                                    index = 774048;
                                                    isGift = false;
                                                    logisticsInfos = new String[]{{
                                                        add("veniam"),
                                                        add("aliquid"),
                                                    }};
                                                    measurementUnit = "inventore";
                                                    params = new org.openapis.openapi.models.shared.Param[]{{
                                                        add(new Param("eaque", "a") {{
                                                            name = "Krista Feeney";
                                                            value = "minima";
                                                        }}),
                                                        add(new Param("fugit", "accusamus") {{
                                                            name = "Richard Anderson";
                                                            value = "aliquam";
                                                        }}),
                                                    }};
                                                    priceSheet = new String[]{{
                                                        add("non"),
                                                    }};
                                                    priceTags = new String[]{{
                                                        add("dolorum"),
                                                    }};
                                                    productSpecifications = new String[]{{
                                                        add("placeat"),
                                                        add("velit"),
                                                        add("eum"),
                                                    }};
                                                    quantity = 420539;
                                                    sellerId = "nobis";
                                                    unitMultiplier = 557369;
                                                }}),
                                                add(new Item("tempore", 240020, false,                 new String[]{{
                                                                    add("consequuntur"),
                                                                    add("consequatur"),
                                                                    add("minus"),
                                                                    add("quaerat"),
                                                                }}, "sapiente",                 new org.openapis.openapi.models.shared.Param[]{{
                                                                    add(new Param("esse", "quasi") {{
                                                                        name = "Mattie McLaughlin";
                                                                        value = "quas";
                                                                    }}),
                                                                }},                 new String[]{{
                                                                    add("error"),
                                                                    add("sint"),
                                                                    add("pariatur"),
                                                                    add("possimus"),
                                                                }},                 new String[]{{
                                                                    add("eveniet"),
                                                                }},                 new String[]{{
                                                                    add("facere"),
                                                                    add("veritatis"),
                                                                    add("consequuntur"),
                                                                    add("quasi"),
                                                                }}, 628899, "culpa", 398434) {{
                                                    id = "4251904e-523c-47e0-bc71-78e4796f2a70";
                                                    index = 783648;
                                                    isGift = false;
                                                    logisticsInfos = new String[]{{
                                                        add("quas"),
                                                        add("praesentium"),
                                                    }};
                                                    measurementUnit = "consequuntur";
                                                    params = new org.openapis.openapi.models.shared.Param[]{{
                                                        add(new Param("minima", "nisi") {{
                                                            name = "Lee O'Conner";
                                                            value = "explicabo";
                                                        }}),
                                                        add(new Param("occaecati", "atque") {{
                                                            name = "Jeannie Cronin";
                                                            value = "saepe";
                                                        }}),
                                                        add(new Param("nam", "vero") {{
                                                            name = "Tamara Vandervort IV";
                                                            value = "quod";
                                                        }}),
                                                    }};
                                                    priceSheet = new String[]{{
                                                        add("quasi"),
                                                        add("saepe"),
                                                    }};
                                                    priceTags = new String[]{{
                                                        add("harum"),
                                                        add("molestiae"),
                                                    }};
                                                    productSpecifications = new String[]{{
                                                        add("occaecati"),
                                                        add("minima"),
                                                        add("distinctio"),
                                                    }};
                                                    quantity = 756779;
                                                    sellerId = "sit";
                                                    unitMultiplier = 636061;
                                                }}),
                                                add(new Item("velit", 974257, false,                 new String[]{{
                                                                    add("asperiores"),
                                                                    add("aperiam"),
                                                                }}, "ea",                 new org.openapis.openapi.models.shared.Param[]{{
                                                                    add(new Param("asperiores", "nemo") {{
                                                                        name = "Kari Nikolaus";
                                                                        value = "officia";
                                                                    }}),
                                                                    add(new Param("adipisci", "fuga") {{
                                                                        name = "Darlene Sawayn";
                                                                        value = "ab";
                                                                    }}),
                                                                }},                 new String[]{{
                                                                    add("suscipit"),
                                                                    add("velit"),
                                                                    add("culpa"),
                                                                }},                 new String[]{{
                                                                    add("recusandae"),
                                                                    add("totam"),
                                                                    add("fugiat"),
                                                                }},                 new String[]{{
                                                                    add("ducimus"),
                                                                    add("quos"),
                                                                }}, 427834, "labore", 822560) {{
                                                    id = "f1e674bd-b04f-4157-9608-2d68ea19f1d1";
                                                    index = 454162;
                                                    isGift = false;
                                                    logisticsInfos = new String[]{{
                                                        add("minima"),
                                                    }};
                                                    measurementUnit = "veritatis";
                                                    params = new org.openapis.openapi.models.shared.Param[]{{
                                                        add(new Param("mollitia", "ab") {{
                                                            name = "Ms. Cora Spencer IV";
                                                            value = "eum";
                                                        }}),
                                                    }};
                                                    priceSheet = new String[]{{
                                                        add("non"),
                                                        add("voluptatem"),
                                                        add("dolor"),
                                                    }};
                                                    priceTags = new String[]{{
                                                        add("numquam"),
                                                        add("impedit"),
                                                        add("explicabo"),
                                                    }};
                                                    productSpecifications = new String[]{{
                                                        add("aut"),
                                                        add("dignissimos"),
                                                    }};
                                                    quantity = 115484;
                                                    sellerId = "maiores";
                                                    unitMultiplier = 618480;
                                                }}),
                                            }}, "facilis",                 new org.openapis.openapi.models.shared.Param[]{{
                                                add(new Param("recusandae", "aliquid") {{
                                                    name = "Pearl Hessel";
                                                    value = "nemo";
                                                }}),
                                                add(new Param("facere", "numquam") {{
                                                    name = "Karla Feest";
                                                    value = "earum";
                                                }}),
                                                add(new Param("dolore", "sunt") {{
                                                    name = "Ricardo Wisozk";
                                                    value = "necessitatibus";
                                                }}),
                                            }}, "asperiores", "adipisci");, "non");            

            CalculatediscountsandtaxesBundlesResponse res = sdk.bundles.calculatediscountsandtaxesBundles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
