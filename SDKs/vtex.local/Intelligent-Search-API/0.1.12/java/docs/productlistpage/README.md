# productListPage

### Available Operations

* [getBannersFacets](#getbannersfacets) - Get list of banners registered for query
* [getCorrectionSearch](#getcorrectionsearch) - Get attempt of correction of a misspelled term
* [getFacetsFacets](#getfacetsfacets) - Get list of the possible facets for a given query
* [getProductSearchFacets](#getproductsearchfacets) - Get list of products for a query
* [getSearchSuggestions](#getsearchsuggestions) - Get list of suggested terms similar to the search term

## getBannersFacets

Lists the banners registered for a given query. Check the [configuring banners documentation](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5) for a full explanation of the banner feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBannersFacetsRequest;
import org.openapis.openapi.models.operations.GetBannersFacetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBannersFacetsRequest req = new GetBannersFacetsRequest("nulla") {{
                locale = "corrupti";
                query = "illum";
            }};            

            GetBannersFacetsResponse res = sdk.productListPage.getBannersFacets(req);

            if (res.banners != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorrectionSearch

Tries to correct a misspelled term from the search.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorrectionSearchRequest;
import org.openapis.openapi.models.operations.GetCorrectionSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCorrectionSearchRequest req = new GetCorrectionSearchRequest() {{
                locale = "vel";
                query = "error";
            }};            

            GetCorrectionSearchResponse res = sdk.productListPage.getCorrectionSearch(req);

            if (res.correction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFacetsFacets

Lists the possible facets for a given query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFacetsFacetsRequest;
import org.openapis.openapi.models.operations.GetFacetsFacetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFacetsFacetsRequest req = new GetFacetsFacetsRequest("deserunt") {{
                hideUnavailableItems = false;
                locale = "suscipit";
                query = "iure";
            }};            

            GetFacetsFacetsResponse res = sdk.productListPage.getFacetsFacets(req);

            if (res.facets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductSearchFacets

Lists the products for a given query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductSearchFacetsRequest;
import org.openapis.openapi.models.operations.GetProductSearchFacetsResponse;
import org.openapis.openapi.models.operations.GetProductSearchFacetsSimulationBehaviorEnum;
import org.openapis.openapi.models.operations.GetProductSearchFacetsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductSearchFacetsRequest req = new GetProductSearchFacetsRequest("magnam") {{
                count = 8917.73;
                hideUnavailableItems = false;
                locale = "ipsa";
                page = 9636.63;
                query = "tempora";
                simulationBehavior = GetProductSearchFacetsSimulationBehaviorEnum.SKIP;
                sort = GetProductSearchFacetsSortEnum.NAME_DESC;
            }};            

            GetProductSearchFacetsResponse res = sdk.productListPage.getProductSearchFacets(req);

            if (res.productSearch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchSuggestions

Lists suggested terms similar to the search term.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchSuggestionsRequest;
import org.openapis.openapi.models.operations.GetSearchSuggestionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchSuggestionsRequest req = new GetSearchSuggestionsRequest() {{
                locale = "minus";
                query = "placeat";
            }};            

            GetSearchSuggestionsResponse res = sdk.productListPage.getSearchSuggestions(req);

            if (res.searchSuggestions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
