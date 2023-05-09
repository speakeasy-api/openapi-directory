# payeeLocations

## Overview

When you enter a transaction and specify a payee on the YNAB mobile apps, the GPS coordinates for that location are stored, with your permission, so that the next time you are in the same place (like the Grocery store) we can pre-populate nearby payees for you!  It’s handy and saves you time.  This resource makes these locations available.  Locations will not be available for all payees.

### Available Operations

* [getPayeeLocationById](#getpayeelocationbyid) - Single payee location
* [getPayeeLocations](#getpayeelocations) - List payee locations
* [getPayeeLocationsByPayee](#getpayeelocationsbypayee) - List locations for a payee

## getPayeeLocationById

Returns a single payee location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayeeLocationByIdRequest;
import org.openapis.openapi.models.operations.GetPayeeLocationByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPayeeLocationByIdRequest req = new GetPayeeLocationByIdRequest("a", "molestias");            

            GetPayeeLocationByIdResponse res = sdk.payeeLocations.getPayeeLocationById(req);

            if (res.payeeLocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayeeLocations

Returns all payee locations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayeeLocationsRequest;
import org.openapis.openapi.models.operations.GetPayeeLocationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPayeeLocationsRequest req = new GetPayeeLocationsRequest("saepe");            

            GetPayeeLocationsResponse res = sdk.payeeLocations.getPayeeLocations(req);

            if (res.payeeLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayeeLocationsByPayee

Returns all payee locations for a specified payee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayeeLocationsByPayeeRequest;
import org.openapis.openapi.models.operations.GetPayeeLocationsByPayeeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPayeeLocationsByPayeeRequest req = new GetPayeeLocationsByPayeeRequest("occaecati", "officiis");            

            GetPayeeLocationsByPayeeResponse res = sdk.payeeLocations.getPayeeLocationsByPayee(req);

            if (res.payeeLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
