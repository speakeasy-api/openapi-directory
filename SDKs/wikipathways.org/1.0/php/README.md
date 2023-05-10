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
use \OpenAPI\OpenAPI\Models\Operations\GetFindInteractionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFindInteractionsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindInteractionsRequest();
    $request->format = GetFindInteractionsFormatEnum::DUMP;
    $request->query = 'provident';

    $response = $sdk->allFunctions->getFindInteractions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [allFunctions](docs/allfunctions/README.md)

* [getFindInteractions](docs/allfunctions/README.md#getfindinteractions) - findInteractionsFind interactions defined in WikiPathways pathways.
* [getFindPathwaysByLiterature](docs/allfunctions/README.md#getfindpathwaysbyliterature) - findPathwaysByLiterature
* [getFindPathwaysByText](docs/allfunctions/README.md#getfindpathwaysbytext) - findPathwaysByText
* [getFindPathwaysByXref](docs/allfunctions/README.md#getfindpathwaysbyxref) - findPathwaysByXref
* [getGetColoredPathway](docs/allfunctions/README.md#getgetcoloredpathway) - getColoredPathwayGet a colored image version of the pathway.
* [getGetCurationTagHistory](docs/allfunctions/README.md#getgetcurationtaghistory) - getCurationTagHistory
* [getGetCurationTags](docs/allfunctions/README.md#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetCurationTagsByName](docs/allfunctions/README.md#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetOntologyTermsByPathway](docs/allfunctions/README.md#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [getGetPathway](docs/allfunctions/README.md#getgetpathway) - getPathway
* [getGetPathwayAs](docs/allfunctions/README.md#getgetpathwayas) - getPathwayAsDownload a pathway in the specified file format.
* [getGetPathwayHistory](docs/allfunctions/README.md#getgetpathwayhistory) - getPathwayHistoryGet the revision history of a pathway.
* [getGetPathwayInfo](docs/allfunctions/README.md#getgetpathwayinfo) - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
* [getGetPathwaysByOntologyTerm](docs/allfunctions/README.md#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [getGetPathwaysByParentOntologyTerm](docs/allfunctions/README.md#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [getGetRecentChanges](docs/allfunctions/README.md#getgetrecentchanges) - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
* [getGetUserByOrcid](docs/allfunctions/README.md#getgetuserbyorcid) - getUserByOrcid
* [getGetXrefList](docs/allfunctions/README.md#getgetxreflist) - getXrefList
* [getListOrganisms](docs/allfunctions/README.md#getlistorganisms) - listOrganisms
* [getListPathways](docs/allfunctions/README.md#getlistpathways) - listPathways
* [getLogin](docs/allfunctions/README.md#getlogin) - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
* [getRemoveCurationTag](docs/allfunctions/README.md#getremovecurationtag) - removeCurationTagRemove a curation tag from a pathway.
* [getRemoveOntologyTag](docs/allfunctions/README.md#getremoveontologytag) - removeOntologyTag
* [getSaveCurationTag](docs/allfunctions/README.md#getsavecurationtag) - saveCurationTag
* [getSaveOntologyTag](docs/allfunctions/README.md#getsaveontologytag) - saveOntologyTag
* [getUpdatePathway](docs/allfunctions/README.md#getupdatepathway) - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* [postCreatePathway](docs/allfunctions/README.md#postcreatepathway) - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

### [curationTags](docs/curationtags/README.md)

* [getGetCurationTagHistory](docs/curationtags/README.md#getgetcurationtaghistory) - getCurationTagHistory
* [getGetCurationTags](docs/curationtags/README.md#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetCurationTagsByName](docs/curationtags/README.md#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetOntologyTermsByPathway](docs/curationtags/README.md#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [getSaveCurationTag](docs/curationtags/README.md#getsavecurationtag) - saveCurationTag

### [download](docs/download/README.md)

* [getGetColoredPathway](docs/download/README.md#getgetcoloredpathway) - getColoredPathwayGet a colored image version of the pathway.
* [getGetPathwayAs](docs/download/README.md#getgetpathwayas) - getPathwayAsDownload a pathway in the specified file format.
* [getGetXrefList](docs/download/README.md#getgetxreflist) - getXrefList

### [history](docs/history/README.md)

* [getGetCurationTagHistory](docs/history/README.md#getgetcurationtaghistory) - getCurationTagHistory
* [getGetPathwayHistory](docs/history/README.md#getgetpathwayhistory) - getPathwayHistoryGet the revision history of a pathway.
* [getGetRecentChanges](docs/history/README.md#getgetrecentchanges) - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

### [ontologyTags](docs/ontologytags/README.md)

* [getGetPathwaysByOntologyTerm](docs/ontologytags/README.md#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [getGetPathwaysByParentOntologyTerm](docs/ontologytags/README.md#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [getRemoveOntologyTag](docs/ontologytags/README.md#getremoveontologytag) - removeOntologyTag
* [getSaveOntologyTag](docs/ontologytags/README.md#getsaveontologytag) - saveOntologyTag

### [organismList](docs/organismlist/README.md)

* [getListOrganisms](docs/organismlist/README.md#getlistorganisms) - listOrganisms

### [pathwayInformation](docs/pathwayinformation/README.md)

* [getGetCurationTags](docs/pathwayinformation/README.md#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetOntologyTermsByPathway](docs/pathwayinformation/README.md#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [getGetPathway](docs/pathwayinformation/README.md#getgetpathway) - getPathway
* [getGetPathwayInfo](docs/pathwayinformation/README.md#getgetpathwayinfo) - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

### [pathwayList](docs/pathwaylist/README.md)

* [getGetCurationTagsByName](docs/pathwaylist/README.md#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [getGetPathwaysByOntologyTerm](docs/pathwaylist/README.md#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [getGetPathwaysByParentOntologyTerm](docs/pathwaylist/README.md#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [getListPathways](docs/pathwaylist/README.md#getlistpathways) - listPathways

### [search](docs/search/README.md)

* [getFindInteractions](docs/search/README.md#getfindinteractions) - findInteractionsFind interactions defined in WikiPathways pathways.
* [getFindPathwaysByLiterature](docs/search/README.md#getfindpathwaysbyliterature) - findPathwaysByLiterature
* [getFindPathwaysByText](docs/search/README.md#getfindpathwaysbytext) - findPathwaysByText
* [getFindPathwaysByXref](docs/search/README.md#getfindpathwaysbyxref) - findPathwaysByXref
* [getRemoveCurationTag](docs/search/README.md#getremovecurationtag) - removeCurationTagRemove a curation tag from a pathway.

### [userManagement](docs/usermanagement/README.md)

* [getGetUserByOrcid](docs/usermanagement/README.md#getgetuserbyorcid) - getUserByOrcid
* [getLogin](docs/usermanagement/README.md#getlogin) - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

### [writeCreateUpdateDelete](docs/writecreateupdatedelete/README.md)

* [getRemoveOntologyTag](docs/writecreateupdatedelete/README.md#getremoveontologytag) - removeOntologyTag
* [getSaveCurationTag](docs/writecreateupdatedelete/README.md#getsavecurationtag) - saveCurationTag
* [getSaveOntologyTag](docs/writecreateupdatedelete/README.md#getsaveontologytag) - saveOntologyTag
* [getUpdatePathway](docs/writecreateupdatedelete/README.md#getupdatepathway) - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* [postCreatePathway](docs/writecreateupdatedelete/README.md#postcreatepathway) - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
