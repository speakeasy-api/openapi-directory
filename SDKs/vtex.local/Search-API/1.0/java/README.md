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
import org.openapis.openapi.models.operations.AutoCompleteQueryParams;
import org.openapis.openapi.models.operations.AutoCompleteHeaders;
import org.openapis.openapi.models.operations.AutoCompleteRequest;
import org.openapis.openapi.models.operations.AutoCompleteResponse;

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

            AutoCompleteRequest req = new AutoCompleteRequest() {{
                queryParams = new AutoCompleteQueryParams() {{
                    productNameContains = "jeans";
                }};
                headers = new AutoCompleteHeaders() {{
                    accept = "application/json";
                    contentType = "application/json";
                }};
            }};            

            AutoCompleteResponse res = sdk.autocomplete.autoComplete(req);

            if (res.theRootSchema.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### autocomplete

* `autoComplete` - Product Search Autocomplete

### crossSelling

* `productSearchAccessories` - Get Product Search of Accessories
* `productSearchShowTogether` - Get Product Search of Show Together
* `productSearchSimilars` - Get Product Search of Similars
* `productSearchSuggestions` - Get Product Search of Suggestions
* `productSearchWhoBoughtAlsoBought` - Get Product Search of Who Bought Also Bought
* `productSearchWhoSawAlsoBought` - Get Product Search of Who Saw Also Bought
* `productSearchWhoSawAlsoSaw` - Get Product Search of Who Saw Also Saw

### facets

* `facetscategory` - Search by Store Facets
* `getApiCatalogSystemPubFacetsCategoryCategoryId` - Get Category Facets

### offers

* `getApiCatalogSystemPubProductsOffersProductId` - Search Product offers
* `getApiCatalogSystemPubProductsOffersProductIdSkuSkuId` - Search SKU offers

### search

* `productSearch` - Search for Products
* `productSearchFilteredandOrdered` - Search for Products with Filter, Order and Pagination
* `searchbyproducturl` - Search Product by Product URL
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
