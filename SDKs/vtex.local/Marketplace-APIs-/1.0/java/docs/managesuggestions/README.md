# manageSuggestions

## Overview

Send or delete SKU suggestions from the seller to marketplace

### Available Operations

* [deleteSuggestion](#deletesuggestion) - Delete SKU Suggestion
* [saveSuggestion](#savesuggestion) - Send SKU Suggestion

## deleteSuggestion

This endpoint deletes a chosen SKU suggestion. Only one SKU should be deleted per request. This request cannot be undone. A workaround to revert its action, is to send the suggestion again, through the Send Suggestion API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSuggestionRequest;
import org.openapis.openapi.models.operations.DeleteSuggestionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "maiores") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSuggestionRequest req = new DeleteSuggestionRequest("molestiae", "quod", "quod", "esse", "totam");            

            DeleteSuggestionResponse res = sdk.manageSuggestions.deleteSuggestion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveSuggestion

This request is used by the seller when it wants to suggest that one of their SKUs is sold in the marketplace.

Before using this request, the seller should always use the [Change Notification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-seller-sku-notification) request in order to check if the SKU already exists in the marketplace. If it doesn't, then this is the next call in the SKU integration flow.

In the Send Suggestion request, the seller must send information about the SKU, such as the product and SKU name, the seller ID, and the image URL. All parameters are explained below. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveSuggestionRequest;
import org.openapis.openapi.models.operations.SaveSuggestionResponse;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.ProductSpecification;
import org.openapis.openapi.models.shared.SaveSuggestionRequest;
import org.openapis.openapi.models.shared.SaveSuggestionRequestPricing;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SkuSpecification;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro", "dolorum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SaveSuggestionRequest req = new SaveSuggestionRequest("application/vnd.vtex.suggestion.v0+json", "dicta",                 new SaveSuggestionRequest(720633, "officia", "occaecati", "fugit", 537373L,                 new org.openapis.openapi.models.shared.Image[]{{
                                                add(new Image("beatae", "commodi") {{
                                                    imageName = "optio";
                                                    imageUrl = "totam";
                                                }}),
                                                add(new Image("qui", "impedit") {{
                                                    imageName = "molestiae";
                                                    imageUrl = "modi";
                                                }}),
                                                add(new Image("ipsum", "excepturi") {{
                                                    imageName = "cum";
                                                    imageUrl = "esse";
                                                }}),
                                                add(new Image("ad", "natus") {{
                                                    imageName = "aspernatur";
                                                    imageUrl = "perferendis";
                                                }}),
                                            }}, 149675L,                 new SaveSuggestionRequestPricing() {{
                                                currency = "iste";
                                                currencySymbol = "dolor";
                                                salePrice = 616934;
                                            }};, "laboriosam", "hic", "saepe", "fuga", "in", "corporis", 613064L, 437032L) {{
                                measurementUnit = "saepe";
                                productSpecifications = new org.openapis.openapi.models.shared.ProductSpecification[]{{
                                    add(new ProductSpecification() {{
                                        fieldName = "architecto";
                                        fieldValues = new String[]{{
                                            add("reiciendis"),
                                        }};
                                    }}),
                                    add(new ProductSpecification() {{
                                        fieldName = "est";
                                        fieldValues = new String[]{{
                                            add("laborum"),
                                            add("dolores"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                    add(new ProductSpecification() {{
                                        fieldName = "corporis";
                                        fieldValues = new String[]{{
                                            add("nobis"),
                                        }};
                                    }}),
                                }};
                                sellerStockKeepingUnitId = 315428;
                                skuSpecifications = new org.openapis.openapi.models.shared.SkuSpecification[]{{
                                    add(new SkuSpecification() {{
                                        fieldName = "nemo";
                                        fieldValues = new String[]{{
                                            add("excepturi"),
                                            add("accusantium"),
                                        }};
                                    }}),
                                    add(new SkuSpecification() {{
                                        fieldName = "iure";
                                        fieldValues = new String[]{{
                                            add("doloribus"),
                                            add("sapiente"),
                                            add("architecto"),
                                        }};
                                    }}),
                                    add(new SkuSpecification() {{
                                        fieldName = "mollitia";
                                        fieldValues = new String[]{{
                                            add("culpa"),
                                        }};
                                    }}),
                                }};
                                unitMultiplier = 161309;
                            }};, "repellat", "mollitia", "occaecati");            

            SaveSuggestionResponse res = sdk.manageSuggestions.saveSuggestion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
