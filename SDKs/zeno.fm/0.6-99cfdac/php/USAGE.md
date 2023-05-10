<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePodcastRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreatePodcastRequestBodyFileLogo;
use \OpenAPI\OpenAPI\Models\Shared\Podcast;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePodcastRequestBody();
    $request->fileLogo = new CreatePodcastRequestBodyFileLogo();
    $request->fileLogo->content = 'corrupti';
    $request->fileLogo->fileLogo = 'provident';
    $request->podcast = new Podcast();
    $request->podcast->author = 'distinctio';
    $request->podcast->block = false;
    $request->podcast->categories = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->podcast->copyright = 'vel';
    $request->podcast->country = 'Netherlands Antilles';
    $request->podcast->description = 'deserunt';
    $request->podcast->explicit = false;
    $request->podcast->image = 'suscipit';
    $request->podcast->key = 'iure';
    $request->podcast->keywords = [
        'debitis',
        'ipsa',
    ];
    $request->podcast->language = 'delectus';
    $request->podcast->link = 'tempora';
    $request->podcast->ownerEmail = 'suscipit';
    $request->podcast->ownerName = 'molestiae';
    $request->podcast->showType = 'minus';
    $request->podcast->subtitle = 'placeat';
    $request->podcast->summary = 'voluptatum';
    $request->podcast->title = 'Ms.';

    $response = $sdk->apiV2->createPodcast($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->