# sellerCommissions

## Overview

Get sellers' data

### Available Operations

* [bulkUpsertSellerCommissions](#bulkupsertsellercommissions) - Upsert Seller Commissions in Bulk
* [listSellerCommissions](#listsellercommissions) - List Seller Commissions by seller ID
* [removeSellerCommissions](#removesellercommissions) - Remove Seller Commissions by Category ID
* [retrieveSellerCommissions](#retrievesellercommissions) - Get Seller Commissions by Category ID
* [upsertSellerCommissions](#upsertsellercommissions) - Upsert Seller Commissions by Category ID

## bulkUpsertSellerCommissions

This endpoint is used by marketplace operators to define comissions for multiple categories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkUpsertSellerCommissionsRequest;
import org.openapis.openapi.models.operations.BulkUpsertSellerCommissionsResponse;
import org.openapis.openapi.models.shared.BulkUpsertSellerCommissionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed", "iste") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            BulkUpsertSellerCommissionsRequest req = new BulkUpsertSellerCommissionsRequest("dolor", "natus",                 new org.openapis.openapi.models.shared.BulkUpsertSellerCommissionsRequest[]{{
                                add(new BulkUpsertSellerCommissionsRequest("corporis", "iste", 4370.32, 9023.49) {{
                                    categoryFullPath = "hic";
                                    categoryId = "saepe";
                                    freightCommissionPercentage = 6818.2;
                                    productCommissionPercentage = 4499.5;
                                }}),
                                add(new BulkUpsertSellerCommissionsRequest("est", "mollitia", 6706.38, 1709.09) {{
                                    categoryFullPath = "quidem";
                                    categoryId = "architecto";
                                    freightCommissionPercentage = 602.25;
                                    productCommissionPercentage = 9698.1;
                                }}),
                            }}, "dolorem", "corporis", "explicabo");            

            BulkUpsertSellerCommissionsResponse res = sdk.sellerCommissions.bulkUpsertSellerCommissions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSellerCommissions

This endpoint retrieves all comissions configured for a specific seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSellerCommissionsRequest;
import org.openapis.openapi.models.operations.ListSellerCommissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis", "enim") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSellerCommissionsRequest req = new ListSellerCommissionsRequest("omnis", "nemo", "minima", "excepturi", "accusantium");            

            ListSellerCommissionsResponse res = sdk.sellerCommissions.listSellerCommissions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeSellerCommissions

This endpoint removes a seller comission on the selected category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveSellerCommissionsRequest;
import org.openapis.openapi.models.operations.RemoveSellerCommissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "culpa") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveSellerCommissionsRequest req = new RemoveSellerCommissionsRequest("doloribus", "sapiente", "architecto", "mollitia", "dolorem", "culpa");            

            RemoveSellerCommissionsResponse res = sdk.sellerCommissions.removeSellerCommissions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveSellerCommissions

This endpoint retrieves seller comissions applied to the selected category.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveSellerCommissionsRequest;
import org.openapis.openapi.models.operations.RetrieveSellerCommissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur", "repellat") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetrieveSellerCommissionsRequest req = new RetrieveSellerCommissionsRequest("mollitia", "occaecati", "numquam", "commodi", "quam", "molestiae");            

            RetrieveSellerCommissionsResponse res = sdk.sellerCommissions.retrieveSellerCommissions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upsertSellerCommissions

This endpoint is used by marketplace operators to define comissions for a single category, by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpsertSellerCommissionsRequest;
import org.openapis.openapi.models.operations.UpsertSellerCommissionsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpsertSellerCommissionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit", "error") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpsertSellerCommissionsRequest req = new UpsertSellerCommissionsRequest("quia", "quis",                 new UpsertSellerCommissionsRequest("vitae", "laborum", 6563.3, 3172.02);, "odit", "quo", "sequi", "tenetur");            

            UpsertSellerCommissionsResponse res = sdk.sellerCommissions.upsertSellerCommissions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
