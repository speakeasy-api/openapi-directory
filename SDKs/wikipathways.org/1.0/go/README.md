# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/wikipathways.org/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AllFunctions.GetFindInteractions(ctx, operations.GetFindInteractionsRequest{
        Format: operations.GetFindInteractionsFormatEnumDump.ToPointer(),
        Query: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AllFunctions](docs/allfunctions/README.md)

* [GetFindInteractions](docs/allfunctions/README.md#getfindinteractions) - findInteractionsFind interactions defined in WikiPathways pathways.
* [GetFindPathwaysByLiterature](docs/allfunctions/README.md#getfindpathwaysbyliterature) - findPathwaysByLiterature
* [GetFindPathwaysByText](docs/allfunctions/README.md#getfindpathwaysbytext) - findPathwaysByText
* [GetFindPathwaysByXref](docs/allfunctions/README.md#getfindpathwaysbyxref) - findPathwaysByXref
* [GetGetColoredPathway](docs/allfunctions/README.md#getgetcoloredpathway) - getColoredPathwayGet a colored image version of the pathway.
* [GetGetCurationTagHistory](docs/allfunctions/README.md#getgetcurationtaghistory) - getCurationTagHistory
* [GetGetCurationTags](docs/allfunctions/README.md#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetCurationTagsByName](docs/allfunctions/README.md#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetOntologyTermsByPathway](docs/allfunctions/README.md#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [GetGetPathway](docs/allfunctions/README.md#getgetpathway) - getPathway
* [GetGetPathwayAs](docs/allfunctions/README.md#getgetpathwayas) - getPathwayAsDownload a pathway in the specified file format.
* [GetGetPathwayHistory](docs/allfunctions/README.md#getgetpathwayhistory) - getPathwayHistoryGet the revision history of a pathway.
* [GetGetPathwayInfo](docs/allfunctions/README.md#getgetpathwayinfo) - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
* [GetGetPathwaysByOntologyTerm](docs/allfunctions/README.md#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [GetGetPathwaysByParentOntologyTerm](docs/allfunctions/README.md#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [GetGetRecentChanges](docs/allfunctions/README.md#getgetrecentchanges) - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
* [GetGetUserByOrcid](docs/allfunctions/README.md#getgetuserbyorcid) - getUserByOrcid
* [GetGetXrefList](docs/allfunctions/README.md#getgetxreflist) - getXrefList
* [GetListOrganisms](docs/allfunctions/README.md#getlistorganisms) - listOrganisms
* [GetListPathways](docs/allfunctions/README.md#getlistpathways) - listPathways
* [GetLogin](docs/allfunctions/README.md#getlogin) - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
* [GetRemoveCurationTag](docs/allfunctions/README.md#getremovecurationtag) - removeCurationTagRemove a curation tag from a pathway.
* [GetRemoveOntologyTag](docs/allfunctions/README.md#getremoveontologytag) - removeOntologyTag
* [GetSaveCurationTag](docs/allfunctions/README.md#getsavecurationtag) - saveCurationTag
* [GetSaveOntologyTag](docs/allfunctions/README.md#getsaveontologytag) - saveOntologyTag
* [GetUpdatePathway](docs/allfunctions/README.md#getupdatepathway) - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* [PostCreatePathway](docs/allfunctions/README.md#postcreatepathway) - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

### [CurationTags](docs/curationtags/README.md)

* [GetGetCurationTagHistory](docs/curationtags/README.md#getgetcurationtaghistory) - getCurationTagHistory
* [GetGetCurationTags](docs/curationtags/README.md#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetCurationTagsByName](docs/curationtags/README.md#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetOntologyTermsByPathway](docs/curationtags/README.md#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [GetSaveCurationTag](docs/curationtags/README.md#getsavecurationtag) - saveCurationTag

### [Download](docs/download/README.md)

* [GetGetColoredPathway](docs/download/README.md#getgetcoloredpathway) - getColoredPathwayGet a colored image version of the pathway.
* [GetGetPathwayAs](docs/download/README.md#getgetpathwayas) - getPathwayAsDownload a pathway in the specified file format.
* [GetGetXrefList](docs/download/README.md#getgetxreflist) - getXrefList

### [History](docs/history/README.md)

* [GetGetCurationTagHistory](docs/history/README.md#getgetcurationtaghistory) - getCurationTagHistory
* [GetGetPathwayHistory](docs/history/README.md#getgetpathwayhistory) - getPathwayHistoryGet the revision history of a pathway.
* [GetGetRecentChanges](docs/history/README.md#getgetrecentchanges) - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

### [OntologyTags](docs/ontologytags/README.md)

* [GetGetPathwaysByOntologyTerm](docs/ontologytags/README.md#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [GetGetPathwaysByParentOntologyTerm](docs/ontologytags/README.md#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [GetRemoveOntologyTag](docs/ontologytags/README.md#getremoveontologytag) - removeOntologyTag
* [GetSaveOntologyTag](docs/ontologytags/README.md#getsaveontologytag) - saveOntologyTag

### [OrganismList](docs/organismlist/README.md)

* [GetListOrganisms](docs/organismlist/README.md#getlistorganisms) - listOrganisms

### [PathwayInformation](docs/pathwayinformation/README.md)

* [GetGetCurationTags](docs/pathwayinformation/README.md#getgetcurationtags) - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetOntologyTermsByPathway](docs/pathwayinformation/README.md#getgetontologytermsbypathway) - getOntologyTermsByPathway
* [GetGetPathway](docs/pathwayinformation/README.md#getgetpathway) - getPathway
* [GetGetPathwayInfo](docs/pathwayinformation/README.md#getgetpathwayinfo) - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

### [PathwayList](docs/pathwaylist/README.md)

* [GetGetCurationTagsByName](docs/pathwaylist/README.md#getgetcurationtagsbyname) - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* [GetGetPathwaysByOntologyTerm](docs/pathwaylist/README.md#getgetpathwaysbyontologyterm) - getPathwaysByOntologyTerm
* [GetGetPathwaysByParentOntologyTerm](docs/pathwaylist/README.md#getgetpathwaysbyparentontologyterm) - getPathwaysByParentOntologyTerm
* [GetListPathways](docs/pathwaylist/README.md#getlistpathways) - listPathways

### [Search](docs/search/README.md)

* [GetFindInteractions](docs/search/README.md#getfindinteractions) - findInteractionsFind interactions defined in WikiPathways pathways.
* [GetFindPathwaysByLiterature](docs/search/README.md#getfindpathwaysbyliterature) - findPathwaysByLiterature
* [GetFindPathwaysByText](docs/search/README.md#getfindpathwaysbytext) - findPathwaysByText
* [GetFindPathwaysByXref](docs/search/README.md#getfindpathwaysbyxref) - findPathwaysByXref
* [GetRemoveCurationTag](docs/search/README.md#getremovecurationtag) - removeCurationTagRemove a curation tag from a pathway.

### [UserManagement](docs/usermanagement/README.md)

* [GetGetUserByOrcid](docs/usermanagement/README.md#getgetuserbyorcid) - getUserByOrcid
* [GetLogin](docs/usermanagement/README.md#getlogin) - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

### [WriteCreateUpdateDelete](docs/writecreateupdatedelete/README.md)

* [GetRemoveOntologyTag](docs/writecreateupdatedelete/README.md#getremoveontologytag) - removeOntologyTag
* [GetSaveCurationTag](docs/writecreateupdatedelete/README.md#getsavecurationtag) - saveCurationTag
* [GetSaveOntologyTag](docs/writecreateupdatedelete/README.md#getsaveontologytag) - saveOntologyTag
* [GetUpdatePathway](docs/writecreateupdatedelete/README.md#getupdatepathway) - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* [PostCreatePathway](docs/writecreateupdatedelete/README.md#postcreatepathway) - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
