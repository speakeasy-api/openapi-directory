# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetFindInteractionsRequest{
        QueryParams: operations.GetFindInteractionsQueryParams{
            Format: "json",
            Query: "voluptas",
        },
    }
    
    res, err := s.AllFunctions.GetFindInteractions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### All functions

* `GetFindInteractions` - findInteractionsFind interactions defined in WikiPathways pathways.
* `GetFindPathwaysByLiterature` - findPathwaysByLiterature
* `GetFindPathwaysByText` - findPathwaysByText
* `GetFindPathwaysByXref` - findPathwaysByXref
* `GetGetColoredPathway` - getColoredPathwayGet a colored image version of the pathway.
* `GetGetCurationTagHistory` - getCurationTagHistory
* `GetGetCurationTags` - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `GetGetCurationTagsByName` - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `GetGetOntologyTermsByPathway` - getOntologyTermsByPathway
* `GetGetPathway` - getPathway
* `GetGetPathwayAs` - getPathwayAsDownload a pathway in the specified file format.
* `GetGetPathwayHistory` - getPathwayHistoryGet the revision history of a pathway.
* `GetGetPathwayInfo` - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
* `GetGetPathwaysByOntologyTerm` - getPathwaysByOntologyTerm
* `GetGetPathwaysByParentOntologyTerm` - getPathwaysByParentOntologyTerm
* `GetGetRecentChanges` - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
* `GetGetUserByOrcid` - getUserByOrcid
* `GetGetXrefList` - getXrefList
* `GetListOrganisms` - listOrganisms
* `GetListPathways` - listPathways
* `GetLogin` - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
* `GetRemoveCurationTag` - removeCurationTagRemove a curation tag from a pathway.
* `GetRemoveOntologyTag` - removeOntologyTag
* `GetSaveCurationTag` - saveCurationTag
* `GetSaveOntologyTag` - saveOntologyTag
* `GetUpdatePathway` - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* `PostCreatePathway` - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

### Curation tags

* `GetGetCurationTagHistory` - getCurationTagHistory
* `GetGetCurationTags` - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `GetGetCurationTagsByName` - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `GetGetOntologyTermsByPathway` - getOntologyTermsByPathway
* `GetSaveCurationTag` - saveCurationTag

### Download

* `GetGetColoredPathway` - getColoredPathwayGet a colored image version of the pathway.
* `GetGetPathwayAs` - getPathwayAsDownload a pathway in the specified file format.
* `GetGetXrefList` - getXrefList

### History

* `GetGetCurationTagHistory` - getCurationTagHistory
* `GetGetPathwayHistory` - getPathwayHistoryGet the revision history of a pathway.
* `GetGetRecentChanges` - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

### Ontology tags

* `GetGetPathwaysByOntologyTerm` - getPathwaysByOntologyTerm
* `GetGetPathwaysByParentOntologyTerm` - getPathwaysByParentOntologyTerm
* `GetRemoveOntologyTag` - removeOntologyTag
* `GetSaveOntologyTag` - saveOntologyTag

### Organism list

* `GetListOrganisms` - listOrganisms

### Pathway information

* `GetGetCurationTags` - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `GetGetOntologyTermsByPathway` - getOntologyTermsByPathway
* `GetGetPathway` - getPathway
* `GetGetPathwayInfo` - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

### Pathway list

* `GetGetCurationTagsByName` - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `GetGetPathwaysByOntologyTerm` - getPathwaysByOntologyTerm
* `GetGetPathwaysByParentOntologyTerm` - getPathwaysByParentOntologyTerm
* `GetListPathways` - listPathways

### Search

* `GetFindInteractions` - findInteractionsFind interactions defined in WikiPathways pathways.
* `GetFindPathwaysByLiterature` - findPathwaysByLiterature
* `GetFindPathwaysByText` - findPathwaysByText
* `GetFindPathwaysByXref` - findPathwaysByXref
* `GetRemoveCurationTag` - removeCurationTagRemove a curation tag from a pathway.

### User management

* `GetGetUserByOrcid` - getUserByOrcid
* `GetLogin` - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

### Write (create/update/delete)

* `GetRemoveOntologyTag` - removeOntologyTag
* `GetSaveCurationTag` - saveCurationTag
* `GetSaveOntologyTag` - saveOntologyTag
* `GetUpdatePathway` - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* `PostCreatePathway` - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
