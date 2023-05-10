# documents

## Overview

The APIs within this group are used to save documents and query them by id.

If the document has the id attribute or has fields that have been set to indexes with unique values, VTEX Master Data will attempt to identify the document. If the document is found a change will be made. If it is not found, an inclusion will be made. ** This scenario does not apply to the API with the POST verb**.

Otherwise, a new document will always be created.

You can use the query string `_where` to apply an update only if the document is compliant with the clause.

In addition with this feature you can use the schema parameter `_schema` as a query string to apply the update only if the document is compliant with the schema. If the document is not compliant, the body of the response will have an array with each error, where the field ```Message``` indicates the type of the error.

### Response status code

1. Status Code 201: Document created successfully
2. Status Code 200: Document changed successfully
3. Status Code 304: There were no changes to the document
4. Status Code 400: Invalid information in JSON
5. Status Code 403: Unauthorized access


### Available Operations

* [createnewdocument](#createnewdocument) - Create new document
* [createorupdatepartialdocument](#createorupdatepartialdocument) - Create partial document
* [deletedocument](#deletedocument) - Delete document
* [getdocument](#getdocument) - Get document
* [updateentiredocument](#updateentiredocument) - Update entire document
* [updatepartialdocument](#updatepartialdocument) - Update partial document

## createnewdocument

This request allows you to create a new document corresponding to a given data entity. For example, you can create a new customer profile or address.

> You can use this request to create documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to create.

## Example use cases

### Client profile

In order to create a new customer profile, choose the `CL` data entity and send a request similar to this:

POST
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents
```

Request body
```json
{
    "email": "clark.kent@examplemail.com",
    "firstName": "Clark",
    "lastName": "Kent",
    "phone": "+12025550195",
    "documentType": "CPF",
    "document": "12345678900"
    "isCorporate": false,
    "isNewsletterOptIn": false,
    "localeDefault": "en-US"
 }
```

### Client address

For a new address, the data entity is `AD` and the request would look like this:

POST
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents
```

Request body
```json
{
    "addressName": "My House",
    "addressType": "residential",
    "city": "Metropolis",
    "complement": "",
    "country": "USA",
    "postalCode": "11375",
    "receiverName": "Clark Kent",
    "reference": null,
    "state": "MP",
    "street": "Baker Street",
    "neighborhood": "Upper east side",
    "number": "21",
    "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"
}
```

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
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = [
        'ipsam' => 'repellendus',
    ];
    $request->schema = 'schema';
    $request->dataEntityName = 'Client';

    $response = $sdk->documents->createnewdocument($request);

    if ($response->documentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createorupdatepartialdocument

This request allows you to partially update a document corresponding to a given data entity.

> You can use this request to create documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.

## Example use cases

### Client profile

In order to create a customer profile's `phone` and `isNewsletterOptIn` fields, choose the `CL` data entity and send a request similar to this:

PATCH
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents
```

Request body
```json
{
    "phone": "+12025550195",
    "isNewsletterOptIn": false
 }
```

### Client address

In order to update the `receiverName` of an existing address, the data entity is `AD` and the request would look like this:

PATCH
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents
```

Request body
```json
{
    "receiverName": "Lois Lane"
}
```

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
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->requestBody = [
        'quo' => 'odit',
        'at' => 'at',
        'maiores' => 'molestiae',
        'quod' => 'quod',
    ];
    $request->schema = 'schema';
    $request->dataEntityName = 'Client';

    $response = $sdk->documents->createorupdatepartialdocument($request);

    if ($response->documentResponse !== null) {
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
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->dataEntityName = 'Client';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';

    $response = $sdk->documents->deletedocument($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getdocument

Gets document by ID.

> Assign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.

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
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->dataEntityName = 'Client';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';

    $response = $sdk->documents->getdocument($request);

    if ($response->usingFieldsAll !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateentiredocument

Update an existing document corresponding to a given data entity. For example, you can update a customer profile or address.

> You can use this request to update documents in any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.

## Example use cases

### Client profile

In order to update an existing customer profile, choose the `CL` data entity and send a request similar to this:

PUT
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents/123456789abc
```

Request body
```json
{
    "email": "clark.kent@examplemail.com",
    "firstName": "Clark",
    "lastName": "Kent",
    "phone": "+12025550195",
    "documentType": "CPF",
    "document": "12345678900"
    "isCorporate": false,
    "isNewsletterOptIn": false,
    "localeDefault": "en-US"
 }
```

### Client address

To update an address, the data entity is `AD` and the request would look like this:

PUT
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents/123456789abc
```

Request body
```json
{
    "addressName": "My House",
    "addressType": "residential",
    "city": "Metropolis",
    "complement": "",
    "country": "USA",
    "postalCode": "11375",
    "receiverName": "Clark Kent",
    "reference": null,
    "state": "MP",
    "street": "Baker Street",
    "neighborhood": "Upper east side",
    "number": "21",
    "userId": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e"
}
```

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
    $request->accept = 'application/json';
    $request->requestBody = [
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->schema = 'schema';
    $request->where = 'firstName is not null.';
    $request->dataEntityName = 'Client';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';

    $response = $sdk->documents->updateentiredocument($request);

    if ($response->documentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatepartialdocument

This request allows you to partially update a document corresponding to a given data entity. For example, you can update some fields of a customer profile or address.

> You can use this request to update documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.

## Example use cases

### Client profile

In order to update a customer profile's `phone` and `isNewsletterOptIn` fields, choose the `CL` data entity and send a request similar to this:

PATCH
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents/123456789abc
```

Request body
```json
{
    "phone": "+12025550195",
    "isNewsletterOptIn": false
 }
```

### Client address

In order to update the `receiverName` of an existing address, the data entity is `AD` and the request would look like this:

PATCH
```
https://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents/123456789abc
```

Request body
```json
{
    "receiverName": "Lois Lane"
}
```

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
    $request->accept = 'application/json';
    $request->requestBody = [
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
        'hic' => 'optio',
    ];
    $request->schema = 'schema';
    $request->where = 'firstName is not null.';
    $request->dataEntityName = 'Client';
    $request->id = 'Client-b818cbda-e489-11e6-94f4-0ac138d2d42e';

    $response = $sdk->documents->updatepartialdocument($request);

    if ($response->documentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
