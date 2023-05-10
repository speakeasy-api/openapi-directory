# allFunctions

### Available Operations

* [getFindInteractions](#getfindinteractions) - findInteractionsFind interactions defined in WikiPathways pathways.
* [getFindPathwaysByLiterature](#getfindpathwaysbyliterature) - findPathwaysByLiterature
* [getFindPathwaysByText](#getfindpathwaysbytext) - findPathwaysByText
* [getFindPathwaysByXref](#getfindpathwaysbyxref) - findPathwaysByXref
* [getGetColoredPathway](#getgetcoloredpathway) - getColoredPathwayGet a colored image version of the pathway.
* [getGetCurationTagHistory](#getgetcurationtaghistory) - getCurationTagHistory
* [getGetCurationTags](#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetCurationTagsByName](#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetOntologyTermsByPathway](#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [getGetPathway](#getgetpathway) - getPathway
* [getGetPathwayAs](#getgetpathwayas) - getPathwayAsDownload a pathway in the specified file format.
* [getGetPathwayHistory](#getgetpathwayhistory) - getPathwayHistoryGet the revision history of a pathway.
* [getGetPathwayInfo](#getgetpathwayinfo) - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
* [getGetPathwaysByOntologyTerm](#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [getGetPathwaysByParentOntologyTerm](#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [getGetRecentChanges](#getgetrecentchanges) - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
* [getGetUserByOrcid](#getgetuserbyorcid) - getUserByOrcid
* [getGetXrefList](#getgetxreflist) - getXrefList
* [getListOrganisms](#getlistorganisms) - listOrganisms
* [getListPathways](#getlistpathways) - listPathways
* [getLogin](#getlogin) - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
* [getRemoveCurationTag](#getremovecurationtag) - removeCurationTagRemove a curation tag from a pathway.
* [getRemoveOntologyTag](#getremoveontologytag) - removeOntologyTag
* [getSaveCurationTag](#getsavecurationtag) - saveCurationTag
* [getSaveOntologyTag](#getsaveontologytag) - saveOntologyTag
* [getUpdatePathway](#getupdatepathway) - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* [postCreatePathway](#postcreatepathway) - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

## getFindInteractions

findInteractionsFind interactions defined in WikiPathways pathways.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFindInteractionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindInteractionsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindInteractionsRequest();
    $request->format = GetFindInteractionsFormatEnum::JPG;
    $request->query = 'quibusdam';

    $response = $sdk->allFunctions->getFindInteractions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindPathwaysByLiterature

findPathwaysByLiterature

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByLiteratureRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByLiteratureFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindPathwaysByLiteratureRequest();
    $request->format = GetFindPathwaysByLiteratureFormatEnum::DUMP;
    $request->query = 'nulla';

    $response = $sdk->allFunctions->getFindPathwaysByLiterature($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindPathwaysByText

findPathwaysByText

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByTextRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByTextFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindPathwaysByTextRequest();
    $request->format = GetFindPathwaysByTextFormatEnum::DUMP;
    $request->query = 'illum';
    $request->species = 'vel';

    $response = $sdk->allFunctions->getFindPathwaysByText($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindPathwaysByXref

findPathwaysByXref

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByXrefRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindPathwaysByXrefFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindPathwaysByXrefRequest();
    $request->codes = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->format = GetFindPathwaysByXrefFormatEnum::XML;
    $request->ids = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];

    $response = $sdk->allFunctions->getFindPathwaysByXref($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetColoredPathway

getColoredPathwayGet a colored image version of the pathway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetColoredPathwayRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetColoredPathwayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetColoredPathwayRequest();
    $request->color = [
        'minus',
        'placeat',
    ];
    $request->fileType = 'voluptatum';
    $request->format = GetGetColoredPathwayFormatEnum::HTML;
    $request->graphId = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->pwId = 'ab';
    $request->revision = 'quis';

    $response = $sdk->allFunctions->getGetColoredPathway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetCurationTagHistory

getCurationTagHistory

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagHistoryFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetCurationTagHistoryRequest();
    $request->format = GetGetCurationTagHistoryFormatEnum::JSON;
    $request->pwId = 'deserunt';
    $request->timestamp = 'perferendis';

    $response = $sdk->allFunctions->getGetCurationTagHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetCurationTags

getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetCurationTagsRequest();
    $request->format = GetGetCurationTagsFormatEnum::HTML;
    $request->pwId = 'repellendus';

    $response = $sdk->allFunctions->getGetCurationTags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetCurationTagsByName

getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagsByNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetCurationTagsByNameFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetCurationTagsByNameRequest();
    $request->format = GetGetCurationTagsByNameFormatEnum::PDF;
    $request->tagName = 'quo';

    $response = $sdk->allFunctions->getGetCurationTagsByName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetOntologyTermsByPathway

getOntologyTermsByPathway

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetOntologyTermsByPathwayRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetOntologyTermsByPathwayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetOntologyTermsByPathwayRequest();
    $request->format = GetGetOntologyTermsByPathwayFormatEnum::JSON;
    $request->pwId = 'at';

    $response = $sdk->allFunctions->getGetOntologyTermsByPathway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathway

getPathway

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwayRequest();
    $request->format = GetGetPathwayFormatEnum::PDF;
    $request->pwId = 'maiores';
    $request->revision = 473608;

    $response = $sdk->allFunctions->getGetPathway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathwayAs

getPathwayAsDownload a pathway in the specified file format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayAsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayAsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwayAsRequest();
    $request->fileType = 'quod';
    $request->format = GetGetPathwayAsFormatEnum::JPG;
    $request->pwId = 'esse';
    $request->revision = 520478;

    $response = $sdk->allFunctions->getGetPathwayAs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathwayHistory

getPathwayHistoryGet the revision history of a pathway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayHistoryFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwayHistoryRequest();
    $request->format = GetGetPathwayHistoryFormatEnum::JPG;
    $request->pwId = 'dolorum';
    $request->timestamp = 'dicta';

    $response = $sdk->allFunctions->getGetPathwayHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathwayInfo

getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwayInfoFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwayInfoRequest();
    $request->format = GetGetPathwayInfoFormatEnum::JPG;
    $request->pwId = 'officia';

    $response = $sdk->allFunctions->getGetPathwayInfo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathwaysByOntologyTerm

getPathwaysByOntologyTerm

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwaysByOntologyTermRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwaysByOntologyTermFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwaysByOntologyTermRequest();
    $request->format = GetGetPathwaysByOntologyTermFormatEnum::DUMP;
    $request->term = 'fugit';

    $response = $sdk->allFunctions->getGetPathwaysByOntologyTerm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetPathwaysByParentOntologyTerm

getPathwaysByParentOntologyTerm

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwaysByParentOntologyTermRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetPathwaysByParentOntologyTermFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetPathwaysByParentOntologyTermRequest();
    $request->format = GetGetPathwaysByParentOntologyTermFormatEnum::DUMP;
    $request->term = 'hic';

    $response = $sdk->allFunctions->getGetPathwaysByParentOntologyTerm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetRecentChanges

getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetRecentChangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetRecentChangesFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetRecentChangesRequest();
    $request->format = GetGetRecentChangesFormatEnum::JPG;
    $request->timestamp = 'totam';

    $response = $sdk->allFunctions->getGetRecentChanges($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetUserByOrcid

getUserByOrcid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetUserByOrcidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetUserByOrcidFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetUserByOrcidRequest();
    $request->format = GetGetUserByOrcidFormatEnum::JSON;
    $request->orcid = 'commodi';

    $response = $sdk->allFunctions->getGetUserByOrcid($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetXrefList

getXrefList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetXrefListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGetXrefListFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetXrefListRequest();
    $request->code = 'molestiae';
    $request->format = GetGetXrefListFormatEnum::XML;
    $request->pwId = 'qui';

    $response = $sdk->allFunctions->getGetXrefList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListOrganisms

listOrganisms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetListOrganismsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetListOrganismsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListOrganismsRequest();
    $request->format = GetListOrganismsFormatEnum::JPG;

    $response = $sdk->allFunctions->getListOrganisms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListPathways

listPathways

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetListPathwaysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetListPathwaysFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListPathwaysRequest();
    $request->format = GetListPathwaysFormatEnum::JPG;
    $request->organism = 'esse';

    $response = $sdk->allFunctions->getListPathways($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLogin

loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLoginRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLoginFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoginRequest();
    $request->format = GetLoginFormatEnum::XML;
    $request->name = 'Brandon Auer';
    $request->pass = 'sed';

    $response = $sdk->allFunctions->getLogin($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveCurationTag

removeCurationTagRemove a curation tag from a pathway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoveCurationTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoveCurationTagFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRemoveCurationTagRequest();
    $request->auth = 'iste';
    $request->format = GetRemoveCurationTagFormatEnum::XML;
    $request->pwId = 'natus';
    $request->tagName = 'laboriosam';
    $request->username = 'Tyra.Turcotte35';

    $response = $sdk->allFunctions->getRemoveCurationTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveOntologyTag

removeOntologyTag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoveOntologyTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoveOntologyTagFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRemoveOntologyTagRequest();
    $request->auth = 'iste';
    $request->format = GetRemoveOntologyTagFormatEnum::HTML;
    $request->pwId = 'saepe';
    $request->termId = 'quidem';
    $request->user = 'architecto';

    $response = $sdk->allFunctions->getRemoveOntologyTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSaveCurationTag

saveCurationTag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSaveCurationTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSaveCurationTagFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSaveCurationTagRequest();
    $request->auth = 'ipsa';
    $request->format = GetSaveCurationTagFormatEnum::PDF;
    $request->pwId = 'est';
    $request->revision = 653140;
    $request->tagName = 'laborum';
    $request->text = 'dolores';
    $request->username = 'Corrine75';

    $response = $sdk->allFunctions->getSaveCurationTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSaveOntologyTag

saveOntologyTag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSaveOntologyTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSaveOntologyTagFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSaveOntologyTagRequest();
    $request->auth = 'enim';
    $request->format = GetSaveOntologyTagFormatEnum::DUMP;
    $request->pwId = 'nemo';
    $request->term = 'minima';
    $request->termId = 'excepturi';
    $request->user = 'accusantium';

    $response = $sdk->allFunctions->getSaveOntologyTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdatePathway

updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatePathwayRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUpdatePathwayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUpdatePathwayRequest();
    $request->auth = 'iure';
    $request->description = 'culpa';
    $request->format = GetUpdatePathwayFormatEnum::PDF;
    $request->gpml = 'sapiente';
    $request->pwId = 'architecto';
    $request->revision = 652790;
    $request->username = 'Cordie99';

    $response = $sdk->allFunctions->getUpdatePathway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreatePathway

createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCreatePathwayRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCreatePathwayFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCreatePathwayRequest();
    $request->auth = 'mollitia';
    $request->format = PostCreatePathwayFormatEnum::DUMP;
    $request->gpml = 'numquam';
    $request->username = 'Harvey.Konopelski';

    $response = $sdk->allFunctions->postCreatePathway($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
