# macros

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [run](#run) - Executes a macro.

## run

Runs a specified macro on a specified list of items ("list" variable in the macro code). The list of items can be empty if the macro doesn't use it. Additional custom parameters can be provided to the macro when necessary ("params" variable in the macro code).

 <BR>Note: Macros that support parameters can be also run from GUI (Views in Home Portal),so they should also handle the empty parameters map (e.g. by defining default values when parameters are not provided).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RunRequest;
use \OpenAPI\OpenAPI\Models\Shared\MacroRequestDTO;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunRequest();
    $request->macroRequestDTO = new MacroRequestDTO();
    $request->macroRequestDTO->async = false;
    $request->macroRequestDTO->ids = [
        401132,
    ];
    $request->macroRequestDTO->params = [
        'dicta' => [
            'maiores' => 'quasi',
        ],
        'ex' => [
            'excepturi' => 'voluptatibus',
            'nostrum' => 'sapiente',
            'quisquam' => 'saepe',
            'ea' => 'impedit',
        ],
        'corporis' => [
            'aliquid' => 'inventore',
            'magnam' => 'ea',
        ],
    ];
    $request->macroId = 775220;

    $response = $sdk->macros->run($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
