# priceAssociation

### Available Operations

* [deleteVCustomPricesRulesPriceAssociationId](#deletevcustompricesrulespriceassociationid) - Disassociate price association by ID
* [getVCustomPricesRulesPriceAssociationId](#getvcustompricesrulespriceassociationid) - Get price association by ID
* [postVCustomPricesRules](#postvcustompricesrules) - Create price association
* [putVCustomPricesRulesPriceAssociationId](#putvcustompricesrulespriceassociationid) - Update price association by ID

## deleteVCustomPricesRulesPriceAssociationId

Disassociates a price association from a shopping scenario by its ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVCustomPricesRulesPriceAssociationIdRequest;
import org.openapis.openapi.models.operations.DeleteVCustomPricesRulesPriceAssociationIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteVCustomPricesRulesPriceAssociationIdRequest req = new DeleteVCustomPricesRulesPriceAssociationIdRequest("deserunt", "perferendis", 368241L);            

            DeleteVCustomPricesRulesPriceAssociationIdResponse res = sdk.priceAssociation.deleteVCustomPricesRulesPriceAssociationId(req);

            if (res.deleteVCustomPricesRulesPriceAssociationId200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVCustomPricesRulesPriceAssociationId

Retrieves price association for a shopping scenario by its ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVCustomPricesRulesPriceAssociationIdRequest;
import org.openapis.openapi.models.operations.GetVCustomPricesRulesPriceAssociationIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVCustomPricesRulesPriceAssociationIdRequest req = new GetVCustomPricesRulesPriceAssociationIdRequest("repellendus", "sapiente", 778157L);            

            GetVCustomPricesRulesPriceAssociationIdResponse res = sdk.priceAssociation.getVCustomPricesRulesPriceAssociationId(req);

            if (res.getVCustomPricesRulesPriceAssociationId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVCustomPricesRules

Creates a new price association for a shopping scenario

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVCustomPricesRulesRequest;
import org.openapis.openapi.models.operations.PostVCustomPricesRulesRequestBody;
import org.openapis.openapi.models.operations.PostVCustomPricesRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVCustomPricesRulesRequest req = new PostVCustomPricesRulesRequest("odit", "at") {{
                requestBody = new PostVCustomPricesRulesRequestBody("at") {{
                    email = "maiores";
                    orderType = "molestiae";
                    state = "quod";
                }};;
            }};            

            PostVCustomPricesRulesResponse res = sdk.priceAssociation.postVCustomPricesRules(req);

            if (res.postVCustomPricesRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putVCustomPricesRulesPriceAssociationId

Updates a price association for a shopping scenario by its ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutVCustomPricesRulesPriceAssociationIdRequest;
import org.openapis.openapi.models.operations.PutVCustomPricesRulesPriceAssociationIdRequestBody;
import org.openapis.openapi.models.operations.PutVCustomPricesRulesPriceAssociationIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutVCustomPricesRulesPriceAssociationIdRequest req = new PutVCustomPricesRulesPriceAssociationIdRequest("quod", "esse", 520478L) {{
                requestBody = new PutVCustomPricesRulesPriceAssociationIdRequestBody("porro", "dolorum", "dicta");;
            }};            

            PutVCustomPricesRulesPriceAssociationIdResponse res = sdk.priceAssociation.putVCustomPricesRulesPriceAssociationId(req);

            if (res.putVCustomPricesRulesPriceAssociationId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
