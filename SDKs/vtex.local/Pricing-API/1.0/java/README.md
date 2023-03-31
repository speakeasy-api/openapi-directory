# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetrulesforapricetablePathParams;
import org.openapis.openapi.models.operations.GetrulesforapricetableHeaders;
import org.openapis.openapi.models.operations.GetrulesforapricetableRequest;
import org.openapis.openapi.models.operations.GetrulesforapricetableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = new SchemeAppKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    appToken = new SchemeAppToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetrulesforapricetableRequest req = new GetrulesforapricetableRequest() {{
                pathParams = new GetrulesforapricetablePathParams() {{
                    priceTableId = "b2c";
                }};
                headers = new GetrulesforapricetableHeaders() {{
                    accept = "application/json";
                    contentType = "corrupti";
                }};
            }};            

            GetrulesforapricetableResponse res = sdk.priceTables.getrulesforapricetable(req);

            if (res.getrulesforapricetable200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### priceTables

* `getrulesforapricetable` - Get rules for a price table
* `listpricetables` - List price tables
* `getallpricetablesandrules` - Get all price tables and their rules
* `putPricingPipelineCatalogPriceTableId` - Update rules for a price table

### pricesAndFixedPrices

* `createUpdatePriceOrFixedPrice` - Create or Update Base Price or Fixed Prices
* `deletePrice` - Delete Price
* `deletefixedpricesonapricetableortradepolicy` - Delete Fixed Prices on a price table or trade policy
* `getComputedPricebypricetable` - Get Computed Price by price table or trade policy
* `getFixedPrices` - Get Fixed Prices
* `getFixedPricesonapricetable` - Get Fixed Prices on a price table or trade policy
* `getPrice` - Get Price
* `createorupdatefixedpricesonpricetableortradepolicy` - Create or Update Fixed Prices on a price table or trade policy

### pricingConfiguration

* `getPricingConfig` - Get Pricing Configuration
* `getPricingv2Status` - Get Pricing v2 Status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
