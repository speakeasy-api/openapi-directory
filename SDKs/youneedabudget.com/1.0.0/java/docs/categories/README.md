# categories

## Overview

The categories for a budget

### Available Operations

* [getCategories](#getcategories) - List categories
* [getCategoryById](#getcategorybyid) - Single category
* [getMonthCategoryById](#getmonthcategorybyid) - Single category for a specific budget month
* [updateMonthCategory](#updatemonthcategory) - Update a category for a specific month

## getCategories

Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoriesRequest;
import org.openapis.openapi.models.operations.GetCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCategoriesRequest req = new GetCategoriesRequest("deleniti") {{
                lastKnowledgeOfServer = 944669L;
            }};            

            GetCategoriesResponse res = sdk.categories.getCategories(req);

            if (res.categoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCategoryById

Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCategoryByIdRequest;
import org.openapis.openapi.models.operations.GetCategoryByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCategoryByIdRequest req = new GetCategoryByIdRequest("totam", "beatae");            

            GetCategoryByIdResponse res = sdk.categories.getCategoryById(req);

            if (res.categoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMonthCategoryById

Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMonthCategoryByIdRequest;
import org.openapis.openapi.models.operations.GetMonthCategoryByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMonthCategoryByIdRequest req = new GetMonthCategoryByIdRequest("molestiae", "modi", LocalDate.parse("2022-03-24"));            

            GetMonthCategoryByIdResponse res = sdk.categories.getMonthCategoryById(req);

            if (res.categoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMonthCategory

Update a category for a specific month.  Only `budgeted` amount can be updated.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMonthCategoryRequest;
import org.openapis.openapi.models.operations.UpdateMonthCategoryResponse;
import org.openapis.openapi.models.shared.PatchMonthCategoryWrapper;
import org.openapis.openapi.models.shared.SaveMonthCategory;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMonthCategoryRequest req = new UpdateMonthCategoryRequest(                new PatchMonthCategoryWrapper(                new SaveMonthCategory(456150L););, "ipsum", "excepturi", LocalDate.parse("2022-12-25"));            

            UpdateMonthCategoryResponse res = sdk.categories.updateMonthCategory(req);

            if (res.saveCategoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
