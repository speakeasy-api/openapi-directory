# review

### Available Operations

* [deleteMultipleReviews](#deletemultiplereviews) - Delete Multiple Reviews
* [deleteReview](#deletereview) - Delete Review
* [editReview](#editreview) - Update a Review
* [getReviewbyReviewId](#getreviewbyreviewid) - Get Review by Review ID
* [getalistofReviews](#getalistofreviews) - Get a list of Reviews
* [saveMultipleReviews](#savemultiplereviews) - Create Multiple Reviews
* [saveReview](#savereview) - Create a Review

## deleteMultipleReviews

Deletes multiple reviews at once.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMultipleReviewsRequest;
import org.openapis.openapi.models.operations.DeleteMultipleReviewsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "error") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMultipleReviewsRequest req = new DeleteMultipleReviewsRequest("deserunt", "suscipit") {{
                requestBody = new String[]{{
                    add("magnam"),
                    add("debitis"),
                }};
            }};            

            DeleteMultipleReviewsResponse res = sdk.review.deleteMultipleReviews(req);

            if (res.deleteMultipleReviews200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReview

Deletes an existing review.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReviewRequest;
import org.openapis.openapi.models.operations.DeleteReviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa", "delectus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReviewRequest req = new DeleteReviewRequest("tempora", "suscipit", "1");            

            DeleteReviewResponse res = sdk.review.deleteReview(req);

            if (res.deleteReview200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## editReview

Updates the information of a review.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EditReviewRequest;
import org.openapis.openapi.models.operations.EditReviewRequestBody;
import org.openapis.openapi.models.operations.EditReviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae", "minus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            EditReviewRequest req = new EditReviewRequest("placeat", "voluptatum",                 new EditReviewRequestBody("iusto", 5680.45, "nisi", "recusandae", "temporibus") {{
                                locale = "ab";
                                shopperId = "quis";
                                verifiedPurchaser = false;
                            }};, "5323fdaa-c012-11ec-835d-0ebee58edbb3");            

            EditReviewResponse res = sdk.review.editReview(req);

            if (res.editReview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReviewbyReviewId

Retrieves information of a product review by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReviewbyReviewIdRequest;
import org.openapis.openapi.models.operations.GetReviewbyReviewIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis", "deserunt") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReviewbyReviewIdRequest req = new GetReviewbyReviewIdRequest("perferendis", "ipsam", "1");            

            GetReviewbyReviewIdResponse res = sdk.review.getReviewbyReviewId(req);

            if (res.getReviewbyReviewId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getalistofReviews

Retrieves a list of reviews.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetalistofReviewsRequest;
import org.openapis.openapi.models.operations.GetalistofReviewsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus", "sapiente") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetalistofReviewsRequest req = new GetalistofReviewsRequest("quo", "odit", "0", ":asc", "1", "search_term", true, "3");            

            GetalistofReviewsResponse res = sdk.review.getalistofReviews(req);

            if (res.getalistofReviews200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveMultipleReviews

Creates multiple reviews.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveMultipleReviewsRequest;
import org.openapis.openapi.models.operations.SaveMultipleReviewsResponse;
import org.openapis.openapi.models.shared.SaveMultipleReviewsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "at") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SaveMultipleReviewsRequest req = new SaveMultipleReviewsRequest("maiores", "molestiae",                 new org.openapis.openapi.models.shared.SaveMultipleReviewsRequest[]{{
                                add(new SaveMultipleReviewsRequest(false, "in", 3595.08, "iste", "iure", "saepe", false) {{
                                    approved = false;
                                    id = "c78ca1ba-928f-4c81-a742-cb7392059293";
                                    productId = "natus";
                                    rating = 3864.89;
                                    reviewerName = "hic";
                                    text = "saepe";
                                    title = "Miss";
                                    verifiedPurchaser = false;
                                }}),
                                add(new SaveMultipleReviewsRequest(false, "quia", 3380.07, "vitae", "laborum", "animi", false) {{
                                    approved = false;
                                    id = "b10faaa2-352c-4595-9907-aff1a3a2fa94";
                                    productId = "commodi";
                                    rating = 4663.11;
                                    reviewerName = "molestiae";
                                    text = "velit";
                                    title = "Miss";
                                    verifiedPurchaser = false;
                                }}),
                                add(new SaveMultipleReviewsRequest(false, "accusamus", 4142.63, "repudiandae", "quae", "ipsum", false) {{
                                    approved = false;
                                    id = "52c3f5ad-019d-4a1f-be78-f097b0074f15";
                                    productId = "dolore";
                                    rating = 4808.94;
                                    reviewerName = "dicta";
                                    text = "harum";
                                    title = "Mrs.";
                                    verifiedPurchaser = false;
                                }}),
                                add(new SaveMultipleReviewsRequest(false, "tempora", 7037.37, "tempore", "labore", "delectus", false) {{
                                    approved = false;
                                    id = "b99d488e-1e91-4e45-8ad2-abd44269802d";
                                    productId = "ipsam";
                                    rating = 46.95;
                                    reviewerName = "fugit";
                                    text = "dolorum";
                                    title = "Ms.";
                                    verifiedPurchaser = false;
                                }}),
                            }});            

            SaveMultipleReviewsResponse res = sdk.review.saveMultipleReviews(req);

            if (res.saveMultipleReviews200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveReview

Creates a single review

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveReviewRequest;
import org.openapis.openapi.models.operations.SaveReviewResponse;
import org.openapis.openapi.models.shared.SaveReviewRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "non") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SaveReviewRequest req = new SaveReviewRequest("eligendi", "sint",                 new SaveReviewRequest("aliquid", 592042, "necessitatibus", "sint", "officia"););            

            SaveReviewResponse res = sdk.review.saveReview(req);

            if (res.saveReview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
