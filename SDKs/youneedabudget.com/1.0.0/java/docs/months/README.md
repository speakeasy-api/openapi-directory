# months

## Overview

Each budget contains one or more months, which is where Ready to Assign, Age of Money and category (budgeted / activity / balances) amounts are available.

### Available Operations

* [getBudgetMonth](#getbudgetmonth) - Single budget month
* [getBudgetMonths](#getbudgetmonths) - List budget months

## getBudgetMonth

Returns a single budget month

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBudgetMonthRequest;
import org.openapis.openapi.models.operations.GetBudgetMonthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBudgetMonthRequest req = new GetBudgetMonthRequest("dicta", LocalDate.parse("2022-11-23"));            

            GetBudgetMonthResponse res = sdk.months.getBudgetMonth(req);

            if (res.monthDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBudgetMonths

Returns all budget months

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBudgetMonthsRequest;
import org.openapis.openapi.models.operations.GetBudgetMonthsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBudgetMonthsRequest req = new GetBudgetMonthsRequest("enim") {{
                lastKnowledgeOfServer = 389135L;
            }};            

            GetBudgetMonthsResponse res = sdk.months.getBudgetMonths(req);

            if (res.monthSummariesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
