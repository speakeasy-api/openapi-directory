# salesChannelMapping

## Overview

Mapping between a marketplace's sales channel and a seller's affiliate.

### Available Operations

* [retrieveMapping](#retrievemapping) - Get Sales Channel Mapping Data
* [upsertMapping](#upsertmapping) - Upsert Sales Channel Mapping

## retrieveMapping

Retrieves information about the mapping between marketplace's sales channels and a specific seller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveMappingRequest;
import org.openapis.openapi.models.operations.RetrieveMappingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro", "dolorum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetrieveMappingRequest req = new RetrieveMappingRequest("dicta", "nam", "officia", "occaecati", "fugit", "deleniti");            

            RetrieveMappingResponse res = sdk.salesChannelMapping.retrieveMapping(req);

            if (res.retrieveMapping200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upsertMapping

This endpoint allows the marketplace to map its sales channels with a seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). The seller can have multiple sales channels associated with the same marketplace, by creating different affiliates. The mapping enables the seller to segment catalog, prices, inventory, logistics, and payments in the marketplace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpsertMappingRequest;
import org.openapis.openapi.models.operations.UpsertMappingResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpsertMappingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "optio") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpsertMappingRequest req = new UpsertMappingRequest("totam", "beatae",                 new org.openapis.openapi.models.shared.UpsertMappingRequest[]{{
                                add(new UpsertMappingRequest(186332, "impedit") {{
                                    marketplaceSalesChannel = 473600;
                                    sellerChannel = "modi";
                                }}),
                                add(new UpsertMappingRequest(216550, "excepturi") {{
                                    marketplaceSalesChannel = 736918;
                                    sellerChannel = "esse";
                                }}),
                            }}, "aspernatur", "perferendis", "ad", "natus");            

            UpsertMappingResponse res = sdk.salesChannelMapping.upsertMapping(req);

            if (res.upsertMapping200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
