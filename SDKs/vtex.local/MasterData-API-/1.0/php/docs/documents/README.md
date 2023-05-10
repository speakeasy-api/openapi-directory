# documents

## Overview

The APIs within this group are used to save documents and query them by id.

If the document has the id attribute or has fields that have been set to indexes with unique values, VTEX Master Data will attempt to identify the document. If the document is found a change will be made. If it is not found, an inclusion will be made. ** This scenario does not apply to the API with the POST verb**.

Another important note: The id field will only be considered on the **POST** verb if the ID type entered in the Data Entity is the option:

```
A chave primária será informada pelo cliente através do atributo 'id'
```

Otherwise, a new document will always be created.

### Response status code

1. Status Code 201: Document created successfully
2. Status Code 200: Document changed successfully
3. Status Code 304: There were no changes to the document
4. Status Code 400: Invalid information in JSON
5. Status Code 403: Unauthorized access


### Available Operations

* [createnewdocument](#createnewdocument) - Create new document
* [createorupdateentiredocument](#createorupdateentiredocument) - Create or update entire document
* [createorupdatepartialdocument](#createorupdatepartialdocument) - Create or update partial document
* [deletedocument](#deletedocument) - Delete document
* [getdocument](#getdocument) - Get document
* [updateentiredocument](#updateentiredocument) - Update entire document
* [updatepartialdocument](#updatepartialdocument) - Update partial document

## createnewdocument

Creates documents through a JSON object where the key is the name of the field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatenewdocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatenewdocumentRequest();
    $request->accept = 'omnis';
    $request->requestBody = [
        'cum' => 'perferendis',
        'doloremque' => 'reprehenderit',
    ];
    $request->acronym = 'ut';

    $response = $sdk->documents->createnewdocument($request);

    if ($response->createnewdocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createorupdateentiredocument

Create or update entire document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateorupdateentiredocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateorupdateentiredocumentRequest();
    $request->accept = 'maiores';
    $request->requestBody = [
        'corporis' => 'dolore',
    ];
    $request->acronym = 'iusto';

    $response = $sdk->documents->createorupdateentiredocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createorupdatepartialdocument

Create or update partial document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateorupdatepartialdocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateorupdatepartialdocumentRequest();
    $request->accept = 'dicta';
    $request->requestBody = [
        'enim' => 'accusamus',
        'commodi' => 'repudiandae',
        'quae' => 'ipsum',
    ];
    $request->acronym = 'quidem';

    $response = $sdk->documents->createorupdatepartialdocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletedocument

It allows to delete a document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletedocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletedocumentRequest();
    $request->accept = 'molestias';
    $request->contentType = 'excepturi';
    $request->acronym = 'pariatur';
    $request->id = '488e1e91-e450-4ad2-abd4-4269802d502a';

    $response = $sdk->documents->deletedocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getdocument

Retrieves a document.

Assign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetdocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetdocumentRequest();
    $request->accept = 'excepturi';
    $request->contentType = 'tempora';
    $request->acronym = 'facilis';
    $request->id = 'b4f63c96-9e9a-43ef-a77d-fb14cd66ae39';

    $response = $sdk->documents->getdocument($request);

    if ($response->usingfilters !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateentiredocument

Update entire document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateentiredocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateentiredocumentRequest();
    $request->accept = 'enim';
    $request->requestBody = [
        'delectus' => 'quidem',
        'provident' => 'nam',
        'id' => 'blanditiis',
        'deleniti' => 'sapiente',
    ];
    $request->acronym = 'amet';
    $request->id = 'a6699707-4ba4-4469-b6e2-141959890afa';

    $response = $sdk->documents->updateentiredocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatepartialdocument

Update partial document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatepartialdocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatepartialdocumentRequest();
    $request->accept = 'ad';
    $request->requestBody = [
        'dolor' => 'necessitatibus',
        'odit' => 'nemo',
    ];
    $request->acronym = 'quasi';
    $request->id = '6fe4c8b7-11e5-4b7f-92ed-028921cddc69';

    $response = $sdk->documents->updatepartialdocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
