# search

### Available Operations

* [productSearch](#productsearch) - Search for Products
* [productSearchFilteredandOrdered](#productsearchfilteredandordered) - Search for Products with Filter, Order and Pagination
* [searchbyproducturl](#searchbyproducturl) - Search Product by Product URL

## productSearch

Retrieves general information about the products related to the term searched. 
This is the main search used by the store. The user can type anything to be searched.  

For example, if they search for a "decanter", this is the URL: `https://{{accountName}}.{{environment}}.com.br/api/catalog_system/pub/products/search/decanter`. 

Note that maybe the response can be HTTP 200 or 206, 206 means that it's a partial content response.

If it is a 206 take a look at the Headers, will be an entry called resources. E.g.: resources → 0-9/19. This means that the response is showing items from 0 to 9, 10 items, but there were 19 items found. See more information at the paging route example.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductSearchRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->search = 'jacket';

    $response = $sdk->search->productSearch($request);

    if ($response->productSearch200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productSearchFilteredandOrdered

Retrieves general information about the store products. This information can be filtered and ordered by a number of options. It also can be paginated, filtered and ordered. 

## Filters  

- **Filter by full text** - `ft={searchWord}`  
E.g.: `ft=television`

- **Filter by category** - `fq=C:/{a}/{b}`  
`{a}` and `{b}` are Category IDs   
E.g.: `fq=C:/1000041/1000049/`

- **Filter by brand** - `fq=B:/{a}/{b}`  
`{a}` and `{b}` are Brand IDs
E.g.: `fq=B:/189385/189387/`

- **Filter by specification** - `fq=specificationFilter_{a}:{b}`  
`{a}` is the specification ID
`{b}` is the specification value
E.g.: To filter products where the color is Blue, find the specification ID for color. Suppose it is 123, then the query will be: `fq=specificationFilter_123:Blue`

- **Filter by price range** - `fq=P:[{a} TO {b}]`  
`{a}`  is the minimum price "from"
`{b}` is the highest price "to"  
E.g.: `fq=P:[0 TO 20]` will search products between 0.00 and 20.00.  

- **Filter by collection** - `fq=productClusterIds:{{productClusterId}}` 
`productClusterId` is the same as `collectionId`  
For more information about collections, read [Creating a product collection](https://help.vtex.com/en/tutorial/creating-a-product-collection).

- **Filter by product ID** - `fq=productId:{{productId}}`

- **Filter by SKU ID** - `fq=skuId:{{skuId}}`

- **Filter by referenceId** - `fq=alternateIds_RefId:{{referenceId}}`

- **Filter by EAN13** - `fq=alternateIds_Ean:{{ean13}}`

- **Filter by availability at a specific sales channel** - `fq=isAvailablePerSalesChannel_{{sc}}:{{bool}}`  
`{{sc}}` is the desired sales channel  
`{{bool}}` is true ou false, 1 or 0.  
E.g.: seaching available products for the sales channel 4 would be `fq=isAvailablePerSalesChannel_4:1`

- **Filter by available at a specific seller** - `fq=sellerId:{{sellerId}}`
The search does not include White Label Sellers.

## Pagination

- **Initial item number** - `_from={{first}}`
- **Final item number** - `_to={{last}}`

>⚠️ This endpoint returns a maximum of 50 items per response, so the difference between `_from` and `_to` should not exceed this number. The result order is descending, from the highest product ID to the lowest.

## Sorting

- **Price**  
`O=OrderByPriceDESC`  
`O=OrderByPriceASC`

- **Top Selling Products**  
`O=OrderByTopSaleDESC`

- **Best Reviews**  
`O=OrderByReviewRateDESC`

- **Name**  
`O=OrderByNameASC`  
`O=OrderByNameDESC`

- **Release Date**  
`O=OrderByReleaseDateDESC`

- **Best Discounts**  
`O=OrderByBestDiscountDESC`

- **Score**  
`O=OrderByScoreDESC`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductSearchFilteredandOrderedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductSearchFilteredandOrderedRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->o = 'OrderByNameASC';
    $request->from = '1';
    $request->to = '50';
    $request->fq = 'C:/1000041/1000049/';
    $request->ft = 'television';

    $response = $sdk->search->productSearchFilteredandOrdered($request);

    if ($response->productSearchFilteredandOrdered200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchbyproducturl

Retrieves general information about the product of the URL you searched for.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchbyproducturlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchbyproducturlRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->productTextLink = 'blue-shirt';

    $response = $sdk->search->searchbyproducturl($request);

    if ($response->searchbyproducturl200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
