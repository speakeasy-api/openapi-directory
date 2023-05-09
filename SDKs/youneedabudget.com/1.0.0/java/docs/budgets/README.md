# budgets

### Available Operations

* [getBudgetById](#getbudgetbyid) - Single budget
* [getBudgetSettingsById](#getbudgetsettingsbyid) - Budget Settings
* [getBudgets](#getbudgets) - List budgets

## getBudgetById

Returns a single budget with all related entities.  This resource is effectively a full budget export.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBudgetByIdRequest;
import org.openapis.openapi.models.operations.GetBudgetByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBudgetByIdRequest req = new GetBudgetByIdRequest("dolorum") {{
                lastKnowledgeOfServer = 118274L;
            }};            

            GetBudgetByIdResponse res = sdk.budgets.getBudgetById(req);

            if (res.budgetDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBudgetSettingsById

Returns settings for a budget

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBudgetSettingsByIdRequest;
import org.openapis.openapi.models.operations.GetBudgetSettingsByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBudgetSettingsByIdRequest req = new GetBudgetSettingsByIdRequest("officia");            

            GetBudgetSettingsByIdResponse res = sdk.budgets.getBudgetSettingsById(req);

            if (res.budgetSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBudgets

Returns budgets list with summary information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBudgetsRequest;
import org.openapis.openapi.models.operations.GetBudgetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBudgetsRequest req = new GetBudgetsRequest() {{
                includeAccounts = false;
            }};            

            GetBudgetsResponse res = sdk.budgets.getBudgets(req);

            if (res.budgetSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
