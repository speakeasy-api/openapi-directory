<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CalculatediscountsandtaxesBundlesHeaders;
import org.openapis.openapi.models.operations.CalculatediscountsandtaxesBundlesRequest;
import org.openapis.openapi.models.operations.CalculatediscountsandtaxesBundlesResponse;
import org.openapis.openapi.models.shared.CalculatediscountsandtaxesBundlesRequest;
import org.openapis.openapi.models.shared.Param;
import org.openapis.openapi.models.shared.Item;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = new SchemeAppKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    appToken = new SchemeAppToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CalculatediscountsandtaxesBundlesRequest req = new CalculatediscountsandtaxesBundlesRequest() {{
                headers = new CalculatediscountsandtaxesBundlesHeaders() {{
                    accept = "corrupti";
                    contentType = "provident";
                }};
                request = new CalculatediscountsandtaxesBundlesRequest() {{
                    isShoppingCart = false;
                    items = new org.openapis.openapi.models.shared.Item[]{{
                        add(new Item() {{
                            id = "quibusdam";
                            index = 602763;
                            isGift = false;
                            logisticsInfos = new String[]{{
                                add("corrupti"),
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }};
                            measurementUnit = "deserunt";
                            params = new org.openapis.openapi.models.shared.Param[]{{
                                add(new Param() {{
                                    name = "iure";
                                    value = "magnam";
                                }}),
                                add(new Param() {{
                                    name = "debitis";
                                    value = "ipsa";
                                }}),
                            }};
                            priceSheet = new String[]{{
                                add("tempora"),
                                add("suscipit"),
                                add("molestiae"),
                                add("minus"),
                            }};
                            priceTags = new String[]{{
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                                add("nisi"),
                            }};
                            productSpecifications = new String[]{{
                                add("temporibus"),
                                add("ab"),
                                add("quis"),
                                add("veritatis"),
                            }};
                            quantity = 648172;
                            sellerId = "perferendis";
                            unitMultiplier = 368241;
                        }}),
                        add(new Item() {{
                            id = "repellendus";
                            index = 957156;
                            isGift = false;
                            logisticsInfos = new String[]{{
                                add("odit"),
                                add("at"),
                                add("at"),
                                add("maiores"),
                            }};
                            measurementUnit = "molestiae";
                            params = new org.openapis.openapi.models.shared.Param[]{{
                                add(new Param() {{
                                    name = "quod";
                                    value = "esse";
                                }}),
                                add(new Param() {{
                                    name = "totam";
                                    value = "porro";
                                }}),
                                add(new Param() {{
                                    name = "dolorum";
                                    value = "dicta";
                                }}),
                                add(new Param() {{
                                    name = "nam";
                                    value = "officia";
                                }}),
                            }};
                            priceSheet = new String[]{{
                                add("fugit"),
                                add("deleniti"),
                                add("hic"),
                            }};
                            priceTags = new String[]{{
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                                add("molestiae"),
                            }};
                            productSpecifications = new String[]{{
                                add("qui"),
                                add("impedit"),
                            }};
                            quantity = 736918;
                            sellerId = "esse";
                            unitMultiplier = 216550;
                        }}),
                        add(new Item() {{
                            id = "excepturi";
                            index = 135218;
                            isGift = false;
                            logisticsInfos = new String[]{{
                                add("ad"),
                            }};
                            measurementUnit = "natus";
                            params = new org.openapis.openapi.models.shared.Param[]{{
                                add(new Param() {{
                                    name = "iste";
                                    value = "dolor";
                                }}),
                            }};
                            priceSheet = new String[]{{
                                add("laboriosam"),
                                add("hic"),
                                add("saepe"),
                            }};
                            priceTags = new String[]{{
                                add("in"),
                                add("corporis"),
                                add("iste"),
                            }};
                            productSpecifications = new String[]{{
                                add("saepe"),
                                add("quidem"),
                            }};
                            quantity = 99280;
                            sellerId = "ipsa";
                            unitMultiplier = 969810;
                        }}),
                    }};
                    origin = "est";
                    params = new org.openapis.openapi.models.shared.Param[]{{
                        add(new Param() {{
                            name = "laborum";
                            value = "dolores";
                        }}),
                        add(new Param() {{
                            name = "dolorem";
                            value = "corporis";
                        }}),
                        add(new Param() {{
                            name = "explicabo";
                            value = "nobis";
                        }}),
                    }};
                    profileId = "enim";
                    salesChannel = "omnis";
                }};
            }};            

            CalculatediscountsandtaxesBundlesResponse res = sdk.bundles.calculatediscountsandtaxesBundles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->