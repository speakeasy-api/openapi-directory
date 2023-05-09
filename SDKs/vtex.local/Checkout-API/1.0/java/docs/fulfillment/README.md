# fulfillment

### Available Operations

* [getAddressByPostalCode](#getaddressbypostalcode) - Get address by postal code
* [listPickupPpointsByLocation](#listpickupppointsbylocation) - List pickup points by location

## getAddressByPostalCode

Retrieves address information for a given postal code and country.

This request can be used to implement auto complete functionality when a customer needs to fill in an address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressByPostalCodeRequest;
import org.openapis.openapi.models.operations.GetAddressByPostalCodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias", "excepturi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAddressByPostalCodeRequest req = new GetAddressByPostalCodeRequest("pariatur", "modi", "praesentium", "rem");            

            GetAddressByPostalCodeResponse res = sdk.fulfillment.getAddressByPostalCode(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPickupPpointsByLocation

Retrieves information on pickup points close to a given location determined by geocoordinates or postal code.

The pickup points returned are not necessarily all active ones. Make sure to validate the information consumed by integrations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPickupPpointsByLocationRequest;
import org.openapis.openapi.models.operations.ListPickupPpointsByLocationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates", "quasi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPickupPpointsByLocationRequest req = new ListPickupPpointsByLocationRequest("repudiandae", "sint") {{
                countryCode = "BF";
                geoCoordinates = new Double[]{{
                    add(-47.924747467041016),
                    add(-47.924747467041016),
                    add(-47.924747467041016),
                    add(-47.924747467041016),
                }};
                postalCode = "30681";
            }};            

            ListPickupPpointsByLocationResponse res = sdk.fulfillment.listPickupPpointsByLocation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
