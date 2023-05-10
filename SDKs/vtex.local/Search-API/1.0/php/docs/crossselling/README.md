# crossSelling

### Available Operations

* [productSearchAccessories](#productsearchaccessories) - Get Product Search of Accessories
* [productSearchShowTogether](#productsearchshowtogether) - Get Product Search of Show Together
* [productSearchSimilars](#productsearchsimilars) - Get Product Search of Similars
* [productSearchSuggestions](#productsearchsuggestions) - Get Product Search of Suggestions
* [productSearchWhoBoughtAlsoBought](#productsearchwhoboughtalsobought) - Get Product Search of Who Bought Also Bought
* [productSearchWhoSawAlsoBought](#productsearchwhosawalsobought) - Get Product Search of Who Saw Also Bought
* [productSearchWhoSawAlsoSaw](#productsearchwhosawalsosaw) - Get Product Search of Who Saw Also Saw

## productSearchAccessories

Retrieves general information about the product's accessories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductSearchAccessoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductSearchAccessoriesRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->productId = 1;

    $response = $sdk->crossSelling->productSearchAccessories($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productSearchShowTogether

Retrieves general information about the products that are show together with the product in question.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductSearchShowTogetherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductSearchShowTogetherRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->productId = 1;

    $response = $sdk->crossSelling->productSearchShowTogether($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productSearchSimilars

Retrieves general information about related product searches.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductSearchSimilarsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductSearchSimilarsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->productId = 1;

    $response = $sdk->crossSelling->productSearchSimilars($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productSearchSuggestions

Retrieves general information about other product suggestions related to the product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductSearchSuggestionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductSearchSuggestionsRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->productId = 1;

    $response = $sdk->crossSelling->productSearchSuggestions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productSearchWhoBoughtAlsoBought

Retrieves general information about other related products that the user also bought.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductSearchWhoBoughtAlsoBoughtRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductSearchWhoBoughtAlsoBoughtRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->productId = '1';

    $response = $sdk->crossSelling->productSearchWhoBoughtAlsoBought($request);

    if ($response->productSearchWhoBoughtAlsoBought200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productSearchWhoSawAlsoBought

Retrieves general information about other related products that the users saw and also bought.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductSearchWhoSawAlsoBoughtRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductSearchWhoSawAlsoBoughtRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->productId = '1';

    $response = $sdk->crossSelling->productSearchWhoSawAlsoBought($request);

    if ($response->productSearchWhoSawAlsoBought200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productSearchWhoSawAlsoSaw

Retrieves general information about other related products that the users also saw.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductSearchWhoSawAlsoSawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductSearchWhoSawAlsoSawRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->productId = 1;

    $response = $sdk->crossSelling->productSearchWhoSawAlsoSaw($request);

    if ($response->productSearchWhoSawAlsoSaw200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
