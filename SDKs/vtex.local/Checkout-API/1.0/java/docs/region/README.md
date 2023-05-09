# region

### Available Operations

* [getSellersByRegion](#getsellersbyregion) - Get sellers by region or address

## getSellersByRegion

Retrieve a list of sellers that cater to a specific region or address, according to your set up of our [regionalization feature](https://help.vtex.com/en/tutorial/setting-up-price-and-availability-of-skus-by-region--12ne58BmvYsYuGsimmugoc#). Learn more about [Region v2](https://developers.vtex.com/vtex-developer-docs/changelog/region-v2).

To access the list of sellers, you must choose one of the following methods:

1. Send the identification of the list of sellers (`regionId`) as a path parameter through the URL. Or;
2. Send the `country` (3-digit ISO code) and at least one of the two values (`postal Code` or `geo Coordinates`) as query parameters through the URL. For this method, it is also allowed to send both values (`postalCode` or `geoCoordinates`) in the same request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSellersByRegionRequest;
import org.openapis.openapi.models.operations.GetSellersByRegionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime", "pariatur") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSellersByRegionRequest req = new GetSellersByRegionRequest("soluta", "dicta", "laborum", "v2.1BB18CE648B5111D0933734ED83EC783") {{
                geoCoordinates = new Double[]{{
                    add(-47.924747467041016),
                    add(-47.924747467041016),
                    add(-47.924747467041016),
                }};
                postalCode = "11773";
            }};            

            GetSellersByRegionResponse res = sdk.region.getSellersByRegion(req);

            if (res.getSellersByRegion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
