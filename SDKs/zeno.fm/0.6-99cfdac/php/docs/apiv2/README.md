# apiV2

### Available Operations

* [createPodcast](#createpodcast) - Create podcast
* [createPodcastEpisode](#createpodcastepisode) - Create podcast episode
* [deletePodcast](#deletepodcast) - Delete podcast
* [deletePodcast1](#deletepodcast1) - Delete podcast episode
* [getPartnerAggregatorStations](#getpartneraggregatorstations) - List stations
* [getPodcast](#getpodcast) - Get podcast
* [getPodcastCategories](#getpodcastcategories) - Get the list of Categories that can be used to filter podcasts in the search podcasts request
* [getPodcastCountries](#getpodcastcountries) - Get the list of Countries that can be used to filter podcasts in the search podcasts request
* [getPodcastEpisode](#getpodcastepisode) - Get podcast episode
* [getPodcastEpisodes](#getpodcastepisodes) - Get podcast episodes
* [getPodcastLanguages](#getpodcastlanguages) - Get the list of Languages that can be used to filter podcasts in the search podcasts request
* [getStationCountries](#getstationcountries) - Get the list of Countries that can be used to filter stations in the search stations request
* [getStationGenres](#getstationgenres) - Get the list of Genres that can be used to filter stations in the search stations request
* [getStationLanguages](#getstationlanguages) - Get the list of Languages that can be used to filter stations in the search stations request
* [searchPodcasts](#searchpodcasts) - Search podcasts
* [searchStations](#searchstations) - Search stations
* [updatePodcast](#updatepodcast) - Update podcast
* [updatePodcastEpisode](#updatepodcastepisode) - Update podcast episode

## createPodcast

Create podcast

### Example Usage

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
    $request->fileLogo->content = 'excepturi';
    $request->fileLogo->fileLogo = 'nisi';
    $request->podcast = new Podcast();
    $request->podcast->author = 'recusandae';
    $request->podcast->block = false;
    $request->podcast->categories = [
        'ab',
        'quis',
        'veritatis',
        'deserunt',
    ];
    $request->podcast->copyright = 'perferendis';
    $request->podcast->country = 'Guinea-Bissau';
    $request->podcast->description = 'repellendus';
    $request->podcast->explicit = false;
    $request->podcast->image = 'sapiente';
    $request->podcast->key = 'quo';
    $request->podcast->keywords = [
        'at',
    ];
    $request->podcast->language = 'at';
    $request->podcast->link = 'maiores';
    $request->podcast->ownerEmail = 'molestiae';
    $request->podcast->ownerName = 'quod';
    $request->podcast->showType = 'quod';
    $request->podcast->subtitle = 'esse';
    $request->podcast->summary = 'totam';
    $request->podcast->title = 'Miss';

    $response = $sdk->apiV2->createPodcast($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPodcastEpisode

Create podcast episode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePodcastEpisodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePodcastEpisodeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PodcastEpisode;
use \OpenAPI\OpenAPI\Models\Operations\CreatePodcastEpisodeRequestBodyFileLogo;
use \OpenAPI\OpenAPI\Models\Operations\CreatePodcastEpisodeRequestBodyFileMedia;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePodcastEpisodeRequest();
    $request->requestBody = new CreatePodcastEpisodeRequestBody();
    $request->requestBody->episode = new PodcastEpisode();
    $request->requestBody->episode->author = 'dolorum';
    $request->requestBody->episode->block = false;
    $request->requestBody->episode->description = 'dicta';
    $request->requestBody->episode->duration = 720633;
    $request->requestBody->episode->episode = 639921;
    $request->requestBody->episode->episodeType = 'occaecati';
    $request->requestBody->episode->explicit = false;
    $request->requestBody->episode->fileUrl = 'fugit';
    $request->requestBody->episode->image = 'deleniti';
    $request->requestBody->episode->key = 'hic';
    $request->requestBody->episode->link = 'optio';
    $request->requestBody->episode->publishDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T16:29:54.554Z');
    $request->requestBody->episode->season = 414662;
    $request->requestBody->episode->size = 473600;
    $request->requestBody->episode->subtitle = 'modi';
    $request->requestBody->episode->summary = 'qui';
    $request->requestBody->episode->tags = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->requestBody->episode->title = 'Mr.';
    $request->requestBody->fileLogo = new CreatePodcastEpisodeRequestBodyFileLogo();
    $request->requestBody->fileLogo->content = 'perferendis';
    $request->requestBody->fileLogo->fileLogo = 'ad';
    $request->requestBody->fileMedia = new CreatePodcastEpisodeRequestBodyFileMedia();
    $request->requestBody->fileMedia->content = 'natus';
    $request->requestBody->fileMedia->fileMedia = 'sed';
    $request->podcastKey = 'iste';

    $response = $sdk->apiV2->createPodcastEpisode($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePodcast

Delete podcast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePodcastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePodcastRequest();
    $request->podcastKey = 'dolor';

    $response = $sdk->apiV2->deletePodcast($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePodcast1

Delete podcast episode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePodcast1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePodcast1Request();
    $request->episodeKey = 'natus';
    $request->podcastKey = 'laboriosam';

    $response = $sdk->apiV2->deletePodcast1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPartnerAggregatorStations

List stations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPartnerAggregatorStationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPartnerAggregatorStationsRequest();
    $request->hitsPerPage = 'hic';
    $request->page = 'saepe';

    $response = $sdk->apiV2->getPartnerAggregatorStations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPodcast

Get podcast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPodcastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPodcastRequest();
    $request->podcastKey = 'fuga';

    $response = $sdk->apiV2->getPodcast($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPodcastCategories

Get the list of Categories that can be used to filter podcasts in the search podcasts request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apiV2->getPodcastCategories();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPodcastCountries

Get the list of Countries that can be used to filter podcasts in the search podcasts request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apiV2->getPodcastCountries();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPodcastEpisode

Get podcast episode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPodcastEpisodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPodcastEpisodeRequest();
    $request->episodeKey = 'in';
    $request->podcastKey = 'corporis';

    $response = $sdk->apiV2->getPodcastEpisode($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPodcastEpisodes

Get podcast episodes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPodcastEpisodesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPodcastEpisodesRequest();
    $request->limit = 'iste';
    $request->offset = 'iure';
    $request->podcastKey = 'saepe';

    $response = $sdk->apiV2->getPodcastEpisodes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPodcastLanguages

Get the list of Languages that can be used to filter podcasts in the search podcasts request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apiV2->getPodcastLanguages();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStationCountries

Get the list of Countries that can be used to filter stations in the search stations request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apiV2->getStationCountries();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStationGenres

Get the list of Genres that can be used to filter stations in the search stations request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apiV2->getStationGenres();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStationLanguages

Get the list of Languages that can be used to filter stations in the search stations request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apiV2->getStationLanguages();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchPodcasts

Search podcasts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PodcastSearchParams;
use \OpenAPI\OpenAPI\Models\Shared\PodcastFilters;
use \OpenAPI\OpenAPI\Models\Shared\PodcastFiltersPodcastTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PodcastSearchParams();
    $request->filters = new PodcastFilters();
    $request->filters->category = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->filters->country = [
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->filters->language = [
        'corporis',
    ];
    $request->filters->podcastType = PodcastFiltersPodcastTypeEnum::PODCASTS;
    $request->hitsPerPage = 750686;
    $request->page = 315428;
    $request->query = 'omnis';

    $response = $sdk->apiV2->searchPodcasts($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchStations

Search stations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\StationSearchParams;
use \OpenAPI\OpenAPI\Models\Shared\StationFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StationSearchParams();
    $request->filters = new StationFilters();
    $request->filters->country = [
        'minima',
        'excepturi',
    ];
    $request->filters->genre = [
        'iure',
    ];
    $request->filters->language = [
        'doloribus',
        'sapiente',
        'architecto',
    ];
    $request->hitsPerPage = 652790;
    $request->page = 208876;
    $request->query = 'culpa';

    $response = $sdk->apiV2->searchStations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePodcast

Update podcast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePodcastRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePodcastRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePodcastRequestBodyFileLogo;
use \OpenAPI\OpenAPI\Models\Shared\Podcast;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePodcastRequest();
    $request->requestBody = new UpdatePodcastRequestBody();
    $request->requestBody->fileLogo = new UpdatePodcastRequestBodyFileLogo();
    $request->requestBody->fileLogo->content = 'consequuntur';
    $request->requestBody->fileLogo->fileLogo = 'repellat';
    $request->requestBody->podcast = new Podcast();
    $request->requestBody->podcast->author = 'mollitia';
    $request->requestBody->podcast->block = false;
    $request->requestBody->podcast->categories = [
        'numquam',
        'commodi',
        'quam',
    ];
    $request->requestBody->podcast->copyright = 'molestiae';
    $request->requestBody->podcast->country = 'Dominican Republic';
    $request->requestBody->podcast->description = 'error';
    $request->requestBody->podcast->explicit = false;
    $request->requestBody->podcast->image = 'quia';
    $request->requestBody->podcast->key = 'quis';
    $request->requestBody->podcast->keywords = [
        'laborum',
    ];
    $request->requestBody->podcast->language = 'animi';
    $request->requestBody->podcast->link = 'enim';
    $request->requestBody->podcast->ownerEmail = 'odit';
    $request->requestBody->podcast->ownerName = 'quo';
    $request->requestBody->podcast->showType = 'sequi';
    $request->requestBody->podcast->subtitle = 'tenetur';
    $request->requestBody->podcast->summary = 'ipsam';
    $request->requestBody->podcast->title = 'Miss';
    $request->podcastKey = 'possimus';

    $response = $sdk->apiV2->updatePodcast($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePodcastEpisode

Update podcast episode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePodcastEpisodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePodcastEpisodeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PodcastEpisode;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePodcastEpisodeRequestBodyFileLogo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePodcastEpisodeRequest();
    $request->requestBody = new UpdatePodcastEpisodeRequestBody();
    $request->requestBody->episode = new PodcastEpisode();
    $request->requestBody->episode->author = 'aut';
    $request->requestBody->episode->block = false;
    $request->requestBody->episode->description = 'quasi';
    $request->requestBody->episode->duration = 622846;
    $request->requestBody->episode->episode = 837945;
    $request->requestBody->episode->episodeType = 'laborum';
    $request->requestBody->episode->explicit = false;
    $request->requestBody->episode->fileUrl = 'quasi';
    $request->requestBody->episode->image = 'reiciendis';
    $request->requestBody->episode->key = 'voluptatibus';
    $request->requestBody->episode->link = 'vero';
    $request->requestBody->episode->publishDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-28T23:41:25.321Z');
    $request->requestBody->episode->season = 976762;
    $request->requestBody->episode->size = 55714;
    $request->requestBody->episode->subtitle = 'omnis';
    $request->requestBody->episode->summary = 'voluptate';
    $request->requestBody->episode->tags = [
        'perferendis',
        'doloremque',
        'reprehenderit',
    ];
    $request->requestBody->episode->title = 'Mrs.';
    $request->requestBody->fileLogo = new UpdatePodcastEpisodeRequestBodyFileLogo();
    $request->requestBody->fileLogo->content = 'maiores';
    $request->requestBody->fileLogo->fileLogo = 'dicta';
    $request->episodeKey = 'corporis';
    $request->podcastKey = 'dolore';

    $response = $sdk->apiV2->updatePodcastEpisode($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
