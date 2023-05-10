# entityData

## Overview

Métodos utilizados para recuperar información de las entidades

### Available Operations

* [getEntities](#getentities) - Obtiene el listado de entidades soportadas
* [getErrorCodes](#geterrorcodes) - Listado de códigos de error
* [postEntities](#postentities) - Obtiene los activos financieros y el detalle de su composición

## getEntities

Obtiene el listado de entidades soportadas y la información necesaria para dibujar el formulario de login de la entidad.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->entityData->getEntities();

    if ($response->entities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getErrorCodes

Listado de códigos de error. Presta especial atención a que no todos los códigos de error deben recibir el mismo tratamiento por parte de tu aplicación. Ante un error de password incorrecto no debes reintentar la llamada con los mismos parámetros, pero ante un error que te indique que la entidad está en mantenimiento sí puedes reintentarlo. Pide una sesión técnica con nuestro equipo para resolver cualquier duda sobre la gestión de errores.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetErrorCodesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetErrorCodesLangEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetErrorCodesRequest();
    $request->lang = GetErrorCodesLangEnum::EN;

    $response = $sdk->entityData->getErrorCodes($request);

    if ($response->errorCodes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEntities

Obtiene los activos financieros y el detalle de su composición de carteras de inversión compuestas por acciones o fondos, tarjetas de crédito, seguros y préstamos. Incluye información de titularidad de cada uno de los activos así como identificadores únicos que facilitan el tratamiento del dato. Es posible obtener datos Mock. Consulte con el equipo técnico cómo hacerlo.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostEntitiesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostEntitiesRequestBodyDocumentTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostEntitiesRequestBody();
    $request->otp = 'provident';
    $request->session = 'distinctio';
    $request->apiKey = 'quibusdam';
    $request->code = 'unde';
    $request->contractCode = 'nulla';
    $request->documentType = PostEntitiesRequestBodyDocumentTypeEnum::NIF;
    $request->password = 'corrupti';
    $request->secondPassword = 'illum';
    $request->token = 'vel';
    $request->tokenize = false;
    $request->user = 'error';

    $response = $sdk->entityData->postEntities($request);

    if ($response->entityData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
