# freightValues

### Available Operations

* [createUpdateFreightValues](#createupdatefreightvalues) - Create/update freight values
* [freightValues](#freightvalues) - List freight values

## createUpdateFreightValues

Creates or updates the freight values of your store's carriers. Learn more in [Shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127#).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUpdateFreightValuesCreateUpdateFreightValuesRequest;
import org.openapis.openapi.models.operations.CreateUpdateFreightValuesRequest;
import org.openapis.openapi.models.operations.CreateUpdateFreightValuesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "saepe") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUpdateFreightValuesRequest req = new CreateUpdateFreightValuesRequest("fuga", "in",                 new org.openapis.openapi.models.operations.CreateUpdateFreightValuesCreateUpdateFreightValuesRequest[]{{
                                add(new CreateUpdateFreightValuesCreateUpdateFreightValuesRequest("1.00", "BRA", 1000000000, 1, "polygon2", 10, 437032, "2.00:00:00", 1000, 1, "1234500", "1000000") {{
                                    absoluteMoneyCost = "1.00";
                                    country = "BRA";
                                    maxVolume = 1000000000;
                                    operationType = 1;
                                    polygon = "polygon2";
                                    pricePercent = 10;
                                    pricePercentByWeight = 613064;
                                    timeCost = "2.00:00:00";
                                    weightEnd = 1000;
                                    weightStart = 1;
                                    zipCodeEnd = "1234500";
                                    zipCodeStart = "1000000";
                                }}),
                                add(new CreateUpdateFreightValuesCreateUpdateFreightValuesRequest("1.00", "BRA", 1000000000, 1, "polygon2", 10, 697631, "2.00:00:00", 1000, 1, "1234500", "1000000") {{
                                    absoluteMoneyCost = "1.00";
                                    country = "BRA";
                                    maxVolume = 1000000000;
                                    operationType = 1;
                                    polygon = "polygon2";
                                    pricePercent = 10;
                                    pricePercentByWeight = 902349;
                                    timeCost = "2.00:00:00";
                                    weightEnd = 1000;
                                    weightStart = 1;
                                    zipCodeEnd = "1234500";
                                    zipCodeStart = "1000000";
                                }}),
                            }}, "carrier123");            

            CreateUpdateFreightValuesResponse res = sdk.freightValues.createUpdateFreightValues(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## freightValues

Lists freight values apointed to your store's carriers, searching by carrier ID and postal code (`cep`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FreightValuesRequest;
import org.openapis.openapi.models.operations.FreightValuesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto", "ipsa") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            FreightValuesRequest req = new FreightValuesRequest("reiciendis", "est", "carrier-123", "12345000");            

            FreightValuesResponse res = sdk.freightValues.freightValues(req);

            if (res.freightValues200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
