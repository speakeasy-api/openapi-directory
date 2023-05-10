# sessions

### Available Operations

* [createnewsession](#createnewsession) - Create new session
* [editsession](#editsession) - Edit session
* [getSession](#getsession) - Get Session

## createnewsession

The response should contain a session cookie. Further `POST` or `PATCH` requests will edit the existing session rather than creating a new one. All parameters in the body that are not within the public namespace will be ignored. Query string items will automatically be added to the public namespace. Cookies relevant to the session manager execution are also recorded.

> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreatenewsessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PublicT;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\PostalCode;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatenewsessionRequest();
    $request->public = new PublicT();
    $request->public->country = new Country();
    $request->public->country->value = 'corrupti';
    $request->public->postalCode = new PostalCode();
    $request->public->postalCode->value = 'provident';

    $response = $sdk->sessions->createnewsession($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## editsession

This works exactly the same as the POST create session, but when the request is sent with a vtex_session cookie, it retrieves the session first and then applies the changes instead of generating a new one.

As with the `POST` method, only keys inside the public namespace on the body are considered, and query parameters are automatically added to the public namespace.

> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\EditsessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Public1;
use \OpenAPI\OpenAPI\Models\Shared\NewValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EditsessionRequest();
    $request->public = new Public1();
    $request->public->newValue = new NewValue();
    $request->public->newValue->value = 'distinctio';

    $response = $sdk->sessions->editsession($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSession

Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`. So if you wish to recover the data sent on the previous request, it should be `public.country,public.postalCode`.

> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.

> If you want to retrieve all keys from Session Manager, you can use the wildcard operator (`*`) in your request (i.e. `?items=*`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSessionRequest();
    $request->items = 'namespace1.key1,namespace2.key2';

    $response = $sdk->sessions->getSession($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
