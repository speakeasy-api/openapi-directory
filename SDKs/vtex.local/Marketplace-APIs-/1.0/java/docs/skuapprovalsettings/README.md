# skuApprovalSettings

### Available Operations

* [getaccountconfig](#getaccountconfig) - Get Account's Approval Settings
* [getautoApprovevaluefromconfig](#getautoapprovevaluefromconfig) - Get autoApprove Status in Account Settings
* [getselleraccountconfig](#getselleraccountconfig) - Get Seller's Approval Settings
* [putselleraccountconfig](#putselleraccountconfig) - Save Seller's Approval Settings
* [saveaccountconfig](#saveaccountconfig) - Save Account's Approval Settings
* [saveautoapproveforaccount](#saveautoapproveforaccount) - Activate autoApprove in Marketplace's Account
* [saveautoapproveforaccountseller](#saveautoapproveforaccountseller) - Activate autoApprove Setting for a Seller

## getaccountconfig

This endpoint retrieves the current approval settings of a marketplace's Received SKUs module. Its response includes: 

- `Score`: Matcher scores for approving and rejecting SKUs received from sellers. 

- `Matchers`: All Matchers configured on the marketplace, and their respective details. 

- `SpecificationsMapping`: Mapping of product and SKU specifications, per seller. 

- `MatchFlux`: This field determines the type of approval configuration applied to SKUs received from a seller. 

The possible values include: 

-`default`, where the Matcher reviews the SKU, and approves it based on its score. 

-`manual`, for manual approvals through the Received SKU UI, or Match API. 

-`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of their Matcher Score.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetaccountconfigRequest;
import org.openapis.openapi.models.operations.GetaccountconfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "praesentium") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetaccountconfigRequest req = new GetaccountconfigRequest("rem", "voluptates", "quasi");            

            GetaccountconfigResponse res = sdk.skuApprovalSettings.getaccountconfig(req);

            if (res.getaccountconfig200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getautoApprovevaluefromconfig

This endpoint can be used to check whether the autoapprove setting is active or not, for a specific seller. 

If the response is `true`, the autoapprove setting is active. If the response is `false`, it is inactive.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetautoApprovevaluefromconfigRequest;
import org.openapis.openapi.models.operations.GetautoApprovevaluefromconfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae", "sint") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetautoApprovevaluefromconfigRequest req = new GetautoApprovevaluefromconfigRequest("veritatis", "itaque", "incidunt", "enim");            

            GetautoApprovevaluefromconfigResponse res = sdk.skuApprovalSettings.getautoApprovevaluefromconfig(req);

            if (res.getautoApprovevaluefromconfig200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getselleraccountconfig

This endpoint retrieves the current Received SKUs approval settings applied to a specific seller. Its response includes: 

- `sellerId`: A string that identifies the seller in the marketplace. 

- `accountId`: Marketplace’s account ID. 

- `accountName`: Marketplace’s account name. 

- `mapping`: Mapping of SKU and product Specifications. 

- `matchFlux`: This field determines the type of approval configuration applied to SKUs received  from a seller. 

The possible values include:  

-`default`, where the Matcher reviews the SKU, and approves it based on its score. 

-`manual`, for manual approvals through the Received SKU UI and Match API. 

-`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetselleraccountconfigRequest;
import org.openapis.openapi.models.operations.GetselleraccountconfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur", "est") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetselleraccountconfigRequest req = new GetselleraccountconfigRequest("quibusdam", "explicabo", "deserunt", "distinctio");            

            GetselleraccountconfigResponse res = sdk.skuApprovalSettings.getselleraccountconfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putselleraccountconfig

Marketplaces use this endpoint to create or update approval settings to a specific seller, on the Received SKUs module. 

The request includes all the details necessary to implement the chosen approval settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutselleraccountconfigRequest;
import org.openapis.openapi.models.operations.PutselleraccountconfigResponse;
import org.openapis.openapi.models.shared.PutselleraccountconfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam", "labore") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutselleraccountconfigRequest req = new PutselleraccountconfigRequest("modi", "qui",                 new PutselleraccountconfigRequest(                new java.util.HashMap<String, Object>() {{
                                                put("cupiditate", "quos");
                                                put("perferendis", "magni");
                                            }}, "assumenda", "ipsam");, "alias", "fugit");            

            PutselleraccountconfigResponse res = sdk.skuApprovalSettings.putselleraccountconfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveaccountconfig

Marketplaces use this endpoint to create or update approval settings on their Received SKUs module. 

The request includes all the details necessary to implement the chosen approval settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveaccountconfigRequest;
import org.openapis.openapi.models.operations.SaveaccountconfigResponse;
import org.openapis.openapi.models.shared.Matcher;
import org.openapis.openapi.models.shared.SaveaccountconfigRequest;
import org.openapis.openapi.models.shared.Score;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "excepturi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SaveaccountconfigRequest req = new SaveaccountconfigRequest("tempora", "facilis",                 new SaveaccountconfigRequest("tempore",                 new org.openapis.openapi.models.shared.Matcher[]{{
                                                add(new Matcher(false, "sint", "aliquid", "provident") {{
                                                    description = "delectus";
                                                    isActive = false;
                                                    matcherId = "eum";
                                                    updatesNotificationEndpoint = "non";
                                                    hookBaseAddress = "eligendi";
                                                }}),
                                                add(new Matcher(false, "debitis", "a", "dolorum") {{
                                                    description = "necessitatibus";
                                                    isActive = false;
                                                    matcherId = "sint";
                                                    updatesNotificationEndpoint = "officia";
                                                    hookBaseAddress = "dolor";
                                                }}),
                                            }},                 new Score(447125, 449198);,                 new String[]{{
                                                add("maiores"),
                                                add("rerum"),
                                                add("dicta"),
                                                add("magnam"),
                                            }});, "cumque");            

            SaveaccountconfigResponse res = sdk.skuApprovalSettings.saveaccountconfig(req);

            if (res.saveaccountconfig200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveautoapproveforaccount

This endpoint enables the autoapprove rule to a marketplace's whole Received SKUs module. Once enabling the rule, received SKUs will be automatically approved on your store, regardless of the seller. 

 For the autoapprove rule to work as expected, the approval [Matcher score](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) should be set up as 80 (default value), but you can configure a different number through the field `Score` in [Save Account's Approval Settings](https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveautoapproveforaccountRequest;
import org.openapis.openapi.models.operations.SaveautoapproveforaccountResponse;
import org.openapis.openapi.models.shared.SaveautoapproveforaccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere", "ea") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SaveautoapproveforaccountRequest req = new SaveautoapproveforaccountRequest("aliquid", "laborum",                 new SaveautoapproveforaccountRequest(false);, "accusamus");            

            SaveautoapproveforaccountResponse res = sdk.skuApprovalSettings.saveautoapproveforaccount(req);

            if (res.saveautoapproveforaccount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveautoapproveforaccountseller

This endpoint enables the auto approve setting to received SKUs from a specific seller. Be aware that once enabling the rule through this request, all received SKUs from that seller will be automatically approved on your store, regardless of the Matcher Score.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveautoapproveforaccountsellerRequest;
import org.openapis.openapi.models.operations.SaveautoapproveforaccountsellerResponse;
import org.openapis.openapi.models.shared.SaveautoapproveforaccountsellerRequest;
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

            SaveautoapproveforaccountsellerRequest req = new SaveautoapproveforaccountsellerRequest("enim", "accusamus",                 new SaveautoapproveforaccountsellerRequest(false);, "delectus", "quidem");            

            SaveautoapproveforaccountsellerResponse res = sdk.skuApprovalSettings.saveautoapproveforaccountseller(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
