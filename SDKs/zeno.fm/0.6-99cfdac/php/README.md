# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiV2](docs/apiv2/README.md)

* [createPodcast](docs/apiv2/README.md#createpodcast) - Create podcast
* [createPodcastEpisode](docs/apiv2/README.md#createpodcastepisode) - Create podcast episode
* [deletePodcast](docs/apiv2/README.md#deletepodcast) - Delete podcast
* [deletePodcast1](docs/apiv2/README.md#deletepodcast1) - Delete podcast episode
* [getPartnerAggregatorStations](docs/apiv2/README.md#getpartneraggregatorstations) - List stations
* [getPodcast](docs/apiv2/README.md#getpodcast) - Get podcast
* [getPodcastCategories](docs/apiv2/README.md#getpodcastcategories) - Get the list of Categories that can be used to filter podcasts in the search podcasts request
* [getPodcastCountries](docs/apiv2/README.md#getpodcastcountries) - Get the list of Countries that can be used to filter podcasts in the search podcasts request
* [getPodcastEpisode](docs/apiv2/README.md#getpodcastepisode) - Get podcast episode
* [getPodcastEpisodes](docs/apiv2/README.md#getpodcastepisodes) - Get podcast episodes
* [getPodcastLanguages](docs/apiv2/README.md#getpodcastlanguages) - Get the list of Languages that can be used to filter podcasts in the search podcasts request
* [getStationCountries](docs/apiv2/README.md#getstationcountries) - Get the list of Countries that can be used to filter stations in the search stations request
* [getStationGenres](docs/apiv2/README.md#getstationgenres) - Get the list of Genres that can be used to filter stations in the search stations request
* [getStationLanguages](docs/apiv2/README.md#getstationlanguages) - Get the list of Languages that can be used to filter stations in the search stations request
* [searchPodcasts](docs/apiv2/README.md#searchpodcasts) - Search podcasts
* [searchStations](docs/apiv2/README.md#searchstations) - Search stations
* [updatePodcast](docs/apiv2/README.md#updatepodcast) - Update podcast
* [updatePodcastEpisode](docs/apiv2/README.md#updatepodcastepisode) - Update podcast episode
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
