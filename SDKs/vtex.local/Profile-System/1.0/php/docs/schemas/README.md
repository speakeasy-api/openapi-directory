# schemas

### Available Operations

* [createOrUpdateProfileSchema](#createorupdateprofileschema) - Create or update profile schema

## createOrUpdateProfileSchema

Creates or updates profile schema.

> Each account has one profile schema. Updating it with this request will substitute the previous version.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateProfileSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\Schema;
use \OpenAPI\OpenAPI\Models\Shared\SchemaProperties;
use \OpenAPI\OpenAPI\Models\Shared\SchemaPropertiesFieldName;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrUpdateProfileSchemaRequest();
    $request->accept = 'application/json';
    $request->contentType = 'application/json';
    $request->schema = new Schema();
    $request->schema->description = 'This schema describes a b2c customer profile.';
    $request->schema->documentTTL = 1825;
    $request->schema->properties = new SchemaProperties();
    $request->schema->properties->fieldName = new SchemaPropertiesFieldName();
    $request->schema->properties->fieldName->items = [
        'nulla' => 'corrupti',
        'illum' => 'vel',
        'error' => 'deserunt',
    ];
    $request->schema->properties->fieldName->pii = true;
    $request->schema->properties->fieldName->sensitive = true;
    $request->schema->properties->fieldName->type = 'string';
    $request->schema->required = [
        'iure',
        'magnam',
    ];
    $request->schema->title = 'Client profile schema';
    $request->schema->type = 'object';
    $request->schema->vIndexed = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->schema->vUnique = [
        'minus',
        'placeat',
    ];
    $request->schema->version = 1;

    $response = $sdk->schemas->createOrUpdateProfileSchema($request);

    if ($response->createOrUpdateProfileSchema201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
