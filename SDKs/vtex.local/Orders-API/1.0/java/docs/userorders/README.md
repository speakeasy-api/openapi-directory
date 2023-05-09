# userOrders

### Available Operations

* [userorderdetails](#userorderdetails) - Retrieve user order details
* [userorderslist](#userorderslist) - Retrieve user's orders

## userorderdetails

Lists all details from a user's order, through client's perspective. 

> Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserorderdetailsRequest;
import org.openapis.openapi.models.operations.UserorderdetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate", "dignissimos") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserorderdetailsRequest req = new UserorderdetailsRequest("reiciendis", "amet", "customer@mail.com", "1172452900788-01");            

            UserorderdetailsResponse res = sdk.userOrders.userorderdetails(req);

            if (res.userorderdetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userorderslist

Lists all orders from a given client, filtering by their email. 

> Note that these requests are meant to be made by **Call center operator** profiles. Otherwise, they will return only orders from the same email making the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserorderslistRequest;
import org.openapis.openapi.models.operations.UserorderslistResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "numquam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UserorderslistRequest req = new UserorderslistRequest("veritatis", "ipsa", "customer@mail.com", "15", "15");            

            UserorderslistResponse res = sdk.userOrders.userorderslist(req);

            if (res.userorderslist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
